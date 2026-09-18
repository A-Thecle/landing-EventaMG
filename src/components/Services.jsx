import { services } from "../data/content";
import { inclinaison3d, useApparition } from "../lib/hooks";
import "../styles/services.css";
const tilt = inclinaison3d(5);

export default function Services() {
  const [ref, visible] = useApparition();

  return (
    <section className="section services-section" id="services">
      <div className="conteneur">

        {/* EN-TÊTE */}
        <div className="entete services__entete">
          <span className="services__eyebrow">
            NOS EXPERTISES
          </span>

          <h2>{services.titre}</h2>

          <p>{services.intro}</p>
        </div>

        {/* GRILLE */}
        <div
          ref={ref}
          className={`services-grid apparait ${
            visible ? "est-visible" : ""
          }`}
        >
          {services.liste.map((service, index) => (
            <article
              className="service-card"
              key={service.titre}
              {...tilt}
            >
              {/* IMAGE */}
              <div className="service-card__image">
                <img
                  src={service.image}
                  alt={service.titre}
                  loading="lazy"
                />

                <div className="service-card__overlay" />

                <span className="service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="service-card__plus">
                  +
                </span>
              </div>

              {/* CONTENU */}
              <div className="service-card__body">
                <h3>{service.titre}</h3>

                <p>{service.texte}</p>

                <ul className="service-card__tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="service-card__bottom">
                 
                   
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}