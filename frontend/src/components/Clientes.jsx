
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
  const [isPaused, setIsPaused] = useState(false);

  const clientesDuplicados = [...clientes, ...clientes];

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

        {/* Carrusel infinito */}
        <div
          className={styles.clientsCarousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.clientsViewport}>
            <div
              className={`${styles.clientsTrack} ${
                isPaused ? styles.paused : ''
              }`}
            >
              {clientesDuplicados.map((cliente, index) => (
                <div
                  className={styles.clientLogo}
                  key={`${cliente.id}-${index}`}
                >
                  <img
                    src={cliente.imagen}
                    alt={cliente.nombre}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Clientes;
