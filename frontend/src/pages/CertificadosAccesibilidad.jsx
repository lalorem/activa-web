
import {
  Translate,
  Keyboard,
  Ruler,
  Globe,
  PlayCircle,
  Image as ImageIcon,
  ArrowUpRight,
  CheckCircle
} from '@phosphor-icons/react';

import styles from '../components/style/CertificadosAccesibilidad.module.css';

/* =========================================================
   CERTIFICADOS DISPONIBLES
========================================================= */

const certificados = [
  {
    numero: '01',
    categoria: 'CERTIFICACIÓN',
    titulo: 'Certificación del Lenguaje',
    descripcion:
      'Consulta el certificado correspondiente al uso accesible del lenguaje.',
    icono: Translate
  },
  {
    numero: '02',
    categoria: 'NAVEGACIÓN',
    titulo: 'Navegación por Tabulación',
    descripcion:
      'Consulta la certificación relacionada con la navegación mediante teclado.',
    icono: Keyboard
  },
  {
    numero: '03',
    categoria: 'ESTÁNDARES',
    titulo: 'Certificado Líneas Guía',
    descripcion:
      'Consulta el certificado relacionado con las líneas guía de accesibilidad.',
    icono: Ruler
  },
  {
    numero: '04',
    categoria: 'CONTENIDO WEB',
    titulo: 'Certificado Contenido WEB',
    descripcion:
      'Consulta la certificación correspondiente a los contenidos publicados en la web.',
    icono: Globe
  },
  {
    numero: '05',
    categoria: 'CONTENIDO MULTIMEDIA',
    titulo: 'Certificado de contenido de Movimiento',
    descripcion:
      'Consulta la certificación relacionada con elementos de movimiento y contenido dinámico.',
    icono: PlayCircle
  },
  {
    numero: '06',
    categoria: 'CONTENIDO VISUAL',
    titulo: 'Certificado Texto Alternativo',
    descripcion:
      'Consulta la certificación relacionada con textos alternativos para contenidos visuales.',
    icono: ImageIcon
  }
];

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

function CertificadosAccesibilidad() {
  return (
    <main className={styles.accessibilityPage}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>

        <div className={styles.heroBg}></div>

        <div className={styles.heroContent}>

          <span className={styles.eyebrow}>
            ACCESIBILIDAD DIGITAL
          </span>

          <h1>
            Certificados de
            <br />
            <span>Accesibilidad</span>
          </h1>

          <p>
            Compromiso con una experiencia digital más accesible,
            inclusiva y disponible para todas las personas.
          </p>

        </div>

        {/* Decoraciones */}

        <div className={`${styles.heroShape} ${styles.shapeOne}`}></div>
        <div className={`${styles.heroShape} ${styles.shapeTwo}`}></div>

      </section>

      {/* =====================================================
          INTRODUCCIÓN
      ====================================================== */}

      <section className={styles.intro}>

        <div className={styles.introLine}></div>

        <div className={styles.introContent}>

          <span className={styles.sectionLabel}>
            NUESTRO COMPROMISO
          </span>

          <p>
            En cumplimiento con la normativa vigente en materia de
            accesibilidad digital, se anexan los certificados
            correspondientes que acreditan el cumplimiento de los
            estándares requeridos.
          </p>

        </div>

      </section>

      {/* =====================================================
          CERTIFICADOS
      ====================================================== */}

      <section className={styles.certificates}>

        <div className={styles.sectionHeading}>

          <div>

            <span className={styles.sectionLabel}>
              DOCUMENTACIÓN
            </span>

            <h2>
              Certificaciones
              <span> disponibles</span>
            </h2>

          </div>

          <p>
            Consulta cada documento para conocer los estándares
            de accesibilidad implementados.
          </p>

        </div>

        {/* Tarjetas de certificados */}

        <div className={styles.grid}>

          {certificados.map((certificado) => {
            const Icono = certificado.icono;

            return (
              <a
                href="#"
                className={styles.card}
                key={certificado.numero}
              >

                <div className={styles.cardTop}>

                  <span className={styles.number}>
                    {certificado.numero}
                  </span>

                  <span className={styles.cardIcon}>
                    <Icono weight="regular" />
                  </span>

                </div>

                <div className={styles.cardBody}>

                  <span className={styles.cardCategory}>
                    {certificado.categoria}
                  </span>

                  <h3>
                    {certificado.titulo}
                  </h3>

                  <p>
                    {certificado.descripcion}
                  </p>

                </div>

                <div className={styles.cardAction}>

                  <span>
                    Ver certificado
                  </span>

                  <span className={styles.arrow}>
                    <ArrowUpRight weight="bold" />
                  </span>

                </div>

              </a>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className={styles.bottom}>

        <div className={styles.bottomIcon}>
          <CheckCircle weight="fill" />
        </div>

        <div>

          <span>
            ACCESIBILIDAD DIGITAL
          </span>

          <h2>
            Un espacio pensado para todas las personas.
          </h2>

        </div>

      </section>

    </main>
  );
}

export default CertificadosAccesibilidad;
