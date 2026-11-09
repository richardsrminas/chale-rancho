export const site = {
  name: "Chalés do Rancho",
  tagline: "Hospedagem e lazer na Canastra",
  region: "Serra da Canastra, Minas Gerais",
  instagram: "https://www.instagram.com/chalesdorancho.canastra/",
  instagramCavalgada:
    "https://www.instagram.com/cavalgadamigosdoranchocanastra/",
  mapsUrl:
    "https://www.google.com/maps?hl=pt-BR&gl=BR&um=1&ie=UTF-8&fb=1&sa=X&geocode=KROSvv_CTbGUMYxfN6pkTn90&daddr=Pousada+Chal%C3%A9s+do+Rancho+Canastra+-+S%C3%ADtio+S%C3%A3o+Tiago+-+BR+146+-+Vargem+Bonita+%C3%A0+SRMinas,+S%C3%A3o+Roque+de+Minas+-+MG,+37928-000",
  address: {
    label: "Sítio São Tiago — BR-146, Vargem Bonita a São Roque de Minas",
    city: "São Roque de Minas — MG, CEP 37928-000",
  },
};

export const nav = [
  { href: "/", label: "A pousada" },
  { href: "/acomodacoes", label: "Acomodações" },
  { href: "/cavalgadas", label: "Cavalgadas" },
  { href: "/experiencias", label: "Experiências" },
  { href: "/localizacao", label: "Localização" },
];

export const hero = {
  eyebrow: "Pousada na Serra da Canastra — MG",
  title: "Seu refúgio na Serra da Canastra.",
  sub:
    "Natureza, hospitalidade mineira e experiências para viver sem pressa.",
  primaryCta: { href: "#consulta", label: "Consultar disponibilidade" },
  secondaryCta: { href: "/cavalgadas", label: "Conheça as cavalgadas" },
  videoMobile: "/videos/hero-mobile.mp4",
  imageDesktop: "/images/hero/vista06.jpg",
  posterMobile: "/images/hero/vista06.jpg",
};

export const home = {
  intro: {
    eyebrow: "A pousada",
    title: "Um lugar para desacelerar e aproveitar a Canastra.",
    text:
      "Na entrada de Vargem Bonita, a primeira cidade banhada pelo Rio São Francisco, o Chalés do Rancho é um refúgio rural com chalés privativos, lazer ao ar livre e a hospitalidade mineira de sempre.",
    cta: { href: "/acomodacoes", label: "Conheça as acomodações" },
    image: "/images/property/placa01.jpg",
    imageAlt: "Letreiro de madeira do Chalés do Rancho ao entardecer",
  },

  accommodations: {
    eyebrow: "Acomodações",
    title: "Conforto e tranquilidade para descansar depois de um dia de descobertas.",
    text:
      "Chalés privativos com ar-condicionado, TV, Wi-Fi, frigobar, ventilador de teto e varanda com vista. Algumas unidades contam com cozinha completa.",
    cta: { href: "/acomodacoes", label: "Ver todas as acomodações" },
    items: [
      {
        img: "/images/accommodations-public/quarto01.jpg",
        alt: "Quarto de chalé com duas camas, frigobar e ventilador de teto",
      },
      {
        img: "/images/accommodations-public/quarto02.jpg",
        alt: "Quarto de chalé com camas de solteiro, ar-condicionado e guarda-roupa",
      },
      {
        img: "/images/accommodations-public/quarto03.jpg",
        alt: "Quarto de chalé com duas camas e vista para o campo pela janela",
      },
      {
        img: "/images/accommodations-public/quarto04.jpg",
        alt: "Quarto espaçoso de chalé com três camas e frigobar",
      },
      {
        img: "/images/accommodations-public/varanda-quarto.jpg",
        alt: "Varanda de chalé com rede e vista para a vegetação",
      },
      {
        img: "/images/accommodations-public/cozinha.jpg",
        alt: "Cozinha completa de chalé com armários, geladeira e fogão",
      },
      {
        img: "/images/accommodations-public/banheiro.jpg",
        alt: "Banheiro privativo de chalé com box de vidro e bancada de madeira",
      },
      {
        img: "/images/accommodations-public/camas-quarto.jpg",
        alt: "Detalhe das camas com roupas de cama claras em quarto de madeira",
      },
    ],
  },

  horsebackRiding: {
    eyebrow: "Carro-chefe da casa",
    title: "Cavalgada Amigos do Rancho Canastra",
    text:
      "A Canastra tem outro ritmo quando vista da sela. Nossas cavalgadas atravessam rios, matas e paisagens da serra com o acompanhamento da equipe do rancho.",
    cta: { href: "/cavalgadas", label: "Conhecer a cavalgada" },
    imageMain: "/images/cavalgada-public/cavalgada-grupo.jpg",
    imageMainAlt:
      "Grupo de cavaleiros reunido em uma colina da Serra da Canastra durante a Cavalgada Amigos do Rancho Canastra",
    imageSide: "/images/cavalgada-public/cavalgada-rio.jpg",
    imageSideAlt: "Cavaleiros atravessando o rio durante a cavalgada",
    instagram:
      "https://www.instagram.com/cavalgadamigosdoranchocanastra/",
    instagramLabel: "Acompanhar as próximas cavalgadas no Instagram",
  },

  experiences: {
    eyebrow: "Experiências",
    title: "Lazer e sabores da propriedade.",
    text:
      "Piscina, fogueira, lagos, rio e um café da manhã que sabe a Minas Gerais.",
    items: [
      {
        img: "/images/experiences/piscina.jpg",
        alt: "Piscina ao ar livre com deck de madeira e vista para as colinas",
        title: "Piscina",
        text: "Deck de madeira com vista para as colinas da Canastra.",
      },
      {
        img: "/images/experiences/rio.jpg",
        alt: "Prainha do Rio São Francisco a poucos minutos da propriedade",
        title: "Rio São Francisco",
        text: "Acesso à prainha do rio, a poucos minutos da propriedade.",
      },
      {
        img: "/images/experiences/cafe.jpg",
        alt: "Mesa de café da manhã colonial com pães, frutas e quitandas caseiras",
        title: "Café da manhã colonial",
        text: "Quitandas caseiras e sabores da região, servidos com calma.",
      },
      {
        img: "/images/experiences/fogueira.jpg",
        alt: "Fogueira à noite com cadeiras de madeira ao redor",
        title: "Fogueira",
        text: "Cadeiras de madeira ao redor do fogo para noites tranquilas.",
      },
      {
        img: "/images/experiences/animais.jpg",
        alt: "Animais da propriedade, como pavões e galinhas, soltos na natureza",
        title: "Animais e vida rural",
        text: "Pavões, galinhas, gansos, pôneis, cavalos e vacas na propriedade.",
      },
      {
        img: "/images/experiences/lagos.jpg",
        alt: "Lagoa da propriedade cercada de silêncio e verde",
        title: "Lagos e natureza",
        text: "Dois lagos na propriedade cercados de silêncio e verde.",
      },
    ],
  },

  coffeeHome: {
    eyebrow: "Café da manhã colonial",
    title: "Quitandas caseiras para começar o dia com calma.",
    text:
      "Pães, bolos e sabores da região feitos na casa, servidos todos os dias como parte da estadia.",
    cta: { href: "/experiencias", label: "Explorar experiências" },
    items: [
      {
        img: "/images/breakfast/cafe05.jpg",
        alt: "Mesa farta de café da manhã colonial com pães, frutas e quitandas caseiras",
        wide: true,
      },
      {
        img: "/images/breakfast/cafe01.jpg",
        alt: "Cesta de pães caseiros sobre a mesa do café da manhã",
      },
      {
        img: "/images/breakfast/cafe02.jpg",
        alt: "Detalhe da mesa de café da manhã com louças rústicas",
      },
      {
        img: "/images/breakfast/cafe03.jpg",
        alt: "Bolo caseiro servido no café da manhã da pousada",
      },
      {
        img: "/images/breakfast/cafe04.jpg",
        alt: "Frutas e quitandas sobre a mesa de café da manhã",
      },
    ],
  },

  galleryHome: {
    eyebrow: "A propriedade",
    title: "Momentos reais do rancho.",
    items: [
      {
        img: "/images/property/vista07.jpg",
        alt: "Lagoa da propriedade com quiosque e casa ao fundo",
        wide: true,
      },
      {
        img: "/images/property/placa01.jpg",
        alt: "Letreiro de madeira da pousada ao entardecer",
      },
      {
        img: "/images/property/vista02.jpg",
        alt: "Salão rústico de madeira com buffet de café da manhã",
      },
      {
        img: "/images/property/varanda-quarto02.jpg",
        alt: "Varanda com selaria e vista para o pôr do sol",
      },
      {
        img: "/images/property/salao2.jpg",
        alt: "Área de convivência rústica com mesas de madeira",
      },
      {
        img: "/images/property/vista05.jpg",
        alt: "Lagoa da propriedade ao entardecer",
      },
      {
        img: "/images/property/entrada.jpg",
        alt: "Área externa da propriedade com bancos e jardim",
      },
    ],
  },

  location: {
    eyebrow: "Localização",
    title: "Entrada de Vargem Bonita, Serra da Canastra.",
    text:
      "Vargem Bonita é a primeira cidade banhada pelo Rio São Francisco — e a porta de entrada da Canastra.",
    cta: { href: "/localizacao", label: "Ver página de localização" },
  },

  ctaFinalHome: {
    eyebrow: "Planeje sua estadia",
    title: "Conte as datas da sua viagem.",
    text:
      "A gente responde no WhatsApp com disponibilidade e valores — sem compromisso.",
    cta: { href: "#consulta", label: "Consultar disponibilidade" },
  },
};

export const amenities = [
  {
    title: "Piscina ao ar livre",
    text: "Deck de madeira com vista para as colinas da Canastra.",
    img: "/images/lazer/piscina02.jpg",
  },
  {
    title: "Fogueira à noite",
    text: "Cadeiras de madeira ao redor do fogo para noites tranquilas.",
    img: "/images/lazer/fogueira01.jpeg",
  },
  {
    title: "Rio São Francisco",
    text: "Acesso à prainha do rio, a poucos minutos da propriedade.",
    img: "/images/lazer/rio.jpg",
  },
  {
    title: "Café da manhã colonial",
    text: "Quitandas caseiras e sabores da região, servidos com calma.",
    img: "/images/cafe/cafe02.jpg",
  },
];

export const accommodationsPage = {
  eyebrow: "Acomodações",
  title: "Chalés privativos no pé da serra.",
  text:
    "Cada chalé tem banheiro privativo, varanda e vista para as montanhas ou jardins. Algumas unidades contam com cozinha completa.",
  items: home.accommodations.items,
  amenities: {
    title: "Comodidades presentes nos chalés",
    text:
      "Ar-condicionado, TV, Wi-Fi, frigobar, ventilador de teto, serviço de quarto e varanda. Café da manhã colonial com quitandas caseiras está incluído na estadia.",
    cta: { href: "/#consulta", label: "Consultar disponibilidade" },
  },
};

export const horsebackRidingPage = {
  eyebrow: "Experiência carro-chefe",
  title: "Cavalgada Amigos do Rancho Canastra",
  sub: "A Canastra tem outro ritmo quando vista da sela.",
  intro: {
    title: "Rios, matas e o horizonte da serra.",
    text:
      "As cavalgadas do rancho atravessam paisagens reais da Canastra com o acompanhamento da equipe local. Para datas, programação, valores e inscrições, fale diretamente com a gente.",
    image: "/images/cavalgada-public/cavalgada-rio.jpg",
    imageAlt: "Cavaleiros atravessando o rio durante a cavalgada",
  },
  gallery: [
    {
      img: "/images/cavalgada-public/cavalgada-grupo.jpg",
      alt: "Grupo de cavaleiros alinhado em uma colina da Serra da Canastra",
      wide: true,
    },
    {
      img: "/images/cavalgada-public/cavalgada-rio.jpg",
      alt: "Cavaleiros atravessando o rio durante a cavalgada",
    },
  ],
  faqs: [
    {
      q: "Preciso ter experiência com cavalos?",
      a: "As cavalgadas contam com acompanhamento da equipe do rancho. Os detalhes de nível de experiência e requisitos são informados no contato pelo WhatsApp.",
    },
    {
      q: "Há datas fixas de cavalgada?",
      a: "O calendário de cavalgadas e eventos é atualizado junto ao Instagram oficial e confirmado diretamente com a equipe. Consulte pelo WhatsApp para saber as próximas oportunidades.",
    },
    {
      q: "Posso participar sem estar hospedado?",
      a: "A participação e as condições são confirmadas diretamente com a organização da cavalgada pelo WhatsApp.",
    },
  ],
};

export const experiencesPage = {
  eyebrow: "Experiências",
  title: "Lazer e sabores na propriedade.",
  text: "Piscina, fogueira, lagos, rio e um café da manhã que sabe a Minas Gerais.",
  items: [
    {
      img: "/images/lazer/piscina02.jpg",
      alt: "Piscina ao ar livre com deck de madeira e vista para as colinas",
      title: "Piscina",
      text: "Deck de madeira com vista para as colinas da Canastra.",
    },
    {
      img: "/images/lazer/fogueira01.jpeg",
      alt: "Fogueira à noite com cadeiras de madeira ao redor",
      title: "Fogueira",
      text: "Cadeiras de madeira ao redor do fogo para noites tranquilas.",
    },
    {
      img: "/images/lazer/rio.jpg",
      alt: "Prainha do Rio São Francisco a poucos minutos da propriedade",
      title: "Rio São Francisco",
      text: "Acesso à prainha do rio, a poucos minutos da propriedade.",
    },
    {
      img: "/images/lazer/salao2.jpg",
      alt: "Salão rústico de madeira usado para refeições e eventos",
      title: "Salão e área de churrasco",
      text: "Espaço de convivência para refeições e encontros.",
    },
    {
      img: "/images/cafe/cafe01.jpg",
      alt: "Mesa de café da manhã com cestas de pães caseiros",
      title: "Café da manhã colonial",
      text: "Quitandas caseiras e sabores da região, servidos com calma.",
    },
    {
      img: "/images/paisagem/vista05.jpeg",
      alt: "Lagoa da propriedade ao entardecer",
      title: "Lagos e natureza",
      text: "Dois lagos na propriedade cercados de silêncio e verde.",
    },
  ],
  note:
    "Na propriedade também vivem pavões, galinhas, gansos, pôneis, cavalos e vacas. Passeios a cavalo são feitos mediante agendamento — veja a página de cavalgadas.",
};

export const localizacaoPage = {
  eyebrow: "Localização",
  title: "Entrada de Vargem Bonita, Serra da Canastra.",
  text:
    "Vargem Bonita é a primeira cidade banhada pelo Rio São Francisco — e a porta de entrada da Canastra.",
  facts: [
    {
      label: "Endereço",
      value: "Sítio São Tiago — BR-146, Vargem Bonita a São Roque de Minas<br/>São Roque de Minas — MG, CEP 37928-000",
    },
    {
      label: "Região",
      value: "Serra da Canastra — Minas Gerais, Brasil",
    },
    {
      label: "Rota",
      value: "Abrir rota no Google Maps",
    },
    {
      label: "Instagram",
      value: "@chalesdorancho.canastra",
    },
  ],
  note:
    "Não inventamos distâncias nem tempos de deslocamento. Confirme o traçado com a pousada antes de viajar.",
};

export const footerText = {
  brand:
    "Chalés do Rancho — Hospedagem e lazer na Canastra em Serra da Canastra, Minas Gerais. Um refúgio acolhedor para viver a Canastra sem pressa.",
  copyright: "© 2026 Chalés do Rancho.",
};

export const booking = {
  disclaimer:
    "Esta é uma consulta de disponibilidade por WhatsApp, não uma reserva confirmada. A pousada responderá com valores e disponibilidade.",
  accommodationOptions: [
    "Ainda não sei",
    "Chalé com ar-condicionado",
    "Chalé com cozinha completa",
    "Qualquer chalé disponível",
  ],
  pendingNote: {
    title: "Consulta pelo WhatsApp em configuração.",
    instagram: "Fale com a gente pelo Instagram enquanto isso.",
    instagramUrl: "https://www.instagram.com/chalesdorancho.canastra/",
  },
};
