import { FilePdf, DownloadSimple } from "@phosphor-icons/react";
import styles from "../components/style/MisionVision.module.css";

import imagenMisionVision from "../assets/mision-vision.webp";

function MisionVision() {
  return (
    <main className={styles.mvPage}>
      {/* HERO */}
      <header className={styles.mvHero}>
        <div className={styles.container}>
          <div className={styles.mvHeroContent}>
            <h1>Misión, Visión, Deberes y Políticas</h1>
          </div>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className={styles.mvContentSection}>
        <div className={styles.container}>
          {/* MISIÓN Y VISIÓN */}
          <section className={styles.mvContent}>
            {/* IMAGEN */}
            <div className={styles.mvImageWrapper}>
              <div className={styles.mvImageDecoration}></div>

              <img
                src={imagenMisionVision}
                alt="Misión y Visión de ACTIVA"
                className={styles.mvImage}
              />
            </div>

            {/* TEXTOS */}
            <div className={styles.mvText}>
              <article className={styles.mvItem}>
                <h2>Misión</h2>

                <p>
                  Brindar soluciones integrales en operación logística y la
                  administración de parques que permitan el disfrute de la VIDA
                  de todas y todos los antioqueños; promoviendo la tecnología,
                  la innovación, para de esta manera, impulsar el desarrollo del
                  entorno y el progreso socioeconómico de la región Antioqueña.
                </p>
              </article>

              <article className={styles.mvItem}>
                <h2>Visión</h2>

                <p>
                  <strong>ACTIVA</strong> será en el mediano plazo una empresa
                  eficiente y rentable, que se consolida en el mercado como una
                  alternativa atractiva para la realización de eventos y la
                  promoción del territorio antioqueño, soportada con una
                  estructura ágil, flexible y eficaz; el conocimiento de su
                  mercado y el aprovechamiento de los desarrollos tecnológicos.
                </p>
              </article>
            </div>
          </section>

          {/* MANUAL DE FUNCIONES */}
          <section className={styles.manualBox}>
            <div className={styles.manualBoxIcon}>
              <FilePdf size={34} weight="regular" />
            </div>

            <div className={styles.manualBoxInfo}>
              <h2>Manual de Funciones</h2>

              <p>Consulta y descarga el Manual de Funciones de ACTIVA.</p>
            </div>

            <a
              href={`${import.meta.env.BASE_URL}documentos/RESOLUCION-006-DE-2025-202503000011-MANUAL-DE-FUNCIONES.pdf`}
              className={styles.manualBoxButton}
              download
            >
              <span>Descargar</span>
              <DownloadSimple size={21} />
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}

export default MisionVision;
