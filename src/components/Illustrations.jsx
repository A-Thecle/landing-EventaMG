/**
 * Illustrations en SVG, style « pâte 3D » : dégradés doux, reflet en haut,
 * ombre portée colorée. Reproduit le langage visuel du modèle sans image
 * bitmap, donc sans poids ni dépendance.
 */

function Degrades({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-corps`} x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#a483f7" />
        <stop offset="100%" stopColor="#3e0f8d" />
      </linearGradient>
      <linearGradient id={`${id}-clair`} x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#d9cef6" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id={`${id}-fond`} x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#ece6fb" />
        <stop offset="100%" stopColor="#c9bbf2" />
      </linearGradient>
      <filter id={`${id}-ombre`} x="-40%" y="-20%" width="180%" height="180%">
        <feDropShadow
          dx="0"
          dy="7"
          stdDeviation="7"
          floodColor="#3e0f8d"
          floodOpacity="0.28"
        />
      </filter>
    </defs>
  );
}

/* --- Pôle 1 : construire (écran + accolades) --- */
function Construire() {
  const id = "p1";
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <Degrades id={id} />
      <g filter={`url(#${id}-ombre)`}>
        <rect
          x="16"
          y="26"
          width="88"
          height="62"
          rx="14"
          fill={`url(#${id}-corps)`}
        />
        <rect
          x="24"
          y="34"
          width="72"
          height="38"
          rx="9"
          fill={`url(#${id}-clair)`}
        />
        <path
          d="M44 44 36 53l8 9M76 44l8 9-8 9M66 42l-12 22"
          stroke="#3e0f8d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />
        <rect x="46" y="88" width="28" height="9" rx="4.5" fill="#3e0f8d" opacity="0.5" />
      </g>
    </svg>
  );
}

/* --- Pôle 2 : automatiser (noyau + orbite) --- */
function Automatiser() {
  const id = "p2";
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <Degrades id={id} />
      <ellipse
        cx="60"
        cy="62"
        rx="46"
        ry="19"
        fill="none"
        stroke="#7b4be0"
        strokeWidth="3"
        opacity="0.35"
        transform="rotate(-22 60 62)"
      />
      <g filter={`url(#${id}-ombre)`}>
        <circle cx="60" cy="58" r="27" fill={`url(#${id}-corps)`} />
        <ellipse cx="51" cy="47" rx="10" ry="7" fill="#ffffff" opacity="0.45" />
        <circle cx="52" cy="56" r="4.4" fill="#ffffff" opacity="0.9" />
        <circle cx="68" cy="56" r="4.4" fill="#ffffff" opacity="0.9" />
        <path
          d="M51 69q9 7 18 0"
          stroke="#ffffff"
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      </g>
      <circle cx="102" cy="48" r="6.5" fill="#8b5cf0" />
      <circle cx="19" cy="76" r="5" fill="#a483f7" />
    </svg>
  );
}

/* --- Pôle 3 : raconter (objectif photo + note de musique) --- */
function Raconter() {
  const id = "p3";
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <Degrades id={id} />
      <g filter={`url(#${id}-ombre)`}>
        <rect
          x="14"
          y="34"
          width="80"
          height="56"
          rx="16"
          fill={`url(#${id}-corps)`}
        />
        <rect x="38" y="26" width="30" height="12" rx="6" fill="#7b4be0" />
        <circle cx="54" cy="62" r="20" fill={`url(#${id}-clair)`} />
        <circle cx="54" cy="62" r="11" fill="#3e0f8d" opacity="0.75" />
        <circle cx="48" cy="56" r="4" fill="#ffffff" opacity="0.8" />
      </g>
      <g filter={`url(#${id}-ombre)`}>
        <path
          d="M88 42v28"
          stroke="#8b5cf0"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="83" cy="72" r="8" fill="#8b5cf0" />
        <path
          d="M88 42q12 2 14 8"
          stroke="#8b5cf0"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

const poles = {
  construire: Construire,
  automatiser: Automatiser,
  raconter: Raconter,
};

export function IllustrationPole({ nom }) {
  const Composant = poles[nom];
  return Composant ? <Composant /> : null;
}

/* =========================================================
   Visuels des cartes services : compositions abstraites
   ========================================================= */

function Cadre({ children, id }) {
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3effd" />
          <stop offset="100%" stopColor="#cfc2f3" />
        </linearGradient>
        <linearGradient id={`${id}-v`} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#a483f7" />
          <stop offset="100%" stopColor="#3e0f8d" />
        </linearGradient>
        <filter id={`${id}-o`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#3e0f8d" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect width="320" height="200" fill={`url(#${id}-f)`} />
      {children}
    </svg>
  );
}

const visuels = {
  web: (
    <Cadre id="v1">
      <g filter="url(#v1-o)">
        <rect x="58" y="42" width="204" height="124" rx="14" fill="#ffffff" />
        <rect x="58" y="42" width="204" height="24" rx="14" fill="url(#v1-v)" />
        <circle cx="72" cy="54" r="3.4" fill="#ffffff" opacity="0.8" />
        <circle cx="84" cy="54" r="3.4" fill="#ffffff" opacity="0.6" />
        <rect x="72" y="80" width="76" height="9" rx="4.5" fill="#d9cef6" />
        <rect x="72" y="97" width="112" height="9" rx="4.5" fill="#ece6fb" />
        <rect x="72" y="114" width="92" height="9" rx="4.5" fill="#ece6fb" />
        <rect x="72" y="134" width="54" height="18" rx="9" fill="url(#v1-v)" />
        <rect x="196" y="80" width="52" height="72" rx="10" fill="#f3effd" />
      </g>
    </Cadre>
  ),
  ia: (
    <Cadre id="v2">
      <g filter="url(#v2-o)">
        <rect x="96" y="40" width="128" height="120" rx="26" fill="url(#v2-v)" />
        <rect x="118" y="64" width="84" height="54" rx="14" fill="#ffffff" opacity="0.92" />
        <circle cx="142" cy="90" r="7" fill="#3e0f8d" />
        <circle cx="178" cy="90" r="7" fill="#3e0f8d" />
        <rect x="146" y="130" width="28" height="8" rx="4" fill="#ffffff" opacity="0.6" />
        <path d="M160 40V24" stroke="#8b5cf0" strokeWidth="6" strokeLinecap="round" />
        <circle cx="160" cy="18" r="8" fill="#8b5cf0" />
      </g>
      <circle cx="54" cy="70" r="12" fill="#b8a2f8" opacity="0.7" />
      <circle cx="268" cy="132" r="16" fill="#b8a2f8" opacity="0.55" />
    </Cadre>
  ),
  image: (
    <Cadre id="v3">
      <g filter="url(#v3-o)">
        <rect x="70" y="56" width="180" height="112" rx="18" fill="#ffffff" />
        <rect x="84" y="70" width="152" height="70" rx="12" fill="url(#v3-v)" />
        <circle cx="160" cy="105" r="24" fill="#ffffff" opacity="0.28" />
        <circle cx="160" cy="105" r="13" fill="#ffffff" opacity="0.75" />
        <rect x="132" y="42" width="56" height="18" rx="9" fill="#8b5cf0" />
        <rect x="84" y="150" width="60" height="7" rx="3.5" fill="#ece6fb" />
      </g>
    </Cadre>
  ),
  son: (
    <Cadre id="v4">
      <g filter="url(#v4-o)">
        <rect x="60" y="112" width="200" height="16" rx="8" fill="#ffffff" />
        {[
          [78, 48],
          [100, 76],
          [122, 30],
          [144, 66],
          [166, 88],
          [188, 42],
          [210, 70],
          [232, 34],
        ].map(([x, h]) => (
          <rect
            key={x}
            x={x}
            y={112 - h}
            width="14"
            height={h}
            rx="7"
            fill="url(#v4-v)"
          />
        ))}
        <circle cx="160" cy="152" r="18" fill="#ffffff" />
        <circle cx="160" cy="152" r="7" fill="url(#v4-v)" />
      </g>
    </Cadre>
  ),
  formation: (
    <Cadre id="v5">
      <g filter="url(#v5-o)">
        <rect x="66" y="48" width="188" height="108" rx="16" fill="#ffffff" />
        <rect x="66" y="48" width="188" height="108" rx="16" fill="none" stroke="#ece6fb" strokeWidth="4" />
        <path d="M92 118l26-34 22 24 20-30 26 40" stroke="url(#v5-v)" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="92" y="66" width="62" height="9" rx="4.5" fill="#d9cef6" />
        <circle cx="222" cy="72" r="14" fill="url(#v5-v)" />
      </g>
    </Cadre>
  ),
  commerce: (
    <Cadre id="v6">
      <g filter="url(#v6-o)">
        <rect x="72" y="86" width="42" height="74" rx="12" fill="#ffffff" />
        <rect x="128" y="56" width="42" height="104" rx="12" fill="url(#v6-v)" />
        <rect x="184" y="98" width="42" height="62" rx="12" fill="#ffffff" />
        <path d="M84 48l30 18 32-26 38 22" stroke="#8b5cf0" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="184" cy="62" r="10" fill="#8b5cf0" />
      </g>
    </Cadre>
  ),
};

export function VisuelService({ nom }) {
  return visuels[nom] || visuels.web;
}
