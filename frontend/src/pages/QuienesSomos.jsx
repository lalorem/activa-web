
import styles from '../components/style/quienesSomos.module.css';

import HeaderImagenes from '../components/HeaderImagenes';

import quienesSomosImg from '../assets/quienesomos.png';

import santiago from '../assets/Santiago-atehortua.webp';
import driana from '../assets/Driana-Durango.webp';
import carlos from '../assets/carlos.png';
import fernando from '../assets/Fernando de Jesús Cardona.webp';
import jhonatan from '../assets/Jhonatan Valencia.webp';
import william from '../assets/william.jpeg';

const equipo = [
  {
    imagen: santiago,
    nombre: 'Santiago Atehortua Sierra',
    cargo: 'Gerente General',
    descripcion: [
      'Administrador de Empresas y Profesional en Comercio Exterior de la Universidad Católica de Oriente, con especialización en Gestión Pública de la ESAP. Cuenta con más de 20 años de experiencia en los sectores público y privado, destacándose por su visión estratégica, liderazgo y compromiso con el desarrollo territorial.',
      'Ha ocupado cargos como Gerente de RENTAN, Subgerente del IDEA, Director Parque Juan Pablo ll, Administrador General del Centro Comercial Terminal del Norte, y Asesor del Área Metropolitana del Valle de Aburrá, entre otros. También ha ejercido funciones en Metrosparques, la Superintendencia de Servicios Públicos y como concejal y Alcalde encargado de El Retiro. Su trayectoria combina conocimientos técnicos, sensibilidad social y una visión integral del desarrollo, lo que ha marcado su gestión con eficiencia, legalidad y vocación de servicio.',
    ],
  },
  {
    imagen: driana,
    nombre: 'Driana Andrea Durango Benítez',
    cargo: 'Subgerente Comercial',
    descripcion: [
      'Contadora Pública, especialista en Gestión Pública y Máster en Alta Dirección. Su formación y experiencia le han permitido gerenciar políticas y programas en entidades públicas, siempre enfocada en aportar al desarrollo organizacional, a través de la planeación, la eficiencia y la solución de problemáticas institucionales desde una mirada integral.',
      'Más allá de su perfil técnico, se destaca por su calidad humana: una líder cercana, con habilidades en relaciones interpersonales, capacidad de escucha, pensamiento independiente, proactividad, responsabilidad, alto grado de confidencialidad y una actitud de servicio que inspira. Y como todo gran talento, también tiene pasiones que la recargan: en sus tiempos libres disfruta compartir con su familia, escaparse a su querido Urrao y practicar cycling, una de sus actividades favoritas para mantenerse activa y conectada consigo misma.',
    ],
  },
  {
    imagen: carlos,
    nombre: 'Carlos Andrés Raigoza Loaiza',
    cargo: 'Director Administrativo y Financiero',
    descripcion: [
      'Administrador de Empresas, especialista en Intervención Creativa, especialista en Analítica y Big Data, magister en Investigación de Mercados y Marketing, doctorando en Ciencias Económicas y Empresariales de la Universidad de Granada, España. Su trayectoria integra la gestión pública, la planeación estratégica, la dirección de proyectos, la innovación y el desarrollo organizacional.',
      'Ha participado en iniciativas de transformación institucional y desarrollo territorial, articulando capacidades técnicas, administrativas y estratégicas en entidades públicas, instituciones de educación superior y organizaciones del sector privado. Su experiencia comprende la formulación, gestión y seguimiento de proyectos, el fortalecimiento organizacional y la implementación de estrategias orientadas a la eficiencia, la generación de valor y la toma de decisiones basada en información.',
      'Combina una visión integral de la administración con el pensamiento estratégico, la analítica y la innovación. Desde la Dirección Administrativa y Financiera de ACTIVA, orienta su gestión al fortalecimiento institucional, la optimización de recursos, la transparencia y la sostenibilidad organizacional, promoviendo procesos que contribuyan al cumplimiento de los objetivos de la entidad y al desarrollo de Antioquia.'
    ],
  },
  {
    imagen: fernando,
    nombre: 'Fernando de Jesús Cardona Jiménez',
    cargo: 'Jefe Control Interno',
    descripcion: [
      'Abogado, especialista en Control Interno, Control Fiscal y Gestión Pública, con más de 31 años de experiencia en el sector público colombiano. Fue Jefe de Control Interno de SAPIENCIA (2018–2025), liderando la implementación del MIPG y los sistemas de control conforme a la Ley 87 de 1993.',
      'Es Especialista en Derecho Administrativo y Servicios Públicos Domiciliarios, con estudios de Maestría en Gestión Pública (Universidad Nacional de Rosario, Argentina). Cuenta con 25 años en la Contraloría General de Medellín y experiencia directiva como Secretario General de Terminales Medellín. Reconocido por su rigor técnico, liderazgo y compromiso con la transparencia y el buen gobierno.',
    ],
  },
  {
    imagen: jhonatan,
    nombre: 'Jhonatan Valencia',
    cargo: 'Jefe de Instrucción y Control Interno Disciplinario',
    descripcion: [
      'Abogado especializado en Derecho Administrativo con énfasis en Contratación Estatal y en Gerencia Estratégica del Talento Humano, con formación complementaria en múltiples diplomados, seminarios y congresos sobre función pública. Su trayectoria en el sector público incluye cargos en la Personería Municipal de Rionegro, áreas de Planeación y Tránsito del mismo municipio, jefe jurídico del Municipio de Guarne y asesor jurídico de diversas alcaldías, brindando acompañamiento legal estratégico para la toma de decisiones responsables y ajustadas a la normativa.',
      'Entre 2020 y 2023 se desempeñó como concejal de Rionegro, acercándose a las comunidades y promoviendo soluciones desde lo normativo y social. Posteriormente, fue Director de Permanencia Escolar en la Gobernación de Antioquia, liderando acciones para garantizar que niños y jóvenes permanezcan en el sistema educativo. A lo largo de su carrera ha integrado su conocimiento jurídico con una visión estratégica del desarrollo territorial, manteniendo siempre un enfoque humano, ético y comprometido con el bienestar colectivo.',
    ],
  },
  {
    imagen: william,
    nombre: 'William Ocampo Restrepo',
    cargo: 'Director Jurídico',
    descripcion: [
      'Abogado especialista en Derecho Administrativo, con más de 20 años de experiencia en el sector público de Antioquia. Como Director Jurídico de ACTIVA EICE, lidera la estrategia legal de la entidad: asesora a la alta dirección y vela por que la gestión contractual y administrativa cumpla el marco normativo vigente.',
      'Ha trabajado en entidades como la Gobernación de Antioquia, el Municipio de Medellín, el Área Metropolitana del Valle de Aburrá, Terminales de Transporte de Medellín, Corantioquia, Sistema de Bibliotecas Públicas de Medellín, el Municipio de Guarne y el Hospital Santa María, entre otras. Durante esa trayectoria coordinó equipos de profesionales y asesoró a los despachos de las secretarías de Hacienda, Planeación, Educación, Inclusión Social, Cultura y Participación Ciudadana, lo que le permitió consolidar un conocimiento integral en contratación estatal y en sectores clave de la gestión pública como gestión cultural, infraestructura, medio ambiente y salud. Combina un sólido dominio de la administración pública con amplia experiencia en la conducción de procesos contractuales complejos, orientada a brindar seguridad jurídica a la gestión institucional.',
    ],
  },
];

function QuienesSomos() {
  // Separa el primer nombre para aplicar el estilo bicolor de la referencia
  const dividirNombre = (nombreCompleto) => {
    const partes = nombreCompleto.trim().split(' ');
    const primerNombre = partes[0];
    const apellidos = partes.slice(1).join(' ');
    return { primerNombre, apellidos };
  };

  return (
    <main className={styles.aboutPage}>

      {/* =================================================
          HEADER IMAGENES - UNA SOLA FOTOGRAFÍA
      ================================================= */}

      <HeaderImagenes
        image={quienesSomosImg}
        eyebrow="Conoce nuestra entidad"
        title="Transformamos territorios en"
        highlight="experiencias"
        description="Somos una empresa industrial y comercial de la Gobernación de Antioquia que conecta personas, territorios y oportunidades a través de experiencias que generan impacto."
        primaryButton={{
          text: "Conócenos",
          href: "#quienes-somos",
        }}
        sideInfo="ANTIOQUIA · COLOMBIA"
      />

      {/* =================================================
          NUESTRO EQUIPO
      ================================================= */}

      <section id="quienes-somos" className={styles.teamEditorial}>
        <header className={styles.teamHeaderCenter}>
          <h2>
            Nuestro <span className={styles.highlight}>Equipo</span>
          </h2>

          <p className={styles.teamHeaderDescription}>
            Somos el equipo que hace posible la operación logística de
            Antioquia, con talento comprometido que le da vida a cada proyecto.
          </p>
        </header>

        <div className={styles.teamList}>
          {equipo.map((persona, index) => {
            const { primerNombre, apellidos } = dividirNombre(persona.nombre);

            return (
              <article
                className={styles.teamCard}
                key={persona.nombre + index}
              >

                {/* ONDAS DECORATIVAS DE FONDO */}

                <svg
                  className={styles.cardBgWaveTop}
                  viewBox="0 0 400 160"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M120 0C160 80 280 110 400 70V0H120Z"
                    fill="url(#gradWaveTop)"
                    fillOpacity="0.14"
                  />
                  <path
                    d="M180 0C220 65 310 90 400 55"
                    stroke="#90cb1b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradWaveTop"
                      x1="120"
                      y1="0"
                      x2="400"
                      y2="120"
                    >
                      <stop stopColor="#90cb1b" />
                      <stop offset="1" stopColor="#125f91" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  className={styles.cardBgWaveBottom}
                  viewBox="0 0 500 180"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 180C120 110 260 150 500 60V180H0Z"
                    fill="url(#gradWaveBottom)"
                    fillOpacity="0.16"
                  />
                  <defs>
                    <linearGradient
                      id="gradWaveBottom"
                      x1="0"
                      y1="180"
                      x2="500"
                      y2="60"
                    >
                      <stop stopColor="#125f91" />
                      <stop offset="1" stopColor="#90cb1b" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* COLUMNA DE FOTOGRAFÍA ORGÁNICA */}

                <div className={styles.teamImageCol}>
                  <svg
                    className={styles.sparkLines}
                    viewBox="0 0 54 54"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M36 8L43 22M16 20L27 30M8 38L21 41"
                      stroke="currentColor"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span
                    className={styles.blobBackBlue}
                    aria-hidden="true"
                  ></span>

                  <span
                    className={styles.blobBackGreen}
                    aria-hidden="true"
                  ></span>

                  <span
                    className={styles.blobBackLime}
                    aria-hidden="true"
                  ></span>

                  <span
                    className={styles.dotAccent}
                    aria-hidden="true"
                  ></span>

                  <div className={styles.organicPhotoFrame}>
                    <img
                      src={persona.imagen}
                      alt={persona.nombre}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* COLUMNA DE INFORMACIÓN */}

                <div className={styles.teamTextCol}>
                  <div className={styles.rolePill}>
                    <span className={styles.roleDot}></span>
                    <span>{persona.cargo}</span>
                  </div>

                  <div className={styles.nameWrapper}>
                    <h3>
                      <span className={styles.firstName}>
                        {primerNombre}
                      </span>{' '}
                      <span className={styles.lastName}>
                        {apellidos}
                      </span>
                    </h3>

                    <svg
                      className={styles.nameUnderline}
                      viewBox="0 0 260 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13C68 3 165 3 257 12"
                        stroke="#90cb1b"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M95 14C145 10 195 10 235 14"
                        stroke="#4caf50"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className={styles.teamDesc}>
                    {persona.descripcion.map((parrafo, i) => (
                      <p key={i}>{parrafo}</p>
                    ))}
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default QuienesSomos;
