// Manifesto de imagens do MÓDULO DE VIAGEM (pleno-produtor).
// Usado por: (1) o driver de geração (Runway) + upload ao Storage; (2) o build, que embute
// <figure><img> nas aulas via token {{IMG:slug}}.
//
// ⚠️ ESTADO EM 15/07/2026: só `cases-na-balanca` foi gerada — o workspace do Runway bateu o
// limite de créditos no meio do lote (`nano-banana-pro` sem crédito; `gen-4` passou 1× e
// depois também bloqueou). As demais estão com `pendente:true` e o build simplesmente NÃO
// embute figura para elas — a aula fica correta, só sem foto. Quando houver crédito:
//     node cursos-novos/pleno-producao/gen-images.mjs
// e depois republicar as aulas. Nenhuma outra mudança é necessária.
//
// Enquanto isso, as aulas ilustram com DIAGRAMAS SVG inline (feitos à mão, sem custo e mais
// precisos que foto para cota de bagagem e fluxo de documento).

export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-producao-viagem";
export const EXT = "jpg";
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.${EXT}`;

const QA = "Photorealistic high-resolution photography, full-frame DSLR, physically accurate materials and reflections, true-to-life proportions and scale, tack-sharp focus, professional live-event/AV context, clean composition, realistic color. Negative constraints: no brand names, no logos, no readable or garbled text, no warped or duplicated parts, no extra or missing components, no distorted faces, no AI artifacts, no watermark.";

export const IMAGES = [
  {
    slug: "cases-na-balanca", ratio: "1280:720", pendente: false, model: "gen-4",
    alt: "Cases pretos de equipamento com cantoneiras metálicas empilhados sobre uma balança de bagagem em terminal de aeroporto.",
    caption: "O momento da verdade: o case sobe na balança e o excesso vira dinheiro. Quem pesa no galpão, na véspera, nunca descobre isso aqui.",
    prompt: "A photograph of black road cases with metal corner protectors stacked on an airport baggage scale, neutral terminal lighting. " + QA,
  },
  {
    slug: "bagageiro-onibus", ratio: "1280:720", pendente: true,
    alt: "Bagageiro aberto de ônibus rodoviário sendo carregado à noite com cases de equipamento e bags.",
    caption: "A alternativa terrestre: o bagageiro do ônibus leva o que a franquia aérea cobraria caro — ao custo de horas de estrada.",
    prompt: "A photograph of the open luggage compartment of an intercity coach bus at night, with black equipment road cases and soft gig bags being loaded inside by two crew members in plain dark clothing. Concrete bus terminal platform, overhead sodium lighting, slight haze. " + QA,
  },
  {
    slug: "checkin-comitiva", ratio: "1280:720", pendente: true,
    alt: "Balcão de check-in de aeroporto com uma comitiva de equipe técnica despachando vários volumes ao mesmo tempo.",
    caption: "Check-in de comitiva: um responsável com a lista, todos os bilhetes na mesma reserva, e os volumes despachados juntos.",
    prompt: "A photograph of an airline check-in counter at a Brazilian domestic airport, where a group of six crew members in plain dark clothing are checking in many pieces of luggage and equipment cases at once. One person holds a clipboard and talks to the agent. Bright terminal lighting, wide shot. " + QA,
  },
  {
    slug: "case-guitarra-cabine", ratio: "1280:720", pendente: true,
    alt: "Case rígido de guitarra sendo acomodado no compartimento superior da cabine de um avião.",
    caption: "Instrumento na cabine: cabe no bin, viaja com o músico e não passa pela esteira — quando a companhia permite.",
    prompt: "A photograph inside a narrow-body airliner cabin, showing a hard-shell guitar case being carefully placed into the overhead bin by a passenger. Other passengers seated below, warm cabin lighting, realistic interior detail. " + QA,
  },
  {
    slug: "documentos-carga", ratio: "1280:720", pendente: true,
    alt: "Prancheta com documentos fiscais impressos apoiada sobre um case, dentro do baú de um caminhão carregado de equipamento.",
    caption: "O papel que viaja junto com a carga. Sem ele, a fiscalização não vê equipamento de show — vê mercadoria sem nota.",
    prompt: "A photograph of a clipboard holding printed shipping paperwork resting on top of a black equipment road case, inside the cargo box of a truck loaded with stage equipment cases and truss sections. Dim interior light from the open door. Documents are generic printed forms with no readable text. " + QA,
  },
  {
    slug: "excesso-bagagem", ratio: "1280:720", pendente: true,
    alt: "Balcão de excesso de bagagem de aeroporto com volumes sendo repesados e redistribuídos entre malas.",
    caption: "Redistribuir na fila é possível — e humilhante. Redistribuir na planilha, na véspera, é trabalho de produtor.",
    prompt: "A photograph of an airport excess-baggage desk where two people are opening suitcases and redistributing contents between bags on the floor beside a scale. Busy terminal background, natural lighting, candid documentary feel. " + QA,
  },
];

export const PENDENTES = IMAGES.filter(i => i.pendente).map(i => i.slug);
