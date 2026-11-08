
import {
  ArrowRight,
} from '@phosphor-icons/react';

import styles from '../components/style/LineasAccion.module.css';

import noticia34 from '../assets/noticia3.4.webp';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import lineasAccion from '../assets/lineas-accion.webp';

const lineas = [
  {
    nombre: 'Operación Logística',
    imagen: noticia34,
    color: 'lima',
    descripcion: 'Conoce más sobre esta línea',
  },
  {
    nombre: 'Eventos Propios',
    imagen: img1,
    color: 'verde',
    descripcion: 'Conoce más sobre esta línea',
  },
  {
    nombre: 'Parques',
    imagen: img2,
    color: 'azul',
    descripcion: 'Conoce más sobre esta línea',
  },
];

function LineasAccion() {
  return (
    <main className={styles.lineasAccionPage}>

      {/* HERO */}
      <section className={styles.lineasHero}>
        <div className={styles.lineasHeroOverlay}></div>

        <div className={styles.lineasHeroContent}>
          <h1>Líneas de Acción</h1>
        </div>
      </section>

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
                  <img
                    src={linea.imagen}
                    alt={linea.nombre}
                  />
                </div>

                <div className={styles.lineaCardContent}>
                  <h3>{linea.nombre}</h3>

                  <p>{linea.descripcion}</p>

                  <a
                    href="#"
                    className={styles.lineaCardButton}
                  >
                    INGRESE AQUÍ
                    <ArrowRight size={18} weight="bold" />
                  </a>
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
            <img
              src={lineasAccion}
              alt="ACTIVA - Líneas de Acción"
              className={styles.lineasFinalImage}
            />
          </div>

        </div>
      </section>

    </main>
  );
}

export default LineasAccion;
