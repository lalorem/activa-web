import styles from './style/Footer.module.css';
import activaLogo from '../assets/logo_activa.webp';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-grid']}>
          {/* LOGO ACTIVA */}
          <div className={styles['footer-brand']}>
            <a href="/" aria-label="Inicio de ACTIVA">
              <img
                src={activaLogo}
                alt="Logo ACTIVA"
                className={styles['footer-logo']}
              />
            </a>
          </div>

          {/* OFICINA */}
          <div>
            <h4 className={styles['footer-title']}>Oficina</h4>

            <ul className={styles['footer-list']}>
              <li>
                Horario: lunes a jueves de 8:00 a. m. a 12:00 m. y de
                2:00 p. m. a 4:30 p. m.; y los viernes de 8:00 a. m.
                a 12:00 m. y de 2:00 p. m. a 3:30 p. m.
              </li>

              <li>
                Oficina Principal / Dirección de correspondencia:
                Calle 42B Número 52-106 Centro Administrativo
                Departamental «José María Córdova» – La Alpujarra.
                Piso 6 – Oficina 610.
              </li>

              <li>Medellín, Antioquia-Colombia.</li>
              <li>Código postal: 050015</li>
            </ul>
          </div>

          {/* LÍNEAS DE ATENCIÓN */}
          <div>
            <h4 className={styles['footer-title']}>
              Líneas de Atención
            </h4>

            <ul className={styles['footer-list']}>
              <li>
                Línea de Atención a la Ciudadanía: +57 604 383 80 42
              </li>

              <li>
                Línea Anticorrupción: +57 604 383 80 42
              </li>

              <li>
                Correos electrónicos de contacto:{' '}
                <a href="mailto:info@activa.com.co">
                  info@activa.com.co
                </a>
              </li>

              <li>
                Correo electrónico para notificaciones judiciales:{' '}
                <a href="mailto:info@activa.com.co">
                  info@activa.com.co
                </a>
              </li>

              <li>NIT: 901437957-8</li>
            </ul>
          </div>

          {/* ENLACES DE INTERÉS */}
          <div>
            <h4 className={styles['footer-title']}>
              Enlaces de Interés
            </h4>

            <ul className={styles['footer-list']}>
              <li>
                <a
                  href="https://www.antioquia.gov.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gobernación de Antioquia
                </a>
              </li>

              <li>
                <a
                  href="https://www.mintic.gov.co/portal/inicio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ministerio de Tecnologías de la Información y las
                  Comunicaciones
                </a>
              </li>

              <li>
                <a
                  href="https://colombiacompra.gov.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colombia Compra Eficiente
                </a>
              </li>

              <li>
                <a
                  href="http://svrpubindc.imprenta.gov.co/senado/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gaceta Oficial
                </a>
              </li>

              <li>
                <a
                  href="https://activa.com.co/pqrs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PQRSDF
                </a>
              </li>

              <li>
                <a
                  href="https://activa.com.co/mapa-del-sitio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapa del Sitio
                </a>
              </li>

              <li>
                <a
                  href="https://activa.com.co/wp-content/uploads/2024/07/GA-F019-Politica-tramite-de-datos-personales.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Protección de Datos Personales
                </a>
              </li>

              <li>
                <a
                  href="https://activa.com.co/wp-content/uploads/2024/07/Terminos-y-condiciones-pagina-web-ACTIVA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className={styles['footer-bottom']}>
          <p>
            © {new Date().getFullYear()} Activa. Empresa industrial
            y comercial de la Gobernación de Antioquia. NIT: 901437957-8
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
