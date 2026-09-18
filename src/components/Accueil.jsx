import { useEffect, useRef, useState } from "react";
import { accueil } from "../data/content";
import { creerConstellation } from "../lib/constellation";
import "../styles/accueil.css";


/* =========================================================
   SCÈNE 3D
   ========================================================= */

function Scene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return undefined;

    return creerConstellation(canvas, {
      etiquettes: accueil.metiers,
    });
  }, []);

  return (
    <div className="scene">

      {/* =====================================================
          FOND 3D
          ===================================================== */}

      <div className="scene__grid" />

      <div className="scene__glow scene__glow--1" />
      <div className="scene__glow scene__glow--2" />

      {/* =====================================================
          ORBITES
          ===================================================== */}

      <div className="scene__orbit scene__orbit--1">
        <span />
      </div>

      <div className="scene__orbit scene__orbit--2">
        <span />
      </div>

      <div className="scene__orbit scene__orbit--3">
        <span />
      </div>


      {/* =====================================================
          CANVAS — PARTICULES / CONNEXIONS
          ===================================================== */}

      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Constellation animée représentant les expertises Eventa MG"
      />


      {/* =====================================================
          HALO CENTRAL
          ===================================================== */}

      <div className="scene__halo" />


      {/* =====================================================
          MÉTIERS AUTOUR DU LOGO
          ===================================================== */}

      <div className="scene__metiers">

        {accueil.metiers.map((metier, index) => (
          <div
            className={`scene__metier scene__metier--${index + 1}`}
            key={`${metier}-${index}`}
          >
            <span className="scene__metier-dot" />

            <span className="scene__metier-text">
              {metier}
            </span>
          </div>
        ))}

      </div>


      {/* =====================================================
          NOYAU CENTRAL
          ===================================================== */}

      <div className="scene__noyau">

        <div className="scene__logo-ring">

          <span className="scene__logo-shine" />

          <img
            src="/images/logo.jpeg"
            alt="Eventa MG"
            className="scene__logo"
          />

        </div>

      </div>


      {/* =====================================================
          PETITES PARTICULES
          ===================================================== */}

      <span className="scene__orb scene__orb--1" />
      <span className="scene__orb scene__orb--2" />
      <span className="scene__orb scene__orb--3" />
      <span className="scene__orb scene__orb--4" />
      <span className="scene__orb scene__orb--5" />

    </div>
  );
}


/* =========================================================
   BARRE DE BRIEF
   ========================================================= */

function BarreBrief() {

  const [choix, setChoix] = useState(() =>
    Object.fromEntries(
      accueil.barre.champs.map((champ) => [
        champ.id,
        champ.options[0],
      ])
    )
  );


  function modifier(id, valeur) {
    setChoix((precedent) => ({
      ...precedent,
      [id]: valeur,
    }));
  }


  function demarrer() {

    console.log(
      "Brief Eventa MG :",
      choix
    );

    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }


  
}


/* =========================================================
   ACCUEIL
   ========================================================= */

export default function Accueil() {

  const metiersDoubles = [
    ...accueil.metiers,
    ...accueil.metiers,
  ];


  return (
    <>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="heros"
        id="accueil"
      >

        {/* Décorations */}

        <div className="heros__decor heros__decor--1" />

        <div className="heros__decor heros__decor--2" />


        <div className="conteneur">

          <div className="heros__grille">


            {/* =================================================
                TEXTE
                ================================================= */}

            <div className="heros__contenu">

              <div className="heros__signal">

                <span className="heros__signal-dot" />

                {accueil.signal}

              </div>


              <div className="heros__kicker">
                COMMUNAUTÉ · EXPERTISE · CRÉATION
              </div>


              <h1>

                <span>
                  Passions
                </span>

                <span className="heros__separator">
                  ·
                </span>

                <span className="heros__mot--violet">
                  Travail
                </span>

                <span className="heros__separator">
                  ·
                </span>

                <span>
                  Partage
                </span>

              </h1>


              <p className="heros__texte">

                Confiez à notre équipe experte en

                <strong>
                  {" "}automatisation IA
                </strong>
                ,{" "}

                <strong>
                  développement
                </strong>
                ,{" "}

                <strong>
                  photographie
                </strong>
                ,{" "}

                <strong>
                  enseignement
                </strong>

                {" "}et

                <strong>
                  {" "}événementiel
                </strong>

                {" "}vos ambitions et vos événements.

              </p>


              <p className="heros__sous-texte">

                Eventa MG rassemble des talents
                complémentaires pour transformer
                vos idées en projets concrets,
                utiles et créatifs.

              </p>


              <div className="heros__actions">

                <a
                  className="btn btn--plein"
                  href="#services"
                >

                  Découvrir nos services

                  <span className="btn__fleche">
                    →
                  </span>

                </a>


                <a
                  className="btn btn--blanc"
                  href="#equipes"
                >
                  Demander un service
                </a>

              </div>



            </div>


            {/* =================================================
                SCÈNE 3D
                ================================================= */}

            <Scene />

          </div>


          {/* =================================================
              BARRE DE BRIEF
              ================================================= */}

          <BarreBrief />

        </div>

      </section>


      {/* =====================================================
          BANDEAU DES MÉTIERS
          ===================================================== */}

      <div
        className="bandeau"
        aria-hidden="true"
      >

        <div className="bandeau__piste">

          {metiersDoubles.map(
            (metier, index) => (

              <span
                className="bandeau__item"
                key={`${metier}-${index}`}
              >

                {metier}

              </span>

            )
          )}

        </div>

      </div>

    </>
  );
}