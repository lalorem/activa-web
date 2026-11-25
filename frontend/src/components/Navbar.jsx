
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
    ruta: '/quienes-somos',
    opciones: [
      ['Quiénes Somos', '/quienes-somos'],
      ['Calendario de Actividades y Eventos', '/calendario'],
      ['Directorio Institucional', '/directorio-institucional'],
      ['Noticias ACTIVA', '/noticias-general'],
      ['Líneas de Acción', '/lineas-accion'],
      ['Organigrama', '/organigrama'],
      ['Misión, Visión, Deberes y Políticas', '/mision-vision'],
      ['Publicación de Hojas de Vida', '/publicacion-hojas-vida'],
    ],
  },
  {
    nombre: 'Transparencia',
    ruta: '/transparencia',
    opciones: [
      ['Transparencia', '/transparencia'],
      ['Oficina de Control Interno', '/oficina-control-interno'],
      ['Certificados de Accesibilidad', '/certificados-accesibilidad'],
    ],
  },
  {
    nombre: 'Participa',
    ruta: '/participa',
    opciones: [
      ['Descripción General', '/descripcion-general'],
      ['Rendición de Cuentas', '/rendicion-de-cuentas'],
      ['Canales de Atencion', '/canales-de-atencion-presencial-y-telefonica'],
      [
        'Servicio al Público, Normas, Formularios y Protocolos de Atención', '/servicio-al-publico-normas-formularios-y-protocolos-de-atencion'
      ],
      [
        'Procedimientos para la Toma de Decisiones', '/procedimientos-para-la-toma-de-decisiones'
      ],
      [
        'Entes y Autoridades que nos Vigilan',
        '/entes-y-autoridades-que-nos-vigilan',
      ],
    ],
  },
  {
    nombre: 'Contratación',
    ruta: '/contratacion',
    opciones: [
      ['Contratación', '/contratacion'],
      ['Proveedores', '/proveedores'],
      ['Tutoriales y Accesos', '/tutoriales-accesos'],
    ],
  },
  {
    nombre: 'Unidades de Negocio',
    ruta: '/unidades-de-negocio',
    opciones: [
      ['Unidades de Negocio', '/unidades-de-negocio'],
      ['Operación Logística Integral', '/operacion-logistica'],
      ['Eventos Propios', '/eventos-propios'],
      ['Administración de Parques', '/administracion-parques'],
      ['Parques ACTIVA', '/parques-activa'],
      ['Caféstival', '/cafestival'],
      ['Galería de Eventos', '/galeria-eventos'],
      ['Portafolio', '/portafolio'],
    ],
  },
];

function Navbar() {
  const location = useLocation();

  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);

  const [temaOscuro, setTemaOscuro] = useState(
    document.documentElement.dataset.theme === 'dark'
  );

  const [menusAbiertos, setMenusAbiertos] = useState([]);
  const [submenusAbiertos, setSubmenusAbiertos] = useState([]);

  // Bloquea la reapertura mientras el mouse siga encima
  const [menuCerradoPorClick, setMenuCerradoPorClick] = useState(false);

  // =========================================================
  // IDENTIFICAR LA RUTA ACTUAL
  // =========================================================

  const normalizarRuta = (ruta) =>
    ruta.replace(/\/+$/, '') || '/';

  const esRutaActiva = (ruta) => {
    if (ruta.startsWith('https://')) return false;

    return (
      normalizarRuta(location.pathname) ===
      normalizarRuta(ruta)
    );
  };

  // =========================================================
  // BUSCADOR
  // =========================================================

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

  // =========================================================
  // MENÚ MÓVIL
  // =========================================================

  const alternarMenu = (nombre) => {
    if (!menuAbierto) return;

    setMenusAbiertos((actuales) =>
      actuales.includes(nombre)
        ? actuales.filter((item) => item !== nombre)
        : [...actuales, nombre]
    );
  };

  const alternarSubmenu = (nombre) => {
    if (!menuAbierto) return;

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

  // Cerrar los menús al cambiar de página
  useEffect(() => {
    cerrarMenu();
    setBusquedaAbierta(false);
  }, [location.pathname]);

  // =========================================================
  // CAMBIO DE TEMA
  // =========================================================

  const cambiarTema = () => {
    const nuevoTema = !temaOscuro;

    document.documentElement.dataset.theme = nuevoTema
      ? 'dark'
      : 'light';

    setTemaOscuro(nuevoTema);
  };

  // =========================================================
  // CERRAR DESPLEGABLE DESPUÉS DE SELECCIONAR
  // =========================================================

  const seleccionarOpcion = () => {
    cerrarMenu();
    setMenuCerradoPorClick(true);
  };

  const salirDelDesplegable = (nombre) => {
    setMenuCerradoPorClick(false);

    setMenusAbiertos((actuales) =>
      actuales.filter((item) => item !== nombre)
    );

    setSubmenusAbiertos([]);
  };

  // =========================================================
  // RENDERIZAR ENLACES
  // =========================================================

  const esEnlaceExterno = (ruta) =>
    ruta.startsWith('https://');

  const renderEnlace = (
    nombre,
    ruta,
    cerrar = false,
    marcarActivo = true
  ) => {
    if (esEnlaceExterno(ruta)) {
      return (
        <a
          href={ruta}
          key={`${nombre}-${ruta}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={cerrar ? seleccionarOpcion : undefined}
        >
          {nombre}
        </a>
      );
    }

    return (
      <NavLink
        to={ruta}
        end
        key={`${nombre}-${ruta}`}
        className={
          marcarActivo && esRutaActiva(ruta)
            ? styles['enlace-activo']
            : undefined
        }
        aria-current={
          esRutaActiva(ruta) ? 'page' : undefined
        }
        onClick={cerrar ? seleccionarOpcion : undefined}
      >
        {nombre}
      </NavLink>
    );
  };

  // =========================================================
  // RENDERIZAR OPCIONES Y SUBMENÚS
  // =========================================================

  const renderOpciones = (opciones, menuPadre) =>
    opciones.map((opcion) => {
      if (Array.isArray(opcion)) {
        const [nombre, ruta] = opcion;

        return (
          <div
            className={styles['transparency-item']}
            key={`${nombre}-${ruta}`}
          >
            {renderEnlace(nombre, ruta, true, true)}
          </div>
        );
      }

      const clave = `${menuPadre}-${opcion.nombre}`;
      const abierto = submenusAbiertos.includes(clave);
      const esActivo = esRutaActiva(opcion.ruta);

      return (
        <div
          className={`${styles['transparency-item']} ${
            styles['has-submenu']
          } ${abierto ? styles.abierto : ''}`}
          key={clave}
        >
          <div className={styles['submenu-parent']}>
            <NavLink
              to={opcion.ruta}
              end
              className={
                esActivo
                  ? styles['enlace-activo']
                  : undefined
              }
              aria-current={esActivo ? 'page' : undefined}
              onClick={seleccionarOpcion}
            >
              {opcion.nombre}
            </NavLink>

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

  // =========================================================
  // ESTRUCTURA DEL NAVBAR
  // =========================================================

  return (
    <>
      {/* BARRA GOV.CO */}
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

      {/* NAVBAR PRINCIPAL */}
      <nav
        className={styles.navbar}
        aria-label="Navegación principal"
      >
        <div className={styles['navbar-container']}>

          {/* LOGO ACTIVA */}
          <NavLink
            to="/"
            className={styles['navbar-logo']}
            onClick={cerrarMenu}
            aria-label="Inicio de ACTIVA"
          >
            <img src={activa} alt="Logo ACTIVA" />
          </NavLink>

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            type="button"
            className={styles['navbar-toggle']}
            onClick={() => {
              setMenuAbierto((abierto) => !abierto);
              setMenusAbiertos([]);
              setSubmenusAbiertos([]);
            }}
            aria-label={
              menuAbierto ? 'Cerrar menú' : 'Abrir menú'
            }
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? (
              <X size={26} />
            ) : (
              <List size={26} />
            )}
          </button>

          {/* OPCIONES PRINCIPALES */}
          <ul
            className={`${styles['navbar-menu']} ${
              menuAbierto ? styles.activo : ''
            }`}
          >
            <li className={styles['menu-item-simple']}>
              {renderEnlace('Inicio', '/', true, false)}
            </li>

            {menus.map((menu) => {
              const abierto = menusAbiertos.includes(
                menu.nombre
              );

              return (
                <li
                  className={`${styles['navbar-dropdown']} ${
                    abierto ? styles.abierto : ''
                  } ${menuCerradoPorClick ? styles.cerrado : ''}`}
                  key={menu.nombre}
                  onMouseLeave={() =>
                    salirDelDesplegable(menu.nombre)
                  }
                >
                  <div className={styles['navbar-parent']}>
                    {renderEnlace(
                      menu.nombre,
                      menu.ruta,
                      true,
                      false
                    )}

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
                    <div
                      className={styles['transparency-title']}
                    >
                      {menu.nombre}
                    </div>

                    {renderOpciones(
                      menu.opciones,
                      menu.nombre
                    )}
                  </div>
                </li>
              );
            })}

            <li className={styles['menu-item-simple']}>
              {renderEnlace('PQRSDF', '/pqrsdf', true, false)}
            </li>
          </ul>

          {/* REDES SOCIALES, TEMA Y BÚSQUEDA */}
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
              {temaOscuro ? (
                <Sun size={21} />
              ) : (
                <Moon size={21} />
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setBusquedaAbierta((abierta) => !abierta)
              }
              aria-label="Abrir búsqueda"
              title="Buscar"
              aria-expanded={busquedaAbierta}
            >
              <MagnifyingGlass size={21} />
            </button>
          </div>
        </div>
      </nav>

      {/* BUSCADOR ANIMADO */}
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

          <label
            htmlFor="searchInput"
            className={styles['search-label']}
          >
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
                window.location.href =
                  `/buscar/?q=${encodeURIComponent(consulta)}`;
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
