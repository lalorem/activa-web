import { useEffect, useState } from 'react';

import {
  ArrowUpRight,
  Bank,
  BookOpenText,
  Books,
  CalendarCheck,
  ChartBar,
  ChartLineUp,
  CheckCircle,
  ClipboardText,
  CurrencyDollar,
  Desktop,
  FilePlus,
  FileText,
  Files,
  FolderOpen,
  Globe,
  IdentificationCard,
  Lightbulb,
  Lightning,
  MagnifyingGlassPlus,
  MapTrifold,
  Plus,
  SealCheck,
  Scales,
  ShieldCheck,
  Target,
  Toolbox,
  UsersThree,
  Wrench,
  X,
  ArrowsClockwise,
  Briefcase,
} from '@phosphor-icons/react';

import styles from '../components/style/SistemaGestionCalidad.module.css';

const mapaProcesos =
  'https://activa.com.co/wp-content/uploads/2026/02/image-1024x384.png';

/* =========================================================
   ACCESOS FINANCIEROS
========================================================= */

const accesosFinancieros = [
  {
    titulo: 'Presupuesto',
    descripcion: 'Consulta la información presupuestal de ACTIVA.',
    icono: Bank,
    enlace: '#',
  },
  {
    titulo: 'Ejecución presupuestal',
    descripcion: 'Información sobre la ejecución de los recursos.',
    icono: ChartLineUp,
    enlace: '#',
  },
  {
    titulo: 'Estados financieros',
    descripcion: 'Consulta los estados financieros de la entidad.',
    icono: CurrencyDollar,
    enlace: '#',
  },
  {
    titulo: 'Informes de gestión',
    descripcion: 'Documentos e informes de gestión institucional.',
    icono: Files,
    enlace: '#',
  },
  {
    titulo: 'Contratación',
    descripcion: 'Información relacionada con los procesos contractuales.',
    icono: Briefcase,
    enlace: '#',
  },
  {
    titulo: 'Transparencia',
    descripcion: 'Consulta la información pública institucional.',
    icono: Globe,
    enlace: '#',
  },
];

/* =========================================================
   PROCESOS INSTITUCIONALES
========================================================= */

const procesos = [
  {
    numero: '01',
    tipo: 'estrategico',
    nombre: 'Direccionamiento estratégico',
    descripcion:
      'Orientación y planificación estratégica para el cumplimiento de los objetivos institucionales.',
    icono: Target,
  },
  {
    numero: '02',
    tipo: 'estrategico',
    nombre: 'Gestión de comunicaciones',
    descripcion:
      'Administración de la comunicación interna y externa de la entidad.',
    icono: Globe,
  },
  {
    numero: '03',
    tipo: 'misional',
    nombre: 'Gestión comercial',
    descripcion:
      'Desarrollo de estrategias comerciales y relacionamiento con los clientes.',
    icono: Briefcase,
  },
  {
    numero: '04',
    tipo: 'misional',
    nombre: 'Gestión de eventos',
    descripcion:
      'Planeación, coordinación y ejecución de eventos y experiencias.',
    icono: CalendarCheck,
  },
  {
    numero: '05',
    tipo: 'misional',
    nombre: 'Gestión de proyectos',
    descripcion:
      'Formulación, ejecución y seguimiento de proyectos institucionales.',
    icono: FolderOpen,
  },
  {
    numero: '06',
    tipo: 'evaluacion',
    nombre: 'Evaluación y control',
    descripcion:
      'Seguimiento y evaluación del desempeño de los procesos institucionales.',
    icono: ChartBar,
  },
  {
    numero: '07',
    tipo: 'evaluacion',
    nombre: 'Control interno',
    descripcion:
      'Verificación del cumplimiento de los controles y lineamientos establecidos.',
    icono: ShieldCheck,
  },
  {
    numero: '08',
    tipo: 'apoyo',
    nombre: 'Gestión administrativa y financiera',
    descripcion:
      'Administración de los recursos físicos, financieros y administrativos.',
    icono: Bank,
  },
  {
    numero: '09',
    tipo: 'apoyo',
    nombre: 'Gestión del talento humano',
    descripcion:
      'Procesos relacionados con el bienestar y desarrollo del talento humano.',
    icono: UsersThree,
  },
  {
    numero: '10',
    tipo: 'apoyo',
    nombre: 'Gestión jurídica y contractual',
    descripcion:
      'Acompañamiento jurídico y gestión de los procesos contractuales.',
    icono: Scales,
  },
  {
    numero: '11',
    tipo: 'apoyo',
    nombre: 'Gestión de tecnología',
    descripcion:
      'Administración de herramientas tecnológicas y soporte institucional.',
    icono: Desktop,
  },
];

/* =========================================================
   INDICADORES
========================================================= */

const indicadores = [
  {
    valor: '4',
    titulo: 'Categorías de procesos',
  },
  {
    valor: '11',
    titulo: 'Procesos institucionales',
  },
  {
    valor: '3',
    titulo: 'Principios de gestión',
  },
  {
    valor: '100%',
    titulo: 'Enfoque de mejora continua',
  },
];

/* =========================================================
   PRINCIPIOS
========================================================= */

const principios = [
  {
    titulo: 'Enfoque al ciudadano',
    descripcion:
      'Trabajamos para responder a las necesidades y expectativas de nuestros grupos de interés.',
    icono: UsersThree,
  },
  {
    titulo: 'Mejora continua',
    descripcion:
      'Promovemos la evaluación permanente y el fortalecimiento de nuestros procesos.',
    icono: ArrowsClockwise,
  },
  {
    titulo: 'Transparencia',
    descripcion:
      'Actuamos con responsabilidad, integridad y acceso a la información.',
    icono: SealCheck,
  },
];

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

function SistemaGestionCalidad() {
  const [mapaAbierto, setMapaAbierto] = useState(false);

  /* Cerrar modal con Escape y bloquear scroll */
  useEffect(() => {
    if (!mapaAbierto) return;

    const cerrarConEscape = (event) => {
      if (event.key === 'Escape') {
        setMapaAbierto(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', cerrarConEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', cerrarConEscape);
    };
  }, [mapaAbierto]);

  return (
    <main className={styles.calidadPage}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h1>Sistema de Gestión de Calidad</h1>
        </div>
      </section>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <section className={styles.section}>
        <div className={styles.container}>

          {/* Introducción */}

          <div className={styles.intro}>
            <p>
              El Sistema de Gestión de Calidad de ACTIVA permite orientar,
              organizar y fortalecer los procesos institucionales, promoviendo
              la eficiencia, la transparencia y el cumplimiento de los objetivos
              de la entidad.
            </p>

            <p>
              A través de la identificación, seguimiento y evaluación de los
              procesos, buscamos garantizar una gestión enfocada en la
              <strong> mejora continua </strong>
              y en la satisfacción de las necesidades de nuestros grupos de
              interés.
            </p>
          </div>

          {/* Mapa principal */}

          <section className={styles.mapSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.headingLine}></span>
              <h2>Mapa de procesos</h2>
              <span className={styles.headingLine}></span>
            </div>

            <div className={styles.mapWrapper}>
              <button
                type="button"
                className={styles.mapPreview}
                onClick={() => setMapaAbierto(true)}
                aria-label="Ampliar mapa de procesos"
              >
                <img
                  src={mapaProcesos}
                  alt="Mapa de procesos del Sistema de Gestión de Calidad de ACTIVA"
                />

                <div className={styles.mapOverlay}>
                  <div className={styles.zoomIcon}>
                    <MagnifyingGlassPlus size={25} weight="bold" />
                  </div>
                  <span>Haz clic para ampliar el mapa</span>
                </div>
              </button>
            </div>
          </section>

          {/* Dashboard */}

          <section className={styles.dashboard}>

            <header className={styles.dashboardHeader}>
              <div className={styles.dashboardIcon}>
                <ChartLineUp size={34} weight="bold" />
              </div>

              <div className={styles.dashboardTitle}>
                <span>SISTEMA INSTITUCIONAL</span>
                <h2>Gestión de Calidad</h2>
                <p>Conoce los componentes de nuestro sistema de gestión.</p>
              </div>
            </header>

            <div className={styles.dashboardScroll}>

              {/* Accesos financieros */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <Bank size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>CONSULTA INSTITUCIONAL</span>
                    <h3>Información y documentos</h3>
                  </div>
                </div>

                <div className={styles.linksGrid}>
                  {accesosFinancieros.map((acceso, index) => {
                    const Icono = acceso.icono;

                    return (
                      <a
                        key={index}
                        href={acceso.enlace}
                        className={styles.linkCard}
                      >
                        <div className={styles.linkIcon}>
                          <Icono size={22} weight="duotone" />
                        </div>

                        <div className={styles.linkText}>
                          <strong>{acceso.titulo}</strong>
                          <span>{acceso.descripcion}</span>
                        </div>

                        <ArrowUpRight
                          className={styles.linkArrow}
                          size={19}
                        />
                      </a>
                    );
                  })}
                </div>
              </section>

              {/* Documentación general */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <BookOpenText size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>DOCUMENTACIÓN</span>
                    <h3>Documentos del sistema</h3>
                  </div>
                </div>

                <div className={styles.documentCard}>
                  <div className={styles.documentIcon}>
                    <FileText size={27} weight="duotone" />
                  </div>

                  <div>
                    <strong>Sistema de Gestión de Calidad</strong>
                    <span>
                      Consulta la documentación relacionada con la gestión de
                      calidad institucional.
                    </span>
                  </div>

                  <ArrowUpRight size={20} />
                </div>
              </section>

              {/* Procesos */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <ClipboardText size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>ESTRUCTURA INSTITUCIONAL</span>
                    <h3>Procesos de ACTIVA</h3>
                  </div>
                </div>

                <div className={styles.subheading}>
                  <Plus size={17} weight="bold" />
                  <h4>Clasificación de los procesos</h4>
                </div>

                <div className={styles.processGrid}>
                  {procesos.map((proceso) => {
                    const Icono = proceso.icono;

                    return (
                      <article
                        key={proceso.numero}
                        className={`${styles.processCard} ${styles[proceso.tipo]}`}
                      >
                        <span className={styles.processNumber}>
                          {proceso.numero}
                        </span>

                        <div className={styles.processMain}>
                          <Icono
                            className={styles.processIcon}
                            size={23}
                            weight="duotone"
                          />

                          <div>
                            <h4>{proceso.nombre}</h4>
                            <p>{proceso.descripcion}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* Indicadores */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <ChartBar size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>SEGUIMIENTO Y MEDICIÓN</span>
                    <h3>Indicadores del sistema</h3>
                  </div>
                </div>

                <div className={styles.indicatorsGrid}>
                  {indicadores.map((indicador, index) => (
                    <article className={styles.indicatorCard} key={index}>
                      <strong>{indicador.valor}</strong>
                      <span>{indicador.titulo}</span>
                    </article>
                  ))}
                </div>
              </section>

              {/* Principios */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <Lightbulb size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>NUESTRO COMPROMISO</span>
                    <h3>Principios de gestión</h3>
                  </div>
                </div>

                <div className={styles.principlesGrid}>
                  {principios.map((principio, index) => {
                    const Icono = principio.icono;

                    return (
                      <article className={styles.principle} key={index}>
                        <div>
                          <Icono size={25} weight="duotone" />
                        </div>

                        <h4>{principio.titulo}</h4>
                        <p>{principio.descripcion}</p>
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* Mapa interno */}

              <section className={styles.contentSection}>
                <div className={styles.contentHeading}>
                  <div className={styles.headingIcon}>
                    <MapTrifold size={25} weight="duotone" />
                  </div>

                  <div>
                    <span>GESTIÓN POR PROCESOS</span>
                    <h3>Modelo institucional</h3>
                  </div>
                </div>

                <div className={styles.innerMap}>
                  <img
                    src={mapaProcesos}
                    alt="Modelo institucional de procesos ACTIVA"
                    loading="lazy"
                  />
                </div>
              </section>

            </div>

            <footer className={styles.dashboardFooter}>
              <CheckCircle size={18} weight="fill" />
              <span>ACTIVA · Sistema de Gestión de Calidad</span>
            </footer>
          </section>
        </div>
      </section>

      {/* =====================================================
          MODAL DEL MAPA
      ====================================================== */}

      <div
        className={`${styles.mapModal} ${
          mapaAbierto ? styles.active : ''
        }`}
        aria-hidden={!mapaAbierto}
        onClick={() => setMapaAbierto(false)}
      >
        <div className={styles.modalBackdrop}></div>

        <div
          className={styles.modalContent}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa de procesos ampliado"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setMapaAbierto(false)}
            aria-label="Cerrar mapa"
          >
            <X size={25} weight="bold" />
          </button>

          <div className={styles.modalViewer}>
            <img
              src={mapaProcesos}
              alt="Mapa de procesos ampliado de ACTIVA"
            />
          </div>
        </div>
      </div>

    </main>
  );
}

export default SistemaGestionCalidad;