/**
 * Edge TTS — Microsoft's free neural text-to-speech via WebSocket.
 * Uses Sec-MS-GEC DRM token authentication (required since late 2024).
 * Ported from Python edge-tts: https://github.com/rany2/edge-tts
 */
import { WebSocket } from "ws";
import { createHash, randomBytes } from "crypto";

const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const BASE_URL = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
const CHROMIUM_FULL_VERSION = "143.0.3650.75";
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;
const WSS_URL = `wss://${BASE_URL}/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;

// Windows epoch offset: seconds between 1601-01-01 and 1970-01-01
const WIN_EPOCH = 11644473600;
const S_TO_NS = 1e9;

function generateSecMsGec(): string {
  // Current time in seconds (Unix)
  let ticks = Math.floor(Date.now() / 1000);
  // Convert to Windows file time epoch
  ticks += WIN_EPOCH;
  // Round down to nearest 5 minutes
  ticks -= ticks % 300;
  // Convert to 100-nanosecond intervals (Windows file time format)
  const fileTime = ticks * (S_TO_NS / 100);
  // Hash with trusted client token
  const strToHash = `${fileTime.toFixed(0)}${TRUSTED_CLIENT_TOKEN}`;
  return createHash("sha256").update(strToHash, "ascii").digest("hex").toUpperCase();
}

function generateMuid(): string {
  return randomBytes(16).toString("hex").toUpperCase();
}

function connectId(): string {
  return randomBytes(16).toString("hex").replaceAll("-", "");
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface TtsOptions {
  voice?: string;
  rate?: string;
  pitch?: string;
  volume?: string;
}

export function tts(text: string, options: TtsOptions = {}): Promise<Buffer> {
  const {
    voice = "pt-BR-FranciscaNeural",
    rate = "+0%",
    pitch = "+0Hz",
    volume = "+0%",
  } = options;

  return new Promise<Buffer>((resolve, reject) => {
    const connId = connectId();
    const secToken = generateSecMsGec();
    const muid = generateMuid();
    const wsUrl = `${WSS_URL}&ConnectionId=${connId}&Sec-MS-GEC=${secToken}&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}`;

    const ws = new WebSocket(wsUrl, {
      host: "speech.platform.bing.com",
      origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      headers: {
        "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${CHROMIUM_FULL_VERSION} Safari/537.36 Edg/${CHROMIUM_FULL_VERSION}`,
        "Cookie": `muid=${muid};`,
      },
    });

    const audioChunks: Buffer[] = [];
    const timeout = setTimeout(() => {
      ws.close();
      reject(new Error("TTS timeout after 30s"));
    }, 30000);

    ws.on("message", (rawData, isBinary) => {
      if (!isBinary) {
        const data = rawData.toString("utf8");
        if (data.includes("turn.end")) {
          clearTimeout(timeout);
          resolve(Buffer.concat(audioChunks));
          ws.close();
        }
        return;
      }
      const data = rawData as Buffer;
      const separator = "Path:audio\r\n";
      const idx = data.indexOf(separator);
      if (idx >= 0) {
        audioChunks.push(data.subarray(idx + separator.length));
      }
    });

    ws.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    const speechConfig = JSON.stringify({
      context: {
        synthesis: {
          audio: {
            metadataoptions: {
              sentenceBoundaryEnabled: false,
              wordBoundaryEnabled: false,
            },
            outputFormat: "audio-24khz-48kbitrate-mono-mp3",
          },
        },
      },
    });

    const configMessage = `X-Timestamp:${new Date().toISOString()}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n${speechConfig}`;

    ws.on("open", () => {
      ws.send(configMessage, { compress: true }, (configError) => {
        if (configError) {
          clearTimeout(timeout);
          reject(configError);
          return;
        }

        const escapedText = escapeXml(text);
        const ssml =
          `X-RequestId:${connectId()}\r\nContent-Type:application/ssml+xml\r\n` +
          `X-Timestamp:${new Date().toISOString()}Z\r\nPath:ssml\r\n\r\n` +
          `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='pt-BR'>` +
          `<voice name='${voice}'><prosody pitch='${pitch}' rate='${rate}' volume='${volume}'>` +
          `${escapedText}</prosody></voice></speak>`;

        ws.send(ssml, { compress: true }, (ssmlError) => {
          if (ssmlError) {
            clearTimeout(timeout);
            reject(ssmlError);
          }
        });
      });
    });
  });
}
