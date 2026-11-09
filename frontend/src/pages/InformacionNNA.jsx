import {
  ArrowDown,
  GameController,
  ShieldCheck,
  Mountains,
  Sparkle,
  MapPin,
} from '@phosphor-icons/react';

import styles from '../components/style/InformacionNNA.module.css';

import ninos from '../assets/niños.png';
import ninos2 from '../assets/niños2.png';

function InformacionNNA() {
  return (
    <main className={styles.nnaPage}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>

        <div className={styles.heroBg}></div>

        <div className={styles.container}>
          <div className={styles.heroContent}>

            <span className={styles.heroLabel}>
              ACTIVA KIDS
            </span>

            <h1>
              Información para Niños,
              Niñas y Adolescentes
              <span>(NNA)</span>
            </h1>

            <p>
              Espacios para aprender, jugar, explorar y crecer
              en entornos seguros y llenos de bienestar.
            </p>

          </div>
        </div>

        <div className={styles.scroll}>
          <span>DESCUBRE</span>
          <ArrowDown size={21} weight="regular" />
        </div>

        <div className={styles.heroLine}></div>

      </section>


      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className={styles.intro}>

        <div className={styles.container}>

          <header className={styles.sectionHeading}>

            <span className={styles.eyebrow}>
              CRECER EN ENTORNOS DE BIENESTAR
            </span>

            <h2>
              Niños, niñas y adolescentes:
              <span>crecer, aprender y disfrutar</span>
            </h2>

          </header>


          <div className={styles.introContent}>

            <div className={styles.introText}>

              <p>
                En ACTIVA reconocemos a los niños, niñas y adolescentes como
                <strong> sujetos de derechos </strong> y protagonistas de la
                transformación social. Por eso, desde la administración de
                nuestros parques, creamos experiencias seguras y educativas
                en cada lugar.
              </p>

            </div>


            <div className={styles.highlights}>

              <article className={styles.highlight}>

                <div className={styles.highlightIcon}>
                  <GameController size={25} weight="bold" />
                </div>

                <div>
                  <h3>
                    En el parque Cerro Tusa creamos espacios para aprender y jugar
                  </h3>

                  <p>
                    Zonas infantiles, actividades recreativas, talleres culturales
                    y ambientales que promueven la creatividad y la exploración.
                  </p>
                </div>

              </article>


              <article className={styles.highlight}>

                <div className={styles.highlightIcon}>
                  <ShieldCheck size={25} weight="bold" />
                </div>

                <div>
                  <h3>Protección de derechos</h3>

                  <p>
                    Garantizamos entornos libres de violencia, seguros e inclusivos
                    en cada actividad.
                  </p>
                </div>

              </article>

            </div>

          </div>


          <div className={styles.finalMessage}>

            <span></span>

            <p>
              De esta manera, <strong>contribuimos a que se cumpla el derecho
              al juego, la educación, la cultura, la recreación y la
              participación</strong>, en línea con la Constitución y la
              Ley de Infancia y Adolescencia en Colombia.
            </p>

            <span></span>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRIVIAS ACTIVA KIDS
      ===================================================== */}

      <section className={styles.trivias}>

        <div className={styles.container}>

          <header className={styles.triviasHeading}>

            <span className={styles.eyebrow}>
              APRENDE Y DIVIÉRTETE
            </span>

            <h2>
              Trivias <span>ACTIVA Kids</span>
            </h2>

            <p>
              ¡Descubre datos curiosos sobre nuestros parques,
              la naturaleza y las aventuras que puedes vivir en Antioquia!
            </p>

          </header>


          <div className={styles.triviaGrid}>

            {/* TRIVIA 01 */}

            <article className={styles.triviaCard}>

              <div className={styles.triviaImage}>

                <img
                  src={ninos}
                  alt="Volcán de lodo de Arboletes"
                  loading="lazy"
                />

                <div className={styles.triviaImageBadge}>
                  <Mountains size={25} weight="bold" />
                </div>

              </div>


              <div className={styles.triviaContent}>

                <span className={styles.triviaNumber}>
                  TRIVIA 01
                </span>

                <h3>¿Qué es un volcán de lodo?</h3>


                <div className={styles.question}>

                  <h4>
                    🤔 ¿Un volcán de lodo echa fuego como los demás volcanes?
                  </h4>

                  <p>
                    👉 <strong>¡No!</strong> En vez de lava caliente,
                    los volcanes de lodo expulsan agua, gases y barro muy suave.
                    ¡Parecen piscinas burbujeantes naturales!
                  </p>

                </div>


                <div className={styles.question}>

                  <h4>
                    🪣 ¿Qué puedes hacer en un volcán de lodo?
                  </h4>

                  <p>
                    👉 <strong>¡Sumergirte!</strong> Su lodo es tan denso que
                    flotas sin esfuerzo. Es como estar en una cama elástica,
                    pero mojada y muy divertida.
                  </p>

                </div>

              </div>

            </article>


            {/* TRIVIA 02 */}

            <article className={styles.triviaCard}>

              <div className={styles.triviaImage}>

                <img
                  src={ninos2}
                  alt="Experiencia en un volcán de lodo"
                  loading="lazy"
                />

                <div className={styles.triviaImageBadge}>
                  <Sparkle size={25} weight="bold" />
                </div>

              </div>


              <div className={styles.triviaContent}>

                <span className={styles.triviaNumber}>
                  TRIVIA 02
                </span>

                <h3>¡Más curiosidades del lodo!</h3>


                <div className={styles.question}>

                  <h4>
                    🧖🏻‍♂️ ¿Por qué es especial el lodo?
                  </h4>

                  <p>
                    👉 Porque está lleno de minerales naturales que hacen
                    bien para la piel. ¡Es como un spa de la naturaleza!
                  </p>

                </div>


                <div className={styles.question}>

                  <h4>
                    🌿 ¿Dónde puedes vivir esta experiencia en Antioquia?
                  </h4>

                  <p>
                    👉 En <strong>Arboletes</strong>, donde los volcanes de
                    lodo son parte del paisaje y de la aventura. Allí puedes
                    disfrutar en familia, reír, chapotear y salir lleno de
                    lodo y sonrisas.
                  </p>

                </div>


                <div className={styles.funFact}>

                  <div className={styles.funFactIcon}>
                    <MapPin size={23} weight="fill" />
                  </div>

                  <div>

                    <strong>Dato curioso para niños</strong>

                    <p>
                      ¿Sabías que en el volcán de lodo de Arboletes no
                      puedes hundirte? ¡El barro te empuja hacia arriba!
                      Eso significa que hasta los más peques pueden
                      disfrutar seguros con acompañamiento.
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CIERRE
      ===================================================== */}

      <section className={styles.closing}>

        <div className={styles.closingGlow}></div>

        <div className={styles.closingContent}>

          <span className={styles.closingIcon}>
            ✦
          </span>

          <h2>
            Aprender también
            es una <span>aventura</span>
          </h2>

          <p>
            En ACTIVA seguimos creando espacios donde cada niño,
            niña y adolescente pueda jugar, descubrir y disfrutar
            de experiencias que aporten a su bienestar.
          </p>

        </div>

      </section>

    </main>
  );
}

export default InformacionNNA;
