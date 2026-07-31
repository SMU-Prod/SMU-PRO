import { describe, it, expect } from "vitest";
import {
  preparaSimulador, precisaPonteMouse, PONTE_TOQUE, PONTE_MOUSE, PONTE_TELA_CHEIA,
} from "./toque";

const simples = `<html><head><title>x</title></head><body><div class="fader"></div></body></html>`;

describe("preparaSimulador", () => {
  it("costura a ponte de tela cheia e a de toque num simulador cru", () => {
    const out = preparaSimulador(simples);
    expect(out).toContain(PONTE_TELA_CHEIA);
    expect(out).toContain(PONTE_TOQUE);
    // entra ANTES do </body>, nunca depois
    expect(out.indexOf(PONTE_TOQUE)).toBeLessThan(out.indexOf("</body>"));
  });

  it("não duplica ponte que o simulador já traz embutida", () => {
    const jaTem = simples.replace("</body>", `${PONTE_TELA_CHEIA}${PONTE_TOQUE}</body>`);
    const out = preparaSimulador(jaTem);
    expect(out.split("/*SMU-FS*/")).toHaveLength(2);      // 1 ocorrência = 2 pedaços
    expect(out.split("/*SMU-TOQUE*/")).toHaveLength(3);   // marca aparece no <style> e no <script>
    expect(out).toBe(jaTem);                              // nada foi acrescentado
  });

  it("preserva o texto injetado LITERALMENTE (armadilha do $& no replace)", () => {
    // A ponte tem `)$/` no código. Com `replace(str, str)`, sequências `$…` viram padrão de
    // substituição e o HTML sai corrompido — por isso o segundo argumento é função.
    const out = preparaSimulador(simples);
    expect(out).toContain("</body>");
    expect(out).toContain(PONTE_TOQUE);
    expect(out).not.toContain("$&");
  });

  it("anexa no fim quando o simulador não tem </body>", () => {
    const semBody = `<div class="fader"></div>`;
    const out = preparaSimulador(semBody);
    expect(out.startsWith(semBody)).toBe(true);
    expect(out).toContain(PONTE_TOQUE);
  });

  it("remove o controle de zoom antigo (SMU-ZOOM), que cobria os botões do simulador", () => {
    const comZoom = simples.replace(
      "</body>",
      `<script>/*SMU-ZOOM*/var z=1;document.write('x');<\/script></body>`,
    );
    const out = preparaSimulador(comZoom);
    expect(out).not.toContain("SMU-ZOOM");
  });

  it("só manda a ponte de mouse para simulador que arrasta só por mouse", () => {
    const soMouse = simples.replace("</body>", `<script>el.onmousemove=f;<\/script></body>`);
    const comPonteiro = simples.replace("</body>", `<script>el.addEventListener('pointermove',f);<\/script></body>`);
    expect(preparaSimulador(soMouse)).toContain(PONTE_MOUSE);
    expect(preparaSimulador(comPonteiro)).not.toContain(PONTE_MOUSE);
  });
});

describe("precisaPonteMouse", () => {
  it("aceita ligação de verdade (atributo, propriedade e addEventListener)", () => {
    expect(precisaPonteMouse(`<script>a.addEventListener("mousemove",f)<\/script>`)).toBe(true);
    expect(precisaPonteMouse(`<div onmousedown="f()">`)).toBe(true);
    expect(precisaPonteMouse(`{onMouseMove: mover}`)).toBe(true);
  });

  it("NÃO cai no bundle do React, que cita o nome do evento em switch/case", () => {
    // Este é o falso positivo que inflou a contagem de 1 para 15 sims: o React minificado traz
    // `case "onMouseMove":` na própria tabela de eventos. Medir palavra em arquivo minificado
    // mede o bundle, não o autor do simulador.
    const bundle = `case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":`;
    expect(precisaPonteMouse(bundle)).toBe(false);
  });

  it("recusa quando o simulador já escuta ponteiro ou toque (evitaria fader andando 2x)", () => {
    expect(precisaPonteMouse(`onMouseMove: m, onPointerMove: p`)).toBe(false);
    expect(precisaPonteMouse(`el.onmousemove=f; el.addEventListener('touchmove',g)`)).toBe(false);
  });
});

describe("ponte de toque — conteúdo", () => {
  it("traz o prefixo -webkit- (iPad em iOS 15/16 só entende a forma prefixada)", () => {
    expect(PONTE_TOQUE).toContain("-webkit-user-select:none");
    expect(PONTE_TOQUE).toContain("-webkit-touch-callout:none");
  });

  it("protege o potenciômetro: range e canvas com touch-action:none", () => {
    expect(PONTE_TOQUE).toContain("input[type=range],canvas,svg{touch-action:none}");
  });

  it("mantém texto selecionável em campo de digitação", () => {
    expect(PONTE_TOQUE).toContain("-webkit-user-select:text");
  });

  it("é idempotente por marca própria", () => {
    expect(PONTE_TOQUE).toContain("/*SMU-TOQUE*/");
    expect(PONTE_MOUSE).toContain("/*SMU-MOUSE*/");
  });
});
