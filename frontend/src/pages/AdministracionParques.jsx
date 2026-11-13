import { Leaf } from "@phosphor-icons/react";

import styles from "../components/style/AdministracionParques.module.css";
import sharedStyles from "../components/style/UnidadesNegocio.module.css";

const imagenesParques = [
  {
    imagen: "/administracion-parques/parque-1.jpg",
    descripcion: "Espacios naturales y recreativos",
  },
  {
    imagen: "/administracion-parques/parque-2.jpg",
    descripcion: "Turismo y experiencias",
  },
  {
    imagen: "/administracion-parques/parque-3.jpg",
    descripcion: "Desarrollo territorial",
  },
];

function AdministracionParques() {
  return (
    <main className={styles.parquesPage}>
      {/* HEADER */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            <Leaf size={17} weight="bold" />
            Turismo y desarrollo territorial
          </span>

          <h1>Administración de Parques</h1>

          <p>
            Gestionamos espacios que conectan naturaleza, bienestar y desarrollo
            para Antioquia.
          </p>
        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className={styles.contentSection}>
        <div className={styles.textContent}>
          <p>
            En ACTIVA entendemos los parques como plataformas que conectan
            bienestar, turismo y desarrollo territorial. Más allá de su
            administración, gestionamos estos espacios como escenarios que
            dinamizan la economía local, fortalecen la calidad de vida de las
            comunidades y promueven el uso responsable del entorno natural.
          </p>

          <p>
            Nuestro modelo integra operación, experiencia y sostenibilidad,
            permitiendo que cada parque funcione como un sistema vivo donde la
            recreación, la cultura y el turismo se articulan para generar valor
            social y económico en el territorio.
          </p>

          <p>
            A través de esquemas de gestión flexibles, que incluyen alianzas
            público-privadas, potenciamos la infraestructura, activamos el
            turismo y proyectamos la riqueza cultural y natural de Antioquia,
            contribuyendo a su posicionamiento como un destino competitivo y
            sostenible a nivel nacional e internacional.
          </p>

          <div className={styles.managementBox}>
            <h2>Cómo gestiona ACTIVA los parques</h2>

            <p className={styles.managementIntro}>
              Nuestro modelo de administración se basa en:
            </p>

            <ul>
              <li>Diseño de modelos de operación sostenibles.</li>
              <li>Articulación con aliados públicos y privados.</li>
              <li>Activación turística y cultural de los espacios.</li>
              <li>Gestión de infraestructura y experiencia del visitante.</li>
              <li>Generación de impacto económico en el territorio.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALERÍA DE PARQUES */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          {imagenesParques.map((item) => (
            <article className={styles.galleryCard} key={item.imagen}>
              <img src={item.imagen} alt={item.descripcion} loading="lazy" />

              <div className={styles.galleryOverlay}>
                <span>{item.descripcion}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CARTEL FINAL DE CONTACTO */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <span className={styles.contactLabel}>HAGAMOS EQUIPO</span>

          <h2>Empecemos a trabajar juntos</h2>

          <p>
            Diseñemos juntos experiencias sostenibles que impulsen comunidades,
            emprendedores y resultados reales.
          </p>

          <a href="mailto:info@activa.com.co" className={styles.contactButton}>
            Haz clic aquí
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default AdministracionParques;
