import { useEffect, useRef, useState } from "react";

/**
 * Révèle un élément une seule fois, quand il entre dans le champ de vision.
 * Retourne la ref à poser sur l'élément et l'état de visibilité.
 */
export function useApparition(decalage = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (entree.isIntersecting) {
            setTimeout(() => setVisible(true), decalage);
            observateur.unobserve(entree.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, [decalage]);

  return [ref, visible];
}

/**
 * Renvoie l'identifiant de la section actuellement à l'écran,
 * pour surligner le bon lien dans la navigation.
 */
export function useSectionActive(identifiants) {
  const [active, setActive] = useState(identifiants[0]);

  useEffect(() => {
    const sections = identifiants
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observateur = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((entree) => {
          if (entree.isIntersecting) setActive(entree.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observateur.observe(section));
    return () => observateur.disconnect();
  }, [identifiants]);

  return active;
}

/** Vrai dès que la page a défilé au-delà du seuil. */
export function useDefilement(seuil = 40) {
  const [depasse, setDepasse] = useState(false);

  useEffect(() => {
    const surDefilement = () => setDepasse(window.scrollY > seuil);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, [seuil]);

  return depasse;
}

/**
 * Inclinaison 3D d'une carte sous le curseur.
 * Mouvement déclenché par l'utilisateur, désactivé si le système
 * demande de réduire les animations.
 */
export function inclinaison3d(intensite = 10) {
  const reduit = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    onPointerMove(evenement) {
      const carte = evenement.currentTarget;
      if (reduit()) return;
      const boite = carte.getBoundingClientRect();
      const x = (evenement.clientX - boite.left) / boite.width - 0.5;
      const y = (evenement.clientY - boite.top) / boite.height - 0.5;
      carte.style.transform = `perspective(1000px) rotateX(${
        -y * intensite
      }deg) rotateY(${x * intensite * 1.2}deg) translateY(-6px)`;
    },
    onPointerLeave(evenement) {
      evenement.currentTarget.style.transform = "";
    },
  };
}
