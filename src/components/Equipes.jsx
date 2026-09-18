
import { useEffect, useState, useCallback } from "react";
import { equipes } from "../data/content";
import { inclinaison3d } from "../lib/hooks";
import Icone from "./Icones";
import "../styles/Equipes.css";

const tilt = inclinaison3d(7);

function Membre({ membre, position }) {
  return (
    <article
      className={`membre membre--${position}`}
      {...tilt}
    >
      <div className="membre__photo">
        <img
          src={membre.image}
          alt={`Portrait de ${membre.nom}`}
          loading="lazy"
        />

        <span className="membre__numero">
          {String(membre.index).padStart(2, "0")}
        </span>
      </div>

      <div className="membre__contenu">
        <p className="membre__role">
          {membre.role}
        </p>

        <h3>{membre.nom}</h3>

        <p className="membre__mot">
          {membre.mot}
        </p>

        <div className="membre__reseaux">

          {membre.whatsapp && (
            <a
              href={membre.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label={`WhatsApp de ${membre.nom}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Icone
                nom="whatsapp"
                taille={18}
              />
            </a>
          )}

          {membre.linkedin && (
            <a
              href={membre.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`LinkedIn de ${membre.nom}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Icone
                nom="linkedin"
                taille={18}
              />
            </a>
          )}

          {membre.facebook && (
            <a
              href={membre.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={`Facebook de ${membre.nom}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Icone
                nom="facebook"
                taille={18}
              />
            </a>
          )}

        </div>
      </div>
    </article>
  );
}


export default function Equipes() {

  /* =====================================================
     ÉTAT DU CARROUSEL
     ===================================================== */

  const [index, setIndex] = useState(0);

  const [direction, setDirection] = useState("next");

  /*
   * true = l'utilisateur vient d'interagir
   * false = le carrousel peut repartir
   */
  const [pause, setPause] = useState(false);


  const membres = equipes.membres;


  /* =====================================================
     NOMBRE DE CARTES VISIBLES
     ===================================================== */

  const getVisibleCount = useCallback(() => {

    if (typeof window === "undefined") {
      return 3;
    }

    if (window.innerWidth <= 640) {
      return 1;
    }

    if (window.innerWidth <= 950) {
      return 2;
    }

    return 3;

  }, []);


  const [visibleCount, setVisibleCount] =
    useState(getVisibleCount);


  /* =====================================================
     RESPONSIVE
     ===================================================== */

  useEffect(() => {

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, [getVisibleCount]);


  /* =====================================================
     ALLER AU GROUPE SUIVANT
     ===================================================== */

  const suivant = useCallback(() => {

    setDirection("next");

    setIndex((ancienIndex) => {

      return (
        (ancienIndex + visibleCount) %
        membres.length
      );

    });

  }, [visibleCount, membres.length]);


  /* =====================================================
     ALLER AU GROUPE PRÉCÉDENT
     ===================================================== */

  const precedent = useCallback(() => {

    setDirection("prev");

    setIndex((ancienIndex) => {

      return (
        (
          ancienIndex -
          visibleCount +
          membres.length
        ) %
        membres.length
      );

    });

  }, [visibleCount, membres.length]);


  /* =====================================================
     DÉFILEMENT AUTOMATIQUE

     IMPORTANT :
     Le changement se fait après 5 secondes.

     Après chaque changement :
     le compteur repart automatiquement à zéro.
     ===================================================== */

  useEffect(() => {

    /*
     * S'il n'y a pas assez de membres,
     * inutile de faire tourner le carrousel.
     */
    if (
      pause ||
      membres.length <= visibleCount
    ) {
      return;
    }


    const timer = setTimeout(() => {

      suivant();

    }, 5000);


    /*
     * Très important :
     * lorsque index change, le timer est supprimé
     * puis recréé.
     *
     * Résultat :
     * chaque groupe reste affiché 5 secondes.
     */
    return () => {
      clearTimeout(timer);
    };

  }, [
    index,
    pause,
    visibleCount,
    membres.length,
    suivant,
  ]);


  /* =====================================================
     PAUSE LORSQUE L'UTILISATEUR SURVOLE LE CARROUSEL
     ===================================================== */

  const handleMouseEnter = () => {
    setPause(true);
  };


  const handleMouseLeave = () => {
    setPause(false);
  };


  /* =====================================================
     NAVIGATION MANUELLE

     Après un clic :
     - changement immédiat
     - pause supprimée
     - nouveau délai de 5 secondes
     ===================================================== */

  const handleSuivant = () => {

    setPause(false);

    suivant();

  };


  const handlePrecedent = () => {

    setPause(false);

    precedent();

  };


  /* =====================================================
     CONSTRUIRE LES MEMBRES VISIBLES
     ===================================================== */

  const membresVisibles = [];

  for (
    let i = 0;
    i < visibleCount;
    i++
  ) {

    const membre =
      membres[
        (index + i) %
        membres.length
      ];


    membresVisibles.push({

      ...membre,

      index:
        ((index + i) %
          membres.length) + 1,

    });

  }


  /* =====================================================
     RENDU
     ===================================================== */

  return (

    <section
      className="section section--teintee equipes-section"
      id="equipes"
    >

      <div className="conteneur">


        {/* =================================================
            EN-TÊTE
            ================================================= */}

        <div className="entete equipes__entete">

          <span className="equipes__sur-titre">
            NOTRE COMMUNAUTÉ
          </span>

          <h2>
            {equipes.titre}
          </h2>

          <p>
            {equipes.intro}
          </p>

        </div>


        {/* =================================================
            CARROUSEL
            ================================================= */}

        <div
          className={`
            equipes__showcase
            equipes__showcase--${direction}
            ${pause ? "equipes__showcase--pause" : ""}
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >


          {/* ===============================================
              FLÈCHE GAUCHE
              =============================================== */}

          <button
            type="button"
            className="
              equipes__navigation
              equipes__navigation--prev
            "
            onClick={handlePrecedent}
            aria-label="Membres précédents"
          >

            <Icone
              nom="fleche-gauche"
              taille={18}
            />

          </button>


          {/* ===============================================
              CARTES
              =============================================== */}

          <div className="equipe">

            {membresVisibles.map(
              (membre, i) => (

                <Membre
                  key={`${membre.nom}-${index}-${i}`}
                  membre={membre}
                  position={i}
                />

              )
            )}

          </div>


          {/* ===============================================
              FLÈCHE DROITE
              =============================================== */}

          <button
            type="button"
            className="
              equipes__navigation
              equipes__navigation--next
            "
            onClick={handleSuivant}
            aria-label="Membres suivants"
          >

            <Icone
              nom="fleche-droite"
              taille={18}
            />

          </button>

        </div>


        {/* =================================================
            CONTRÔLES
            ================================================= */}

        <div className="equipes__controle">


          {/* Flèche mobile gauche */}

          <button
            type="button"
            className="equipes__fleche-mobile"
            onClick={handlePrecedent}
            aria-label="Membres précédents"
          >

            <Icone
              nom="fleche-gauche"
              taille={16}
            />

          </button>


          {/* Compteur */}

          <div
            className="equipes__compteur"
            aria-live="polite"
          >

            <strong>
              {String(index + 1).padStart(2, "0")}
            </strong>

            <span>/</span>

            <span>
              {String(
                membres.length
              ).padStart(2, "0")}
            </span>

          </div>


          {/* Barre de progression */}

          <div
            className="equipes__progression"
            aria-hidden="true"
          >

            <span
              style={{
                width: `${
                  ((index + 1) /
                    membres.length) *
                  100
                }%`,
              }}
            />

          </div>


          {/* Flèche mobile droite */}

          <button
            type="button"
            className="equipes__fleche-mobile"
            onClick={handleSuivant}
            aria-label="Membres suivants"
          >

            <Icone
              nom="fleche-droite"
              taille={16}
            />

          </button>

        </div>


        {/* =================================================
            APPEL À CANDIDATURE
            ================================================= */}

        <div className="equipe__appel">

          <div>

            <span className="equipe__appel-label">
              COMMUNAUTÉ OUVERTE
            </span>

            <p>

              <strong>
                {equipes.appel.titre}
              </strong>

              {equipes.appel.texte}

            </p>

          </div>


          <a
            className="btn btn--clair"
            href="#contact"
          >
            {equipes.appel.action}
          </a>

        </div>

      </div>

    </section>
  );
}

