# SPEC — Simuladores de PRODUÇÃO (SMU)

Todo simulador é **um único arquivo HTML autocontido** (sem CDN, sem fetch, sem import externo).
Ele é inlinado no banco (`ai_animations.urls[0].html`) e renderizado num `<iframe srcDoc>` 16:9.

## Regras duras

1. **Autocontido**: nada de `<script src>`, `<link href>` externo, fontes web, imagens remotas. Só CSS/JS inline. Emoji/Unicode e SVG inline são permitidos.
2. **Sem `alert()`, sem `prompt()`, sem `localStorage`** (o iframe é sandbox srcDoc; storage pode falhar).
3. **Mobile/iPad first**: funciona a partir de 380px de largura. Alvos de toque ≥ 34px. `user-scalable=no`.
4. **Layout de fluxo** (não usar stage de largura fixa com `transform:scale`). O conteúdo pode rolar verticalmente dentro do iframe.
5. **Canvas**: se usar `<canvas>`, o repaint **tem que ser coalescido por frame** com `requestAnimationFrame` (dirty-flag), nunca render síncrono dentro de `pointermove`. Medir com `getBoundingClientRect()`, não `clientWidth`. Preferir DOM a canvas quando der.
6. **Português do Brasil**, jargão real de produção de eventos, valores em R$ realistas do mercado brasileiro.
7. **Nada de "Parabéns, você é demais"**. Feedback é técnico: diz *o que* estava errado e *por quê*, no vocabulário da profissão.

## Shell obrigatório (copiar exatamente)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<link rel="icon" href="data:,">
<title>SMU PRO · TITULO_AQUI</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0;}
  :root{--bg:#0c1017;--panel:#161c26;--panel2:#1b2230;--line:#2a3444;--ink:#e7edf5;--dim:#8794a8;
        --accent:#f59e0b;--ok:#22c55e;--err:#ef4444;--warn:#f59e0b;--cyan:#38bdf8;}
  html,body{background:var(--bg);color:var(--ink);
    font-family:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;-webkit-font-smoothing:antialiased;}
  body{padding:12px;}
  .app{max-width:1000px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px;}
  h1{font-size:15px;margin-bottom:3px;}
  .sub{font-size:12px;color:var(--dim);margin-bottom:12px;line-height:1.5;}
  .stat{background:var(--panel2);border:1px solid var(--line);border-radius:9px;padding:9px;}
  .stat .k{font-size:10px;color:var(--dim);letter-spacing:.5px;}
  .stat .val{font-size:15px;font-weight:800;margin-top:2px;}
  .verdict{font-size:13px;font-weight:700;padding:9px 12px;border-radius:8px;text-align:center;}
  .verdict.ok{background:#14532d;color:#bbf7d0;}
  .verdict.bad{background:#450a0a;color:#fca5a5;}
  .verdict.warn{background:#422006;color:#fde68a;}
  .note{font-size:12px;color:var(--dim);line-height:1.55;}
  button{font:inherit;cursor:pointer;}
</style>
</head>
<body>
<div class="app">
  <div class="card">
    <h1>TITULO</h1>
    <div class="sub">INSTRUÇÃO CURTA DO EXERCÍCIO</div>
    <!-- conteúdo -->
  </div>
</div>
<script>
(function(){
  var $=function(s){return document.querySelector(s);};
  var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s));};
  /* ... */
})();
</script>
</body>
</html>
```

## Padrão de exercício

Todo sim é **exercício avaliado**, não brinquedo. Deve ter:
- estado inicial "errado"/vazio que o aluno corrige;
- um botão **Conferir** (ou avaliação contínua) que dá veredito;
- um **placar/erro explicado** por item;
- botão **Reiniciar** / **Novo cenário** quando fizer sentido.

## Tamanho

Alvo: 250–420 linhas. Denso em conteúdo, sem gordura.
