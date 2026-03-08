/**
 * Edge TTS — Microsoft's free neural text-to-speech via WebSocket.
 * Reimplemented to avoid the edge-tts npm package (ships raw .ts files
 * incompatible with Turbopack).
 */
import { WebSocket } from "ws";

const BASE_URL = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
const TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const WS_URL = `wss://${BASE_URL}/edge/v1?TrustedClientToken=${TOKEN}`;

function uuid() {
  return crypto.randomUUID().replaceAll("-", "");
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
    const connectionId = uuid();
    const ws = new WebSocket(`${WS_URL}&ConnectionId=${connectionId}`, {
      host: "speech.platform.bing.com",
      origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
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
          `X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\n` +
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
