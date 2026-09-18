/**
 * Tout le contenu éditable du site est ici.
 * Modifiez ce fichier : aucune autre retouche n'est nécessaire.
 */

export const marque = {
  nom: "Eventa MG",
  initiales: "E",
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
      nom: "Tiana R.",
      role: "Développeur principal",
      mot: "Construit les plateformes web et encadre les revues de code.",
      image: "/images/Andry.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },

    {
      nom: "Niaina A.",
      role: "Experte en IA",
      mot: "Conçoit les assistants et les automatisations sur mesure.",
      image: "/images/Fanasina.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },

    {
      nom: "Mamy R.",
      role: "Photographe",
      mot: "Couvre les événements et signe les portraits de marque.",
      image: "/images/Frederic.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },
     {
      nom: "Mamy R.",
      role: "Photographe",
      mot: "Couvre les événements et signe les portraits de marque.",
      image: "/images/Kalo.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },
     {
      nom: "Mamy R.",
      role: "Photographe",
      mot: "Couvre les événements et signe les portraits de marque.",
      image: "/images/Rinah.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },
       {
      nom: "Mamy R.",
      role: "Photographe",
      mot: "Couvre les événements et signe les portraits de marque.",
      image: "/images/Voahary.jpeg",
      whatsapp: "https://wa.me/261XXXXXXXXX",
      linkedin: "https://www.linkedin.com/in/xxxxx",
      facebook: "https://www.facebook.com/xxxxx",
    },

    // ...
  ],

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
    { etiquette: "Écrivez-nous", valeur: "contact@eventa-mg.com", icone: "mail" },
    { etiquette: "Appelez-nous", valeur: "+261 34 00 000 00", icone: "tel" },
    { etiquette: "Retrouvez-nous", valeur: "Antananarivo, Madagascar", icone: "lieu" },
  ],
  sujets: [
    "Développement web ou mobile",
    "Intelligence artificielle",
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
      titre: "Nous suivre",
      liens: [
        { libelle: "Facebook", href: "#" },
        { libelle: "LinkedIn", href: "#" },
        { libelle: "Instagram", href: "#" },
      ],
    },
  ],
  mentions: "Tous droits réservés.",
};
