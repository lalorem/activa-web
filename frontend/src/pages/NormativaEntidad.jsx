
import {
  Scales,
  Newspaper,
  FileText,
  Buildings,
  Info,
  ListChecks,
  ChartBar,
  FileMinus,
  Archive,
  ShoppingCart,
  ShieldCheck,
  Brain,
  ChartLine,
  CurrencyDollar,
  Globe,
  Heart,
  UsersThree,
  Compass,
  Warning,
  ArrowsClockwise,
  ChartLineUp,
  LockKey,
  UserCircle,
  Users,
  PaintBrush,
  CheckCircle,
  Files,
  WarningCircle,
  Car,
  UserList,
  Hammer,
  ArrowUpRight,
} from '@phosphor-icons/react';

import styles from '../components/style/NormativaEntidad.module.css';

const modulos = [
  {
    numero: '01',
    titulo: 'Sistemas de Información Normativa',
    documentos: [
      {
        titulo: 'Sistema Único de Información Normativa – SUIN',
        descripcion:
          'Consulta la normativa jurídica nacional a través del sistema oficial de información.',
        icono: Scales,
        url: 'https://www.suin-juriscol.gov.co/',
        externo: true,
      },
      {
        titulo: 'Diario o Gaceta Oficial',
        descripcion:
          'Consulta el vínculo oficial al Diario o Gaceta Oficial.',
        icono: Newspaper,
        url: 'https://svrpubindc.imprenta.gov.co/',
        externo: true,
      },
      {
        titulo: 'SECOP',
        descripcion:
          'Sistema Electrónico para la Contratación Pública.',
        icono: FileText,
        url: 'https://community.secop.gov.co/',
        externo: true,
      },
    ],
  },
  {
    numero: '02',
    titulo: 'Políticas y Lineamientos Sectoriales',
    documentos: [
      {
        titulo: 'DIMENSIONES MIPG',
        descripcion:
          'Información relacionada con las dimensiones del Modelo Integrado de Planeación y Gestión.',
        icono: Buildings,
      },
      {
        titulo: 'CÓMO FUNCIONA MIPG',
        descripcion:
          'Información general sobre el funcionamiento del Modelo Integrado de Planeación y Gestión.',
        icono: Info,
      },
      {
        titulo: 'Políticas MIPG',
        descripcion:
          'Políticas institucionales asociadas al MIPG.',
        icono: ListChecks,
      },
      {
        titulo: 'Autodiagnóstico MIPG V21_02_2023',
        descripcion:
          'Documento de autodiagnóstico institucional.',
        icono: ChartBar,
      },
      {
        titulo: 'Política Cero Papel',
        descripcion:
          'Política Cero Papel de la Empresa de Parques y Eventos de Antioquia – ACTIVA.',
        icono: FileMinus,
      },
      {
        titulo: 'Política de Archivos y Gestión Documental',
        descripcion:
          'Lineamientos para la gestión y conservación documental de la entidad.',
        icono: Archive,
      },
      {
        titulo: 'Política de Compras y Contratación',
        descripcion:
          'Lineamientos relacionados con compras y procesos de contratación.',
        icono: ShoppingCart,
      },
      {
        titulo: 'Política de Control Interno',
        descripcion:
          'Directrices para el fortalecimiento del control interno institucional.',
        icono: ShieldCheck,
      },
      {
        titulo: 'Política de Fortalecimiento Institucional',
        descripcion:
          'Lineamientos para el fortalecimiento de la gestión institucional.',
        icono: Buildings,
      },
      {
        titulo: 'Política de Gestión del Conocimiento',
        descripcion:
          'Orientaciones para la gestión y aprovechamiento del conocimiento.',
        icono: Brain,
      },
      {
        titulo: 'Política de Gestión Estadística',
        descripcion:
          'Lineamientos para la gestión de la información estadística institucional.',
        icono: ChartLine,
      },
      {
        titulo: 'Política de Gestión Presupuestal',
        descripcion:
          'Directrices relacionadas con la gestión presupuestal.',
        icono: CurrencyDollar,
      },
      {
        titulo: 'Política de Gobierno Digital',
        descripcion:
          'Lineamientos para la transformación digital y tecnológica.',
        icono: Globe,
      },
      {
        titulo: 'Política de Integridad',
        descripcion:
          'Orientaciones institucionales para promover la integridad.',
        icono: Heart,
      },
      {
        titulo: 'Política de Mejora Normativa',
        descripcion:
          'Lineamientos para la identificación, actualización y gestión normativa.',
        icono: Scales,
      },
      {
        titulo: 'Política de Participación Ciudadana',
        descripcion:
          'Directrices para fortalecer la participación de la ciudadanía.',
        icono: UsersThree,
      },
      {
        titulo: 'Política de Planeación Institucional',
        descripcion:
          'Orientaciones para la planeación institucional de ACTIVA.',
        icono: Compass,
      },
      {
        titulo: 'Política de Prevención del Daño Antijurídico',
        descripcion:
          'Lineamientos para la prevención del daño antijurídico.',
        icono: Warning,
      },
      {
        titulo: 'Política de Racionalización de Trámites',
        descripcion:
          'Directrices para facilitar y optimizar los trámites institucionales.',
        icono: ArrowsClockwise,
      },
      {
        titulo: 'Política de Seguimiento y Evaluación',
        descripcion:
          'Lineamientos para el seguimiento y evaluación de la gestión.',
        icono: ChartLineUp,
      },
      {
        titulo: 'Política de Seguridad Digital',
        descripcion:
          'Directrices para la protección y seguridad de la información digital.',
        icono: LockKey,
      },
      {
        titulo: 'Política de Servicio al Ciudadano',
        descripcion:
          'Orientaciones para la atención y servicio a la ciudadanía.',
        icono: UserCircle,
      },
      {
        titulo: 'Política de Gestión del Talento Humano',
        descripcion:
          'Lineamientos relacionados con la gestión del talento humano.',
        icono: Users,
      },
      {
        titulo: 'Resolución Nro. 015 de 2022',
        descripcion:
          'Comité Institucional de Gestión y Desempeño.',
        icono: FileText,
      },
    ],
  },
  {
    numero: '03',
    titulo: 'Políticas, Lineamientos y Manuales',
    documentos: [
      {
        titulo: 'Acuerdo No. 001 del 13 de julio de 2023',
        descripcion: 'Manual de contratación.',
        icono: FileText,
      },
      {
        titulo: 'Manual de Identidad Gráfica – ACTIVA',
        descripcion:
          'Manual de identidad gráfica institucional. En construcción.',
        icono: PaintBrush,
      },
      {
        titulo: 'Manual de Calidad',
        descripcion:
          'Lineamientos relacionados con el sistema de gestión de calidad.',
        icono: CheckCircle,
      },
      {
        titulo: 'Manual para la Información Documentada',
        descripcion:
          'Orientaciones para la gestión de la información documentada.',
        icono: Files,
      },
      {
        titulo: 'Manual Gestión del Riesgo',
        descripcion:
          'Lineamientos para la identificación y gestión de riesgos.',
        icono: WarningCircle,
      },
      {
        titulo: 'Manual de Uso Vehicular ACTIVA',
        descripcion:
          'Lineamientos para el uso de vehículos de la entidad.',
        icono: Car,
      },
      {
        titulo: 'Resolución 006 de 2025',
        descripcion: '202503000011 – Manual de Funciones.',
        icono: UserList,
      },
      {
        titulo: 'Manual de Supervisión',
        descripcion:
          'Lineamientos para la supervisión de contratos y procesos institucionales.',
        icono: UsersThree,
      },
    ],
  },
  {
    numero: '04',
    titulo: 'Otros Lineamientos y Manuales',
    enConstruccion: true,
  },
];

function NormativaEntidad() {
  return (
    <main className={styles.normativaPage}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={`${styles.heroDecoration} ${styles.decorationOne}`}></div>
        <div className={`${styles.heroDecoration} ${styles.decorationTwo}`}></div>
        <div className={`${styles.heroDecoration} ${styles.decorationThree}`}></div>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Información normativa
          </div>

          <h1>Normativa de la Entidad</h1>

          <p className={styles.heroSubtitle}>
            Consulta la normativa, políticas, lineamientos y manuales
            que orientan la gestión institucional de ACTIVA.
          </p>
        </div>

        <div className={styles.heroSideInfo}>
          <span className={styles.heroSideLine}></span>
          ACTIVA · NORMATIVA
        </div>

        <div className={styles.wave}>
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path
              d="M0,96 C240,170 480,10 720,75 C960,140 1200,20 1440,80 L1440,160 L0,160 Z"
              fill="var(--hv-bg)"
            />
          </svg>
        </div>
      </header>

      {/* INTRODUCCIÓN */}
      <section className={styles.intro}>
        <div className={styles.introContainer}>
          <div className={styles.introIcon}>
            <Scales size={30} weight="bold" />
          </div>

          <h2>Normativa de ACTIVA</h2>

          <p>
            En este espacio se encuentra disponible la información
            normativa de la Empresa de Parques y Eventos de Antioquia
            – ACTIVA, incluyendo sistemas de información jurídica,
            políticas, lineamientos y manuales que orientan el
            funcionamiento y la gestión de la entidad.
          </p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className={styles.modules}>
        <div className={styles.moduleList}>
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

                <span className={styles.moduleToggle}>+</span>
              </summary>

              <div className={styles.moduleContent}>
                {modulo.enConstruccion ? (
                  <div className={styles.emptyModule}>
                    <div className={styles.emptyModuleIcon}>
                      <Hammer size={25} weight="bold" />
                    </div>

                    <div>
                      <h4>En construcción</h4>
                      <p>
                        Este espacio se encuentra actualmente
                        en construcción.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.linksGrid}>
                    {modulo.documentos.map((documento, index) => {
                      const Icono = documento.icono;

                      return (
                        <a
                          key={`${modulo.numero}-${index}`}
                          href={documento.url || '#'}
                          className={styles.moduleLink}
                          target={documento.externo ? '_blank' : undefined}
                          rel={
                            documento.externo
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          onClick={
                            !documento.url
                              ? (event) => event.preventDefault()
                              : undefined
                          }
                        >
                          <span className={styles.moduleLinkIcon}>
                            <Icono size={25} weight="bold" />
                          </span>

                          <span className={styles.moduleLinkText}>
                            <strong>{documento.titulo}</strong>
                            <span>{documento.descripcion}</span>
                          </span>

                          <span className={styles.moduleLinkArrow}>
                            <ArrowUpRight size={19} weight="bold" />
                          </span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default NormativaEntidad;
