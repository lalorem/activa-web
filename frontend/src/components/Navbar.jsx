
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="brand-logo" aria-label="Inicio ACTIVA">
          <img
            src="/assets/logo_activa.webp"
            alt="Logo ACTIVA"
            className="brand-img"
          />
        </a>

        <ul className="nav-menu">
          <li><a href="/">INICIO</a></li>
          <li><a href="/quienes-somos.html">QUIÉNES SOMOS</a></li>
          <li><a href="/transparencia.html">TRANSPARENCIA</a></li>
          <li><a href="/participa.html">PARTICIPA</a></li>
          <li><a href="#">ATENCIÓN Y SERVICIO A LA CIUDADANÍA</a></li>
          <li><a href="/contratacion.html">CONTRATACIÓN</a></li>
          <li><a href="/unidades-negocio.html">UNIDADES DE NEGOCIO</a></li>
          <li><a href="#">PQRSDF</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
