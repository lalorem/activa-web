
import { useEffect, useRef, useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

import styles from './style/clientes.module.css';

import gobernacion from '../assets/logo_gobernacion_antioquia.webp';
import laCeja from '../assets/logo_alcaldia_de_la_ceja.webp';
import medellin from '../assets/logo_alcaldia_medellin.webp';
import viva from '../assets/logo_viva.webp';
import tunel from '../assets/logo_Tunel-guillermo-gaviria-echeverri.webp';
import idea from '../assets/logo_IDEA.webp';
import cultura from '../assets/LOGO_instituto-de-cultura-y-patrimonio.webp';
import indeportes from '../assets/logo_Indeportes-antioquia.webp';
import ferrocarril from '../assets/logo_ ferrocarril-de-antioquia.webp';
import licores from '../assets/logo_fabrica-de-licores-de-antioquia.webp';
import corantioquia from '../assets/logo_Corantioquia.webp';
import sabaneta from '../assets/logo_alcaldia-de-sabaneta.webp';

const clientes = [
  { id: 1, imagen: gobernacion, nombre: 'Gobernación de Antioquia' },
  { id: 2, imagen: laCeja, nombre: 'Alcaldía de La Ceja' },
  { id: 3, imagen: medellin, nombre: 'Alcaldía de Medellín' },
  { id: 4, imagen: viva, nombre: 'VIVA' },
  { id: 5, imagen: tunel, nombre: 'Túnel Guillermo Gaviria Echeverri' },
  { id: 6, imagen: idea, nombre: 'IDEA' },
  { id: 7, imagen: cultura, nombre: 'Instituto de Cultura y Patrimonio' },
  { id: 8, imagen: indeportes, nombre: 'Indeportes Antioquia' },
  { id: 9, imagen: ferrocarril, nombre: 'Ferrocarril de Antioquia' },
  { id: 10, imagen: licores, nombre: 'Fábrica de Licores de Antioquia' },
  { id: 11, imagen: corantioquia, nombre: 'Corantioquia' },
  { id: 12, imagen: sabaneta, nombre: 'Alcaldía de Sabaneta' },
];

function Clientes() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [layout, setLayout] = useState({
    step: 208,
    visibleCount: 5,
  });

  // Calcular cuántos logos caben según el tamaño de pantalla
  useEffect(() => {
    const calculateLayout = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track || !track.children.length) return;

      const card = track.children[0];
      const cardWidth = card.getBoundingClientRect().width;

      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap) || 28;

      const step = cardWidth + gap;

      const visibleCount = Math.max(
        1,
        Math.floor((viewport.clientWidth + gap) / step)
      );

      setLayout({ step, visibleCount });
    };

    calculateLayout();

    window.addEventListener('resize', calculateLayout);

    return () => {
      window.removeEventListener('resize', calculateLayout);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    clientes.length - layout.visibleCount
  );

  // Ajustar posición si cambia el tamaño de pantalla
  useEffect(() => {
    setCurrentIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  // Avanzar automáticamente cada 4 segundos
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const siguiente = () => {
    setCurrentIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const anterior = () => {
    setCurrentIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  };

  return (
    <section className={styles.clientsSection}>
      <div className="container">

        {/* Encabezado */}
        <div className={styles.sectionHeader}>
          <span className={styles.badgeTitle}>
            Nuestros aliados
          </span>

          <h2>
            Nuestros <span>clientes</span>
          </h2>

          <p>
            Junto a ellos, estructuramos y operamos proyectos
            que impulsan el turismo, la cultura y el bienestar.
          </p>
        </div>

        {/* Carrusel */}
        <div
          className={styles.clientsCarousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <button
            type="button"
            className={styles.clientsPrev}
            onClick={anterior}
            aria-label="Clientes anteriores"
          >
            <CaretLeft size={23} weight="bold" />
          </button>

          <div
            className={styles.clientsViewport}
            ref={viewportRef}
          >
            <div
              className={styles.clientsTrack}
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * layout.step}px)`,
              }}
            >
              {clientes.map((cliente) => (
                <div className={styles.clientLogo} key={cliente.id}>
                  <img
                    src={cliente.imagen}
                    alt={cliente.nombre}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.clientsNext}
            onClick={siguiente}
            aria-label="Siguientes clientes"
          >
            <CaretRight size={23} weight="bold" />
          </button>
        </div>

        {/* Indicadores */}
        <div className={styles.clientsDots}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.clientsDot} ${
                currentIndex === index ? styles.active : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Mostrar posición ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : undefined}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clientes;
