import { useState } from "react";

import {
  ArrowUpRight,
  CalendarBlank,
  FilePdf,
  Files,
  FolderOpen,
  Gavel,
  ListChecks,
  ShieldCheck,
} from "@phosphor-icons/react";

import HeaderDegradado from "../components/HeaderDegradado";
import styles from "../components/style/Contratacion.module.css";

/* =========================================================
   INFORMACIÓN DE CONTRATACIÓN
========================================================= */

const contratacion = {
  2026: [
    {
      id: "ia-004-2026",
      tipo: "Invitación abierta",
      titulo: "Invitación Abierta 004-2026",
      descripcion: "Proceso de invitación abierta 004 de 2026.",
      documentos: [
        "ADENDA 01. Invitación abierta 004 de 2026",
        "ADENDA 02. Invitación abierta 004 de 2026",
        "ADENDA 03. Invitación abierta 004 de 2026",
        "ADENDA 04. Invitación abierta 004 de 2026",
        "ADENDA 05. Invitación abierta 004 de 2026",
        "ADENDA 06. Invitación abierta 004 de 2026 VF",
        "Respuestas observaciones consolidadas - IA004-2026",
        "Aviso convocatoria Invitación Abierta 004-2026",
        "Conformación Comité Evaluador Proceso IA 004-2026",
        "Resolución apertura Invitación Abierta 004-2026",
        "Invitación Abierta 004 de 2026",
        "Anexo 1. Matriz de riesgos",
        "Anexo 2. Carta de presentación de la propuesta",
        "Anexo 3. Pago seguridad social y parafiscales",
        "Anexo 4. Compromiso anticorrupción",
        "Anexo 5. Certificado de inhabilidades e incompatibilidades",
        "Anexo 6. Acuerdo de niveles de servicio ANS",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Aceptación Gestión Comercial",
        "Anexo 9. Cumplimiento y aceptación tarifario",
        "Anexo 10. Modelo acuerdo de consorcio",
        "Anexo 11. Modelo acuerdo unión temporal",
        "Anexo 12. Capacidad financiera",
        "Anexo 13. Experiencia del proponente",
        "Anexo 14. Carta de compromiso del personal mínimo requerido",
        "Anexo 15. Tarifarios del proceso",
        "Anexo 16. Experiencia adicional del proponente",
        "Anexo 17. Carta de compromiso personal adicional",
        "Anexo 18. Certificación criterios diferenciales",
      ],
    },
    {
      id: "lc-001-2026",
      tipo: "Lista corta",
      titulo: "Lista Corta LC001-2026",
      descripcion:
        "Documentación del proceso de selección mediante lista corta.",
      documentos: [
        "Aviso convocatoria LC001-2026",
        "Convocatoria Veedurías LC001-2026",
        "Resolución 202605000101 de 2026 - Apertura del proceso de contratación",
      ],
    },
    {
      id: "ia-003-2026",
      tipo: "Invitación con precalificación",
      titulo: "Invitación Abierta con Precalificación 003-2026",
      descripcion:
        "Proceso relacionado con el Complejo Deportivo Tulio Ospina.",
      documentos: [
        "Aviso convocatoria Invitación Abierta 003-2026 Precalificación",
        "Invitación Abierta con Precalificación 003-2026",
        "Cronograma actualizado IA003-2026",
        "Resolución 202605000055 de 2026 - Inicio de la fase de precalificación",
        "Presupuesto, interventoría, componentes AIU y tabla de salarios",
        "Anexo 1. Manifestación de interés",
        "Anexo 2. Modelo de acuerdo de seriedad",
        "Anexo 3. Estructura organizacional",
        "Anexo 4. Probidad",
        "Anexo 5. Experiencia",
        "Anexo 6A. Patrimonio",
        "Anexo 6B. Patrimonio",
        "Anexo 6C. Endeudamiento",
        "Anexo 6D. Endeudamiento",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Experiencia similares",
        "Anexo 9. Beneficiarios reales",
        "Matriz de riesgos previsibles IA 003-2026",
        "Respuesta observaciones IA003-2026 Precalificación",
        "Acta de cierre y recibo de invitación",
        "Informe preliminar Invitación 003-2026",
        "Informe final Invitación 003-2026",
        "Resolución lista de precalificados No. 003 de 2026",
      ],
    },
    {
      id: "ia-002-2026",
      tipo: "Invitación con precalificación",
      titulo: "Invitación Abierta con Precalificación 002-2026",
      descripcion:
        "Proceso relacionado con el Complejo Deportivo Tulio Ospina.",
      documentos: [
        "Resolución Invitación Abierta 002 de 2026 Precalificación",
        "Documento de invitación definitivo a precalificar",
        "Aviso convocatoria invitación a precalificar",
        "Anexo 1. Manifestación de interés",
        "Anexo 2. Modelo de acuerdo de seriedad",
        "Anexo 3. Estructura organizacional",
        "Anexo 4. Probidad",
        "Anexo 5. Experiencia",
        "Anexo 6A. Patrimonio",
        "Anexo 6B. Patrimonio",
        "Anexo 6C. Endeudamiento",
        "Anexo 6D. Endeudamiento",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Experiencia similares",
        "Anexo 9. Beneficiarios reales",
        "Matriz de riesgos previsibles",
        "Cronograma Invitación Abierta con Precalificación 002-2026",
        "Acta preliminar de estimación y asignación de riesgos",
        "Adenda No. 1 Invitación Abierta 002-2026",
        "Adenda No. 2",
        "Observaciones recibidas",
        "Respuesta observaciones",
        "Presupuesto, interventoría, componentes AIU y tabla de salarios",
        "Acta de cierre y recibo de invitación",
        "Informe preliminar requisitos habilitantes",
        "Informe de subsanación",
        "Informe final Invitación 002-2026",
        "Resolución declara desierto proceso 002-2026",
      ],
    },
    {
      id: "ia-001-2026",
      tipo: "Invitación abierta",
      titulo: "Invitación Abierta 001-2026",
      descripcion:
        "Documentos y actuaciones del proceso de invitación abierta.",
      documentos: [
        "Invitación Abierta 001 de 2026",
        "Resolución 202605000016 de 2026",
        "Aviso convocatoria Invitación Abierta 001-2026",
        "Cronograma del proceso 2026",
        "Estudio previo Invitación Abierta 2026",
        "Anexo 1. Matriz de riesgos",
        "Anexo 2. Carta de presentación de la propuesta",
        "Anexo 3. Pago seguridad social y parafiscales",
        "Anexo 4. Compromiso anticorrupción",
        "Anexo 5. Certificado de inhabilidades e incompatibilidades",
        "Anexo 6. Acuerdo de niveles de servicio ANS",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Aceptación Gestión Comercial",
        "Anexo 9. Cumplimiento y aceptación tarifario",
        "Anexo 10. Modelo acuerdo de consorcio",
        "Anexo 11. Modelo acuerdo unión temporal",
        "Anexo 12. Capacidad financiera",
        "Anexo 13. Experiencia del proponente",
        "Anexo 14. Carta de compromiso del personal mínimo requerido",
        "Anexo 15. Tarifario de referencia",
        "Anexo 16. Experiencia adicional del proponente",
        "Anexo 17. Carta de compromiso personal adicional",
        "Anexo 18. Certificaciones",
        "SBS-F06. Minuta del contrato",
        "Tarifario consolidado",
        "Adenda 01",
        "Adenda 02",
        "Acta de cierre y recibo de ofertas",
        "Informe preliminar Invitación 001-2026",
        "Adenda 03",
        "Informe final de evaluación",
        "Resolución de adjudicación Invitación Abierta 001-2026",
      ],
    },
    {
      id: "paa-2026",
      tipo: "Planes y adquisiciones",
      titulo: "Planes de Adquisiciones",
      descripcion:
        "Documentos relacionados con el Plan Anual de Adquisiciones.",
      documentos: [
        "Adquisiciones PAA - Acta 46",
        "Adquisiciones PAA - Preacta 47 y 48",
        "Plan Anual de Adquisiciones PAA - Octubre 05",
      ],
    },
    {
      id: "formatos-2026",
      tipo: "Formatos institucionales",
      titulo: "Formatos o Modelos de Contrato",
      descripcion: "Formatos de apoyo para los procesos contractuales.",
      documentos: [
        "SBS-F02. Orden de compra de bienes y servicios",
        "SBS-F06. Minuta del contrato",
        "SBS-F31. Lista de chequeo lista corta",
      ],
    },
  ],

  2025: [
    {
      id: "lc-004-2025",
      tipo: "Lista corta",
      titulo: "Lista Corta LC004-2025",
      descripcion: "Proceso de selección mediante lista corta.",
      documentos: [
        "Aviso convocatoria LC004-2025",
        "Convocatoria Veedurías LC004-2025",
        "Resolución 202505000143 de 2025 - Apertura del proceso",
        "Acta de cierre y recibo de ofertas LC004-2025",
        "Resolución 202505000147 de 2025 - Adjudicación del proceso",
      ],
    },
    {
      id: "lc-003-2025",
      tipo: "Lista corta",
      titulo: "Lista Corta LC003-2025",
      descripcion: "Proceso de selección mediante lista corta.",
      documentos: [
        "Resolución 202505000139 de 2025 - Apertura del proceso",
        "Aviso convocatoria LC003-2025",
        "Convocatoria Veedurías LC003-2025",
        "Acta de recibo LC003",
        "Resolución 202505000141 de 2025 - Declaración desierta",
      ],
    },
    {
      id: "lc-002-2025",
      tipo: "Lista corta",
      titulo: "Lista Corta LC002-2025",
      descripcion: "Proceso de selección mediante lista corta.",
      documentos: [
        "Aviso convocatoria LC002-2025",
        "Convocatoria Veedurías LC002-2025",
        "Resolución 202505000122 de 2025 - Lista Corta 002",
      ],
    },
    {
      id: "ia-001-2025",
      tipo: "Invitación abierta",
      titulo: "Invitación Abierta 001-2025",
      descripcion:
        "Documentos y actuaciones del proceso de invitación abierta.",
      documentos: [
        "Aviso convocatoria Invitación Abierta 001-2025",
        "Invitación Abierta 001 de 2025",
        "Conformación Comité Evaluador Proceso Invitación 001-2025",
        "Estudio previo Invitación Abierta 001-2025",
        "Resolución de apertura del proceso",
        "Anexo 1. Matriz de riesgos",
        "Anexo 2. Carta de presentación de la propuesta",
        "Anexo 3. Pago seguridad social y parafiscales",
        "Anexo 4. Compromiso anticorrupción",
        "Anexo 5. Certificado de inhabilidades e incompatibilidades",
        "Anexo 6. Acuerdo de niveles de servicio ANS",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Aceptación Gestión Comercial",
        "Anexo 9. Cumplimiento y aceptación tarifario",
        "Anexo 10. Modelo acuerdo de consorcio",
        "Anexo 11. Modelo acuerdo unión temporal",
        "Anexo 12. Capacidad financiera",
        "Anexo 13. Experiencia del proponente",
        "Anexo 14. Carta de compromiso del personal mínimo requerido",
        "Anexo 15. Tarifario para invitación",
        "Anexo 16. Experiencia adicional del proponente",
        "Anexo 17. Carta de compromiso personal adicional",
        "Anexo 18. Certificaciones",
        "Adenda 1 Invitación Abierta 001 de 2025",
        "Formato tarifario categoría A",
        "Formato tarifario categoría B",
        "Respuesta observaciones Invitación Abierta 001-2025",
        "Adenda 2 Invitación Abierta 001 de 2025",
        "Adenda 3 Invitación Abierta 001 de 2025",
        "Informe preliminar Invitación 001-2025",
        "Adenda 4 Invitación Abierta 001 de 2025",
        "Adenda 5 Invitación Abierta 001 de 2025",
        "Informe final de evaluación",
        "Resolución 202505000127 de 2025 - Adjudicación",
      ],
    },
    {
      id: "veedurias-2025",
      tipo: "Participación ciudadana",
      titulo: "Convocatoria Veedurías Ciudadanas LC001-2025",
      descripcion: "Información de la convocatoria de veedurías ciudadanas.",
      documentos: [
        "Convocatoria Veedurías Ciudadanas LC001-2025",
        "Resolución 202505000093",
      ],
    },
  ],

  2024: [
    {
      id: "ia-001-2024",
      tipo: "Invitación abierta",
      titulo: "Invitación Abierta 001-2024",
      descripcion:
        "Documentación del proceso de invitación abierta 001 de 2024.",
      documentos: [
        "Respuesta observaciones borrador membrete",
        "Cronograma definitivo Invitación Abierta 001 de 2024",
        "Borrador estudio previo Invitación Abierta",
        "Anexo 1. Matriz de riesgos",
        "Anexo 2. Carta de presentación de la propuesta",
        "Anexo 3. Pago seguridad social y parafiscales",
        "Anexo 4. Compromiso anticorrupción",
        "Anexo 5. Certificado de inhabilidades e incompatibilidades",
        "Anexo 6. Acuerdo de niveles de servicio ANS",
        "Anexo 7. Acuerdo de confidencialidad",
        "Anexo 8. Aceptación Gestión Comercial",
        "Anexo 9. Cumplimiento y aceptación tarifario",
        "Anexo 10. Modelo acuerdo de consorcio",
        "Anexo 11. Modelo acuerdo unión temporal",
        "Anexo 12. Capacidad financiera",
        "Anexo 13. Experiencia del proponente",
        "Anexo 14. Carta de compromiso del personal mínimo requerido",
        "Anexo 15. Tarifario Valle de Aburrá",
        "Anexo 16. Tarifario Subregión Bajo Cauca",
        "Anexo 17. Tarifario Subregión Magdalena Medio",
        "Anexo 18. Tarifario Subregión Nordeste",
        "Anexo 19. Tarifario Subregión Norte",
        "Anexo 20. Tarifario Subregión Occidente",
        "Anexo 21. Tarifario Subregión Oriente",
        "Anexo 22. Tarifario Subregión Suroeste",
        "Anexo 23. Tarifario Subregión Urabá",
        "Anexo 24. Oferta de porcentaje por pago a terceros",
        "Anexo 25. Experiencia adicional del proponente",
        "Anexo 26. Carta de compromiso personal adicional",
        "Estudios previos Invitación Abierta Definitiva 001 de 2024",
        "Condiciones Invitación Abierta 001 de 2024",
        "Tarifarios definitivos por subregión",
        "Adenda 01 Invitación Abierta 001 de 2024",
        "Respuesta a observaciones condiciones Invitación Abierta",
        "Adenda 02 Invitación Abierta 001 de 2024",
        "Adenda 03 Condiciones Invitación Abierta",
        "Acta apertura de sobres",
        "Adenda 04 Condiciones Invitación Abierta",
        "Aclaración Adenda 04",
        "Verificación de requisitos habilitantes y solicitud de subsanaciones",
        "Adenda 05 Condiciones Invitación Abierta",
        "Informe preliminar de evaluación",
        "Anexo 01. Factores de evaluación",
        "Tarifarios de evaluación por subregión",
        "Respuesta a observaciones informe preliminar",
        "Informe definitivo de evaluación",
      ],
    },
    {
      id: "sondeo-2024",
      tipo: "Sondeo de mercado",
      titulo: "Sondeo de Mercado 001-2024",
      descripcion: "Documentos del sondeo de mercado.",
      documentos: [
        "Anexo cuadro de auto clasificación",
        "Anexo listado bienes y servicios",
        "Anexo listado subregiones",
        "Sondeo condiciones de oferta",
      ],
    },
  ],

  2022: [
    {
      id: "ia-001-2022",
      tipo: "Invitación abierta",
      titulo: "Invitación Abierta 001-2022",
      descripcion: "Proceso de invitación abierta para operadores logísticos.",
      documentos: [
        "Invitación Abierta Operadores Logísticos",
        "Matriz de riesgos",
        "Estudio previo Invitación Abierta",
        "Anexo 1. Carta de presentación de la oferta",
        "Anexo 2. Cumplimiento y aceptación tarifario",
        "Anexo 3. Experiencia del proponente",
        "Anexo 4. Pago de aportes y parafiscales",
        "Anexo 5. SBS-F10 Certificado de inhabilidades e incompatibilidades",
        "Anexo 6. Acuerdo de consorcio",
        "Anexo 7. Acuerdo de unión temporal",
        "Anexo 8. Compromiso anticorrupción",
        "Anexo 9. Tarifario de referencia",
        "Anexo 10. Limitación MIPYME",
        "Adenda IA 001 de 2022",
        "SBS-F14 Respuesta a observaciones 4E S",
        "SBS-F14 Respuesta a observaciones AM Laboratorio",
        "SBS-F14 Respuesta a observaciones Enlace Estratégico",
        "SBS-F14 Respuesta a observaciones Estrella",
        "SBS-F14 Respuesta a observaciones HQ Solutions",
        "SBS-F14 Respuesta a observaciones Los Mercantes S",
        "SBS-F14 Respuesta a observaciones Montar Eventos",
        "SBS-F14 Respuesta a observaciones Videobase",
        "Adenda IA 002 de 2022",
        "Acta recepción ofertas IA 001 de 2022",
        "Informe evaluación IA 001 de 2022",
        "Informe evaluación final IA 001 de 2022",
      ],
    },
  ],
};

/* =========================================================
   FUNCIONES AUXILIARES
========================================================= */

const obtenerTotalDocumentos = (procesos) =>
  procesos.reduce((total, proceso) => total + proceso.documentos.length, 0);

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */


export default function Contratacion() {
  const vigencias = Object.keys(contratacion).sort(
    (a, b) => Number(b) - Number(a),
  );

  const [anioSeleccionado, setAnioSeleccionado] = useState("2026");
  const [procesoAbierto, setProcesoAbierto] = useState(null);

  const procesosActuales = contratacion[anioSeleccionado] || [];

  const totalProcesos = Object.values(contratacion).reduce(
    (total, procesos) => total + procesos.length,
    0,
  );

  const totalDocumentos = Object.values(contratacion).reduce(
    (total, procesos) => total + obtenerTotalDocumentos(procesos),
    0,
  );

  const cambiarAnio = (anio) => {
    setAnioSeleccionado(String(anio));
    setProcesoAbierto(null);
  };

  const alternarProceso = (id) => {
    setProcesoAbierto((actual) => (actual === id ? null : id));
  };

  return (
    <main className={styles.contratacionPage}>
      <HeaderDegradado
        eyebrow="Transparencia y acceso a la información"
        title="Contratación"
        highlight="ACTIVA"
        description="Consulta los procesos contractuales, convocatorias y documentos publicados por nuestra entidad."
      />

      <div className={styles.contenido}>
        <section className={styles.presentacion}>
          <div className={styles.presentacionTexto}>
            <span className={styles.etiqueta}>
              <span className={styles.etiquetaPunto}></span>
              GESTIÓN TRANSPARENTE
            </span>

            <h2>
              Información clara,
              <span> procesos transparentes.</span>
            </h2>

            <p>
              En este espacio encontrarás la información de los procesos
              contractuales de ACTIVA, organizada por vigencia para facilitar su
              consulta y seguimiento.
            </p>

            <div className={styles.presentacionNota}>
              <ShieldCheck size={21} weight="duotone" />
              <span>
                Acceso a la información contractual de manera organizada y
                pública.
              </span>
            </div>
          </div>

          <div className={styles.presentacionVisual}>
            <div className={styles.visualCirculo}></div>
            <div className={styles.visualCirculoSecundario}></div>

            <div className={styles.visualTarjeta}>
              <div className={styles.visualTarjetaIcono}>
                <Gavel size={31} weight="duotone" />
              </div>

              <span className={styles.visualTarjetaEtiqueta}>
                ACTIVA · CONTRATACIÓN
              </span>

              <strong>Transparencia en cada proceso</strong>

              <div className={styles.visualLinea}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={styles.visualTarjetaPie}>
                <ShieldCheck size={17} weight="fill" />
                <span>Información pública</span>
              </div>
            </div>

            <div className={styles.visualDecoracion}>
              <Files size={25} weight="duotone" />
            </div>
          </div>
        </section>

        <section className={styles.indicadores}>
          <article className={styles.indicador}>
            <div className={`${styles.indicadorIcono} ${styles.verde}`}>
              <FolderOpen size={23} weight="duotone" />
            </div>
            <div>
              <strong>{totalProcesos}</strong>
              <span>Procesos y categorías</span>
            </div>
          </article>

          <article className={styles.indicador}>
            <div className={`${styles.indicadorIcono} ${styles.azul}`}>
              <Files size={23} weight="duotone" />
            </div>
            <div>
              <strong>{totalDocumentos}</strong>
              <span>Documentos registrados</span>
            </div>
          </article>

          <article className={styles.indicador}>
            <div className={`${styles.indicadorIcono} ${styles.lima}`}>
              <CalendarBlank size={23} weight="duotone" />
            </div>
            <div>
              <strong>{vigencias.length}</strong>
              <span>Vigencias disponibles</span>
            </div>
          </article>
        </section>

        <section className={styles.explorador}>
          <div className={styles.exploradorEncabezado}>
            <div>
              <span className={styles.etiqueta}>CONSULTA DOCUMENTAL</span>
              <h2>Explora la contratación</h2>
              <p>
                Selecciona una vigencia para consultar sus procesos y
                documentos.
              </p>
            </div>

            <div className={styles.exploradorIcono}>
              <ListChecks size={27} weight="duotone" />
            </div>
          </div>

          <div className={styles.vigencias}>
            <div className={styles.vigenciasTitulo}>
              <CalendarBlank size={18} weight="duotone" />
              <span>Vigencia</span>
            </div>

            <div className={styles.vigenciasLista}>
              {vigencias.map((anio) => (
                <button
                  key={anio}
                  type="button"
                  className={`${styles.vigenciaBoton} ${
                    anioSeleccionado === anio ? styles.vigenciaActiva : ""
                  }`}
                  onClick={() => cambiarAnio(anio)}
                  aria-pressed={anioSeleccionado === anio}
                >
                  {anio}
                  {anioSeleccionado === anio && (
                    <span className={styles.vigenciaPunto}></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.listadoEncabezado}>
            <div>
              <span className={styles.listadoPunto}></span>
              <h3>Procesos de contratación {anioSeleccionado}</h3>
            </div>

            <span className={styles.listadoCantidad}>
              {procesosActuales.length}{" "}
              {procesosActuales.length === 1 ? "proceso" : "procesos"}
            </span>
          </div>

          <div className={styles.procesosLista}>
            {procesosActuales.map((proceso, index) => {
              const abierto = procesoAbierto === proceso.id;

              return (
                <article
                  key={proceso.id}
                  className={`${styles.procesoModulo} ${
                    abierto ? styles.procesoModuloAbierto : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.procesoModuloCabecera}
                    onClick={() => alternarProceso(proceso.id)}
                    aria-expanded={abierto}
                    aria-controls={`documentos-${proceso.id}`}
                  >
                    <span className={styles.procesoModuloInformacion}>
                      <span className={styles.procesoModuloNumero}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className={styles.procesoModuloTexto}>
                        <strong>{proceso.titulo}</strong>
                        <small>{proceso.tipo}</small>
                      </span>
                    </span>

                    <span className={styles.procesoModuloToggle}>+</span>
                  </button>

                  {abierto && (
                    <div
                      className={styles.procesoModuloContenido}
                      id={`documentos-${proceso.id}`}
                    >
                      <div className={styles.procesoModuloDescripcion}>
                        {proceso.descripcion}
                      </div>

                      <div className={styles.procesoDocumentosEncabezado}>
                        <h4>Documentación del proceso</h4>
                        <span>
                          {proceso.documentos.length}{" "}
                          {proceso.documentos.length === 1
                            ? "documento"
                            : "documentos"}
                        </span>
                      </div>

                      <div className={styles.procesoDocumentosGrid}>
                        {proceso.documentos.map((documento, docIndex) => (
                          <article
                            className={styles.procesoDocumento}
                            key={`${proceso.id}-${docIndex}`}
                          >
                            <span className={styles.procesoDocumentoIcono}>
                              <FilePdf size={24} weight="duotone" />
                            </span>

                            <span className={styles.procesoDocumentoTexto}>
                              <strong>{documento}</strong>
                              <small>
                                Documento del proceso · Vigencia{" "}
                                {anioSeleccionado}
                              </small>
                            </span>

                            <span
                              className={styles.procesoDocumentoFlecha}
                              title="Enlace pendiente de configurar"
                            >
                              <ArrowUpRight size={20} weight="bold" />
                            </span>
                          </article>
                        ))}
                      </div>

                      <div className={styles.procesoDocumentosAviso}>
                        <ShieldCheck size={19} weight="duotone" />
                        <span>
                          Los enlaces de consulta se habilitarán al configurar
                          las rutas de los documentos.
                        </span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.notaFinal}>
          <div className={styles.notaFinalIcono}>
            <ShieldCheck size={25} weight="duotone" />
          </div>

          <div>
            <strong>Comprometidos con la transparencia</strong>
            <p>
              ACTIVA promueve el acceso a la información y la consulta de sus
              procesos contractuales como parte de su compromiso con la
              transparencia institucional.
            </p>
          </div>

          <span className={styles.notaFinalDecoracion}></span>
        </section>
      </div>
    </main>
  );
}
