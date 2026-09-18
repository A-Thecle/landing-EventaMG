import { apropos, poles } from "../data/content";
import { inclinaison3d, useApparition } from "../lib/hooks";
import Icone from "./Icones";
import "../styles/Apropos.css";

const tilt = inclinaison3d(9);

export default function APropos() {
  const [refPiliers, piliersVisibles] = useApparition();
  const [refPoles, polesVisibles] = useApparition();

  return (
    <section className="section section--lavande" id="apropos">
      <div className="conteneur">
        <div className="apropos__grille">
          <div className="apropos__texte">
            <div className="entete entete--gauche">
              <h2>{apropos.titre}</h2>
              <p>{apropos.intro}</p>
            </div>

            {apropos.paragraphes.map((texte) => (
              <p key={texte.slice(0, 24)}>{texte}</p>
            ))}

            <blockquote className="apropos__citation">
              {apropos.citation}
            </blockquote>
          </div>

          <div
            className={`piliers apparait ${piliersVisibles ? "est-visible" : ""}`}
            ref={refPiliers}
          >
            {apropos.piliers.map((pilier) => (
              <article className="pilier" key={pilier.titre}>
                <span className="pilier__marque">
                  <Icone nom={pilier.icone} />
                </span>
                <div>
                  <h3>{pilier.titre}</h3>
                  <p>{pilier.texte}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="entete entete--second">
          <h2>{poles.titre}</h2>
          <p>{poles.intro}</p>
        </div>

        <div
          className={`poles-bloc apparait ${polesVisibles ? "est-visible" : ""}`}
          ref={refPoles}
        >
          <div className="poles">
            {poles.liste.map((pole, i) => (
              <article
                className="pole"
                key={pole.titre}
                style={{ "--i": i }}
                tabIndex={0}
                {...tilt}
              >
                <span className="pole__marque" aria-hidden="true">
                  {pole.titre.charAt(0)}
                </span>
                <h3>{pole.titre}</h3>
                <p>{pole.texte}</p>
              </article>
            ))}
          </div>

          <p className="poles__fil">
            <span className="poles__point" aria-hidden="true" />
            Un seul interlocuteur pour les trois pôles.
          </p>
        </div>
      </div>
    </section>
  );
}