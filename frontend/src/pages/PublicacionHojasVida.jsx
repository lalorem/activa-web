import {
  BoundingBox,
  AddressBook,
  ArrowSquareOut,
  FilePdf,
} from "@phosphor-icons/react";

import styles from "../components/style/PublicacionHojasVida.module.css";

function PublicacionHojasVida() {
  return (
    <main className={styles.hvPage}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <header className={styles.hvHero}>
        <div className={styles.hvHeroOverlay}></div>

        <div className={styles.hvHeroContent}>
          <h1>Publicación de Hojas de Vida</h1>
        </div>
      </header>

      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <section className={styles.hvSection}>
        <div className={styles.hvContainer}>
          {/* TÍTULO */}

          <div className={styles.hvIntro}>
            <span className={styles.hvMarkerTitle}>
              Publicación de Hojas de Vida
            </span>
          </div>

          {/* =================================================
              TARJETAS
          ================================================== */}

          <div className={styles.hvCards}>
            {/* TARJETA 1 */}

            <article className={styles.hvCard}>
              <div className={styles.hvIcon}>
                <BoundingBox size={30} weight="regular" />
              </div>

              <div className={styles.hvCardContent}>
                <span className={styles.hvCardNumber}>01</span>

                <h3>Cargos de Libre Nombramiento y Remoción</h3>

                <p>
                  Consulta la información correspondiente a los cargos de libre
                  nombramiento y remoción a través del portal de Función
                  Pública.
                </p>

                <a
                  href="https://www.funcionpublica.gov.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hvButton}
                >
                  <span>Haz clic aquí</span>
                  <ArrowSquareOut size={16} />
                </a>
              </div>
            </article>

            {/* TARJETA 2 */}

            <article className={styles.hvCard}>
              <div className={styles.hvIcon}>
                <AddressBook size={30} weight="regular" />
              </div>

              <div className={styles.hvCardContent}>
                <span className={styles.hvCardNumber}>02</span>

                <h3>No Obligación Publicación de Hojas de Vida</h3>

                <p>
                  Consulta el certificado relacionado con la no obligatoriedad
                  de publicación de hojas de vida.
                </p>

                <a
                  href={`${import.meta.env.BASE_URL}documentos/CERTIFICADO-NO-OBLIGATORIEDAD-DE-PBLICACION-HV.pdf`}
                  download
                  className={styles.hvButton}
                >
                  <span>Haz clic aquí</span>
                  <FilePdf size={16} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PublicacionHojasVida;
