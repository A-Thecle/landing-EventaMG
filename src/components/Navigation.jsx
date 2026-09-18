import { useState } from "react";
import { marque, navigation } from "../data/content";
import { useDefilement, useSectionActive } from "../lib/hooks";

const identifiants = navigation.map((item) => item.id);

export default function Navigation() {
  const [ouvert, setOuvert] = useState(false);
  const figee = useDefilement(60);
  const active = useSectionActive(identifiants);

  return (
    <header className={`nav ${figee ? "nav--figee" : ""}`}>
      <div className="conteneur">
        <div className="nav__pilule">
          <a href="#accueil" className="marque">
            <span className="marque__sceau">{marque.initiales}</span>
            {marque.nom}
          </a>

          <nav aria-label="Navigation principale">
            <ul className="nav__liens">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    className="nav__lien"
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                  >
                    {item.libelle}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn btn--plein nav__cta" href="#contact">
            Démarrer un projet
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={ouvert}
            onClick={() => setOuvert((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {ouvert && (
          <div className="tiroir">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOuvert(false)}>
                {item.libelle}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
