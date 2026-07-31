"""medir-planta.py — mede geometria de equipamento NA FIGURA do manual.

POR QUE ESTE ARQUIVO EXISTE
A Regra 2 do projeto manda ir na fonte de verdade antes de construir. Para
DIMENSÃO isso quer dizer medir a planta, não olhar e chutar. Construindo a
M7CL, medir deu a proporção certa de primeira (1,838) e ela bateu com as
cotas oficiais da página de dimensões (1274x701 mm = 1,817) — duas fontes
independentes concordando é o que autoriza usar o número.

POR QUE NÃO USAR O pdftext.mjs AQUI
Aquele extrai TEXTO e ignora imagem de propósito. Para medida é preciso o
PIXEL. E medir pixel não tem o modo de falha mais perigoso do extrator de
texto: não existe "pixel extraído pela metade" que se leia como um fato.

DEPENDÊNCIA: PyMuPDF, que JÁ está instalado nesta máquina (fitz 1.28).
Não instalar nada — conferir com:  python -c "import fitz; print(fitz.__doc__)"

ARMADILHAS JÁ PAGAS (não "simplifique" sem ler):
  - O tool Read do Claude Code NÃO abre PDF aqui: falta poppler/pdftoppm.
    Rasterizar para PNG e ler o PNG é o caminho.
  - No Windows o stdout é cp1252 e MORRE na ligadura "fi" de manual Yamaha.
    Rode sempre com PYTHONIOENCODING=utf-8.
  - `grep` trata o texto extraído de PDF como binário e para no meio.
    Use `grep -a`.
  - Medir por densidade de pixel a PÁGINA INTEIRA acha a caixa externa, mas
    NÃO separa seções vizinhas: na M7CL isso deu 21,5 % para o SELECTED
    CHANNEL quando o certo era 11,1 % (o dono viu na hora que estava fora de
    parâmetro). Para posição de seção: RECORTE a região e amplie antes.

USO
  python medir-planta.py toc     <pdf>
  python medir-planta.py render  <pdf> <saida> <zoom> <pag...>
  python medir-planta.py caixa   <png> <x0> <y0> <x1> <y1>
  python medir-planta.py cortes  <png> <x0> <y0> <larg> <alt> [yA] [yB]
  python medir-planta.py recorte <png> <x0> <y0> <x1> <y1> <saida> [amplia]
"""
import sys, os


def _fitz():
    import fitz
    return fitz


def toc(pdf):
    """Sumário: em que página está cada tela. Evita rasterizar 300 páginas à toa."""
    doc = _fitz().open(pdf)
    print(f"paginas={doc.page_count}")
    for lvl, titulo, pg in doc.get_toc():
        print(f"{'  '*(lvl-1)}{pg:>4}  {titulo}")


def render(pdf, saida, zoom, paginas):
    """Rasteriza páginas inteiras.

    Página inteira, e não o XObject da imagem: as figuras de manual são
    compostas (bitmap + vetores de callout + texto das legendas). Extrair só
    o bitmap perde as legendas — que são justamente o que NOMEIA cada botão.
    """
    fitz = _fitz()
    doc = fitz.open(pdf)
    os.makedirs(saida, exist_ok=True)
    mat = fitz.Matrix(zoom, zoom)
    for p in paginas:
        pix = doc[p - 1].get_pixmap(matrix=mat)      # get_pixmap é 0-based
        dest = os.path.join(saida, f"p{p:03d}.png")
        pix.save(dest)
        print(f"{dest}  {pix.width}x{pix.height}")


def _cinza(png):
    from PIL import Image
    return Image.open(png).convert("L")


def caixa(png, x0, y0, x1, y1, limiar=128):
    """Acha a caixa externa do desenho: linhas/colunas quase cheias de traço."""
    rec = _cinza(png).crop((x0, y0, x1, y1))
    w, h = rec.size
    px = rec.load()
    lin = [y for y in range(h)
           if sum(1 for x in range(w) if px[x, y] < limiar) >= w * 0.55]
    col = [x for x in range(w)
           if sum(1 for y in range(h) if px[x, y] < limiar) >= h * 0.55]
    if not (lin and col):
        print("nao achei a caixa — ajuste o recorte")
        return
    lg, al = col[-1] - col[0], lin[-1] - lin[0]
    print(f"caixa = {lg} x {al} px   razao L/A = {lg/al:.3f}")
    print(f"canto (no png) = {x0+col[0]}, {y0+lin[0]}")


def cortes(png, x0, y0, larg, alt, yA=0, yB=None, limiar=128):
    """Divisórias verticais: colunas VAZIAS dentro da caixa do painel.

    Passe yA/yB para medir UM andar por vez. Medir os dois juntos só encontra
    divisória que existe nos dois — foi o que escondeu onde a Centralogic
    acaba e a área de USER DEFINED KEYS começa.
    """
    yB = alt if yB is None else yB
    rec = _cinza(png).crop((x0, y0 + yA, x0 + larg, y0 + yB))
    w, h = rec.size
    px = rec.load()
    dens = [sum(1 for y in range(h) if px[x, y] < limiar) / h for x in range(w)]
    vazio = [x for x in range(w) if dens[x] < 0.05]
    faixas, ini, ant = [], None, None
    for x in vazio:
        if ini is None:
            ini = ant = x
        elif x - ant > 1:
            faixas.append((ini, ant)); ini = x
        ant = x
    if ini is not None:
        faixas.append((ini, ant))
    marcos = [0] + [(a + b) // 2 for a, b in faixas if b - a >= 5] + [w]
    print(f"faixa y {yA}..{yB}  ({w} px de largura)")
    for i in range(len(marcos) - 1):
        lg = marcos[i+1] - marcos[i]
        if lg > 12:
            print(f"  x {marcos[i]:>5}..{marcos[i+1]:<5}  {lg:>5} px  {100*lg/w:5.1f} %")


def recorte(png, x0, y0, x1, y1, saida, amplia=2):
    """Recorta e AMPLIA uma região, para medir seção a olho.

    É o passo que faltava quando a proporção saiu errada: densidade de pixel
    não distingue painel de knobs de display; o recorte ampliado distingue.
    """
    from PIL import Image
    img = Image.open(png)
    c = img.crop((x0, y0, x1, y1))
    c = c.resize((c.width * amplia, c.height * amplia), Image.LANCZOS)
    c.save(saida)
    print(f"{saida}  {c.size[0]}x{c.size[1]}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    cmd, a = sys.argv[1], sys.argv[2:]
    if cmd == "toc":
        toc(a[0])
    elif cmd == "render":
        render(a[0], a[1], float(a[2]), [int(p) for p in a[3:]])
    elif cmd == "caixa":
        caixa(a[0], *(int(v) for v in a[1:5]))
    elif cmd == "cortes":
        cortes(a[0], *(int(v) for v in a[1:5]),
               *(int(v) for v in a[5:7]) if len(a) > 5 else ())
    elif cmd == "recorte":
        recorte(a[0], *(int(v) for v in a[1:5]), a[5],
                int(a[6]) if len(a) > 6 else 2)
    else:
        print(__doc__); sys.exit(1)
