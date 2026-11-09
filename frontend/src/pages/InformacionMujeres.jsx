
import {
  ArrowDown,
} from '@phosphor-icons/react';

import styles from '../components/style/InformacionMujeres.module.css';

import DrianaDurango from '../assets/Driana-Durango.webp';
import LilianaBedoya from '../assets/liliana-bedoya.webp';
import MariaCastano from '../assets/maria-castaño.webp';
import KellyGomez from '../assets/kelly-gomez.webp';

const historias = [
  {
    numero: '01',
    nombre: 'Driana Durango',
    cargo: 'Subgerente Comercial',
    imagen: DrianaDurango,
    alt: 'Driana Durango',
    testimonio:
      'En ACTIVA descubrí que la logística no es solo mover equipos, sino coordinar sueños. Hoy lidero montajes de gran formato y sé que cada escenario que prende sus luces también enciende oportunidades para nosotras.',
  },
  {
    numero: '02',
    nombre: 'Liliana Bedoya',
    cargo: 'Gestora de eventos',
    imagen: LilianaBedoya,
    alt: 'Liliana Bedoya',
    testimonio:
      'Cuando llegué a ACTIVA al área comercial, sentí que mi voz contaba. Aquí me han brindado capacitaciones y espacios para crecer, no solo como profesional, sino también como mujer. Hoy lidero procesos estratégicos y cada proyecto que cerramos demuestra que la equidad es real cuando se abren las mismas oportunidades para todas y todos.',
    reverse: true,
  },
  {
    numero: '03',
    nombre: 'Maria Isabel Castaño',
    cargo: 'Profesional Operaciones',
    imagen: MariaCastano,
    alt: 'Maria Isabel Castaño',
    testimonio:
      'En cada evento que gestionamos y operamos siento tranquilidad. ACTIVA garantiza espacios seguros para trabajar, sin discriminación y con respeto. Ese respaldo es vital para que las mujeres demos lo mejor de nosotras.',
  },
  {
    numero: '04',
    nombre: 'Kelly Gómez',
    cargo: 'Profesional Comercial',
    imagen: KellyGomez,
    alt: 'Kelly Gómez',
    testimonio:
      'Me apasiona ver cómo desde la logística cultural y turística podemos transformar comunidades. En ACTIVA entendí que nuestro rol no es solo operativo, también somos gestoras de cambio.',
    reverse: true,
  },
];

function InformacionMujeres() {
  return (
    <main className={styles.genderPage}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroBg}></div>

        <div className={styles.genderContainer}>
          <div className={styles.aboutHeroContent}>
            <h1>
              Impulso
              <span className={styles.aboutScript}>
                con enfoque de género
              </span>
            </h1>

            <p>
              Mujeres que lideran, transforman y activan oportunidades
              desde cada espacio.
            </p>
          </div>
        </div>

        <div className={styles.aboutScrollIndicator}>
          <span>DESCUBRE</span>
          <ArrowDown size={21} weight="regular" />
        </div>

        <div className={styles.aboutHeroLine}></div>
      </section>

      {/* =====================================================
          HISTORIAS DE MUJERES ACTIVA
      ===================================================== */}

      <section className={styles.womenStories}>
        <div className={styles.genderContainer}>

          <header className={styles.storiesHeader}>
            <span className={styles.genderEyebrow}>
              Voces que inspiran
            </span>

            <h2>
              Mujeres que <span>activan</span>
            </h2>

            <p>
              Historias de mujeres que desde diferentes áreas aportan,
              lideran y construyen nuevas oportunidades en ACTIVA.
            </p>
          </header>

          <div className={styles.storiesList}>
            {historias.map((historia) => (
              <article
                key={historia.numero}
                className={`${styles.womanStory} ${
                  historia.reverse ? styles.reverse : ''
                }`}
              >
                <div className={styles.womanImage}>
                  <div className={styles.womanImageInner}>
                    <img
                      src={historia.imagen}
                      alt={historia.alt}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className={styles.womanText}>
                  <span className={styles.storyNumber}>
                    {historia.numero}
                  </span>

                  <blockquote>
                    “{historia.testimonio}”
                  </blockquote>

                  <div className={styles.womanAuthor}>
                    <h3>{historia.nombre}</h3>
                    <span>{historia.cargo}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className={styles.genderClosing}>
        <div className={styles.genderClosingContent}>
          <span className={styles.closingSymbol}>✦</span>

          <h2>
            Cuando una mujer tiene{' '}
            <span>oportunidades,</span> toda una comunidad puede
            transformarse.
          </h2>

          <p>
            En ACTIVA seguimos creando espacios donde el talento,
            el liderazgo y las ideas de las mujeres puedan crecer.
          </p>
        </div>
      </section>

    </main>
  );
}

export default InformacionMujeres;
