
import { File, FileXls, Download } from '@phosphor-icons/react';

import styles from '../components/style/directorio.module.css';
import HeaderDegradado from '../components/HeaderDegradado';

function DirectorioInstitucional() {
  return (
    <>
      {/* HEADER */}
      <HeaderDegradado
        eyebrow="TRANSPARENCIA INSTITUCIONAL"
        title="Directorio"
        highlight="Institucional"
        description="Encuentra la información de contacto de los funcionarios que hacen parte de ACTIVA."
      />

      <main className={styles.directorioMain}>
        <section className={styles.directorioSection}>
          <div className={styles.directorioIntro}>
            <span className={styles.directorioIntroLabel}>
              Información institucional
            </span>

            <h2>Directorio Institucional</h2>

            <p>
              Encuentra la información de contacto de los funcionarios que
              hacen parte de ACTIVA.
            </p>
          </div>

          <div className={styles.directorioCard}>
            <div className={styles.directorioIconWrapper}>
              <div className={styles.directorioIcon}>
                <File size={42} weight="duotone" />
              </div>
            </div>

            <div className={styles.directorioCardContent}>
              <h2>Directorio Institucional</h2>

              <p>
                Consulta y descarga el directorio actualizado de funcionarios
                de ACTIVA y encuentra la información necesaria para establecer
                contacto con nuestra entidad.
              </p>

              <a
                href={`${import.meta.env.BASE_URL}documentos/Directorio-Institucional.xlsx`}
                className={styles.directorioDownload}
                download
              >
                <Download size={20} weight="bold" />
                <span>Descarga el Directorio Institucional</span>
              </a>

              <div className={styles.directorioFileInfo}>
                <FileXls size={20} weight="duotone" />
                Archivo Excel · Julio 2026
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DirectorioInstitucional;
