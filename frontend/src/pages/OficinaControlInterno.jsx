
import {
  Plus,
  FilePdf,
  FileText,
  ChartLineUp,
  ShieldCheck,
  Copyright,
  ChatText,
  ChatCenteredText,
  ArrowUpRight,
} from '@phosphor-icons/react';

import styles from '../components/style/OficinaControlInterno.module.css';

const modulos = [
  {
    numero: '01',
    titulo: 'PLAN ANUAL DE AUDITORÍA',
    documentos: [
      { titulo: 'Plan Anual de Auditorías 2022', descripcion: 'Documento PDF', icono: FilePdf },
      { titulo: 'Plan Anual de Auditorías 2023', descripcion: 'Documento PDF', icono: FilePdf },
      { titulo: 'Plan Anual de Auditorías 2024', descripcion: 'Documento PDF', icono: FilePdf },
      { titulo: 'Plan Anual de Auditorías 2025', descripcion: 'Documento PDF', icono: FilePdf },
    ],
  },
  {
    numero: '02',
    titulo: 'CÓDIGO DE ÉTICA Y ESTATUTO DE AUDITORÍA INTERNA',
    documentos: [
      { titulo: 'Código de Ética ACTIVA', descripcion: 'Documento institucional', icono: FileText },
      { titulo: 'Estatuto de Control Interno ACTIVA', descripcion: 'Resolución institucional', icono: FileText },
    ],
  },
  {
    numero: '03',
    titulo: 'EVALUACIÓN INDEPENDIENTE DEL SCI',
    documentos: [
      { titulo: 'Evaluación Independiente del SCI — Segundo Semestre 2021', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Primer Semestre 2022', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Segundo Semestre 2022', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Primer Semestre 2023', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Segundo Semestre 2023', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Primer Semestre 2024', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Segundo Semestre 2024', descripcion: 'Informe de evaluación', icono: ChartLineUp },
      { titulo: 'Evaluación Independiente del SCI — Primer Semestre 2025', descripcion: 'Informe de evaluación', icono: ChartLineUp },
    ],
  },
  {
    numero: '04',
    titulo: 'INFORMES DE AUSTERIDAD EN EL GASTO',
    documentos: [
      { titulo: 'Informes de Austeridad en el Gasto', descripcion: 'Consulta los informes disponibles por vigencia y periodo.', icono: FilePdf },
    ],
  },
  {
    numero: '05',
    titulo: 'PLAN ANTICORRUPCIÓN Y ATENCIÓN AL CIUDADANO (PAAC)',
    documentos: [
      { titulo: 'Seguimientos al Plan Anticorrupción', descripcion: 'Consulta los informes de seguimiento disponibles.', icono: ShieldCheck },
    ],
  },
  {
    numero: '06',
    titulo: 'DERECHOS DE AUTOR',
    documentos: [
      { titulo: 'Informes y certificados de Derechos de Autor', descripcion: 'Consulta los documentos disponibles por vigencia.', icono: Copyright },
    ],
  },
  {
    numero: '07',
    titulo: 'PTET',
    documentos: [
      { titulo: 'Informe Seguimiento PTEP ACTIVA 2025', descripcion: 'Informe de seguimiento', icono: ShieldCheck },
    ],
  },
  {
    numero: '08',
    titulo: 'SEGUIMIENTO A LAS PQRS',
    documentos: [
      { titulo: 'Seguimiento a las PQRS', descripcion: 'Consulta los informes de seguimiento disponibles.', icono: ChatText },
    ],
  },
];

function OficinaControlInterno() {
  return (
    <main className={styles.controlInternoPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Oficina de Control Interno</h1>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className={styles.modules}>
        <div className={styles.modulesContainer}>

          {modulos.map((modulo) => (
            <details className={styles.module} key={modulo.numero}>

              <summary>
                <div className={styles.moduleInfo}>
                  <span className={styles.moduleNumber}>
                    {modulo.numero}
                  </span>

                  <span className={styles.moduleTitle}>
                    {modulo.titulo}
                  </span>
                </div>

                <span className={styles.moduleToggle}>
                  <Plus />
                </span>
              </summary>

              <div className={styles.moduleContent}>
                <div className={styles.linksGrid}>

                  {modulo.documentos.map((documento, index) => {
                    const Icono = documento.icono;

                    return (
                      <a
                        href="#"
                        className={styles.moduleLink}
                        key={index}
                      >
                        <div className={styles.linkIcon}>
                          <Icono />
                        </div>

                        <div className={styles.linkText}>
                          <strong>{documento.titulo}</strong>
                          <span>{documento.descripcion}</span>
                        </div>

                        <ArrowUpRight className={styles.linkArrow} />
                      </a>
                    );
                  })}

                </div>
              </div>

            </details>
          ))}

          {/* BOTÓN PQRSDF */}
          <div className={styles.pqrs}>
            <a href="pqrsdf.html" className={styles.pqrsButton}>
              <ChatCenteredText />
              Ir a PQRSDF
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default OficinaControlInterno;
