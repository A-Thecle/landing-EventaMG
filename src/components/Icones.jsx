/**
 * Icônes dessinées à la main, en SVG.
 * Évite d'embarquer une librairie entière pour une dizaine de pictogrammes.
 */

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const traces = {
  code: <path d="m9 17-5-5 5-5m6 0 5 5-5 5" />,
  ia: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
      <path d="M9.5 9.5h5v5h-5zM12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22" />
    </>
  ),
  photo: (
    <>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1.2-2h7.2l1.2 2h1.7A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  son: <path d="M4 14v-4m4 8V6m4 14V4m4 14V8m4 8v-4" />,
  formation: (
    <>
      <path d="M12 3 2.5 8 12 13l9.5-5z" />
      <path d="M6.5 10.5V16c0 1.5 2.7 3 5.5 3s5.5-1.5 5.5-3v-5.5" />
    </>
  ),
  commerce: (
    <>
      <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 7H6" />
      <circle cx="10" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
    </>
  ),
  membres: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0M16.5 5.2a3.2 3.2 0 0 1 0 5.9M18 20a5.6 5.6 0 0 0-2.2-4.4" />
    </>
  ),
  boussole: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-1.8 4.4-4.4 1.8 1.8-4.4z" />
    </>
  ),
  partage: (
    <>
      <circle cx="17.5" cy="6" r="2.5" />
      <circle cx="6.5" cy="12" r="2.5" />
      <circle cx="17.5" cy="18" r="2.5" />
      <path d="m8.8 10.8 6.4-3.5M8.8 13.2l6.4 3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m3.8 7 7.1 5.1a2 2 0 0 0 2.2 0L20.2 7" />
    </>
  ),
  tel: (
    <path d="M6.2 3.5h3l1.5 3.8-2 1.3a12 12 0 0 0 5.7 5.7l1.3-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2" />
  ),
  lieu: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),

  /* ---------------------------------------------------
     RÉSEAUX SOCIAUX
     --------------------------------------------------- */

  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
      <path
        d="M8.4 9.3c.1-.5.5-.5.8-.5h.6c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4-.1.2-.1.2-.3.4-.1.2-.3.3-.4.4-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.5 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.3.1.5.2.6.3.1.2.1.9-.2 1.7-.3.8-1.6 1.5-2.2 1.6-.6.1-1.3.2-4.2-1-3.5-1.4-5.6-4.8-5.8-5.1-.2-.3-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.9z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),

  facebook: (
    <path d="M15.5 8.7h-1.8c-.6 0-1 .4-1 1v1.6h2.7l-.4 2.8h-2.3V21h-3v-6.9H7.4v-2.8h2.3V9.4c0-2.2 1.4-3.9 3.6-3.9h2.2z" />
  ),

  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2 2 0 0 1 4 0V17" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.8 7.3v.1" />
    </>
  ),

  /* ---------------------------------------------------
     FLÈCHES DE NAVIGATION (carrousel équipe)
     --------------------------------------------------- */

  "fleche-gauche": <path d="M15 18l-6-6 6-6" />,
  "fleche-droite": <path d="M9 18l6-6-6-6" />,

  /* conservée pour compat. avec un éventuel autre usage */
  fleche: <path d="M5 12h13m-5-5 5 5-5 5" />,
};

export default function Icone({ nom, taille = 22 }) {
  const trace = traces[nom];
  if (!trace) return null;
  return (
    <svg {...base} width={taille} height={taille} aria-hidden="true">
      {trace}
    </svg>
  );
}