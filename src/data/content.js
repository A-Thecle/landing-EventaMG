/**
 * Tout le contenu éditable du site est ici.
 * Modifiez ce fichier : aucune autre retouche n'est nécessaire.
 */

export const marque = {
  nom: "Eventa MG",
  logo: "/images/logo.jpeg",
  baseline:
    "Une communauté d'experts malgaches : code, IA, image, son, formation, commerce.",
};

export const navigation = [
  { id: "accueil", libelle: "Accueil" },
  { id: "apropos", libelle: "À propos" },
  { id: "services", libelle: "Services" },
  { id: "equipes", libelle: "Équipes" },
  { id: "contact", libelle: "Contact" },
];

export const accueil = {
  signal: "Antananarivo · et partout où le projet nous mène",

  titre: "Passions · Travail · Partage",

  texte:
    "Confiez à notre équipe experte en automatisation IA, développement, photographie, enseignement et événementiel vos ambitions et vos événements.",

  sousTexte:
    "Eventa MG rassemble des talents complémentaires pour transformer vos idées en projets concrets, utiles et créatifs.",

  actionPrincipale: "Découvrir nos services",
  actionSecondaire: "Demander un service",

  noyau: "Eventa\nMG",

  barre: {
    champs: [
      {
        id: "service",
        libelle: "Service",
        options: [
          "Site ou application",
          "Automatisation & IA",
          "Photographie",
          "Cours de mathématiques",
          "Sonorisation & DJ",
        ],
      },

      {
        id: "projet",
        libelle: "Type de projet",
        options: [
          "Création",
          "Refonte",
          "Événement",
          "Accompagnement",
        ],
      },

      {
        id: "delai",
        libelle: "Échéance",
        options: [
          "Ce mois-ci",
          "Dans 3 mois",
          "Pas encore fixée",
        ],
      },
    ],

    action: "Demander un devis",
  },

  chiffres: [
    {
      valeur: "7",
      libelle: "pôles d'expertise",
    },
    {
      valeur: "40+",
      libelle: "membres actifs",
    },
    {
      valeur: "60+",
      libelle: "projets livrés",
    },
    {
      valeur: "4",
      libelle: "pays couverts",
    },
  ],

  metiers: [
    "Site ou applications",
    "Automatisation & IA",
    "Photographie",
    "Cours de mathématiques",
    "Sonorisation & DJ",
    "Développement",
  ],
};

// À fusionner dans votre fichier data/content.js existant
// (remplace les exports "poles" et "apropos" actuels)

export const poles = {
  titre: "Trois façons de travailler avec nous",
  intro:
    "Selon votre besoin, vous mobilisez un pôle ou les trois. L'interlocuteur reste le même.",
  liste: [
    {
      titre: "Construire",
      texte:
        "Sites, applications et plateformes sur mesure, livrés avec un code que vos équipes peuvent reprendre.",
      illustration: "construire",
    },
    {
      titre: "Automatiser",
      texte:
        "Intelligence artificielle, assistants et automatisation des tâches qui vous coûtent du temps.",
      illustration: "automatiser",
    },
    {
      titre: "Raconter",
      texte:
        "Photo, vidéo, son et identité visuelle pour donner à votre marque une image qui lui ressemble.",
      illustration: "raconter",
    },
  ],
};

export const apropos = {
  titre: "Des talents différents. Une même ambition.",
  intro:
    "Eventa MG réunit une communauté de profils complémentaires qui mettent leurs expertises en commun pour transformer vos idées en projets réels.",

  paragraphes: [
    "Développeurs, experts en intelligence artificielle, photographes, formateurs et profils créatifs travaillent ensemble autour d'une même ambition : faire avancer votre projet, de l'idée jusqu'à sa réalisation.",
    "Chaque membre apporte son métier, son expérience et sa manière de créer. Vous bénéficiez ainsi d'une équipe qui se forme autour de vos besoins, sans multiplier les interlocuteurs."
  ],

  citation:
    "Une idée devient plus forte lorsqu'elle rencontre les bonnes compétences.",

  piliers: [
    {
      titre: "Des expertises complémentaires",
      texte:
        "Chaque projet peut réunir les compétences dont il a réellement besoin.",
      icone: "membres",
    },
    {
      titre: "Un projet, une équipe",
      texte:
        "Un interlocuteur coordonne les expertises et garde une vision globale du projet.",
      icone: "boussole",
    },
    {
      titre: "Créer et transmettre",
      texte:
        "La communauté partage ses connaissances à travers des ateliers, du mentorat et des formations.",
      icone: "partage",
    },
  ],
};
export const services = {
  titre: "Ce que nous prenons en charge.",
  intro:
    "Cinq domaines, mobilisables séparément ou ensemble selon l'ampleur de votre projet.",

  liste: [
    {
      titre: "Développement web & mobile",
      image: "/images/dev.jpg",
      texte:
        "Sites vitrines, plateformes métier et applications mobiles. Du cadrage à la mise en ligne, avec un code que vos équipes peuvent reprendre.",
      tags: ["React", "Next.js", "Node", "Flutter"],
    },

    {
      titre: "Intelligence artificielle",
      image: "/images/IA.jpg",
      texte:
        "Assistants conversationnels, automatisation de tâches répétitives, analyse de données et vision par ordinateur.",
      tags: ["Chatbots", "Automatisation", "Data"],
    },

    {
      titre: "Photographie & vidéo",
      image: "/images/photographe.jpg",
      texte:
        "Couverture d'événements, portraits corporate, contenus de marque et montage.",
      tags: ["Événementiel", "Corporate"],
    },

    {
      titre: "Sonorisation & DJ",
      image: "/images/medias.jpg",
      texte:
        "Mariages, soirées d'entreprise et lancements produit, du matériel à l'animation.",
      tags: ["Live", "Location"],
    },

    {
      titre: "Formation & cours",
      image: "/images/formation.jpg",
      texte:
        "Mathématiques, programmation et outils numériques, en présentiel à Antananarivo ou à distance.",
      tags: ["Maths", "Code", "Bureautique"],
    },
  ],
};

export const equipes = {
  titre: "Les visages de la communauté.",
  intro:
    "Des talents différents qui mettent leurs expertises en commun pour donner vie aux projets.",

  membres: [
  {
    nom: "Ignace Razanajatovo",
    role: "Responsable Commercial",
    mot: "Assure que chaque client et prestataire vive la meilleure expérience possible.",
    image: "/images/IGNACE.jpg",
    whatsapp: "https://wa.me/261340165412",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "HALA Kanty",
    role: "Développeur Web & Mobile",
    mot: "Développeur d'applications performantes, il transforme vos idées en solutions numériques innovantes.",
    image: "/images/hala.jpg",
    whatsapp: "https://wa.me/261328535118",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Finaritra Sarobidy",
    role: "Juriste & Business Manager",
    mot: "Garantit la conformité légale et pilote la stratégie d'affaires pour assurer la croissance des projets.",
    image: "/images/finaritra.jpg",
    whatsapp: "https://wa.me/23055330073",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Andry Ramanantsoa",
    role: "Développeur IA - Data Analyst - Data Scientist",
    mot: "Développeur web fullstack JAVA, également Data Analyst et Data Scientist.",
    image: "/images/Andry.jpeg",
    whatsapp: "https://wa.me/261386720146",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Ismael Ramanantsoa",
    role: "Photographe & Vidéaste",
    mot: "Expert en photographie et vidéographie, il capture les moments les plus précieux.",
    image: "/images/ismael.jpeg",
    whatsapp: "https://wa.me/261325681906",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Kalo Ravaloharivony",
    role: "Community Manager",
    mot: "Gère l'image de marque et anime la communauté sur les réseaux sociaux avec créativité et engagement.",
    image: "/images/Kalo.jpeg",
    whatsapp: "https://wa.me/261348812284",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Antonio Visionnaire",
    role: "Développeur & Mobile Designer",
    mot: "Conçoit des interfaces intuitives et développe des applications mobiles fluides centrées sur l'utilisateur.",
    image: "/images/antonio.jpeg",
    whatsapp: "https://wa.me/261325728190",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Rinah Randrianarison",
    role: "Formateur en Mathématiques et Physique",
    mot: "Partage son savoir et accompagne avec pédagogie pour développer les compétences de l'équipe.",
    image: "/images/Rinah.jpeg",
    whatsapp: "https://wa.me/261343609445",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Vincent Randriatsara",
    role: "Enseignant & Développeur Web fullstack",
    mot: "Spécialiste du développement logiciel, il conçoit des architectures performantes pour le web et les applications de bureau.",
    image: "/images/vincent.png",
    whatsapp: "https://wa.me/261331844584",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Ralf Fanantenana",
    role: "Développeur Web fullstack JAVA - Desktop",
    mot: "Développe des solutions logicielles robustes et des applications web sur mesure pour répondre aux besoins techniques.",
    image: "/images/ralph.jpg",
    whatsapp: "https://wa.me/261331558975",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Mendrika Fitiavana",
    role: "Développeur Web fullstack JAVA - Desktop",
    mot: "Spécialiste du développement logiciel, il conçoit des architectures performantes pour le web et les applications de bureau.",
    image: "/images/kevin.jpeg",
    whatsapp: "https://wa.me/261332922510",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Voahary Ramerison",
    role: "Développeuse IA - Data Analyst - Data Scientist & Modèle photo",
    mot: "Allie expertise en intelligence artificielle et créativité artistique en tant que modèle photo.",
    image: "/images/voahary.jpg",
    whatsapp: "https://wa.me/261343177251",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Frédéric Andrianantenaina",
    role: "Développeur IA - Data Analyst - Data Scientist - Web",
    mot: "Intègre des solutions d'intelligence artificielle avancées dans des applications web modernes.",
    image: "/images/frederic.jpg",
    whatsapp: "https://wa.me/261385900080",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Fanasina Binah",
    role: "Développeur IA - Data Analyst - Data Scientist - Web ",
    mot: "Intègre des solutions d'intelligence artificielle avancées dans des applications web modernes.",
    image: "/images/Fanasina.jpeg",
    whatsapp: "https://wa.me/261387530368",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Tsiry R.",
    role: "Développeur Web - Mobile - Designer",
    mot: "Architecte de notre plateforme et passionné par le développement d'applications web et mobiles.",
    image: "/images/ankafa.jpeg",
    whatsapp: "https://wa.me/261383846660",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Thecle Nathalie",
    role: "Développeuse Web & Intelligence Artificielle - Data Analyst - Data Scientist",
    mot: "Travaille sur les applications web et l’intégration intelligente.",
    image: "/images/Thecle.jpg",
    whatsapp: "https://wa.me/261XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  },
  {
    nom: "Voary R.",
    role: "Économiste",
    mot: "Analyse les dynamiques économiques et accompagne la stratégie de croissance.",
    image: "/images/voary.jpg",
    whatsapp: "https://wa.me/261XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/xxxxx",
    facebook: "https://www.facebook.com/xxxxx"
  }
]
,

  appel: {
    titre: "Votre métier manque à la liste ?",
    texte:
      "La communauté s'ouvre à de nouveaux profils chaque trimestre, sur cooptation.",
    action: "Proposer ma candidature",
  },
};
export const contact = {
  titre: "Parlons de votre projet.",
  intro:
    "Décrivez-nous votre besoin en quelques lignes. Nous revenons vers vous sous 48 heures ouvrées avec le bon interlocuteur.",
  coordonnees: [
    { etiquette: "Écrivez-nous", valeur: "eventamalagasy@gmail.com", icone: "mail" },
    { etiquette: "Appelez-nous", valeur: "+261 38 67 201 46", icone: "tel" },
    { etiquette: "Retrouvez-nous", valeur: "Antananarivo, Madagascar", icone: "lieu" },
  ],
  sujets: [
    "Développement web ou mobile",
    "Integration d'IA ou automatisation",
    "Photographie & vidéo",
    "Sonorisation & DJ",
    "Formation & cours",
    "Autre demande",
  ],
  confirmation:
    "Message envoyé. Un membre de l'équipe vous répond sous 48 heures.",
};

export const pied = {
  colonnes: [
    {
      titre: "Navigation",
      liens: navigation.map((item) => ({
        libelle: item.libelle,
        href: `#${item.id}`,
      })),
    },

    {
      titre: "Expertises",
      liens: [
        {
          libelle: "Développement web & mobile",
          href: "#services",
        },
        {
          libelle: "Intelligence artificielle",
          href: "#services",
        },
        {
          libelle: "Photo & vidéo",
          href: "#services",
        },
        {
          libelle: "Son & événementiel",
          href: "#services",
        },
        {
          libelle: "Formation",
          href: "#services",
        },
      ],
    },

    {
      titre: "Nous suivre",
      liens: [
        {
          libelle: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61593704705141",
          icone: "facebook",
        },
        {
          libelle: "LinkedIn",
          href: "#",
          icone: "linkedin",
        },
        {
          libelle: "Instagram",
          href: "#",
          icone: "instagram",
        },
      ],
    },
  ],

  mentions: "Tous droits réservés.",
};
