
import { ArrowRight } from '@phosphor-icons/react';

import styles from './style/noticias.module.css';

import noticia1 from '../assets/tarjeta1.webp';
import noticia2 from '../assets/tarjeta2.webp';
import noticia3 from '../assets/tarjeta3.webp';
import noticia4 from '../assets/tarjeta4.webp';

const noticias = [
  {
    id: 1,
    imagen: noticia1,
    alt: 'Paisaje de Antioquia',
    categoria: 'Turismo',
    titulo: 'El Volcán de Lodo de Arboletes se prepara para convertirse en uno de los parques turísticos más importantes del Caribe colombiano',
    descripcion: 'Conoce los avances y proyectos que buscan fortalecer el turismo y el desarrollo de Antioquia.',
    enlace: 'noticia1.html',
  },
  {
    id: 2,
    imagen: noticia2,
    alt: 'Evento',
    categoria: 'ACTIVA',
    titulo: 'ACTIVA avanza en la transformación del Volcán de Lodo de Arboletes como destino turístico sostenible del Urabá antioqueño.',
    descripcion: 'Un proyecto que busca consolidar este territorio como un destino turístico sostenible.',
    enlace: 'noticia2.html',
  },
  {
    id: 3,
    imagen: noticia3,
    alt: 'Atención humanitaria',
    categoria: 'Comunidad',
    titulo: 'ACTIVA operó la atención humanitaria en Urabá antioqueño durante la emergencia por temporada de lluvias.',
    descripcion: 'Conoce las acciones desarrolladas para acompañar a las comunidades del departamento.',
    enlace: 'noticia3.html',
  },
  {
    id: 4,
    imagen: noticia4,
    alt: 'Reunión de trabajo',
    categoria: 'Institucional',
    titulo: 'ACTIVA realizó su Rendición de Cuentas Interna y compartió resultados, aprendizajes y proyecciones con su equipo de trabajo.',
    descripcion: 'Conoce algunos de los resultados y proyectos que hacen parte de nuestra gestión.',
    enlace: 'noticia4.html',
  },
];

function Noticias() {
  return (
    <section className={styles.newsSection} id="noticias">
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.badgeTitle}>Actualidad</span>

          <h2>
            Noticias <span>ACTIVA</span>
          </h2>

          <p>
            Conoce las noticias, proyectos y acontecimientos más recientes de ACTIVA.
          </p>
        </div>

        <div className={styles.newsGrid}>
          {noticias.map((noticia) => (
            <article className={styles.newsCard} key={noticia.id}>
              <div className={styles.newsImage}>
                <img src={noticia.imagen} alt={noticia.alt} />
              </div>

              <div className={styles.newsContent}>
                <span className={styles.newsCategory}>
                  {noticia.categoria}
                </span>

                <h3>{noticia.titulo}</h3>

                <p>{noticia.descripcion}</p>

                <a
                  href={noticia.enlace}
                  className={styles.newsButton}
                >
                  Leer más
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Noticias;
