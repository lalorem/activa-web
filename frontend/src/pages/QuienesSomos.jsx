
import {
  ArrowDown,
  ArrowUpRight,
} from '@phosphor-icons/react';

import styles from '../components/style/quienesSomos.module.css';

import santiago from '../assets/Santiago-atehortua.webp';
import driana from '../assets/Driana-Durango.webp';
import cristian from '../assets/Cristian Buriticá.webp';
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
    imagen: cristian,
    nombre: 'Cristian Buriticá',
    cargo: 'Director Administrativo y Financiero',
    descripcion: [
      'Administrador Público y aspirante a MBA, con amplia experiencia en gestión administrativa, financiera y social en el sector público, destacándose por su compromiso con el bienestar comunitario y su capacidad para convertir políticas en acciones efectivas.',
      'Ha ocupado roles estratégicos en la Contraloría General de Medellín, la Alcaldía de Bello y la Alcaldía de San Carlos, donde fortaleció la transparencia y eficiencia de la contratación pública mediante el uso de plataformas como SECOP I y II. Reconocido por su cercanía con la ciudadanía, visión estratégica y enfoque en resultados, combina conocimiento técnico con un profundo sentido de responsabilidad social, liderando procesos con impacto real en la construcción de territorios más justos y equitativos.',
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
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroImage}></div>
        <div className={styles.aboutHeroOverlay}></div>

        <div className={`container ${styles.aboutHeroContent}`}>
          <h1>
            Transformamos
            <br />
            territorios en
            <span className={styles.aboutScript}>experiencias</span>
          </h1>

          <p>
            Somos una empresa industrial y comercial de la Gobernación de
            Antioquia que conecta personas, territorios y oportunidades a
            través de experiencias que generan impacto.
          </p>

          <div className={styles.aboutHeroActions}>
            <a href="#quienes-somos" className={styles.aboutHeroBtn}>
              Conócenos
              <ArrowDown size={18} weight="bold" />
            </a>
          </div>
        </div>

        <a
          href="#quienes-somos"
          className={styles.aboutScrollIndicator}
          aria-label="Desliza para conocer nuestro equipo"
        >
          <span>DESLIZA</span>
          <ArrowDown size={21} />
        </a>

        <div className={styles.aboutHeroLine}></div>
      </section>

      <section
        id="quienes-somos"
        className={styles.teamEditorial}
      >
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
          {equipo.map((persona, index) => (
            <article className={styles.teamRow} key={persona.nombre + index}>
              <div className={styles.teamImageCol}>
                <div className={styles.imageWrapper}>
                  <img src={persona.imagen} alt={persona.nombre} />
                </div>
              </div>

              <div className={styles.teamTextCol}>
                <div className={styles.teamTopLine}>
                  <span className={styles.teamRole}>{persona.cargo}</span>
                  <ArrowUpRight
                    className={styles.teamArrow}
                    size={21}
                    weight="bold"
                  />
                </div>

                <h3>{persona.nombre}</h3>

                <div className={styles.teamDesc}>
                  {persona.descripcion.map((parrafo, i) => (
                    <p key={i}>{parrafo}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default QuienesSomos;
