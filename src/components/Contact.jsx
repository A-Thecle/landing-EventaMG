import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../data/content";
import Icone from "./Icones";

const champsVides = {
  nom: "",
  email: "",
  sujet: contact.sujets[0],
  message: "",
};

export default function Contact() {
  const [valeurs, setValeurs] = useState(champsVides);
  const [envoye, setEnvoye] = useState(false);
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  function modifier(evenement) {
    const { name, value } = evenement.target;

    setValeurs((precedent) => ({
      ...precedent,
      [name]: value,
    }));

    setEnvoye(false);
  }

  async function envoyer(evenement) {
    evenement.preventDefault();

    setEnvoiEnCours(true);
    setEnvoye(false);

    try {
      await emailjs.send(
        "service_ikjb7hh",
        "template_l26fkv7",
        {
          nom: valeurs.nom,
          email: valeurs.email,
          sujet: valeurs.sujet,
          message: valeurs.message,
        },
        {
          publicKey: "NKcRkwlziSrviJyTb",
        }
      );

      console.log("Email envoyé avec succès");

      setEnvoye(true);
      setValeurs(champsVides);

    } catch (erreur) {
      console.error("Erreur EmailJS :", erreur);

      alert(
        "Impossible d'envoyer le message pour le moment. Veuillez réessayer."
      );

    } finally {
      setEnvoiEnCours(false);
    }
  }

  return (
    <section className="section section--lavande" id="contact">
      <div className="conteneur">
        <div className="contact__grille">

          <div>
            <div className="entete entete--gauche">
              <h2>{contact.titre}</h2>
              <p>{contact.intro}</p>
            </div>

            <div className="coordonnees">
              {contact.coordonnees.map((item) => (
                <div className="coordonnee" key={item.etiquette}>
                  <span className="coordonnee__icone">
                    <Icone nom={item.icone} taille={20} />
                  </span>

                  <span>
                    <small>{item.etiquette}</small>
                    <b>{item.valeur}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form className="formulaire" onSubmit={envoyer}>

            <div className="champs">

              <div className="champ">
                <label htmlFor="nom">Votre nom</label>

                <input
                  id="nom"
                  name="nom"
                  value={valeurs.nom}
                  onChange={modifier}
                  placeholder="Rakoto Andry"
                  required
                />
              </div>

              <div className="champ">
                <label htmlFor="email">Votre e-mail</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={valeurs.email}
                  onChange={modifier}
                  placeholder="vous@exemple.mg"
                  required
                />
              </div>

              <div className="champ champ--plein">
                <label htmlFor="sujet">Votre besoin</label>

                <select
                  id="sujet"
                  name="sujet"
                  value={valeurs.sujet}
                  onChange={modifier}
                >
                  {contact.sujets.map((sujet) => (
                    <option key={sujet} value={sujet}>
                      {sujet}
                    </option>
                  ))}
                </select>
              </div>

              <div className="champ champ--plein">
                <label htmlFor="message">Votre message</label>

                <textarea
                  id="message"
                  name="message"
                  value={valeurs.message}
                  onChange={modifier}
                  placeholder="Décrivez votre projet, vos délais et votre budget indicatif."
                  required
                />
              </div>

            </div>

            <button
              className="btn btn--plein"
              type="submit"
              disabled={envoiEnCours}
            >
              {envoiEnCours
                ? "Envoi en cours..."
                : "Envoyer le message"}

              {!envoiEnCours && (
                <Icone nom="fleche" taille={18} />
              )}
            </button>

            {envoye ? (
              <p className="formulaire__ok" role="status">
                {contact.confirmation}
              </p>
            ) : (
              <p className="formulaire__note">
                Réponse sous 48 heures ouvrées, par le membre concerné.
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}