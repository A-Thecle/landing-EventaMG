import { marque, pied } from "../data/content";

export default function Pied() {
  const annee = new Date().getFullYear();

  return (
    <footer className="pied">
      <div className="conteneur">
        <div className="pied__haut">
          <div>
            <a href="#accueil" className="marque">
              <span className="marque__sceau">{marque.initiales}</span>
              {marque.nom}
            </a>
            <p>{marque.baseline}</p>
          </div>

          {pied.colonnes.map((colonne) => (
            <div key={colonne.titre}>
              <h4>{colonne.titre}</h4>
              <ul>
                {colonne.liens.map((lien) => (
                  <li key={lien.libelle}>
                    <a href={lien.href}>{lien.libelle}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pied__bas">
          <span>
            © {annee} {marque.nom}. {pied.mentions}
          </span>
          <span>Antananarivo, Madagascar</span>
        </div>
      </div>
    </footer>
  );
}
