
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/assets/logo_activa.webp"
              alt="Logo ACTIVA"
              className="footer-logo"
            />
          </div>

          <div>
            <h4 className="footer-title">Oficina</h4>
            <ul className="footer-list">
              <li>Medellín, Antioquia, Colombia.</li>
              <li>Centro Administrativo Departamental La Alpujarra.</li>
              <li>Piso 6 – Oficina 610.</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Líneas de Atención</h4>
            <ul className="footer-list">
              <li>Línea de Atención: +57 604 383 80 42</li>
              <li>Correo: info@activa.com.co</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Enlaces de Interés</h4>
            <ul className="footer-list">
              <li>
                <a href="https://www.antioquia.gov.co/">
                  Gobernación de Antioquia
                </a>
              </li>
              <li>
                <a href="https://activa.com.co/pqrs/">
                  PQRSDF
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 ACTIVA. Empresa industrial y comercial de la
            Gobernación de Antioquia.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
