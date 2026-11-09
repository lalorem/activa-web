
import { useState } from 'react';
import {
  Plus,
  Minus,
  FilePdf,
  LinkSimple,
  ArrowUpRight,
  Scales,
  Buildings,
  UsersThree,
  Calendar,
  ShieldCheck,
  FileText,
  ClipboardText,
  ChatCircleText,
  Globe,
  FolderOpen,
} from '@phosphor-icons/react';

import styles from '../components/style/Transparencia.module.css';

// =========================================================
// MÓDULOS DE TRANSPARENCIA
// =========================================================

const modulos = [
  {
    numero: '01',
    titulo: 'ANEXO TÉCNICO 1. ACCESIBILIDAD WEB',
    elementos: [
      {
        titulo: 'Certificados de Accesibilidad',
        descripcion: 'Consultar información',
        icono: 'link',
        externo: 'https://activa.com.co/accesibilidad/',
      },
    ],
  },
  {
    numero: '02',
    titulo: 'CERTIFICADOS JURÍDICOS',
    elementos: [
      {
        titulo: 'Sistema Único de Información Normativa – SUIN',
        descripcion: 'Consultar normativa',
        icono: 'link',
        externo: 'https://www.suin-juriscol.gov.co/index.html',
      },
      {
        titulo: 'Certificación ITA de acciones de mejora veedurías',
        descripcion: 'Documento PDF',
        icono: 'pdf',
      },
      {
        titulo: 'Certificación ITA de Contenido decisiones',
        descripcion: 'Documento PDF',
        icono: 'pdf',
      },
      {
        titulo: 'Certificación ITA de formatos o modelos de contratos o pliegos tipo',
        descripcion: 'Documento PDF',
        icono: 'pdf',
      },
      {
        titulo: 'Certificación ITA de la Agenda Regulatoria',
        descripcion: 'Documento PDF',
        icono: 'pdf',
      },
      {
        titulo: 'Certificación ITA de la Rendición de Cuentas',
        descripcion: 'Documento PDF',
        icono: 'pdf',
      },
    ],
  },
  {
    numero: '03',
    titulo: 'INFORMACIÓN DE LA ENTIDAD',
    elementos: [
      {
        titulo: 'Misión',
        descripcion: 'Brindar soluciones integrales en operación logística y la administración de parques que permitan el disfrute de la VIDA de todas y todos los antioqueños; promoviendo la tecnología, la innovación, para de esta manera, impulsar el desarrollo del entorno y el progreso socioeconómico de la región Antioqueña.',
        tipo: 'texto',
      },
      {
        titulo: 'Visión',
        descripcion: 'Activa será en el mediano plazo una empresa eficiente y rentable, que se consolida en el mercado como una alternativa atractiva para la realización de eventos y la promoción del territorio antioqueño, soportada con una estructura ágil, flexible y eficaz; el conocimiento de su mercado y el aprovechamiento de los desarrollos tecnológicos.',
        tipo: 'texto',
      },
      {
        titulo: 'Manual de Funciones y Deberes',
        descripcion: 'Consultar documento',
        icono: 'pdf',
      },
    ],
  },
  {
    numero: '04',
    titulo: 'NORMATIVA',
    secciones: [
      {
        titulo: 'Información normativa',
        elementos: [
          {
            titulo: 'Sistema Único de Información Normativa – SUIN',
            descripcion: 'Consultar normativa',
            icono: 'link',
            externo: 'https://www.suin-juriscol.gov.co/index.html',
          },
          {
            titulo: 'SECOP',
            descripcion: 'Consultar plataforma',
            icono: 'link',
            externo: 'https://community.secop.gov.co/STS/Users/Login/Index',
          },
        ],
      },
      {
        titulo: 'Información institucional',
        elementos: [
          { titulo: 'Organigrama', descripcion: 'Consultar estructura organizacional', icono: 'pdf' },
          { titulo: 'Mapa de procesos', descripcion: 'Consultar procesos de ACTIVA', icono: 'pdf' },
          { titulo: 'Directorio de servidores públicos, empleados o contratistas', descripcion: 'Consultar directorio', icono: 'pdf' },
          { titulo: 'Calendario de Actividades', descripcion: 'Consultar calendario', icono: 'link', externo: 'https://bit.ly/4dZ2Zmm' },
        ],
      },
      {
        titulo: 'Atención y control',
        elementos: [
          { titulo: 'Solicitudes, quejas y reclamos', descripcion: 'Acceder al mecanismo de atención', icono: 'link', externo: 'https://activa.com.co/pqrs/' },
          { titulo: 'Entes y autoridades que lo vigilan', descripcion: 'Consultar información', icono: 'pdf' },
          { titulo: 'Servicio al público, normas, formularios y protocolos de atención', descripcion: 'Consultar documentos', icono: 'pdf' },
        ],
      },
      {
        titulo: 'Caracterizaciones',
        elementos: [
          { titulo: 'Caracterización Eventos ACTIVA', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Gestión Administrativa', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Programa de Gestión Documental', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Gestión Financiera', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Gestión de Talentos', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Mejoramiento Activo', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Orientación Estratégica', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Proyectos de Operación Logística', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Relacionamiento Corporativo', descripcion: 'Caracterización', icono: 'pdf' },
          { titulo: 'Caracterización Suministro de Bienes y Servicios', descripcion: 'Caracterización', icono: 'pdf' },
        ],
      },
    ],
  },
  {
    numero: '05',
    titulo: 'CONTRATACIÓN',
    elementos: [],
  },
  {
    numero: '06',
    titulo: 'PLANEACIÓN',
    secciones: [
      {
        titulo: 'Planeación y gestión',
        elementos: [],
      },
      {
        titulo: 'Resoluciones de presupuesto',
        elementos: [],
      },
      {
        titulo: 'Ejecución presupuestal',
        elementos: [],
      },
    ],
  },
  {
    numero: '07',
    titulo: 'PARTICIPA',
    elementos: [],
  },
  {
    numero: '08',
    titulo: 'INFORMACIÓN ESPECÍFICA PARA GRUPOS DE INTERÉS',
    elementos: [],
  },
  {
    numero: '09',
    titulo: 'OBLIGACIÓN DE REPORTE DE INFORMACIÓN ESPECÍFICA POR PARTE DE LA ENTIDAD',
    elementos: [],
  },
  {
    numero: '10',
    titulo: 'MENÚ - ATENCIÓN Y SERVICIOS A LA CIUDADANÍA',
    elementos: [],
  },
  {
    numero: '11',
    titulo: 'PLANES',
    secciones: [
      { titulo: 'Planes 2026', elementos: [] },
      { titulo: 'Planes 2025', elementos: [] },
      { titulo: 'Planes 2024', elementos: [] },
    ],
  },
  {
    numero: '12',
    titulo: 'SECCIÓN DE NOTICIAS',
    elementos: [],
  },
  {
    numero: '13',
    titulo: 'CONDICIONES TÉCNICAS MÍNIMAS Y DE SEGURIDAD DIGITAL WEB',
    elementos: [],
  },
  {
    numero: '14',
    titulo: 'RESOLUCIONES',
    secciones: [
      { titulo: 'Resoluciones 2021 – 2025', elementos: [] },
    ],
  },
  {
    numero: '15',
    titulo: 'ACUERDOS',
    secciones: [
      { titulo: 'Acuerdos 2025', elementos: [] },
      { titulo: 'Acuerdos 2024', elementos: [] },
      { titulo: 'Acuerdos 2023', elementos: [] },
      { titulo: 'Acuerdos 2022', elementos: [] },
      { titulo: 'Acuerdos 2020', elementos: [] },
    ],
  },
  {
    numero: '16',
    titulo: 'INFORMES',
    elementos: [],
  },
  {
    numero: '17',
    titulo: 'DECRETO ORDENANZAL',
    elementos: [],
  },
  {
    numero: '18',
    titulo: 'ESTADOS FINANCIEROS',
    secciones: [
      { titulo: 'Estados financieros 2026', elementos: [] },
      { titulo: 'Estados financieros 2025', elementos: [] },
      { titulo: 'Estados financieros 2024', elementos: [] },
    ],
  },
  {
    numero: '19',
    titulo: 'DIRECTORIO DE FUNCIONARIOS',
    secciones: [
      { titulo: 'Oficina', elementos: [] },
      { titulo: 'Líneas de Atención', elementos: [] },
      { titulo: 'Enlaces de Interés', elementos: [] },
    ],
  },
  {
    numero: '20',
    titulo: 'DOCUMENTOS DE LEY',
    elementos: [],
  },
];

// =========================================================
// ICONOS
// =========================================================

const iconos = {
  pdf: FilePdf,
  link: LinkSimple,
};

// =========================================================
// COMPONENTE
// =========================================================

function Transparencia() {
  const [abiertos, setAbiertos] = useState([]);

  const toggleModulo = (numero) => {
    setAbiertos((actuales) =>
      actuales.includes(numero)
        ? actuales.filter((item) => item !== numero)
        : [...actuales, numero]
    );
  };

  const renderElemento = (elemento, indice) => {
    if (elemento.tipo === 'texto') {
      return (
        <div className={styles.textSection} key={indice}>
          <h4>{elemento.titulo}</h4>
          <p>{elemento.descripcion}</p>
        </div>
      );
    }

    const Icono = iconos[elemento.icono] || FileText;

    const contenido = (
      <>
        <span className={styles.linkIcon}>
          <Icono size={23} weight="duotone" />
        </span>

        <span className={styles.linkText}>
          <strong>{elemento.titulo}</strong>
          <small>{elemento.descripcion}</small>
        </span>

        {elemento.externo && (
          <ArrowUpRight className={styles.linkArrow} size={19} />
        )}
      </>
    );

    return elemento.externo ? (
      <a
        className={styles.moduleLink}
        href={elemento.externo}
        target="_blank"
        rel="noopener noreferrer"
        key={indice}
      >
        {contenido}
      </a>
    ) : (
      <div className={styles.moduleLink} key={indice}>
        {contenido}
      </div>
    );
  };

  return (
    <main className={styles.transparenciaPage}>
      {/* =====================================================
          ENCABEZADO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            ANTIOQUIA · COLOMBIA
          </span>

          <h1>Transparencia</h1>

          <p>
            Acceso a la información, participación ciudadana y
            rendición de cuentas
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}

      <section className={styles.intro}>
        <div className={styles.introIcon}>
          <Scales size={30} weight="duotone" />
        </div>

        <p>
          En esta sección, ACTIVA pone a disposición de la ciudadanía
          la información institucional, administrativa y de gestión,
          en cumplimiento de los principios de transparencia, acceso
          a la información pública y rendición de cuentas. Nuestro
          objetivo es garantizar que cualquier persona pueda conocer
          cómo funciona la entidad, cómo se toman las decisiones y
          cómo se gestionan los recursos.
        </p>
      </section>

      {/* =====================================================
          MÓDULOS
      ===================================================== */}

      <section className={styles.modulesSection}>
        <div className={styles.sectionHeading}>
          <span>INFORMACIÓN PÚBLICA</span>
          <h2>Consulta nuestros documentos</h2>
          <p>
            Explora los módulos y encuentra la información
            institucional de ACTIVA.
          </p>
        </div>

        <div className={styles.modulesList}>
          {modulos.map((modulo) => {
            const estaAbierto = abiertos.includes(modulo.numero);

            return (
              <details
                className={styles.module}
                key={modulo.numero}
                open={estaAbierto}
                onToggle={(e) => {
                  const abierto = e.currentTarget.open;

                  setAbiertos((actuales) =>
                    abierto
                      ? [...new Set([...actuales, modulo.numero])]
                      : actuales.filter((item) => item !== modulo.numero)
                  );
                }}
              >
                <summary
                  className={styles.moduleSummary}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModulo(modulo.numero);
                  }}
                >
                  <div className={styles.moduleInfo}>
                    <span className={styles.moduleNumber}>
                      {modulo.numero}
                    </span>

                    <span className={styles.moduleTitle}>
                      {modulo.titulo}
                    </span>
                  </div>

                  <span className={styles.moduleToggle}>
                    {estaAbierto ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </summary>

                <div className={styles.moduleContent}>
                  {modulo.elementos?.length > 0 && (
                    <div className={styles.moduleLinksGrid}>
                      {modulo.elementos.map(renderElemento)}
                    </div>
                  )}

                  {modulo.secciones?.map((seccion, indice) => (
                    <div className={styles.moduleSubsection} key={indice}>
                      <h4>{seccion.titulo}</h4>

                      <div className={styles.moduleLinksGrid}>
                        {seccion.elementos.map(renderElemento)}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Transparencia;
