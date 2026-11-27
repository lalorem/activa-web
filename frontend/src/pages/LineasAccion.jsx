import { useState } from "react";

import { ArrowRight, X, MagnifyingGlass } from "@phosphor-icons/react";

import styles from "../components/style/LineasAccion.module.css";

import HeaderDegradado from "../components/HeaderDegradado";

import noticia34 from "../assets/noticia3.4.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import lineasAccion from "../assets/lineas-accion.webp";
import { Link } from "react-router-dom";

const lineas = [
  {
    nombre: "Operación Logística",
    imagen: noticia34,
    color: "lima",
    descripcion: "Conoce más sobre esta línea",
    url: "/operacion-logistica",
  },
  {
    nombre: "Eventos Propios",
    imagen: img1,
    color: "verde",
    descripcion: "Conoce más sobre esta línea",
    url: "/cafestival",
  },
  {
    nombre: "Parques",
    imagen: img2,
    color: "azul",
    descripcion: "Conoce más sobre esta línea",
    url: "/administracion-parques",
  },
];

function LineasAccion() {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  return (
    <main className={styles.lineasAccionPage}>
      {/* HEADER */}
      <HeaderDegradado
        eyebrow="NUESTRAS CAPACIDADES"
        title="Líneas de"
        highlight="Acción"
        description="Conoce las líneas estratégicas de ACTIVA y las soluciones que ofrecemos para transformar experiencias y territorios."
      />

      {/* PROPUESTA DE VALOR */}
      <section className={styles.propuestaSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2>Propuesta de Valor</h2>
          </div>

          <p className={styles.propuestaText}>
            La Empresa de Parques y Eventos de Antioquia (ACTIVA) ofrecerá
            experiencias memorables con un enfoque en la personalización y la
            logística integral de cada evento. Optimizará sus recursos para
            garantizar eficiencia, sostenibilidad y altos estándares de calidad,
            cuidando siempre la identidad y el carácter único de cada servicio.
            Su estrategia se centrará en diferenciarse por la excelencia,
            precios justos y un servicio altamente personalizado, liderado por
            ejecutivos de cuenta especializados que construirán relaciones
            profundas con los clientes y superarán sus expectativas. ACTIVA
            también ampliará su enfoque hacia la innovación tecnológica y la
            sostenibilidad ambiental, implementando herramientas digitales
            avanzadas y promoviendo prácticas ecológicas para eventos verdes.
            Además, fortalecerá alianzas estratégicas y expandirá su red de
            proveedores, consolidándose como aliado clave para la Gobernación,
            el sector público y privado.
          </p>
        </div>
      </section>

      {/* LÍNEAS DE ACCIÓN */}
      <section className={styles.lineasCardsSection}>
        <div className={styles.container}>
          <div className={styles.lineasCardsGrid}>
            {lineas.map((linea) => (
              <article
                className={`${styles.lineaCard} ${styles[`lineaCard${linea.color.charAt(0).toUpperCase()}${linea.color.slice(1)}`]}`}
                key={linea.nombre}
              >
                <div className={styles.lineaCardImage}>
                  <img src={linea.imagen} alt={linea.nombre} />
                </div>

                <div className={styles.lineaCardContent}>
                  <h3>{linea.nombre}</h3>

                  <p>{linea.descripcion}</p>

                  <Link to={linea.url} className={styles.lineaCardButton}>
                    INGRESE AQUÍ
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEN FINAL */}
      <section className={styles.lineasImageSection}>
        <div className={styles.container}>
          <div className={styles.lineasImageWrapper}>
            <button
              type="button"
              className={styles.lineasImageButton}
              onClick={() => setImagenAmpliada(true)}
              aria-label="Ampliar imagen de líneas de acción"
            >
              <img
                src={lineasAccion}
                alt="ACTIVA - Líneas de Acción"
                className={styles.lineasFinalImage}
              />

              <span className={styles.lineasImageHint}>
                <MagnifyingGlass size={19} weight="bold" />
                Ampliar imagen
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* VISOR DE IMAGEN AMPLIADA */}
      {imagenAmpliada && (
        <div
          className={styles.lineasLightbox}
          onClick={() => setImagenAmpliada(false)}
          role="presentation"
        >
          <button
            type="button"
            className={styles.lineasLightboxClose}
            onClick={() => setImagenAmpliada(false)}
            aria-label="Cerrar imagen"
          >
            <X size={25} weight="bold" />
          </button>

          <img
            src={lineasAccion}
            alt="ACTIVA - Líneas de Acción ampliada"
            className={styles.lineasLightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default LineasAccion;
