
import {
  ArrowUpRight,
  FilePdf,
  FileText,
  Plus,
  ChatCenteredText,
} from '@phosphor-icons/react';

import styles from '../components/style/Planeacion.module.css';

const modulos = [
  {
    numero: '01',
    titulo: 'Presupuesto y ejecución presupuestal',
    documentos: [
      {
        titulo: 'Presupuesto general de ingresos, gastos e inversión',
        descripcion: 'Resolución de liquidación del presupuesto 2024',
        url: 'https://activa.com.co/wp-content/uploads/2024/07/1.-Resolucion_Liquidacion-del-presupuesto-2024.pdf',
      },
      {
        titulo: 'Ejecución ACTIVA — Ingresos y gastos 2024',
        descripcion: 'Ejecución presupuestal de la vigencia 2024',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/Ejecucion-ACTIVA-Ingresos-y-gastos-2024.pdf',
      },
      {
        titulo: 'Ejecución ACTIVA — Ingresos y gastos 31/07/2025',
        descripcion: 'Ejecución presupuestal con corte a julio de 2025',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/Ejecucion-ACTIVA-Ingresos-y-Gastos-31072025.pdf',
      },
    ],
  },
  {
    numero: '02',
    titulo: 'Informes de gestión, evaluación y auditoría',
    documentos: [
      {
        titulo: 'Informe de gestión, evaluación y auditoría 1',
        descripcion: 'Informe de gestión de la Dirección Administrativa y Financiera',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/g.Informes-de-gestio%CC%81n-evaluacio%CC%81n-y-auditori%CC%81a1.pdf',
      },
      {
        titulo: 'Informe de gestión, evaluación y auditoría 2',
        descripcion: 'Informe de gestión de la vigencia 2022',
        url: 'https://www.activa.com.co/wp-content/uploads/2023/12/g.Informes-de-gestio%CC%81n-evaluacio%CC%81n-y-auditori%CC%81a2.pdf',
      },
    ],
  },
  {
    numero: '03',
    titulo: 'Informes trimestrales sobre acceso a la información',
    documentos: [
      ...[1, 2, 3].map((numero) => ({
        titulo: `Informe trimestral de acceso a la información ${numero}`,
        descripcion: 'Informe sobre acceso a la información pública',
        url: `https://activa.com.co/wp-content/uploads/2023/12/j.-informes-trimetrales-sobre-acceso-a-la-informacio%CC%81n${numero}.pdf`,
      })),
    ],
  },
  {
    numero: '04',
    titulo: 'Planes institucionales',
    documentos: [
      {
        titulo: 'Matriz de riesgos',
        descripcion: 'Planes y matriz institucional de riesgos',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-MATRIZ-DE-RIESGOS.pdf',
      },
      {
        titulo: 'Programa de Gestión Documental — PGD',
        descripcion: 'Programa institucional de gestión documental',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-PGD.pdf',
      },
      {
        titulo: 'Plan Anticorrupción y de Atención al Ciudadano 2023',
        descripcion: 'Plan institucional de transparencia y atención ciudadana',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-PLAN-ANTICORRUPCION-Y-DE-AT-ENCION-AL-CIUDADANO-2023.pdf',
      },
      {
        titulo: 'Plan Anticorrupción y Atención al Ciudadano 2024',
        descripcion: 'Seguimiento correspondiente a la vigencia 2024',
        url: 'https://activa.com.co/wp-content/uploads/2025/02/Plan-Anticorrupcion-y-Atencion-al-Ciudadano_-tercer-cuatrimestre-ano-2024.pdf',
      },
      {
        titulo: 'Plan anual de trabajo SGSST 2023',
        descripcion: 'Seguridad y Salud en el Trabajo',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-anual-de-trabajo-SGSST-2023.pdf',
      },
      {
        titulo: 'Plan anual de vacantes',
        descripcion: 'Planeación de vacantes institucionales',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-anual-de-vacantes.pdf',
      },
      {
        titulo: 'Plan de bienestar social, laboral e incentivos 2023',
        descripcion: 'Bienestar e incentivos institucionales',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-de-bienestar-social-laboral-e-incentivos-2023.pdf',
      },
      {
        titulo: 'Plan de previsión de recursos humanos',
        descripcion: 'Planeación del recurso humano institucional',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-de-prevision-de-recursos-humanos.pdf',
      },
      {
        titulo: 'Plan Estratégico de Talento Humano 2023',
        descripcion: 'Planeación estratégica del talento humano',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-Estrategico-de-Talento-Humano-2023.pdf',
      },
      {
        titulo: 'Plan Estratégico de Tecnologías de la Información — PETI 2025',
        descripcion: 'Planeación estratégica de tecnologías de la información',
        url: 'https://activa.com.co/wp-content/uploads/2025/06/PLAN-ESTRATEGICO-DE-TECNOLOGIAS-DE-LA-INFORMACION-PETI-version-4-1.pdf',
      },
      {
        titulo: 'Plan Institucional de Capacitación',
        descripcion: 'Plan de formación y capacitación institucional',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/k.Planes-Plan-Institucional-de-Capacitacio%CC%81n.pdf',
      },
    ],
  },
  {
    numero: '05',
    titulo: 'Políticas y lineamientos de gestión',
    documentos: [
      {
        titulo: 'Política de Administración del Riesgo',
        descripcion: 'Lineamientos institucionales para la administración del riesgo',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/n.-Poli%CC%81tica-de-Administracio%CC%81n-del-Riesgo.pdf',
      },
      {
        titulo: 'Política de privacidad y tratamiento de datos personales',
        descripcion: 'Política institucional de protección y tratamiento de datos',
        url: 'https://activa.com.co/wp-content/uploads/2023/12/m.-Poli%CC%81tica-de-privacidad-y-tratamiento-de-datos-personales..pdf',
      },
    ],
  },
  {
    numero: '06',
    titulo: 'Control, auditoría y planes de mejoramiento',
    documentos: [
      {
        titulo: 'Informe definitivo de actuación especial de fiscalización — Vigencia 2023',
        descripcion: 'Informe de fiscalización institucional',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-ACTUACION-ESPECIAL-DE-FISCALIZACION-VIGENCIA-2023.pdf',
      },
      {
        titulo: 'Informe definitivo de auditoría de cumplimiento contractual — Vigencia 2023',
        descripcion: 'Auditoría de cumplimiento contractual',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-AUDITORIA-DE-CUMPLIMIENTO-CONTRATCTUAL-VIGENCIA-2023.pdf',
      },
      {
        titulo: 'Informe definitivo de cumplimiento — Vigencia 2022',
        descripcion: 'Informe definitivo de auditoría y cumplimiento',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-DE-CUMPLIMIENTO-_viegencia-2022.pdf',
      },
      {
        titulo: 'Informe definitivo de revisión de la cuenta — Vigencia 2023',
        descripcion: 'Revisión de la cuenta institucional',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-REVISION-DE-LA-CUENT_viegencia-2023.pdf',
      },
      {
        titulo: 'Seguimiento al Plan de Mejoramiento 2022 y 2023',
        descripcion: 'Seguimiento de acciones de mejoramiento',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/Seguimiento-Plan-de-mejoramiento-2022-y-2023.pdf',
      },
      {
        titulo: 'Remisión Plan de Mejoramiento 2024',
        descripcion: 'Documento de remisión del plan de mejoramiento',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/202403000283-2024-12-13-Remision-Plan-de-Mejoramiento.pdf',
      },
    ],
  },
  {
    numero: '07',
    titulo: 'Información para Contraloría y seguimiento',
    documentos: [
      {
        titulo: 'Actuación especial de fiscalización — Vigencia 2023',
        descripcion: 'Informe definitivo de fiscalización',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-ACTUACION-ESPECIAL-DE-FISCALIZACION-VIGENCIA-2023.pdf',
      },
      {
        titulo: 'Informe de cumplimiento — Vigencia 2022',
        descripcion: 'Informe definitivo de cumplimiento de Contraloría',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-DE-CUMPLIMIENTO-_viegencia-2022.pdf',
      },
      {
        titulo: 'Revisión de la cuenta — Vigencia 2023',
        descripcion: 'Informe definitivo de revisión',
        url: 'https://activa.com.co/wp-content/uploads/2025/08/INFORME-DEFINITIVO-REVISION-DE-LA-CUENT_viegencia-2023.pdf',
      },
    ],
  },
  {
    numero: '08',
    titulo: 'Plan Institucional de Archivos — PINAR',
    documentos: [
      {
        titulo: 'Plan Institucional de Archivos — PINAR',
        descripcion: 'Planeación institucional de la gestión de archivos',
        url: 'https://activa.com.co/wp-content/uploads/2025/11/Plan-Institucional-de-Archivos-PINAR.pdf',
      },
    ],
  },
];

function Planeacion() {
  return (
    <main className={styles.planeacionPage}>
      {/* HERO */}
      <section className={styles.planeacionHero}>
        <div
          className={`${styles.planeacionHeroDecoration} ${styles.planeacionDecorationOne}`}
        />
        <div
          className={`${styles.planeacionHeroDecoration} ${styles.planeacionDecorationTwo}`}
        />

        <div className={styles.planeacionHeroContent}>
          <span className={styles.planeacionLabel}>
            TRANSPARENCIA Y GESTIÓN INSTITUCIONAL
          </span>

          <h1>Planeación</h1>

          <p>
            Planeación, presupuesto, informes y documentos de gestión
            de la Empresa de Parques y Eventos de Antioquia — ACTIVA.
          </p>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className={styles.planeacionModules}>
        <div className={styles.planeacionContainer}>
          {modulos.map((modulo) => (
            <details
              className={styles.planeacionModule}
              key={modulo.numero}
            >
              <summary>
                <div className={styles.planeacionModuleInfo}>
                  <span className={styles.planeacionModuleNumber}>
                    {modulo.numero}
                  </span>

                  <span className={styles.planeacionModuleTitle}>
                    {modulo.titulo}
                  </span>
                </div>

                <span className={styles.planeacionModuleToggle}>
                  <Plus size={21} weight="bold" />
                </span>
              </summary>

              <div className={styles.planeacionModuleContent}>
                <div className={styles.planeacionLinksGrid}>
                  {modulo.documentos.map((documento, index) => (
                    <a
                      key={`${modulo.numero}-${index}`}
                      href={documento.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.planeacionDocument}
                    >
                      <span className={styles.planeacionDocumentIcon}>
                        {modulo.numero === '05' ? (
                          <FileText size={25} weight="bold" />
                        ) : (
                          <FilePdf size={25} weight="bold" />
                        )}
                      </span>

                      <span className={styles.planeacionDocumentText}>
                        <strong>{documento.titulo}</strong>
                        <span>{documento.descripcion}</span>
                      </span>

                      <span className={styles.planeacionDocumentArrow}>
                        <ArrowUpRight size={19} weight="bold" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </details>
          ))}

          {/* BOTÓN FINAL */}
          <div className={styles.planeacionPqrs}>
            <a
              href="./"
              className={styles.planeacionPqrsButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChatCenteredText size={19} weight="bold" />
              Consultar PQRSDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Planeacion;
