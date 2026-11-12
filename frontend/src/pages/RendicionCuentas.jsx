
import {
  FilePdf,
  ArrowDown,
  ArrowUpRight,
} from '@phosphor-icons/react';

import styles from '../components/style/RendicionCuentas.module.css';
import imagenInforme from '../assets/informe.jpg';

// INFORMES DE GESTIÓN
const informesGestion = [
  {
    anio: '2021',
    archivo: '/documentos/participa/informe-gestion-2021.pdf',
  },
  {
    anio: '2022',
    archivo: '/documentos/participa/informe-gestion-2022.pdf',
  },
  {
    anio: '2023',
    archivo: '/documentos/participa/informe-gestion-2023.pdf',
  },
  {
    anio: '2024',
    archivo: '/documentos/participa/informe-gestion-2024.pdf',
  },
];

// RENDICIÓN DE CUENTAS GOBERNACIÓN
const rendicionesGobernacion = [
  {
    anio: '2021',
    url: 'https://www.antioquia.gov.co/index.php/rendicion-de-cuentas-2021',
  },
  {
    anio: '2022',
    url: 'https://www.antioquia.gov.co/index.php/rendicion-de-cuentas-2022',
  },
  {
    anio: '2023',
    url: 'https://www.antioquia.gov.co/index.php/rendicion-de-cuentas-2023',
  },
  {
    anio: '2024',
    url: 'https://www.antioquia.gov.co/index.php/rendicion-de-cuentas-2024',
  },
];

function RendicionCuentas() {
  return (
    <main className={styles.rendicionPage}>

      {/* ENCABEZADO */}
      <header className={styles.hero}>
        <div className={styles.heroDecoracion}></div>

        <div className={styles.heroContenido}>
          <span className={styles.heroEtiqueta}>ACTIVA</span>
          <h1>Rendición de Cuentas</h1>
        </div>
      </header>

      <div className={styles.container}>

        {/* INTRODUCCIÓN */}
        <section className={styles.introduccionSection}>

          <p className={styles.introduccionTexto}>
            El proceso de rendición de cuentas se entiende como la obligación
            de las entidades públicas de informar, dialogar y dar respuesta
            clara, concreta y eficaz a las peticiones y necesidades de los
            grupos de interés, sobre la gestión realizada, los resultados de
            sus planes institucionales y el respeto, garantía y protección
            de los derechos.
          </p>

          <a
            href="/documentos/participa/rendicion-cuentas-2025.pdf"
            className={styles.botonPrincipal}
            download
          >
            <FilePdf size={23} weight="fill" />
            Rendición de Cuentas 2025
            <ArrowDown size={20} weight="bold" />
          </a>

        </section>

        {/* INFORMES DE GESTIÓN */}
        <section className={styles.informesSection}>

          <div className={styles.sectionHeading}>
            <span>ACTIVA</span>
            <h2>Informes de Gestión</h2>
            <p>
              Consulta y descarga los informes de gestión de cada año.
            </p>
          </div>

          <div className={styles.graficasGrid}>

            {informesGestion.map((informe) => (
              <figure
                className={styles.graficaItem}
                key={informe.anio}
              >

                <img
                  src={imagenInforme}
                  alt={`Gráfica del Informe de Gestión ${informe.anio}`}
                  className={styles.graficaImagen}
                />

                <figcaption className={styles.graficaContenido}>

                  <h3>Informe de Gestión {informe.anio}</h3>

                  <a
                    href={informe.archivo}
                    className={styles.botonDescarga}
                    download
                  >
                    <FilePdf size={19} weight="fill" />
                    Descargar PDF
                    <ArrowDown size={17} weight="bold" />
                  </a>

                </figcaption>

              </figure>
            ))}

          </div>
        </section>

        {/* RENDICIÓN DE CUENTAS GOBERNACIÓN */}
        <section className={styles.gobernacionSection}>

          <div className={styles.sectionHeading}>
            <span>ANTIOQUIA</span>

            <h2>
              Rendición de Cuentas Gobernación de Antioquia
            </h2>

            <p>
              Consulta los informes de rendición de cuentas de la
              Gobernación de Antioquia.
            </p>
          </div>

          <div className={styles.nubeGrid}>

            {rendicionesGobernacion.map((item, index) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.nubeCard} ${styles[`nube${index + 1}`]}`}
                key={item.anio}
              >

                <span className={styles.nubeBultoUno}></span>
                <span className={styles.nubeBultoDos}></span>
                <span className={styles.nubeBultoTres}></span>

                <span className={styles.nubeContenido}>

                  <span className={styles.nubeEtiqueta}>
                    GOBERNACIÓN DE ANTIOQUIA
                  </span>

                  <strong>
                    Rendición de Cuentas {item.anio}
                  </strong>

                  <span className={styles.nubeEnlace}>
                    Consultar informe
                    <ArrowUpRight size={20} weight="bold" />
                  </span>

                </span>

              </a>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}

export default RendicionCuentas;
