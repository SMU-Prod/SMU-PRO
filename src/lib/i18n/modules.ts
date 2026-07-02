/**
 * Dicionário de tradução dos TÍTULOS DE MÓDULO/SUBMÓDULO dos cursos.
 * Chave = título em PT (exatamente como está no banco); valor = { en, es }.
 * Usado na sidebar do player (lesson-player) para traduzir a estrutura do curso.
 * Módulo NEUTRO (sem "use client") — pode ser usado no client e no server.
 * Fallback: se não houver entrada, mantém o título em PT.
 */
import type { Lang } from "./dict";

export const MODULES: Record<string, { en: string; es: string }> = {
  "Conhecendo a Música": { en: "Getting to Know Music", es: "Conociendo la Música" },
  "Efeito": { en: "Effects", es: "Efectos" },
  "Eletrônica I": { en: "Electronics I", es: "Electrónica I" },
  "Elétrica I": { en: "Electrical I", es: "Eléctrica I" },
  "Encerramento — Nível Trainee": { en: "Closing — Trainee Level", es: "Cierre — Nivel Trainee" },
  "Equipamentos Essenciais": { en: "Essential Equipment", es: "Equipos Esenciales" },
  "Equipamentos de Efeito: Modelos e Detalhes": { en: "Effects Equipment: Models and Details", es: "Equipos de Efectos: Modelos y Detalles" },
  "Equipamentos de Luz: Modelos e Detalhes": { en: "Lighting Equipment: Models and Details", es: "Equipos de Iluminación: Modelos y Detalles" },
  "Equipamentos de Som: Modelos e Detalhes": { en: "Sound Equipment: Models and Details", es: "Equipos de Sonido: Modelos y Detalles" },
  "Equipamentos de Vídeo: Modelos e Detalhes": { en: "Video Equipment: Models and Details", es: "Equipos de Video: Modelos y Detalles" },
  "Estruturas (Treliça), Rigging, Energia e Padrões Técnicos": { en: "Structures (Truss), Rigging, Power and Technical Standards", es: "Estructuras (Truss), Rigging, Energía y Estándares Técnicos" },
  "Fundamentos do DJ": { en: "DJ Fundamentals", es: "Fundamentos del DJ" },
  "Funções e Atividades": { en: "Roles and Activities", es: "Funciones y Actividades" },
  "Interpessoalidade e Postura Profissional": { en: "Interpersonal Skills and Professional Conduct", es: "Habilidades Interpersonales y Conducta Profesional" },
  "Introdução ao Mundo dos Eventos": { en: "Introduction to the World of Events", es: "Introducción al Mundo de los Eventos" },
  "Luz I": { en: "Lighting I", es: "Iluminación I" },
  "Mixagem, Performance e Set": { en: "Mixing, Performance and Set", es: "Mezcla, Performance y Set" },
  "Módulo 1 - Fundamentos do Sinal de Vídeo e da Função do VJ/Técnico": { en: "Module 1 - Fundamentals of the Video Signal and the VJ/Technician Role", es: "Módulo 1 - Fundamentos de la Señal de Video y la Función del VJ/Técnico" },
  "Módulo 1 - O Produtor Executivo: papel, perfil e estrutura da equipe": { en: "Module 1 - The Executive Producer: role, profile and team structure", es: "Módulo 1 - El Productor Ejecutivo: papel, perfil y estructura del equipo" },
  "Módulo 1 — Fundamentos da Eletricidade": { en: "Module 1 — Fundamentals of Electricity", es: "Módulo 1 — Fundamentos de la Electricidad" },
  "Módulo 1 — Fundamentos da Luz e a Profissão do Iluminador": { en: "Module 1 — Fundamentals of Light and the Lighting Designer Profession", es: "Módulo 1 — Fundamentos de la Luz y la Profesión del Iluminador" },
  "Módulo 1 — Fundamentos da Pirotecnia e Efeitos Especiais para Eventos": { en: "Module 1 — Fundamentals of Pyrotechnics and Special Effects for Events", es: "Módulo 1 — Fundamentos de la Pirotecnia y Efectos Especiales para Eventos" },
  "Módulo 1 — Fundamentos do Som e da Cadeia de Sinal": { en: "Module 1 — Fundamentals of Sound and the Signal Chain", es: "Módulo 1 — Fundamentos del Sonido y la Cadena de Señal" },
  "Módulo 10 — Soldagem, Montagem e Segurança Elétrica": { en: "Module 10 — Soldering, Assembly and Electrical Safety", es: "Módulo 10 — Soldadura, Montaje y Seguridad Eléctrica" },
  "Módulo 2 - Hardware: Computador, Cabos, Conexões e Conversão": { en: "Module 2 - Hardware: Computer, Cables, Connections and Conversion", es: "Módulo 2 - Hardware: Computadora, Cables, Conexiones y Conversión" },
  "Módulo 2 - Pré-evento I: briefing, licenças e projeto": { en: "Module 2 - Pre-event I: briefing, permits and project", es: "Módulo 2 - Pre-evento I: briefing, licencias y proyecto" },
  "Módulo 2 — Componentes Eletrônicos": { en: "Module 2 — Electronic Components", es: "Módulo 2 — Componentes Electrónicos" },
  "Módulo 2 — DMX512, Endereçamento e a Cadeia de Sinal": { en: "Module 2 — DMX512, Addressing and the Signal Chain", es: "Módulo 2 — DMX512, Direccionamiento y la Cadena de Señal" },
  "Módulo 2 — Equipamentos: Consoles, Microfones, Caixas e Sistemas": { en: "Module 2 — Equipment: Consoles, Microphones, Speakers and Systems", es: "Módulo 2 — Equipos: Consolas, Micrófonos, Altavoces y Sistemas" },
  "Módulo 2 — Química, Comportamento e Tempo dos Efeitos": { en: "Module 2 — Chemistry, Behavior and Timing of Effects", es: "Módulo 2 — Química, Comportamiento y Tiempo de los Efectos" },
  "Módulo 3 - Pré-evento II: roteiro logístico, cronogramas e rider técnico": { en: "Module 3 - Pre-event II: logistics script, schedules and technical rider", es: "Módulo 3 - Pre-evento II: guion logístico, cronogramas y rider técnico" },
  "Módulo 3 - Telas, Telões de LED e Projeção": { en: "Module 3 - Screens, LED Walls and Projection", es: "Módulo 3 - Pantallas, Pantallas LED y Proyección" },
  "Módulo 3 — Equipamentos de Efeitos: CO2, Fumaça, Confete e Faíscas": { en: "Module 3 — Effects Equipment: CO2, Smoke, Confetti and Sparks", es: "Módulo 3 — Equipos de Efectos: CO2, Humo, Confeti y Chispas" },
  "Módulo 3 — Equipamentos: Fixtures, Efeitos e Dimmers": { en: "Module 3 — Equipment: Fixtures, Effects and Dimmers", es: "Módulo 3 — Equipos: Fixtures, Efectos y Dimmers" },
  "Módulo 3 — Medição e Instrumentos": { en: "Module 3 — Measurement and Instruments", es: "Módulo 3 — Medición e Instrumentos" },
  "Módulo 3 — Operação do Console: Channel Strip e Gain Staging": { en: "Module 3 — Console Operation: Channel Strip and Gain Staging", es: "Módulo 3 — Operación de la Consola: Channel Strip y Gain Staging" },
  "Módulo 4 - Equipe e financeiro: contratação, orçamento e documentos de pagamento": { en: "Module 4 - Team and Finance: hiring, budget and payment documents", es: "Módulo 4 - Equipo y Finanzas: contratación, presupuesto y documentos de pago" },
  "Módulo 4 - Switchers e Mixagem de Vídeo ao Vivo": { en: "Module 4 - Switchers and Live Video Mixing", es: "Módulo 4 - Switchers y Mezcla de Video en Vivo" },
  "Módulo 4 — Mesa de Disparo, Time Code e Painéis": { en: "Module 4 — Firing Console, Time Code and Panels", es: "Módulo 4 — Mesa de Disparo, Time Code y Paneles" },
  "Módulo 4 — Operando a Mesa de Luz: Consoles e Fluxo de Trabalho": { en: "Module 4 — Operating the Lighting Console: Consoles and Workflow", es: "Módulo 4 — Operando la Consola de Luz: Consolas y Flujo de Trabajo" },
  "Módulo 4 — Simulador de Serviço: Montagem, Soundcheck e Microfonação": { en: "Module 4 — Job Simulator: Setup, Soundcheck and Miking", es: "Módulo 4 — Simulador de Servicio: Montaje, Soundcheck y Microfoneo" },
  "Módulo 4 — Sinais e Eletrônica Digital": { en: "Module 4 — Signals and Digital Electronics", es: "Módulo 4 — Señales y Electrónica Digital" },
  "Módulo 5 - Durante o evento: logística, montagem e execução": { en: "Module 5 - During the Event: logistics, setup and execution", es: "Módulo 5 - Durante el Evento: logística, montaje y ejecución" },
  "Módulo 5 - Video Mapping, Edição e Conteúdo": { en: "Module 5 - Video Mapping, Editing and Content", es: "Módulo 5 - Video Mapping, Edición y Contenido" },
  "Módulo 5 — Gravação, DAW e Pós-Produção": { en: "Module 5 — Recording, DAW and Post-Production", es: "Módulo 5 — Grabación, DAW y Postproducción" },
  "Módulo 5 — Segurança Operacional: o Coração do Pleno Efeito": { en: "Module 5 — Operational Safety: the Heart of Advanced Effects", es: "Módulo 5 — Seguridad Operacional: el Corazón del Pleno Efecto" },
  "Módulo 5 — Simulador Prático: do Patch ao Show": { en: "Module 5 — Practical Simulator: from Patch to Show", es: "Módulo 5 — Simulador Práctico: del Patch al Show" },
  "Módulo 5 — Transmissão de Dados e Conectividade": { en: "Module 5 — Data Transmission and Connectivity", es: "Módulo 5 — Transmisión de Datos y Conectividad" },
  "Módulo 6 - Projeto, Operação e Documentação Profissional": { en: "Module 6 - Project, Operation and Professional Documentation", es: "Módulo 6 - Proyecto, Operación y Documentación Profesional" },
  "Módulo 6 - Pós-evento, documentação e organização digital": { en: "Module 6 - Post-event, documentation and digital organization", es: "Módulo 6 - Post-evento, documentación y organización digital" },
  "Módulo 6 — Acústica, Ambiente, Gestão e Carreira": { en: "Module 6 — Acoustics, Environment, Management and Career", es: "Módulo 6 — Acústica, Ambiente, Gestión y Carrera" },
  "Módulo 6 — Administrativo e Jurídico: Legislação, Licenças e Normas": { en: "Module 6 — Administrative and Legal: Legislation, Permits and Regulations", es: "Módulo 6 — Administrativo y Jurídico: Legislación, Licencias y Normas" },
  "Módulo 6 — Eletrônica de Áudio": { en: "Module 6 — Audio Electronics", es: "Módulo 6 — Electrónica de Audio" },
  "Módulo 6 — Projeto, Rider Técnico e Carreira": { en: "Module 6 — Project, Technical Rider and Career", es: "Módulo 6 — Proyecto, Rider Técnico y Carrera" },
  "Módulo 7 — Eletrônica de Vídeo": { en: "Module 7 — Video Electronics", es: "Módulo 7 — Electrónica de Video" },
  "Módulo 7 — Projeto, Execução e Comunicação Profissional": { en: "Module 7 — Project, Execution and Professional Communication", es: "Módulo 7 — Proyecto, Ejecución y Comunicación Profesional" },
  "Módulo 8 — Fontes e Energia": { en: "Module 8 — Power Supplies and Energy", es: "Módulo 8 — Fuentes y Energía" },
  "Módulo 9 — Interferência (EMI/EMC) e Blindagem": { en: "Module 9 — Interference (EMI/EMC) and Shielding", es: "Módulo 9 — Interferencia (EMI/EMC) y Blindaje" },
  "Produção Avançada: Gestão Profissional de Eventos": { en: "Advanced Production: Professional Event Management", es: "Producción Avanzada: Gestión Profesional de Eventos" },
  "Produção I": { en: "Production I", es: "Producción I" },
  "Profissionalização": { en: "Professionalization", es: "Profesionalización" },
  "Segurança do Trabalho": { en: "Occupational Safety", es: "Seguridad Laboral" },
  "Som I": { en: "Sound I", es: "Sonido I" },
  "Técnicas Básicas e Beatmatching": { en: "Basic Techniques and Beatmatching", es: "Técnicas Básicas y Beatmatching" },
  "Vídeo I": { en: "Video I", es: "Video I" },
};

/** Traduz um título de módulo/submódulo. Fallback: retorna o próprio título (PT). */
export function trModule(titulo: string | null | undefined, lang: Lang): string {
  if (!titulo) return titulo ?? "";
  if (lang === "pt") return titulo;
  return MODULES[titulo]?.[lang] ?? titulo;
}
