
import {
  CalendarBlank,
  ArrowRight,
} from '@phosphor-icons/react';

import styles from '../components/style/NoticiasGeneral.module.css';

import volcan1 from '../assets/volcan1.webp';
import noticia2 from '../assets/noticia2.webp';
import noticia3 from '../assets/noticia3.webp';
import noticia4 from '../assets/noticia4.webp';

import Noticias from '../components/Noticias';

const noticias = [
  {
    imagen: volcan1,
    categoria: 'ACTIVA',
    fecha: 'Agosto 2026',
    titulo:
      'El Volcán de Lodo de Arboletes se prepara para convertirse en uno de los parques turísticos más importantes del Caribe colombiano',
    descripcion:
      'Conoce los avances y proyectos que buscan fortalecer el turismo y el desarrollo de Antioquia.',
    enlace: '/noticia1.html',
  },
  {
    imagen: noticia2,
    categoria: 'INSTITUCIONAL',
    fecha: 'Agosto 2026',
    titulo:
      'ACTIVA avanza en la transformación del Volcán de Lodo de Arboletes como destino turístico sostenible del Urabá antioqueño.',
    descripcion:
      'Un proyecto que busca consolidar este territorio como un destino turístico sostenible.',
    enlace: '/noticia2.html',
  },
  {
    imagen: noticia3,
    categoria: 'PROYECTOS',
    fecha: 'Agosto 2026',
    titulo:
      'ACTIVA operó la atención humanitaria en Urabá antioqueño durante la emergencia por temporada de lluvias.',
    descripcion:
      'Conoce las acciones desarrolladas para acompañar a las comunidades del departamento.',
    enlace: '/noticia3.html',
  },
  {
    imagen: noticia4,
    categoria: 'GESTIÓN',
    fecha: 'Agosto 2026',
    titulo:
      'ACTIVA realizó su Rendición de Cuentas Interna y compartió resultados, aprendizajes y proyecciones con su equipo de trabajo.',
    descripcion:
      'Conoce algunos de los resultados y proyectos que hacen parte de nuestra gestión.',
    enlace: '/noticia4.html',
  },
];

function NoticiasGeneral() {
  return (
    <>
      {/* HERO */}
      <section className={styles.generalNewsHero}>
        <div className={styles.generalNewsOverlay}></div>

        <div className={styles.generalNewsHeroContent}>
          <h1>Noticias ACTIVA</h1>
          <div className={styles.generalNewsLine}></div>
        </div>
        
      </section>

      {/* INTRODUCCIÓN */}
      <section className={styles.generalNewsIntro}>
        <div className={styles.generalNewsContainer}>
          <span className={styles.generalNewsSectionLabel}>
            Actualidad ACTIVA
          </span>

          <h2>Noticias, avances y acontecimientos</h2>

          <p>
            Aquí encontrarás todas las noticias, proyectos y actividades de la{' '}
            <strong>
              Empresa de Parques y Eventos de Antioquia ACTIVA
            </strong>
            . Te contamos cómo trabajamos día a día para generar bienestar,
            fortalecer el turismo y crear espacios de encuentro que impactan
            positivamente a todos los antioqueños.
          </p>
        </div>
      </section>

      {/* LISTADO DE NOTICIAS */}
      <section className={styles.generalNewsList}>
        <div className={styles.generalNewsContainer}>
          <div className={styles.generalNewsHeading}>
            <div>
              <span className={styles.generalNewsSectionLabel}>
                Actualidad
              </span>

              <h2>Todas las noticias</h2>
            </div>
          </div>

          {/*<div className={styles.generalNewsGrid}>
            {noticias.map((noticia, index) => (
              <article
                className={styles.generalNewsCard}
                key={index}
              >
                <div className={styles.generalNewsImage}>
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                  />

                  <span className={styles.generalNewsCategory}>
                    {noticia.categoria}
                  </span>
                </div>

                <div className={styles.generalNewsCardContent}>
                  <span className={styles.generalNewsDate}>
                    <CalendarBlank size={16} weight="bold" />
                    {noticia.fecha}
                  </span>

                  <h3>{noticia.titulo}</h3>

                  <p>{noticia.descripcion}</p>

                  <a
                    href={noticia.enlace}
                    className={styles.generalNewsRead}
                  >
                    Leer más
                    <ArrowRight size={16} weight="bold" />
                  </a>
                </div>
              </article>
            ))}
          </div> */}

       <Noticias />

        </div>
      </section>
    </>
  );
}

export default NoticiasGeneral;
