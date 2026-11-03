
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import styles from "../components/style/Hero.module.css";
import header1 from '../assets/header1.jpeg';
import header2 from '../assets/header2.jpeg';
import header3 from '../assets/header3.png';

const slides = [
  header1,
  header2,
  header3,
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <header className={styles.hero}>
        {/* Carrusel de imágenes */}
        <div className={styles.carousel}>
          {slides.map((image, index) => (
            <div
              key={image}
              className={`${styles.slide} ${
                activeSlide === index ? styles.active : ''
              }`}
              style={{ backgroundImage: `url("${image}")` }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Capa de color */}
        <div className={styles.overlay} />

        {/* Elementos decorativos */}
        <div className={`${styles.decoration} ${styles.decorationOne}`} />
        <div className={`${styles.decoration} ${styles.decorationTwo}`} />
        <div className={`${styles.decoration} ${styles.decorationThree}`} />

        {/* Contenido principal */}
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Empresa de la Gobernación de Antioquia
            </div>

            <h1>
              Hacemos posible
              <span className={styles.highlight}>
                grandes experiencias
              </span>
            </h1>

            <p>
              Somos una empresa industrial y comercial de la Gobernación
              de Antioquia. Diseñamos, planeamos y operamos soluciones
              logísticas para proyectos, eventos y experiencias que
              generan impacto.
            </p>

            {/* Botones */}
            <div className={styles.actions}>
              <a
                href="#servicios"
                className={`${styles.button} ${styles.buttonPrimary}`}
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight size={19} weight="bold" />
              </a>

              <a
                href="/quienes-somos"
                className={`${styles.button} ${styles.buttonSecondary}`}
              >
                <span>Conoce ACTIVA</span>
                <ArrowUpRight size={19} weight="bold" />
              </a>
            </div>

            {/* Indicadores del carrusel */}
            <div
              className={styles.indicators}
              aria-label="Imágenes del inicio"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.indicator} ${
                    activeSlide === index ? styles.active : ''
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Información lateral */}
        <div className={styles.sideInfo} aria-hidden="true">
          <span />
          ANTIOQUIA · COLOMBIA
        </div>

        {/* Onda inferior */}
        <div className={styles.wave}>
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="homeHeroWaveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#0072CE" />
                <stop offset="48%" stopColor="#0088A0" />
                <stop offset="100%" stopColor="#00A651" />
              </linearGradient>
            </defs>

            <path
              d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,140L0,140Z"
              fill="url(#homeHeroWaveGradient)"
            />
          </svg>
        </div>
      </header>
    </main>
  );
}

export default Home;
