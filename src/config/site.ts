export interface NeighborhoodItem {
  name: string;
  zone: "Norte / Central" | "Central" | "Sul / Central";
}

export interface TreatmentItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: "Sparkles" | "Disc" | "Layers";
}

export interface IndicationItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "Activity"
    | "Brain"
    | "Moon"
    | "HeartHandshake"
    | "Sparkles"
    | "ShieldCheck";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isEditableNote?: boolean;
}

export const siteConfig = {
  brand: {
    name: "Acupuntura & Ventosaterapia",
    subtitle: "ATENDIMENTO DOMICILIAR • PORTO ALEGRE - RS",
    tagline:
      "Cuidado terapêutico individualizado em acupuntura e ventosaterapia no conforto e na tranquilidade do seu lar.",
    siteUrl: "https://acupunturadomiciliarpoa.com.br", // EDITÁVEL: substitua pelo domínio oficial antes de publicar
  },

  contact: {
    /**
     * EDITÁVEL: Insira o número de WhatsApp com código do país (55) + DDD (51) + número, apenas dígitos.
     * Exemplo: "5551999999999"
     */
    whatsappNumber: "",
    /**
     * EDITÁVEL: Telefone formatado para exibição no rodapé e botões, quando desejado.
     */
    whatsappDisplay: "[WhatsApp a configurar]",
    /**
     * EDITÁVEL: E-mail institucional de contato, se aplicável.
     */
    email: "[E-mail de contato — a preencher]",
    defaultWhatsappMessage:
      "Olá! Gostaria de saber mais sobre o atendimento domiciliar de acupuntura e ventosaterapia em Porto Alegre e consultar a disponibilidade para o meu bairro.",
  },

  professional: {
    name: "Maurício Message Krowczuk",
    role: "Fisioterapeuta • Formado pela PUCRS (2007)",
    registrationLabel:
      "[Registro Profissional / CREFITO — a preencher]",
    photoPath: "/mauricio-perfil.jpg",
    bioParagraphs: [
      "Fisioterapeuta formado pela PUCRS em 2007, com mais de 10 anos de experiência clínica dedicada à Acupuntura e à Ventosaterapia.",
      "Realiza atendimento totalmente personalizado e em domicílio em Porto Alegre – RS, unindo precisão técnica, alívio de dores, liberação miofascial e reequilíbrio energético no conforto e na privacidade do seu lar.",
    ],
    credentialsList: [
      "Graduação em Fisioterapia — PUCRS (2007)",
      "Mais de 10 anos de experiência clínica",
      "Atuação em Acupuntura e Ventosaterapia Domiciliar",
    ],
  },

  service: {
    heroTitle:
      "Acupuntura e Ventosaterapia em Porto Alegre, no conforto da sua casa",
    heroSubtitle:
      "Atendimento domiciliar voltado ao alívio de dores, liberação miofascial e equilíbrio energético, com materiais estéreis, ventosas higienizadas e protocolo individualizado.",
    highlights: [
      "Atendimento 100% em domicílio",
      "Agulhas estéreis e ventosas higienizadas",
      "Horários combinados previamente",
    ],
    sessionDurationNote:
      "[Duração da sessão — a confirmar pelo profissional, informada no contato inicial]",
    servicePillars: [
      {
        title: "Sem deslocamento ou trânsito",
        description:
          "Você recebe o cuidado terapêutico sem sair de casa, evitando o estresse do trajeto e preservando seu tempo.",
      },
      {
        title: "Descanso imediato após a sessão",
        description:
          "Ao finalizar o atendimento, você já está no seu próprio espaço para prolongar a sensação de relaxamento.",
      },
      {
        title: "Estrutura completa em casa",
        description:
          "Levamos até você maca portátil, ventosas sanitizadas e agulhas estéreis de uso único para total conforto e segurança.",
      },
      {
        title: "Biossegurança rigorosa",
        description:
          "Uso exclusivo de agulhas lacradas e de uso único, aliado à assepsia rigorosa de cada instrumento.",
      },
    ],
  },

  treatments: [
    {
      id: "acupuntura-sistemica",
      badge: "Equilíbrio & Alívio",
      title: "Acupuntura Sistêmica",
      description:
        "Atuação terapêutica direcionada com foco especial no alívio de dores na coluna (cervical, dorsal, lombar e ciática), além do manejo de dores crônicas e agudas, redução de estresse e ansiedade, apoio ao sono reparador e alívio de enxaquecas.",
      highlights: [
        "Dores na coluna (cervical, lombar e ciática)",
        "Dores crônicas e agudas",
        "Estresse, ansiedade e enxaquecas",
      ],
      iconName: "Sparkles",
    },
    {
      id: "ventosaterapia-clinica",
      badge: "Liberação Miofascial",
      title: "Ventosaterapia Clínica",
      description:
        "Aplicação clínica de ventosas com pressão suave para liberação miofascial profunda, alívio de tensões musculares e contraturas, melhora da circulação local e recuperação física.",
      highlights: [
        "Liberação miofascial profunda",
        "Alívio de tensões e contraturas",
        "Circulação local e recuperação",
      ],
      iconName: "Disc",
    },
    {
      id: "eletroterapia-clinica",
      badge: "Analgesia & Recuperação",
      title: "Eletroterapia Clínica",
      description:
        "Aplicação de estímulos elétricos terapêuticos controlados e seguros para potencializar a analgesia, acelerar a recuperação muscular, reduzir processos inflamatórios e promover relaxamento profundo em quadros de dor aguda ou crônica.",
      highlights: [
        "Analgesia e controle da dor",
        "Recuperação e relaxamento muscular",
        "Ação anti-inflamatória localizada",
      ],
      iconName: "Layers",
    },
  ] satisfies TreatmentItem[],

  indications: [
    {
      id: "dores",
      title: "Apoio no manejo de dores musculoesqueléticas",
      description:
        "Cuidado complementar utilizado para auxiliar no alívio de tensões musculares, desconfortos lombares, cervicais e articulares.",
      iconName: "Activity",
    },
    {
      id: "estresse",
      title: "Redução de estresse e sobrecarga emocional",
      description:
        "Estímulo ao relaxamento físico e mental, contribuindo para o equilíbrio do organismo diante de rotinas intensas.",
      iconName: "Brain",
    },
    {
      id: "sono",
      title: "Apoio à qualidade do sono",
      description:
        "Cuidado integrativo voltado a favorecer o descanso noturno e a regulação do ritmo de repouso.",
      iconName: "Moon",
    },
    {
      id: "cefaleias",
      title: "Tensões cervicais e cefaleias tensionais",
      description:
        "Atuação direcionada ao relaxamento da musculatura e ao conforto em quadros de tensão recorrente, sempre em diálogo com o acompanhamento médico.",
      iconName: "Sparkles",
    },
    {
      id: "bem-estar",
      title: "Bem-estar e cuidado preventivo",
      description:
        "Sessões voltadas à manutenção do equilíbrio geral, vitalidade e qualidade de vida em diferentes fases.",
      iconName: "HeartHandshake",
    },
    {
      id: "mobilidade",
      title: "Comodidade para quem tem rotina ou mobilidade restrita",
      description:
        "Ideal para pessoas em recuperação, idosos ou quem prefere a privacidade e a praticidade do atendimento residencial.",
      iconName: "ShieldCheck",
    },
  ] satisfies IndicationItem[],

  processSteps: [
    {
      step: "01",
      title: "Contato pelo WhatsApp",
      description:
        "Envie uma mensagem direta pelo WhatsApp com o seu bairro e o horário ideal para a sua sessão.",
    },
    {
      step: "02",
      title: "Conversa inicial e dúvidas",
      description:
        "Ouvimos a sua queixa, mostramos como a sessão funciona e tiramos todas as suas dúvidas.",
    },
    {
      step: "03",
      title: "Verificação de região e agenda",
      description:
        "Conferimos a rota de atendimento para o seu bairro em Porto Alegre e os horários disponíveis na agenda.",
    },
    {
      step: "04",
      title: "Agendamento em domicílio",
      description:
        "Com tudo definido, vamos até a sua casa levando maca portátil, ventosas e agulhas estéreis.",
    },
  ] satisfies ProcessStep[],

  /**
   * EDITÁVEL: Bairros sugeridos inicialmente para Porto Alegre – RS.
   * Valide e ajuste esta lista conforme a cobertura real confirmada pelo profissional.
   */
  neighborhoods: [
    { name: "Moinhos de Vento", zone: "Central" },
    { name: "Bela Vista", zone: "Central" },
    { name: "Petrópolis", zone: "Norte / Central" },
    { name: "Mont'Serrat", zone: "Central" },
    { name: "Auxiliadora", zone: "Norte / Central" },
    { name: "Três Figueiras", zone: "Norte / Central" },
    { name: "Jardim Botânico", zone: "Norte / Central" },
    { name: "Menino Deus", zone: "Sul / Central" },
    { name: "Rio Branco", zone: "Central" },
    { name: "Santana", zone: "Central" },
  ] satisfies NeighborhoodItem[],

  faqs: [
    {
      question: "Como funciona a acupuntura e a ventosaterapia domiciliar?",
      answer:
        "O profissional vai até a sua residência no horário combinado, levando a estrutura completa — incluindo maca portátil, ventosas higienizadas e agulhas estéreis descartáveis. Antes da aplicação, é realizada uma conversa inicial para compreender suas queixas e definir o protocolo mais adequado.",
    },
    {
      question: "O que é necessário preparar para o atendimento?",
      answer:
        "Apenas um espaço tranquilo, bem iluminado e arejado onde você possa se acomodar confortavelmente ou onde possamos posicionar a maca portátil. Recomenda-se usar roupas leves que permitam acesso fácil aos braços, pernas ou costas. [Orientações específicas adicionais podem ser confirmadas pelo profissional no agendamento.]",
      isEditableNote: true,
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer:
        "[Campo editável: informe aqui a duração média da primeira avaliação e das sessões de acompanhamento conforme a prática do profissional.]",
      isEditableNote: true,
    },
    {
      question: "Quais regiões de Porto Alegre são atendidas?",
      answer:
        "Trabalhamos com atendimento em bairros selecionados de Porto Alegre, sujeitos à verificação de rota e disponibilidade de agenda. Caso o seu bairro não esteja listado na seção de regiões de referência, entre em contato pelo WhatsApp para consultarmos a possibilidade de atendimento.",
    },
    {
      question: "Como agendar um horário?",
      answer:
        "O agendamento é feito diretamente pelo WhatsApp. Na primeira conversa, você informa o seu bairro, a sua disponibilidade de dias e horários e tira eventuais dúvidas antes de confirmar a visita.",
    },
    {
      question: "Quais são as orientações antes do atendimento?",
      answer:
        "De modo geral, recomenda-se não comparecer à sessão em jejum prolongado nem logo após refeições muito pesadas, além de vestir roupas confortáveis. [Orientações clínicas específicas são alinhadas previamente pelo profissional durante o contato inicial.]",
      isEditableNote: true,
    },
  ] satisfies FaqItem[],
};

export function buildWhatsappUrl(customMessage?: string): string {
  const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(
    customMessage ?? siteConfig.contact.defaultWhatsappMessage
  );
  if (!digits) {
    return `https://wa.me/?text=${text}`;
  }
  return `https://wa.me/${digits}?text=${text}`;
}
