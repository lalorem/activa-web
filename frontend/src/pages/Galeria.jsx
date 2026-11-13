
import { useState } from 'react';

import {
  X,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Images,
} from '@phosphor-icons/react';

import styles from '../components/style/Galeria.module.css';

const fotografias = [
  {
    id: 1,
    imagen: '/galeria/galeria-1.jpg',
    titulo: 'Experiencias que conectan',
    categoria: 'general',
  },
  {
    id: 2,
    imagen: '/galeria/galeria-2.jpg',
    titulo: 'Encuentros empresariales',
    categoria: 'general',
  },
  {
    id: 3,
    imagen: '/galeria/galeria-3.jpg',
    titulo: 'Caféstival',
    categoria: 'propios',
  },
  {
    id: 4,
    imagen: '/galeria/galeria-4.jpg',
    titulo: 'Eventos y experiencias',
    categoria: 'general',
  },
  {
    id: 5,
    imagen: '/galeria/galeria-5.jpg',
    titulo: 'Caféstival',
    categoria: 'propios',
  },
  {
    id: 6,
    imagen: '/galeria/galeria-6.jpg',
    titulo: 'Conexión con el territorio',
    categoria: 'general',
  },
  {
    id: 7,
    imagen: '/galeria/galeria-7.jpg',
    titulo: 'Caféstival',
    categoria: 'propios',
  },
  {
    id: 8,
    imagen: '/galeria/galeria-8.jpg',
    titulo: 'Experiencias ACTIVA',
    categoria: 'general',
  },
  {
    id: 9,
    imagen: '/galeria/galeria-9.jpg',
    titulo: 'Eventos que transforman',
    categoria: 'general',
  },
  {
    id: 10,
    imagen: '/galeria/galeria-10.jpg',
    titulo: 'Caféstival',
    categoria: 'propios',
  },
  {
    id: 11,
    imagen: '/galeria/galeria-11.jpg',
    titulo: 'Encuentros y cultura',
    categoria: 'general',
  },
  {
    id: 12,
    imagen: '/galeria/galeria-12.jpg',
    titulo: 'Experiencias propias',
    categoria: 'propios',
  },
];

const filtros = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'general', nombre: 'Eventos generales' },
  { id: 'propios', nombre: 'Eventos propios' },
];

function Galeria() {
  const [filtroActivo, setFiltroActivo] = useState('todos');
  const [imagenActiva, setImagenActiva] = useState(null);

  const imagenesFiltradas =
    filtroActivo === 'todos'
      ? fotografias
      : fotografias.filter(
          (foto) => foto.categoria === filtroActivo
        );

  const abrirImagen = (foto) => {
    setImagenActiva(foto);
  };

  const cerrarImagen = () => {
    setImagenActiva(null);
  };

  const cambiarImagen = (direccion) => {
    const indiceActual = imagenesFiltradas.findIndex(
      (foto) => foto.id === imagenActiva.id
    );

    const nuevoIndice =
      (indiceActual + direccion + imagenesFiltradas.length) %
      imagenesFiltradas.length;

    setImagenActiva(imagenesFiltradas[nuevoIndice]);
  };

  return (
    <main className={styles.galeriaPage}>

      {/* HEADER */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            ACTIVA EN IMÁGENES
          </span>

          <h1>Galería</h1>

          <p>
            Momentos, experiencias y proyectos que conectan
            territorios y personas.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <span className={styles.sectionEyebrow}>
            NUESTRAS EXPERIENCIAS
          </span>

          <h2>Eventos que crean experiencias</h2>

          <p>
            Creamos, diseñamos y ejecutamos experiencias a la medida
            o necesidad de nuestros clientes.
          </p>

          <p>
            Proveemos dotación y suministros en general; desarrollamos
            proyectos de posicionamiento de marca, consultoría,
            contratación de personal por proyectos estratégicos,
            central de medios, operamos proyectos de bienestar laboral
            y bienestar social.
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section className={styles.gallerySection}>

        <div className={styles.galleryHeading}>
          <div>
            <span className={styles.sectionEyebrow}>
              REVIVE CADA MOMENTO
            </span>

            <h2>Un recorrido por nuestras experiencias</h2>

            <p>
              Descubre algunos de los eventos y proyectos que hemos
              hecho realidad.
            </p>
          </div>

          <div className={styles.photoCount}>
            <Images size={21} weight="duotone" />
            <span>{imagenesFiltradas.length} fotografías</span>
          </div>
        </div>

        {/* FILTROS */}
        <div className={styles.filterContainer}>
          <div className={styles.filters}>
            {filtros.map((filtro) => (
              <button
                key={filtro.id}
                type="button"
                className={`${styles.filterButton} ${
                  filtroActivo === filtro.id ? styles.activeFilter : ''
                }`}
                onClick={() => setFiltroActivo(filtro.id)}
              >
                {filtro.nombre}
              </button>
            ))}
          </div>
        </div>

        {/* MOSAICO */}
        <div className={styles.galleryGrid}>
          {imagenesFiltradas.map((foto, index) => (
            <button
              type="button"
              key={foto.id}
              className={`${styles.galleryItem} ${
                styles[`galleryItem${(index % 6) + 1}`]
              }`}
              onClick={() => abrirImagen(foto)}
              aria-label={`Ampliar fotografía: ${foto.titulo}`}
            >
              <img
                src={foto.imagen}
                alt={foto.titulo}
                loading="lazy"
              />

              <div className={styles.imageOverlay}>
                <div className={styles.imageInfo}>
                  <span>
                    {foto.categoria === 'propios'
                      ? 'EVENTO PROPIO'
                      : 'EVENTO GENERAL'}
                  </span>

                  <h3>{foto.titulo}</h3>
                </div>

                <div className={styles.zoomIcon}>
                  <MagnifyingGlass size={21} />
                </div>
              </div>
            </button>
          ))}
        </div>

        {imagenesFiltradas.length === 0 && (
          <div className={styles.emptyGallery}>
            <Images size={42} />
            <h3>No hay fotografías disponibles</h3>
            <p>Pronto encontrarás nuevas experiencias en esta sección.</p>
          </div>
        )}

      </section>

      {/* VISOR DE FOTOGRAFÍAS */}
      {imagenActiva && (
        <div
          className={styles.lightbox}
          onClick={cerrarImagen}
          role="presentation"
        >
          <button
            type="button"
            className={styles.closeLightbox}
            onClick={cerrarImagen}
            aria-label="Cerrar fotografía"
          >
            <X size={27} />
          </button>

          <button
            type="button"
            className={styles.lightboxArrow}
            onClick={(e) => {
              e.stopPropagation();
              cambiarImagen(-1);
            }}
            aria-label="Fotografía anterior"
          >
            <CaretLeft size={30} />
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <img
              src={imagenActiva.imagen}
              alt={imagenActiva.titulo}
            />

            <div className={styles.lightboxCaption}>
              <span>
                {imagenActiva.categoria === 'propios'
                  ? 'EVENTO PROPIO'
                  : 'EVENTO GENERAL'}
              </span>

              <h3>{imagenActiva.titulo}</h3>
            </div>
          </div>

          <button
            type="button"
            className={styles.lightboxArrow}
            onClick={(e) => {
              e.stopPropagation();
              cambiarImagen(1);
            }}
            aria-label="Fotografía siguiente"
          >
            <CaretRight size={30} />
          </button>
        </div>
      )}

    </main>
  );
}

export default Galeria;
