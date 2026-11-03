import { useEffect, useState } from 'react';
import {
  List,
  X,
  MagnifyingGlass,
  Sun,
  Moon,
  FacebookLogo,
  XLogo,
  InstagramLogo,
  YoutubeLogo,
  CaretDown,
  CaretRight,
} from '@phosphor-icons/react';

import styles from './style/navbar.module.css';
import gov from '../assets/logo_gov.webp';
import activa from '../assets/logo_activa.webp';

const menus = [
  {
    nombre: 'Quiénes Somos',
    ruta: '/quienes-somos.html',
    opciones: [
      ['Quiénes Somos', '/quienes-somos.html'],
      ['Calendario de Actividades y Eventos', '/calendario.html'],
      ['Directorio Institucional', '/directorio-institucional.html'],
      ['Noticias ACTIVA', '/NoticiasGeneral.html'],
      ['Líneas de Acción', '/lineas-accion.html'],
      ['Estructura Orgánica', '/Estructura-Organica.html'],
      ['Misión, Visión, Deberes y Políticas', '/mision-vision.html'],
      ['Publicación de Hojas de Vida', '/vista-hojasdevida.html'],
    ],
  },
  {
    nombre: 'Transparencia',
    ruta: '/transparencia.html',
    opciones: [
      ['Transparencia', '/transparencia.html'],
      ['Oficina de Control Interno', '/controlinterno.html'],
      ['Caracterizaciones', '/caracterizaciones.html'],
      ['Certificados de Accesibilidad', '/Accesibilidad.html'],
      {
        nombre: 'Planeación, Presupuestos e Informes',
        ruta: '/planeacion-presupuestos-informes.html',
        opciones: [
          ['Información para Mujeres', '/informacion-mujeres.html'],
          ['Información para Niños, Niñas y Adolescentes (NNA)', '/informacion-niños-adolescentes.html'],
          ['Otros Grupos de Interés', '/grupos-interes.html'],
          ['Planeación', '/planeacion.html'],
          ['Sistema de Gestión de Calidad', '/sistema-gestion-calidad.html'],
        ],
      },
      {
        nombre: 'Normativa',
        ruta: '/normativa-entidad.html',
        opciones: [
          ['Normativa de la Entidad', '/normativa-entidad.html'],
          ['Resoluciones', '/resoluciones.html'],
          ['Acuerdos', '/acuerdos.html'],
          ['Políticas, Lineamientos y Manuales', '/politicas-lineamientos-manuales.html'],
          ['SUIN', 'https://www.suin-juriscol.gov.co/'],
          ['Estados Financieros', '/estados-financieros.html'],
        ],
      },
    ],
  },
  {
    nombre: 'Participa',
    ruta: '/participa.html',
    opciones: [
      ['Descripción General', '/participa.html'],
      ['Menú Participa', 'https://activa.com.co/menu-participa/'],
      ['Rendición de Cuentas', 'https://activa.com.co/rendicion-de-cuentas/'],
      ['Formulario de Contacto', 'https://activa.com.co/pqrs/'],
      ['Canales de Atención Presencial y Telefónica', 'https://activa.com.co/canales-de-atencion-presencial-y-telefonica/'],
      ['Consulta Ciudadana', 'https://activa.com.co/consulta-ciudadana/'],
      ['Invitaciones Públicas', 'https://activa.com.co/contratacion/'],
      ['Servicio al Público, Normas, Formularios y Protocolos de Atención', 'https://activa.com.co/documentos/'],
      ['Procedimientos para la Toma de Decisiones', 'https://activa.com.co/en-construccion/'],
    ],
  },
  {
    nombre: 'Contratación',
    ruta: '/contratacion.html',
    opciones: [
      ['Contratación', '/contratacion.html'],
      ['Manifestaciones de Interés', '/manifestaciones-interes.html'],
      ['Proveedores', '/proveedores.html'],
      ['Tutoriales y Accesos', '/tutoriales-accesos.html'],
    ],
  },
  {
    nombre: 'Unidades de Negocio',
    ruta: '/unidades-negocio.html',
    opciones: [
      ['Unidades de Negocio', '/unidades-negocio.html'],
      ['Operación Logística Integral', '/operacion-logistica.html'],
      ['Eventos Propios', '/eventos-propios.html'],
      ['Administración de Parques', '/administracion-parques.html'],
      ['Parques ACTIVA', '/parques-activa.html'],
      ['Caféstival', '/cafestival.html'],
      ['Galería de Eventos', '/galeria-eventos.html'],
      ['Portafolio', '/portafolio.html'],
    ],
  },
];

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);
    useEffect(() => {
    if (!busquedaAbierta) return;

    const cerrarConEscape = (event) => {
      if (event.key === 'Escape') {
        setBusquedaAbierta(false);
      }
    };

    document.addEventListener('keydown', cerrarConEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', cerrarConEscape);
      document.body.style.overflow = '';
    };
  }, [busquedaAbierta]);

  const [temaOscuro, setTemaOscuro] = useState(
  document.documentElement.dataset.theme === 'dark'
);
  const [menusAbiertos, setMenusAbiertos] = useState([]);
  const [submenusAbiertos, setSubmenusAbiertos] = useState([]);

  const alternarMenu = (nombre) => {
    setMenusAbiertos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((item) => item !== nombre)
        : [...actuales, nombre]
    );
  };

  const alternarSubmenu = (nombre) => {
    setSubmenusAbiertos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((item) => item !== nombre)
        : [...actuales, nombre]
    );
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
    setMenusAbiertos([]);
    setSubmenusAbiertos([]);
  };

  const cambiarTema = () => {
  const nuevoTema = !temaOscuro;

  document.documentElement.dataset.theme = nuevoTema
    ? 'dark'
    : 'light';

  setTemaOscuro(nuevoTema);
};

  const esEnlaceExterno = (ruta) => ruta.startsWith('https://');

  const renderEnlace = (nombre, ruta, cerrar = false) => (
    <a
      href={ruta}
      key={`${nombre}-${ruta}`}
      target={esEnlaceExterno(ruta) ? '_blank' : undefined}
      rel={esEnlaceExterno(ruta) ? 'noopener noreferrer' : undefined}
      onClick={cerrar ? cerrarMenu : undefined}
    >
      {nombre}
    </a>
  );

  const renderOpciones = (opciones, menuPadre) =>
    opciones.map((opcion) => {
      if (Array.isArray(opcion)) {
        const [nombre, ruta] = opcion;

        return (
          <div className={styles['transparency-item']} key={`${nombre}-${ruta}`}>
            {renderEnlace(nombre, ruta, true)}
          </div>
        );
      }

      const clave = `${menuPadre}-${opcion.nombre}`;
      const abierto = submenusAbiertos.includes(clave);

      return (
        <div
          className={`${styles['transparency-item']} ${styles['has-submenu']} ${
            abierto ? styles.abierto : ''
          }`}
          key={clave}
        >
          <div className={styles['submenu-parent']}>
            <a
              href={opcion.ruta}
              onClick={(event) => {
                if (menuAbierto) {
                  event.preventDefault();
                  alternarSubmenu(clave);
                }
              }}
            >
              {opcion.nombre}
            </a>

            <button
              type="button"
              className={styles['submenu-toggle']}
              aria-label={`Mostrar ${opcion.nombre}`}
              aria-expanded={abierto}
              onClick={() => alternarSubmenu(clave)}
            >
              <CaretRight size={14} />
            </button>
          </div>

          <div
            className={`${styles['transparency-submenu']} ${
              abierto ? styles.activo : ''
            }`}
          >
            {renderOpciones(opcion.opciones || [], clave)}
          </div>
        </div>
      );
    });

  return (
    <>
      <div className={styles['gov-bar']}>
        <div className={styles['navbar-container']}>
          <a
            href="https://www.gov.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al portal oficial GOV.CO"
          >
            <img src={gov} alt="GOV.CO" />
          </a>
        </div>
      </div>

      <nav className={styles.navbar} aria-label="Navegación principal">
        <div className={styles['navbar-container']}>
          <a
            href="/"
            className={styles['navbar-logo']}
            onClick={cerrarMenu}
            aria-label="Inicio de ACTIVA"
          >
            <img src={activa} alt="Logo ACTIVA" />
          </a>

          <button
            type="button"
            className={styles['navbar-toggle']}
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <X size={26} /> : <List size={26} />}
          </button>

          <ul
            className={`${styles['navbar-menu']} ${
              menuAbierto ? styles.activo : ''
            }`}
          >
            <li className={styles['menu-item-simple']}>
              {renderEnlace('Inicio', '/', true)}
            </li>

            {menus.slice(0, 3).map((menu) => {
              const abierto = menusAbiertos.includes(menu.nombre);

              return (
                <li
                  className={`${styles['navbar-dropdown']} ${
                    abierto ? styles.abierto : ''
                  }`}
                  key={menu.nombre}
                >
                  <div className={styles['navbar-parent']}>
                    {renderEnlace(menu.nombre, menu.ruta)}

                    <button
                      type="button"
                      className={styles['main-toggle']}
                      aria-label={`Mostrar opciones de ${menu.nombre}`}
                      aria-expanded={abierto}
                      onClick={() => alternarMenu(menu.nombre)}
                    >
                      <CaretDown size={13} />
                    </button>
                  </div>

                  <div
                    className={`${styles['transparency-menu']} ${
                      abierto ? styles.activo : ''
                    }`}
                  >
                    <div className={styles['transparency-title']}>
                      {menu.nombre}
                    </div>
                    {renderOpciones(menu.opciones, menu.nombre)}
                  </div>
                </li>
              );
            })}

            <li className={styles['menu-item-simple']}>
              {renderEnlace(
                'Atención y Servicio a la Ciudadanía',
                '/atencion-servicio-ciudadania.html',
                true
              )}
            </li>

            {menus.slice(3).map((menu) => {
              const abierto = menusAbiertos.includes(menu.nombre);

              return (
                <li
                  className={`${styles['navbar-dropdown']} ${
                    abierto ? styles.abierto : ''
                  }`}
                  key={menu.nombre}
                >
                  <div className={styles['navbar-parent']}>
                    {renderEnlace(menu.nombre, menu.ruta)}

                    <button
                      type="button"
                      className={styles['main-toggle']}
                      aria-label={`Mostrar opciones de ${menu.nombre}`}
                      aria-expanded={abierto}
                      onClick={() => alternarMenu(menu.nombre)}
                    >
                      <CaretDown size={13} />
                    </button>
                  </div>

                  <div
                    className={`${styles['transparency-menu']} ${
                      abierto ? styles.activo : ''
                    }`}
                  >
                    <div className={styles['transparency-title']}>
                      {menu.nombre}
                    </div>
                    {renderOpciones(menu.opciones, menu.nombre)}
                  </div>
                </li>
              );
            })}

            <li className={styles['menu-item-simple']}>
              {renderEnlace('PQRSDF', '/pqrs/', true)}
            </li>
          </ul>

          <div className={styles['navbar-actions']}>
            <div className={styles['navbar-socials']}>
              <a
                href="https://www.facebook.com/activa.com.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de ACTIVA"
              >
                <FacebookLogo size={20} />
              </a>
              <a
                href="https://x.com/ActivaCo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X de ACTIVA"
              >
                <XLogo size={20} />
              </a>
              <a
                href="https://www.instagram.com/activa.antioquia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de ACTIVA"
              >
                <InstagramLogo size={20} />
              </a>
              <a
                href="https://www.youtube.com/@ActivaAntioquia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de ACTIVA"
              >
                <YoutubeLogo size={20} />
              </a>
            </div>

            <button
              type="button"
              onClick={cambiarTema}
              aria-label="Cambiar tema"
              title="Cambiar tema"
            >
              {temaOscuro ? <Sun size={21} /> : <Moon size={21} />}
            </button>

            <button
              type="button"
              onClick={() => setBusquedaAbierta((abierta) => !abierta)}
              aria-label="Abrir búsqueda"
              title="Buscar"
              aria-expanded={busquedaAbierta}
            >
              <MagnifyingGlass size={21} />
            </button>
          </div>
        </div>
      </nav>

      
      <div
        className={`${styles['search-overlay']} ${
          busquedaAbierta ? styles.activo : ''
        }`}
        aria-hidden={!busquedaAbierta}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            setBusquedaAbierta(false);
          }
        }}
      >
        <div className={styles['search-box']}>
          <button
            type="button"
            className={styles['search-close']}
            onClick={() => setBusquedaAbierta(false)}
            aria-label="Cerrar buscador"
            tabIndex={busquedaAbierta ? 0 : -1}
          >
            <X size={22} />
          </button>

          <label htmlFor="searchInput" className={styles['search-label']}>
            ¿Qué estás buscando?
          </label>

          <form
            className={styles['search-input-container']}
            onSubmit={(event) => {
              event.preventDefault();

              const consulta = event.currentTarget.elements
                .namedItem('searchInput')
                ?.value.trim();

              if (consulta) {
                window.location.href = `/buscar/?q=${encodeURIComponent(consulta)}`;
              }
            }}
          >
            <input
              type="search"
              id="searchInput"
              name="searchInput"
              placeholder="Escribe aquí..."
              autoComplete="off"
              aria-label="Escribe lo que deseas buscar"
              tabIndex={busquedaAbierta ? 0 : -1}
            />

            <button
              type="submit"
              className={styles['search-submit']}
              aria-label="Buscar"
              tabIndex={busquedaAbierta ? 0 : -1}
            >
              <MagnifyingGlass size={23} />
            </button>
          </form>
        </div>
      </div>

    </>
  );
}

export default Navbar;
