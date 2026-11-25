
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react";

import styles from "./style/HeaderImagenes.module.css";

function HeaderImagenes({
  images = [],
  image,
  eyebrow = "Empresa de la Gobernación de Antioquia",
  title,
  highlight,
  description,
  primaryButton,
  secondaryButton,
  interval = 6000,
  sideInfo = "ANTIOQUIA · COLOMBIA",
}) {
  const slides = images.length > 0 ? images : image ? [image] : [];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const renderButton = (button, primary = false) => {
    if (!button) return null;

    const className = `${styles.button} ${
      primary ? styles.buttonPrimary : styles.buttonSecondary
    }`;

    const content = (
      <>
        <span>{button.text}</span>
        {primary ? (
          <ArrowRight size={19} weight="bold" />
        ) : (
          <ArrowUpRight size={19} weight="bold" />
        )}
      </>
    );

    if (button.to) {
      return (
        <Link
          to={button.to}
          className={className}
          key={button.text}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={button.href || "#"}
        className={className}
        key={button.text}
        target={button.external ? "_blank" : undefined}
        rel={button.external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  };

  return (
    <header className={styles.hero}>
      {/* IMÁGENES */}
      <div className={styles.carousel}>
        {slides.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`${styles.slide} ${
              activeSlide === index ? styles.active : ""
            }`}
            style={{ backgroundImage: `url("${src}")` }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* CAPA DE COLOR */}
      <div className={styles.overlay} />

      {/* ELEMENTOS DECORATIVOS */}
      <div className={`${styles.decoration} ${styles.decorationOne}`} />
      <div className={`${styles.decoration} ${styles.decorationTwo}`} />
      <div className={`${styles.decoration} ${styles.decorationThree}`} />

      {/* CONTENIDO */}
      <div className={styles.container}>
        <div className={styles.content}>
          {eyebrow && (
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {eyebrow}
            </div>
          )}

          <h1>
            {title}
            {highlight && (
              <span className={styles.highlight}>
                {highlight}
              </span>
            )}
          </h1>

          {description && <p>{description}</p>}

          {/* BOTONES OPCIONALES */}
          {(primaryButton || secondaryButton) && (
            <div className={styles.actions}>
              {renderButton(primaryButton, true)}
              {renderButton(secondaryButton, false)}
            </div>
          )}

          {/* INDICADORES: SOLO SI HAY VARIAS IMÁGENES */}
          {slides.length > 1 && (
            <div
              className={styles.indicators}
              aria-label="Imágenes del encabezado"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.indicator} ${
                    activeSlide === index ? styles.active : ""
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* INFORMACIÓN LATERAL */}
      {sideInfo && (
        <div className={styles.sideInfo} aria-hidden="true">
          <span />
          {sideInfo}
        </div>
      )}

      {/* ONDA INFERIOR */}
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="headerImagenesWaveGradient"
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
            fill="url(#headerImagenesWaveGradient)"
          />
        </svg>
      </div>
    </header>
  );
}

export default HeaderImagenes;
