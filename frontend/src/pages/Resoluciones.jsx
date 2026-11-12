
import styles from '../components/style/Resoluciones.module.css';
import { FilePdf } from '@phosphor-icons/react';

const resoluciones = [
  {
    numero: '01',
    anio: '2026',
    documentos: [
      {
        titulo: 'Resolución 202605000009',
        descripcion: 'Documento PDF · Vigencia 2026',
        url: 'https://activa.com.co/wp-content/uploads/2026/07/ESCALA-SALARIAL-EMPRESA-DE-PARQUES-Y-EVENTOS-DE-ANTIOQUIA-ACTIVA.pdf',
      },
    ],
  },
  {
    numero: '02',
    anio: '2025',
    documentos: [
      ...Array.from({ length: 9 }, (_, i) => ({
        titulo: `Resolución ${String(i + 1).padStart(3, '0')}`,
        descripcion: 'Documento PDF · Vigencia 2025',
        url: `https://activa.com.co/wp-content/uploads/2025/03/RESOLUCION-${String(i + 1).padStart(3, '0')}-DE-2025${i === 0 ? '-202503000003' : ''}.pdf`,
      })),
      {
        titulo: 'Resolución 202505000020',
        descripcion: 'Documento PDF · Vigencia 2025',
        url: 'https://activa.com.co/wp-content/uploads/2025/03/RESOLUCION-202505000020-DE-2025.pdf',
      },
      ...[
        '021', '025', '026', '027', '028', '030', '034',
        '039', '041', '042', '043', '053', '075', '135', '136',
      ].map((numero) => ({
        titulo: `Resolución 202505000${numero}`,
        descripcion: 'Documento PDF · Vigencia 2025',
        url: '#',
      })),
    ],
  },
  {
    numero: '03',
    anio: '2024',
    documentos: [
      {
        titulo: 'Resoluciones 001 a 017',
        descripcion: 'Documentos PDF · Vigencia 2024',
        url: '#',
      },
      {
        titulo: 'Resoluciones 032 a 086',
        descripcion: 'Documentos PDF · Vigencia 2024',
        url: '#',
      },
    ],
  },
  {
    numero: '04',
    anio: '2023',
    documentos: [
      {
        titulo: 'Resoluciones 001 a 148',
        descripcion: 'Consulta las resoluciones publicadas durante 2023',
        url: '#',
      },
    ],
  },
  {
    numero: '05',
    anio: '2022',
    documentos: [
      {
        titulo: 'Resoluciones 001 a 090',
        descripcion: 'Consulta las resoluciones publicadas durante 2022',
        url: '#',
      },
    ],
  },
  {
    numero: '06',
    anio: '2021',
    documentos: [
      {
        titulo: 'Resoluciones 001 a 043',
        descripcion: 'Consulta las resoluciones publicadas durante 2021',
        url: '#',
      },
    ],
  },
];

function Resoluciones() {
  return (
    <main className={styles.resolucionesPage}>
      {/* HERO */}
      <header className={styles.resolucionesHero}>
        <div
          className={`${styles.resolucionesHeroDecoration} ${styles.resolucionesDecorationOne}`}
        />
        <div
          className={`${styles.resolucionesHeroDecoration} ${styles.resolucionesDecorationTwo}`}
        />

        <div className={styles.resolucionesHeroContent}>
          <span className={styles.resolucionesLabel}>NORMATIVA</span>

          <h1>Resoluciones</h1>

          <p>
            Consulta las resoluciones expedidas por la Empresa de Parques y
            Eventos de Antioquia – ACTIVA.
          </p>
        </div>
      </header>

      {/* RESOLUCIONES POR AÑO */}
      <section className={styles.resolucionesModules}>
        <div className={styles.resolucionesContainer}>
          {resoluciones.map((modulo) => (
            <details
              className={styles.resolucionesModule}
              key={modulo.anio}
            >
              <summary>
                <div className={styles.resolucionesModuleInfo}>
                  <div className={styles.resolucionesModuleNumber}>
                    {modulo.numero}
                  </div>

                  <div className={styles.resolucionesModuleTitle}>
                    Resoluciones {modulo.anio}
                  </div>
                </div>

                <div className={styles.resolucionesModuleToggle}>+</div>
              </summary>

              <div className={styles.resolucionesModuleContent}>
                <div className={styles.resolucionesLinksGrid}>
                  {modulo.documentos.map((documento, index) => (
                    <a
                      key={`${modulo.anio}-${index}`}
                      href={documento.url}
                      className={styles.resolucionesDocument}
                      target={documento.url !== '#' ? '_blank' : undefined}
                      rel={
                        documento.url !== '#'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      <div className={styles.resolucionesDocumentIcon}>
                        <FilePdf weight="fill" />
                      </div>

                      <div className={styles.resolucionesDocumentText}>
                        <strong>{documento.titulo}</strong>
                        <span>{documento.descripcion}</span>
                      </div>

                      <div className={styles.resolucionesDocumentArrow}>
                        ↗
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Resoluciones;
