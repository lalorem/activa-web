
import {
  FileText,
  ClipboardText,
  ChartBar,
  CurrencyCircleDollar,
  ArrowUpRight,
  Handshake
} from '@phosphor-icons/react';

import styles from '../components/style/Proveedores.module.css';

const enlacesProveedores = [
  {
    titulo: 'Certificados Proveedores',
    descripcion:
      'Realiza la solicitud y consulta de certificados relacionados con tu registro como proveedor.',
    icono: FileText,
    url: 'https://forms.office.com/r/TmttFC6iT6'
  },
  {
    titulo: 'Certificado Inscripción Proveedores',
    descripcion:
      'Accede al formulario para gestionar tu certificado de inscripción en el registro de proveedores.',
    icono: ClipboardText,
    url: 'https://forms.office.com/pages/responsepage.aspx?id=q-KC6eoWEUGz3_OlN_jXFgwJ-8ds4nhNge4O1yk6VatUMkJLSDk2SlZZUkVNQ0JXVENPOVlYQ0dYVi4u&route=shorturl'
  },
  {
    titulo: 'Informes de Evidencias',
    descripcion:
      'Ingresa a la plataforma destinada al registro y consulta de informes de evidencias.',
    icono: ChartBar,
    url: 'https://formularioproveedores.tecnotics.co/'
  },
  {
    titulo: 'Tarifario ACTIVA',
    descripcion:
      'Consulta el tarifario vigente de los servicios ofrecidos por ACTIVA.',
    icono: CurrencyCircleDollar,
    url: 'https://medellin015.github.io/Tarifario-Activa/'
  }
];

function Proveedores() {
  return (
    <main className={styles.proveedoresPage}>

      {/* HEADER */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            <Handshake size={17} weight="bold" />
            Relacionamiento empresarial
          </span>

          <h1>Proveedores</h1>

          <p>
            En ACTIVA construimos relaciones de confianza con nuestros
            proveedores. Aquí encontrarás los accesos y herramientas
            necesarios para realizar tus trámites y consultas.
          </p>
        </div>
      </section>

      {/* ENLACES */}
      <section className={styles.enlacesSection}>
        <div className={styles.sectionHeading}>
          <span>PORTAL DE PROVEEDORES</span>
          <h2>Accesos y herramientas</h2>
          <p>
            Selecciona el servicio que necesitas para continuar con tu gestión.
          </p>
        </div>

        <div className={styles.enlacesList}>
          {enlacesProveedores.map((enlace, index) => {
            const Icono = enlace.icono;

            return (
              <a
                key={enlace.titulo}
                href={enlace.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enlaceCard}
              >
                <span className={styles.enlaceNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className={styles.enlaceIcon}>
                  <Icono size={27} weight="duotone" />
                </span>

                <span className={styles.enlaceText}>
                  <strong>{enlace.titulo}</strong>
                  <small>{enlace.descripcion}</small>
                </span>

                <span className={styles.enlaceArrow}>
                  <ArrowUpRight size={22} weight="bold" />
                </span>
              </a>
            );
          })}
        </div>

        {/* MENSAJE DE APOYO */}
        <div className={styles.infoBox}>
          <div className={styles.infoIcon}>
            <Handshake size={25} weight="duotone" />
          </div>

          <div>
            <h3>¿Necesitas ayuda?</h3>
            <p>
              Si tienes dudas sobre los trámites o servicios para proveedores,
              puedes comunicarte con ACTIVA a través de nuestros canales
              de atención.
            </p>
            <a href="mailto:info@activa.com.co">
              info@activa.com.co
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Proveedores;
