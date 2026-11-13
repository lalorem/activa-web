import {
  Coffee,
  MapPin,
  ChartLineUp,
  GraduationCap,
  Handshake,
  Buildings,
  CalendarCheck,
  Briefcase,
} from '@phosphor-icons/react';

import styles from '../components/style/Cafestival.module.css';

const resultados = [
  {
    edicion: '2025',
    municipio: 'Fredonia',
    icono: Coffee,
    datos: [
      '+2.000 asistentes en tres días',
      '60 marcas de café especial y emprendimientos locales',
      'Ventas superiores a $67 millones en muestra comercial',
      'Participación de 5 subregiones de Antioquia',
      '36 competidores y 9 jueces internacionales en campeonato cafetero',
      '98% de ocupación hotelera en el municipio',
    ],
  },
  {
    edicion: '2024',
    municipio: 'Jericó',
    icono: MapPin,
    datos: [
      '+2.000 asistentes',
      '34 marcas de café especial',
      '20 municipios participantes',
      'Ventas por $47 millones',
      '81% de ocupación hotelera',
      'Integración del ecosistema cafetero: cultural, gastronómico y económico',
    ],
  },
  {
    edicion: '2023',
    municipio: 'Rionegro, Llanogrande y Concordia',
    icono: ChartLineUp,
    datos: [
      '+19.000 asistentes en total',
      '+4.600 visitantes en una sola jornada en Rionegro',
      '+70 marcas de café especial',
      'Representación de 94 municipios cafeteros de Antioquia',
      'Ventas superiores a $900 millones',
      'Proyección de negocios superior a $2.000 millones',
      '+2.500 empleos directos e indirectos generados',
    ],
  },
];

const fotografias = [
  '/cafestival/cafestival-1.jpg',
  '/cafestival/cafestival-2.jpg',
  '/cafestival/cafestival-3.jpg',
  '/cafestival/cafestival-4.jpg',
  '/cafestival/cafestival-5.jpg',
  '/cafestival/cafestival-6.jpg',
];

function Cafestival() {
  const galeriaDuplicada = [...fotografias, ...fotografias];

  return (
    <main className={styles.cafestivalPage}>

      {/* HEADER FOTOGRÁFICO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>
              <Coffee size={18} />
              EVENTOS QUE TRANSFORMAN TERRITORIOS
            </span>

            <h1>Caféstival</h1>

            <p>
              Café, cultura y desarrollo que conectan a Antioquia.
            </p>
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p>
            Caféstival es el principal evento propio de ACTIVA y una
            muestra concreta de cómo diseñamos plataformas que dinamizan
            la economía, fortalecen sectores productivos y conectan el
            territorio.
          </p>

          <p>
            Cada edición se construye a partir de una lectura estratégica
            del ecosistema cafetero, integrando productores, marcas,
            emprendedores e instituciones en un mismo escenario de
            comercialización, formación y experiencia cultural.
          </p>

          <p>
            Más que un festival, Caféstival es un modelo de intervención
            territorial que articula lo económico, lo social y lo cultural,
            generando impacto real en las comunidades donde se desarrolla.
          </p>
        </div>
      </section>

      {/* RESULTADOS DESTACADOS */}
      <section className={styles.resultsSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>
            IMPACTO Y GESTIÓN
          </span>

          <h2>Resultados destacados</h2>

          <p>
            Tres ediciones que demuestran cómo los eventos pueden
            convertirse en motores de desarrollo para los municipios.
          </p>
        </div>

        <div className={styles.resultsCards}>
          {resultados.map((resultado) => {
            const Icon = resultado.icono;

            return (
              <article
                className={styles.resultCard}
                key={resultado.edicion}
              >
                <div className={styles.resultHeader}>
                  <div className={styles.resultIcon}>
                    <Icon size={25} />
                  </div>

                  <span>EDICIÓN {resultado.edicion}</span>
                </div>

                <h3>Caféstival {resultado.edicion}</h3>

                <div className={styles.resultLocation}>
                  <MapPin size={16} />
                  {resultado.municipio}
                </div>

                <div className={styles.resultDivider}></div>

                <ul>
                  {resultado.datos.map((dato, index) => (
                    <li key={index}>
                      <span className={styles.resultBullet}></span>
                      {dato}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* CARRUSEL INFINITO DE FOTOGRAFÍAS */}
      <section className={styles.gallerySection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>
            MOMENTOS CAFÉSTIVAL
          </span>

          <h2>Una experiencia que se vive</h2>

          <p>
            Conoce algunos momentos de las experiencias que han reunido
            al ecosistema cafetero de Antioquia.
          </p>
        </div>

        <div className={styles.galleryViewport}>
          <div className={styles.galleryTrack}>
            {galeriaDuplicada.map((imagen, index) => (
              <div className={styles.galleryItem} key={index}>
                <img
                  src={imagen}
                  alt={`Experiencia Caféstival ${index % fotografias.length + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÓNDE LO HEMOS HECHO Y CÓMO LO HACEMOS */}
      <section className={styles.modelSection}>

        <div className={styles.modelHeading}>
          <span className={styles.sectionEyebrow}>
            UN FESTIVAL QUE RECORRE ANTIOQUIA
          </span>

          <h2>Un modelo que conecta territorios</h2>

          <p>
            Caféstival ha recorrido diferentes territorios cafeteros de
            Antioquia, llevando desarrollo directamente a las comunidades.
            Sus ediciones han llegado a Fredonia, Jericó, Rionegro,
            Llanogrande y Concordia, con proyección hacia otros municipios
            y subregiones cafeteras.
          </p>
        </div>

        <div className={styles.modelGrid}>

          {/* DÓNDE LO HEMOS HECHO */}
          <article className={styles.modelCard}>
            <div className={styles.modelIcon}>
              <MapPin size={25} />
            </div>

            <span className={styles.modelLabel}>
              PRESENCIA TERRITORIAL
            </span>

            <h3>Dónde lo hemos hecho</h3>

            <p>
              Llevamos el festival a municipios con tradición y vocación
              cafetera, conectando sus comunidades con nuevas oportunidades.
            </p>

            <ul className={styles.locationList}>
              <li>
                <MapPin size={17} />
                Fredonia
              </li>

              <li>
                <MapPin size={17} />
                Jericó
              </li>

              <li>
                <MapPin size={17} />
                Rionegro y Llanogrande
              </li>

              <li>
                <MapPin size={17} />
                Concordia y otros territorios cafeteros
              </li>
            </ul>
          </article>

          {/* CÓMO LO HACEMOS */}
          <article className={styles.modelCard}>
            <div className={styles.modelIcon}>
              <Handshake size={25} />
            </div>

            <span className={styles.modelLabel}>
              MODELO DE OPERACIÓN
            </span>

            <h3>Cómo lo hacemos</h3>

            <p>
              Cada edición integra diferentes componentes para garantizar
              una experiencia organizada y generar resultados medibles.
            </p>

            <ul className={styles.processList}>
              <li>
                <ChartLineUp size={18} />
                Lectura del territorio y su vocación productiva.
              </li>

              <li>
                <Buildings size={18} />
                Articulación institucional con Gobernación, aliados y gremios.
              </li>

              <li>
                <GraduationCap size={18} />
                Diseño de experiencias comerciales, culturales y académicas.
              </li>

              <li>
                <CalendarCheck size={18} />
                Operación logística integral en campo.
              </li>

              <li>
                <Briefcase size={18} />
                Medición del impacto económico, social y turístico.
              </li>
            </ul>
          </article>

        </div>

        {/* CONCLUSIÓN */}
        <div className={styles.conclusion}>
          <p>
            Desde ediciones masivas como la de 2023, que superó los
            19.000 asistentes y los $900 millones en ventas, hasta
            experiencias territoriales como Fredonia y Jericó, Caféstival
            demuestra cómo un evento bien estructurado puede dinamizar
            economías locales y fortalecer el turismo.
          </p>

          <p>
            Su modelo integra comercialización, cultura, formación y
            experiencias, articulando productores, marcas, instituciones
            y comunidades para fortalecer el ecosistema cafetero y
            proyectarlo hacia nuevos mercados.
          </p>
        </div>

      </section>

      {/* CARTEL FINAL DE CONTACTO */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <span className={styles.contactLabel}>
            HAGAMOS EQUIPO
          </span>

          <h2>Empecemos a trabajar juntos</h2>

          <p>
            Diseñemos juntos experiencias que impulsen comunidades,
            emprendimientos y resultados reales.
          </p>

          <a
            href="mailto:info@activa.com.co"
            className={styles.contactButton}
          >
            Haz clic aquí
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

    </main>
  );
}

export default Cafestival;
