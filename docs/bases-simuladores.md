# Bases dos simuladores (backing tracks) — como adicionar uma música

As "bases" são as músicas multipista que aparecem no **seletor de músicas de todos
os simuladores de mesa de som** (Yamaha CL5, M7CL, LS9, TF5, DM7, Rivage, A&H SQ,
Behringer X32, Soundcraft, DiGiCo, PreSonus…). Cada base tem vários canais (stems),
um por instrumento — bumbo, caixa, baixo, voz etc.

Antes, essa lista ficava **escrita dentro do código** de cada simulador (14 arquivos),
e só um desenvolvedor conseguia adicionar uma música nova. **Agora não.** A lista mora
no banco de dados e você mesmo cadastra pela página de administração. **Sem programador,
sem deploy.**

## Onde fica

Painel admin → menu lateral → **"Bases dos simuladores"** (`/admin/bases`).
Só quem é **admin** (ou content manager) vê e acessa essa página.

## Como adicionar uma base nova (passo a passo)

1. Abra **Bases dos simuladores** e clique em **"Nova base"**.
2. Digite o **Nome da base** (ex.: `Queen — Bohemian Rhapsody`). A **pasta** no
   armazenamento é preenchida sozinha a partir do nome (ex.: `mix-queen-bohemian-rhapsody`).
3. **Arraste a pasta** com os arquivos de áudio para a área pontilhada — ou clique em
   **"Selecionar pasta"** / **"Selecionar arquivos"**. Aceita `mp3`, `wav`, `m4a`, `aiff`,
   vários de uma vez (dá conta de 40+ arquivos). Cada arquivo mostra a barra de progresso.
   - Se você reenviar, os arquivos que **já subiram são pulados** — pode fechar e voltar
     depois que continua de onde parou.
4. Ao terminar o envio, o sistema **cria um canal para cada arquivo**, na ordem do nome:
   - o **nome do canal** é adivinhado a partir do nome do arquivo (tira números e traços
     do começo, lixo do fim como `_glued`, e deixa em maiúscula/minúscula bonita);
   - a **cor** é escolhida automaticamente;
   - o **HPF** (corta-grave) vem ligado, exceto em bumbo/kick/baixo/sub.
5. **Revise a grade de canais.** Para cada canal você pode:
   - **Ouvir** (botão ▶) para identificar a faixa antes de nomear;
   - **Renomear**, mudar a **cor**, o **pan** (−30 a +30) e o **HPF** (ON/OFF);
   - **Reordenar** com as setas ↑/↓ — **a ordem é o número do canal** (o 1º vira o canal 1);
   - **Desativar** (olho) um canal que não deve entrar na mesa — ele fica guardado na
     base, mas não ocupa canal; ou **remover** de vez (lixeira).
6. Ajuste **Ordem no seletor** (posição na lista de músicas) e deixe **Ativa** marcada.
7. Clique em **Salvar**. Pronto — a base aparece nos simuladores **no próximo carregamento**
   (é só recarregar a página do simulador). Não precisa mexer em código nem publicar nada.

## Quantos canais? (capacidade das mesas)

Você pode mapear **todos** os canais da música (até 96). **Nada é cortado da base.**
Cada simulador abre até a **capacidade real daquele console** e usa os **primeiros**
canais da base; se a música tiver mais canais do que o console comporta, o excedente
simplesmente não entra naquela mesa (como um console real sem patch), e o resto continua
guardado na base para as mesas maiores.

Capacidades: DiGiCo Q338 96 · Soundcraft Vi 96 · Yamaha DM7 120 · Yamaha CL5 72 ·
Rivage 72 · Yamaha LS9 64 · A&H SQ 48 · Yamaha M7CL 48 · PreSonus 40 · Yamaha TF5 40 ·
Behringer X32 32 · Soundcraft Ui24R 24 · Soundcraft Signature 22.

Ex.: uma base com **42 faixas** entra inteira numa CL5 (72) e numa SQ (48); numa X32 (32)
ela usa as 32 primeiras — o simulador avisa isso no próprio seletor.

## Editar ou excluir uma base

- **Editar:** na lista, clique em **Editar**, faça as mudanças e **Salvar**.
- **Excluir:** clique na lixeira. O sistema **pergunta duas vezes** e deixa você escolher:
  - **apagar também os arquivos de áudio** da pasta no armazenamento; ou
  - **só remover do seletor** (mantém os arquivos guardados). Por segurança, nada é
    apagado sem confirmação.

## Observações

- A mesma base vale para **todos** os simuladores de mesa ao mesmo tempo.
- Recomendação prática: mantenha os nomes de canal curtos (Bumbo, Caixa, Baixo, Voz…).
- Se o áudio de um canal não tocar no preview, confira se o arquivo subiu (a grade lista
  os arquivos enviados).
