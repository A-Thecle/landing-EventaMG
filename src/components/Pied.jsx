import { marque, pied } from "../data/content";
import Icone from "./Icones";

import "../styles/navigation.css";
import "../styles/pieds.css";

export default function Pied() {
  const annee = new Date().getFullYear();

  return (
    <footer className="pied">
      <div className="conteneur">

        {/* =========================
            GRANDE ZONE CTA
        ========================= */}
        <div className="pied__cta">
          <div className="pied__cta-texte">
            <span className="pied__sur-titre">
              Un projet en tête ?
            </span>

            <h2>
              Construisons quelque chose
              <span> d'impact.</span>
            </h2>

            <p>
              Une idée, un besoin ou simplement envie d'échanger ?
              Notre équipe est prête à vous accompagner.
            </p>
          </div>

          <a href="#contact" className="pied__cta-bouton">
            Démarrer un projet
            <Icone nom="fleche" taille={18} />
          </a>
        </div>


        {/* =========================
            CONTENU PRINCIPAL
        ========================= */}
        <div className="pied__haut">

          {/* MARQUE */}
          <div className="pied__marque">

            <a href="#accueil" className="marque pied__logo">
              <img
                src={marque.logo}
                alt="Logo Eventa MG"
                className="marque__logo"
              />

              <span>{marque.nom}</span>
            </a>

            <p>
              {marque.baseline}
            </p>

            <div className="pied__localisation">
              <span className="pied__petite-icone">
                <Icone nom="lieu" taille={16} />
              </span>

              <span>
                Antananarivo, Madagascar
              </span>
            </div>

          </div>


          {/* COLONNES */}
          {pied.colonnes.map((colonne) => (
            <div
              className="pied__colonne"
              key={colonne.titre}
            >
              <h4>{colonne.titre}</h4>

              <ul>
                {colonne.liens.map((lien) => (
                  <li key={lien.libelle}>

                    <a
                      href={lien.href}
                      className="pied__lien"
                      target={
                        lien.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        lien.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >

                      {lien.icone && (
                        <span className="pied__social-icone">
                          <Icone
                            nom={lien.icone}
                            taille={17}
                          />
                        </span>
                      )}

                      <span>{lien.libelle}</span>

                      {lien.href.startsWith("http") && (
                        <span className="pied__externe">
                          ↗
                        </span>
                      )}

                    </a>

                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>


        {/* =========================
            BARRE INFERIEURE
        ========================= */}
        <div className="pied__bas">

          <span>
            © {annee} {marque.nom}. {pied.mentions}
          </span>

          <div className="pied__bas-liens">
            <a href="#accueil">
              Retour en haut
              <span>↑</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}