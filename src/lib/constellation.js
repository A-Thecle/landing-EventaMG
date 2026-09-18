/**
 * Constellation 3D des pôles d'expertise.
 *
 * Chaque nœud représente un métier de la communauté. Les nœuds tournent sur
 * une sphère, se relient entre eux quand ils sont proches, et le tout suit
 * légèrement la souris. Projection perspective écrite à la main : aucune
 * librairie 3D n'est nécessaire.
 *
 * Utilisation :
 *   const stop = creerConstellation(canvas, { etiquettes: [...] });
 *   // plus tard : stop();
 */

const COULEURS = {
  noeud: "#3e0f8d",
  noeudClair: "#7b4be0",
  accent: "#8b5cf0",
  lien: "62, 15, 141",
  texte: "23, 16, 41",
  poussiere: "123, 75, 224",
};

export function creerConstellation(canvas, options = {}) {
  const etiquettes = options.etiquettes || [];
  const contexte = canvas.getContext("2d");
  if (!contexte) return () => {};

  const motionReduite = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let largeur = 0;
  let hauteur = 0;
  let rayon = 0;
  let animation = 0;
  let angleX = -0.32;
  let angleY = 0;
  let cibleX = -0.32;
  let cibleY = 0;

  /* --- Répartition des nœuds sur la sphère (spirale de Fibonacci) --- */
  const total = Math.max(etiquettes.length, 7);
  const nombreOr = Math.PI * (3 - Math.sqrt(5));
  const noeuds = [];

  for (let i = 0; i < total; i += 1) {
    const y = 1 - (i / (total - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = nombreOr * i;
    noeuds.push({
      x: Math.cos(theta) * r,
      y,
      z: Math.sin(theta) * r,
      etiquette: etiquettes[i] || "",
      principal: i % 3 === 0,
      pulsation: Math.random() * Math.PI * 2,
    });
  }

  /* --- Poussière d'étoiles en arrière-plan --- */
  const poussiere = Array.from({ length: 90 }, () => {
    const u = Math.random() * 2 - 1;
    const phi = Math.random() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    return {
      x: Math.cos(phi) * r,
      y: u,
      z: Math.sin(phi) * r,
      taille: Math.random() * 1.3 + 0.35,
    };
  });

  function redimensionner() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const boite = canvas.getBoundingClientRect();
    largeur = boite.width;
    hauteur = boite.height;
    canvas.width = Math.round(largeur * ratio);
    canvas.height = Math.round(hauteur * ratio);
    contexte.setTransform(ratio, 0, 0, ratio, 0, 0);
    rayon = Math.min(largeur, hauteur) * 0.37;
  }

  function projeter(point) {
    // rotation Y puis X
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const x1 = point.x * cosY - point.z * sinY;
    const z1 = point.x * sinY + point.z * cosY;
    const y2 = point.y * cosX - z1 * sinX;
    const z2 = point.y * sinX + z1 * cosX;

    const distance = 3.1;
    const echelle = distance / (distance - z2);

    return {
      x: largeur / 2 + x1 * rayon * echelle,
      y: hauteur / 2 + y2 * rayon * echelle,
      profondeur: (z2 + 1) / 2, // 0 = arrière, 1 = avant
      echelle,
    };
  }

  function dessiner(temps) {
    contexte.clearRect(0, 0, largeur, hauteur);

    if (!motionReduite) {
      angleY += 0.0022;
    }
    angleX += (cibleX - angleX) * 0.05;
    angleY += (cibleY - angleY) * 0.02;

    /* Poussière */
    poussiere.forEach((grain) => {
      const p = projeter(grain);
      contexte.globalAlpha = 0.08 + p.profondeur * 0.2;
      contexte.fillStyle = `rgb(${COULEURS.poussiere})`;
      contexte.beginPath();
      contexte.arc(p.x, p.y, grain.taille * p.echelle, 0, Math.PI * 2);
      contexte.fill();
    });
    contexte.globalAlpha = 1;

    const projetes = noeuds.map(projeter);

    /* Liens entre nœuds proches */
    for (let i = 0; i < projetes.length; i += 1) {
      for (let j = i + 1; j < projetes.length; j += 1) {
        const a = projetes[i];
        const b = projetes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        const seuil = rayon * 1.25;
        if (distance > seuil) continue;

        const force = 1 - distance / seuil;
        const profondeur = (a.profondeur + b.profondeur) / 2;
        contexte.strokeStyle = `rgba(${COULEURS.lien}, ${
          force * 0.4 * (0.3 + profondeur)
        })`;
        contexte.lineWidth = 1;
        contexte.beginPath();
        contexte.moveTo(a.x, a.y);
        contexte.lineTo(b.x, b.y);
        contexte.stroke();
      }
    }

    /* Nœuds, du plus lointain au plus proche */
    const ordre = projetes
      .map((p, index) => ({ p, index }))
      .sort((a, b) => a.p.profondeur - b.p.profondeur);

    ordre.forEach(({ p, index }) => {
      const noeud = noeuds[index];
      const battement = motionReduite
        ? 0
        : Math.sin(temps / 900 + noeud.pulsation) * 0.9;
      const taille = (noeud.principal ? 6 : 4) * p.echelle + battement;
      const opacite = 0.25 + p.profondeur * 0.75;

      // halo
      contexte.globalAlpha = opacite * 0.18;
      contexte.fillStyle = noeud.principal
        ? COULEURS.accent
        : COULEURS.noeudClair;
      contexte.beginPath();
      contexte.arc(p.x, p.y, taille * 3.1, 0, Math.PI * 2);
      contexte.fill();

      // cœur
      contexte.globalAlpha = opacite;
      contexte.fillStyle = noeud.principal ? COULEURS.accent : COULEURS.noeud;
      contexte.beginPath();
      contexte.arc(p.x, p.y, taille, 0, Math.PI * 2);
      contexte.fill();

      contexte.strokeStyle = `rgba(255,255,255,${opacite * 0.85})`;
      contexte.lineWidth = 1;
      contexte.stroke();

      // étiquette du métier, seulement à l'avant
      if (noeud.etiquette && p.profondeur > 0.55) {
        contexte.globalAlpha = (p.profondeur - 0.55) / 0.45;
        contexte.fillStyle = `rgba(${COULEURS.texte}, 0.82)`;
        contexte.font =
          '600 12px Manrope, system-ui, -apple-system, sans-serif';
        contexte.textAlign = "center";
        contexte.fillText(noeud.etiquette, p.x, p.y - taille - 11);
      }
    });

    contexte.globalAlpha = 1;
    animation = requestAnimationFrame(dessiner);
  }

  function surSouris(evenement) {
    const boite = canvas.getBoundingClientRect();
    const x = (evenement.clientX - boite.left) / boite.width - 0.5;
    const y = (evenement.clientY - boite.top) / boite.height - 0.5;
    cibleX = -0.32 + y * 0.5;
    cibleY = angleY + x * 0.25;
  }

  redimensionner();
  animation = requestAnimationFrame(dessiner);
  window.addEventListener("resize", redimensionner);
  canvas.addEventListener("pointermove", surSouris);

  return function arreter() {
    cancelAnimationFrame(animation);
    window.removeEventListener("resize", redimensionner);
    canvas.removeEventListener("pointermove", surSouris);
  };
}
