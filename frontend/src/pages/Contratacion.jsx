
import { useState } from 'react';
import {
  ArrowUpRight,
  CaretDown,
  FileText,
  FilePdf,
} from '@phosphor-icons/react';

import styles from '../components/style/Contratacion.module.css';

const paginaOficial = 'https://activa.com.co/contratacion/';

const vigencias = [
  {
    anio: '2026',
    procesos: [
      {
        nombre: 'Invitación Abierta 004 - 2026',
        documentos: [
          {
            nombre: 'Aviso convocatoria Invitación Abierta 004-2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/11/AVISO-CONVOCATORIA-INVITACION-ABIERTA-004-2026.pdf',
          },
          {
            nombre: 'Conformación Comité Evaluador',
            url: 'https://activa.com.co/wp-content/uploads/2026/11/CONFORMACION-COMITE-EVALUADOR-PROCESO-IA-004-2026.pdf',
          },
          {
            nombre: 'Resolución de apertura Invitación Abierta 004-2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/11/RESOLUCION-APERTURA-INVITACION-ABIERTA-004-2026.pdf',
          },
          {
            nombre: 'Invitación Abierta 004 de 2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/11/Invitacion-Abierta-004-de-2026-FIRMADO.pdf',
          },
          { nombre: 'Anexo 1. Matriz de riesgos' },
          { nombre: 'Anexo 2. Carta de presentación de la propuesta' },
          { nombre: 'Anexo 3. Pago seguridad social y parafiscales' },
          { nombre: 'Anexo 4. Compromiso anticorrupción' },
          { nombre: 'Anexo 5. Certificado de inhabilidades e incompatibilidades' },
          { nombre: 'Anexo 6. Acuerdo de niveles de servicio ANS' },
          { nombre: 'Anexo 7. Acuerdo de confidencialidad' },
          { nombre: 'Anexo 8. Aceptación Gestión Comercial' },
          { nombre: 'Anexo 9. Cumplimiento y aceptación tarifario' },
          { nombre: 'Anexo 10. Modelo acuerdo de consorcio' },
          { nombre: 'Anexo 11. Modelo acuerdo unión temporal' },
          { nombre: 'Anexo 12. Capacidad financiera' },
          { nombre: 'Anexo 13. Experiencia del proponente' },
          { nombre: 'Anexo 14. Carta de compromiso del personal mínimo requerido' },
          { nombre: 'Anexo 15. Tarifario operación logística integral' },
          { nombre: 'Anexo 15.1. Tarifario alimentación' },
          { nombre: 'Anexo 15.2. Tarifario impresos' },
          { nombre: 'Anexo 16. Experiencia adicional del proponente' },
          { nombre: 'Anexo 17. Carta de compromiso personal adicional' },
          { nombre: 'Anexo 18. Certificación criterios diferenciales' },
        ],
      },
      {
        nombre: 'Lista Corta LC001 - 2026',
        documentos: [
          {
            nombre: 'Aviso convocatoria LC001-2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/10/AVISO-CONVOCATORIA-LC001-2026.pdf',
          },
          {
            nombre: 'Convocatoria veedurías LC001-2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/10/CONVOCATORIA-VEEDURIAS-LC001-2026.pdf',
          },
          {
            nombre: 'Resolución de apertura Lista Corta LC001-2026',
            url: 'https://activa.com.co/wp-content/uploads/2026/10/RESOLUCION-202605000101-DEL-2026-POR-MEDIO-DE-LA-CUAL-SE-ORDENA-LA-APERTURA-DEL-PROCESO-DE-CONTRATACION-BAJO-LA-MODALIDAD-DE-LISTA-CORTA-LC001-DE-2026.pdf',
          },
        ],
      },
      {
        nombre: 'Invitación Abierta con precalificación 003 - 2026 (Tulio Ospina)',
        documentos: [
          { nombre: 'Aviso convocatoria Invitación Abierta 003-2026' },
          { nombre: 'Invitación Abierta con precalificación 003-2026' },
          { nombre: 'Cronograma actualizado IA003-2026' },
          { nombre: 'Resolución inicio fase de precalificación 003-2026' },
          { nombre: 'Presupuesto interventoría, componentes AIU y tabla de salarios' },
          { nombre: 'Anexo 1. Manifestación de interés' },
          { nombre: 'Anexo 2. Modelo de acuerdo de seriedad' },
          { nombre: 'Anexo 3. Estructura organizacional' },
          { nombre: 'Anexo 4. Probidad' },
          { nombre: 'Anexo 5. Experiencia' },
          { nombre: 'Anexo 6A. Patrimonio' },
          { nombre: 'Anexo 6B. Patrimonio' },
          { nombre: 'Anexo 6C. Endeudamiento' },
          { nombre: 'Anexo 6D. Endeudamiento' },
          { nombre: 'Anexo 7. Acuerdo de confidencialidad' },
          { nombre: 'Anexo 8. Experiencia similares' },
          { nombre: 'Anexo 9. Beneficiarios reales' },
          { nombre: 'Matriz de riesgos previsibles' },
          { nombre: 'Respuesta a observaciones' },
          { nombre: 'Acta de cierre y recibo' },
          { nombre: 'Informe preliminar' },
          { nombre: 'Informe final' },
          { nombre: 'Resolución lista de precalificados' },
        ],
      },
      {
        nombre: 'Invitación Abierta con precalificación 002 - 2026 (Tulio Ospina)',
        documentos: [
          { nombre: 'Resolución Invitación Abierta 002 de 2026' },
          { nombre: 'Documento de invitación definitivo a precalificar' },
          { nombre: 'Aviso convocatoria invitación a precalificar' },
          { nombre: 'Anexo 1. Manifestación de interés' },
          { nombre: 'Anexo 2. Modelo de acuerdo de seriedad' },
          { nombre: 'Anexo 3. Estructura organizacional' },
          { nombre: 'Anexo 4. Probidad' },
          { nombre: 'Anexo 5. Experiencia' },
          { nombre: 'Anexo 6A. Patrimonio' },
          { nombre: 'Anexo 6B. Patrimonio' },
          { nombre: 'Anexo 6C. Endeudamiento' },
          { nombre: 'Anexo 6D. Endeudamiento' },
          { nombre: 'Anexo 7. Acuerdo de confidencialidad' },
          { nombre: 'Anexo 8. Experiencia similares' },
          { nombre: 'Anexo 9. Beneficiarios reales' },
          { nombre: 'Matriz de riesgos previsibles' },
          { nombre: 'Cronograma de invitación abierta' },
          { nombre: 'Acta preliminar de estimación y asignación de riesgos' },
          { nombre: 'Adenda N.º 1' },
          { nombre: 'Adenda N.º 2' },
          { nombre: 'Observaciones recibidas' },
          { nombre: 'Respuesta a observaciones' },
          { nombre: 'Presupuesto, interventoría, componentes AIU y tabla de salarios' },
          { nombre: 'Acta de cierre y recibo' },
          { nombre: 'Informe preliminar de requisitos habilitantes' },
          { nombre: 'Informe de subsanación' },
          { nombre: 'Informe final' },
          { nombre: 'Resolución declara desierto el proceso' },
        ],
      },
      {
        nombre: 'Invitación Abierta 001 - 2026',
        documentos: [
          { nombre: 'Invitación Abierta 001 de 2026' },
          { nombre: 'Resolución 202605000016 de 2026' },
          { nombre: 'Aviso convocatoria Invitación Abierta 001-2026' },
          { nombre: 'Cronograma del proceso 2026' },
          { nombre: 'Estudio previo Invitación Abierta 2026' },
          { nombre: 'Anexo 1. Matriz de riesgos' },
          { nombre: 'Anexo 2. Carta de presentación de la propuesta' },
          { nombre: 'Anexo 3. Pago seguridad social y parafiscales' },
          { nombre: 'Anexo 4. Compromiso anticorrupción' },
          { nombre: 'Anexo 5. Certificado de inhabilidades e incompatibilidades' },
          { nombre: 'Anexo 6. Acuerdo de niveles de servicio ANS' },
          { nombre: 'Anexo 7. Acuerdo de confidencialidad' },
          { nombre: 'Anexo 8. Aceptación Gestión Comercial' },
          { nombre: 'Anexo 9. Cumplimiento y aceptación tarifario' },
          { nombre: 'Anexo 10. Modelo acuerdo de consorcio' },
          { nombre: 'Anexo 11. Modelo acuerdo unión temporal' },
          { nombre: 'Anexo 12. Capacidad financiera' },
          { nombre: 'Anexo 13. Experiencia del proponente' },
          { nombre: 'Anexo 14. Carta de compromiso del personal mínimo requerido' },
          { nombre: 'Anexo 15. Tarifario de referencia' },
          { nombre: 'Anexo 16. Experiencia adicional del proponente' },
          { nombre: 'Anexo 17. Carta de compromiso personal adicional' },
          { nombre: 'Anexo 18. Certificaciones' },
          { nombre: 'SBS-F06. Minuta del contrato' },
          { nombre: 'Tarifario consolidado' },
          { nombre: 'Adenda 01' },
          { nombre: 'Adenda 02' },
          { nombre: 'Acta de cierre y recibo de ofertas' },
          { nombre: 'Informe preliminar Invitación 001-2026' },
          { nombre: 'Adenda 03' },
          { nombre: 'Informe final Invitación Abierta' },
          { nombre: 'Resolución de adjudicación Invitación Abierta 001-2026' },
        ],
      },
      {
        nombre: 'Planes de Adquisiciones',
        documentos: [
          { nombre: 'Adquisiciones PAA Acta 46' },
          { nombre: 'Adquisiciones PAA Preacta 47 y 48' },
          { nombre: 'Plan Anual de Adquisiciones PAA Octubre 05' },
        ],
      },
      {
        nombre: 'Formatos o Modelos de Contrato',
        documentos: [
          { nombre: 'SBS-F02. Orden de compra de bienes y servicios' },
          { nombre: 'SBS-F06. Minuta del contrato' },
          { nombre: 'SBS-F31. Lista de chequeo lista corta' },
        ],
      },
    ],
  },
  {
    anio: '2025',
    procesos: [
      {
        nombre: 'Lista Corta LC004 - 2025',
        documentos: [
          { nombre: 'Aviso convocatoria LC004-2025' },
          { nombre: 'Convocatoria veedurías LC004-2025' },
          { nombre: 'Resolución de apertura Lista Corta LC004-2025' },
          { nombre: 'Acta de cierre y recibo de ofertas LC004-2025' },
          { nombre: 'Resolución de adjudicación LC004-2025' },
        ],
      },
      {
        nombre: 'Lista Corta LC003 - 2025',
        documentos: [
          { nombre: 'Resolución de apertura Lista Corta LC003-2025' },
          { nombre: 'Aviso convocatoria LC003-2025' },
          { nombre: 'Convocatoria veedurías LC003-2025' },
          { nombre: 'Acta de recibo LC003' },
          { nombre: 'Resolución declara desierto el proceso LC003-2025' },
        ],
      },
      {
        nombre: 'Lista Corta LC002 - 2025',
        documentos: [
          { nombre: 'Aviso convocatoria LC002-2025' },
          { nombre: 'Convocatoria veedurías LC002-2025' },
          { nombre: 'Resolución Lista Corta 002 de 2025' },
        ],
      },
      {
        nombre: 'Invitación Abierta 001 - 2025',
        documentos: [
          { nombre: 'Aviso convocatoria Invitación Abierta 001-2025' },
          { nombre: 'Invitación Abierta 001 de 2025' },
          { nombre: 'Conformación Comité Evaluador' },
          { nombre: 'Estudio previo' },
          { nombre: 'Resolución de apertura' },
          ...Array.from({ length: 18 }, (_, i) => ({
            nombre: `Anexo ${i + 1} - Documentación del proceso`,
          })),
          { nombre: 'Adenda 1' },
          { nombre: 'Formato tarifario categoría A' },
          { nombre: 'Formato tarifario categoría B' },
          { nombre: 'Respuesta a observaciones' },
          { nombre: 'Adenda 2' },
          { nombre: 'Adenda 3' },
          { nombre: 'Informe preliminar' },
          { nombre: 'Adenda 4' },
          { nombre: 'Adenda 5' },
          { nombre: 'Informe final de evaluación' },
          { nombre: 'Resolución de adjudicación' },
        ],
      },
      {
        nombre: 'Convocatoria Veedurías Ciudadanas LC001-2025',
        documentos: [
          { nombre: 'Convocatoria veedurías ciudadanas LC001-2025' },
          { nombre: 'Resolución 202505000093' },
        ],
      },
    ],
  },
  {
    anio: '2024',
    procesos: [
      {
        nombre: 'Invitación Abierta 001 - 2024',
        documentos: [
          { nombre: 'Respuesta observaciones borrador' },
          { nombre: 'Cronograma definitivo' },
          { nombre: 'Borrador estudio previo' },
          ...Array.from({ length: 26 }, (_, i) => ({
            nombre: `Anexo ${i + 1} - Documentación de la invitación`,
          })),
          { nombre: 'Estudios previos definitivos' },
          { nombre: 'Condiciones invitación abierta definitiva' },
          ...Array.from({ length: 9 }, (_, i) => ({
            nombre: `Tarifario definitivo - Subregión ${i + 1}`,
          })),
          { nombre: 'Adenda N.º 01' },
          { nombre: 'Respuesta a observaciones' },
          { nombre: 'Adenda N.º 02' },
          { nombre: 'Adenda N.º 03' },
          { nombre: 'Acta apertura de sobres' },
          { nombre: 'Adenda N.º 04' },
          { nombre: 'Aclaración Adenda N.º 04' },
          { nombre: 'Verificación de requisitos habilitantes y subsanaciones' },
          { nombre: 'Adenda N.º 05' },
          { nombre: 'Informe preliminar de evaluación' },
          { nombre: 'Anexos de factores de evaluación y tarifarios' },
          { nombre: 'Respuesta a observaciones del informe preliminar' },
          { nombre: 'Informe definitivo de evaluación' },
          { nombre: 'Anexos de evaluación definitivos' },
        ],
      },
      {
        nombre: 'Sondeo de mercado 001 de 2024',
        documentos: [
          { nombre: 'Anexo cuadro de auto clasificación' },
          { nombre: 'Anexo listado bienes y servicios' },
          { nombre: 'Anexo listado subregiones' },
          { nombre: 'Sondeo condiciones de oferta' },
        ],
      },
    ],
  },
  {
    anio: '2022',
    procesos: [
      {
        nombre: 'Invitación Abierta 001 - 2022',
        documentos: [
          { nombre: 'Invitación Abierta Operadores Logísticos' },
          { nombre: 'Matriz de riesgos' },
          { nombre: 'Estudio previo invitación abierta' },
          ...Array.from({ length: 10 }, (_, i) => ({
            nombre: `Anexo ${i + 1} - Documentación del proceso`,
          })),
          { nombre: 'Adenda IA 001 de 2022' },
          { nombre: 'Respuesta a observaciones 4E S' },
          { nombre: 'Respuesta a observaciones AM Laboratorio' },
          { nombre: 'Respuesta a observaciones Enlace Estratégico' },
          { nombre: 'Respuesta a observaciones Estrella' },
          { nombre: 'Respuesta a observaciones HQ Solutions' },
          { nombre: 'Respuesta a observaciones Los Mercantes' },
          { nombre: 'Respuesta a observaciones Montar Eventos' },
          { nombre: 'Respuesta a observaciones Videobase' },
          { nombre: 'Adenda IA 002 de 2022' },
          { nombre: 'Acta recepción ofertas IA 001 de 2022' },
          { nombre: 'Informe evaluación IA 001 de 2022' },
          { nombre: 'Informe evaluación final IA 001 de 2022' },
        ],
      },
    ],
  },
];

function Contratacion() {
  const [vigenciasAbiertas, setVigenciasAbiertas] = useState(['2026']);
  const [procesosAbiertos, setProcesosAbiertos] = useState([]);

  const toggleVigencia = (anio) => {
    setVigenciasAbiertas((actuales) =>
      actuales.includes(anio)
        ? actuales.filter((item) => item !== anio)
        : [...actuales, anio]
    );
  };

  const toggleProceso = (nombre) => {
    setProcesosAbiertos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((item) => item !== nombre)
        : [...actuales, nombre]
    );
  };

  const obtenerIcono = (nombre) => {
    const extension = nombre.toLowerCase();

    if (extension.includes('pdf') || extension.includes('informe')) {
      return <FilePdf size={21} weight="duotone" />;
    }

    return <FileText size={21} weight="duotone" />;
  };

  return (
    <main className={styles.contratacionPage}>
      {/* ENCABEZADO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>ACTIVA · TRANSPARENCIA</span>
          <h1>Contratación ACTIVA</h1>
          <p>
            Consulta los procesos contractuales, convocatorias y documentos
            publicados por la Empresa de Parques y Eventos de Antioquia.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className={styles.intro}>
        <div className={styles.introIcon}>
          <FileText size={34} weight="duotone" />
        </div>

        <p>
          En este espacio encontrarás la información relacionada con los
          procesos de contratación de ACTIVA, incluyendo invitaciones,
          convocatorias, estudios previos, anexos, adendas, informes y demás
          documentos correspondientes a cada vigencia.
        </p>
      </section>

      {/* PROCESOS CONTRACTUALES */}
      <section className={styles.modulesSection}>
        <div className={styles.sectionHeading}>
          <span>INFORMACIÓN CONTRACTUAL</span>
          <h2>Procesos de contratación</h2>
          <p>
            Selecciona una vigencia para consultar sus procesos y documentos.
          </p>
        </div>

        <div className={styles.modulesList}>
          {vigencias.map((vigencia, index) => {
            const abierta = vigenciasAbiertas.includes(vigencia.anio);

            return (
              <article className={styles.module} key={vigencia.anio}>
                <button
                  type="button"
                  className={styles.moduleSummary}
                  onClick={() => toggleVigencia(vigencia.anio)}
                  aria-expanded={abierta}
                >
                  <span className={styles.moduleNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className={styles.moduleTitle}>
                    Contratación {vigencia.anio}
                  </span>

                  <span className={styles.moduleToggle}>
                    <CaretDown
                      size={22}
                      weight="bold"
                      className={abierta ? styles.rotated : ''}
                    />
                  </span>
                </button>

                {abierta && (
                  <div className={styles.moduleContent}>
                    {vigencia.procesos.map((proceso) => {
                      const procesoAbierto = procesosAbiertos.includes(
                        `${vigencia.anio}-${proceso.nombre}`
                      );

                      return (
                        <section
                          className={styles.moduleSubsection}
                          key={proceso.nombre}
                        >
                          <button
                            type="button"
                            className={styles.processSummary}
                            onClick={() =>
                              toggleProceso(
                                `${vigencia.anio}-${proceso.nombre}`
                              )
                            }
                            aria-expanded={procesoAbierto}
                          >
                            <span>{proceso.nombre}</span>
                            <CaretDown
                              size={19}
                              weight="bold"
                              className={
                                procesoAbierto ? styles.rotated : ''
                              }
                            />
                          </button>

                          {procesoAbierto && (
                            <div className={styles.moduleLinksGrid}>
                              {proceso.documentos.map((documento, i) => (
                                <a
                                  key={`${documento.nombre}-${i}`}
                                  href={documento.url || paginaOficial}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.moduleLink}
                                  title={
                                    documento.url
                                      ? 'Abrir documento'
                                      : 'Consultar documento en la página oficial'
                                  }
                                >
                                  <span className={styles.linkIcon}>
                                    {obtenerIcono(documento.nombre)}
                                  </span>

                                  <span className={styles.linkText}>
                                    {documento.nombre}
                                  </span>

                                  <ArrowUpRight
                                    size={18}
                                    weight="bold"
                                    className={styles.linkArrow}
                                  />
                                </a>
                              ))}
                            </div>
                          )}
                        </section>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Contratacion;
