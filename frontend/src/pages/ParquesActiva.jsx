
import { Tree, MapPin, ArrowUpRight } from '@phosphor-icons/react';

import styles from '../components/style/ParquesActiva.module.css';

const noticias = [
  {
    titulo: 'ACTIVA consolida la reapertura parcial del Volcán de Lodo como motor de turismo y disfrute responsable en Antioquia',
    descripcion:
      'El Volcán de Lodo de Arboletes continúa consolidándose como un atractivo natural para el encuentro, el bienestar y el turismo responsable.',
    imagen: '/parques-activa/noticia-1.jpg',
    enlace:
      'https://activa.com.co/activa-consolida-la-reapertura-parcial-del-volcan-de-lodo-como-motor-de-turismo-y-disfrute-responsable-en-antioquia/',
  },
  {
    titulo: 'El poder de los parques: espacios que transforman comunidades y fortalecen el alma de Antioquia',
    descripcion:
      'Los parques son escenarios de encuentro, aprendizaje y cultura que fortalecen el bienestar, la conservación y el desarrollo social.',
    imagen: '/parques-activa/noticia-2.jpg',
    enlace:
      'https://activa.com.co/el-poder-de-los-parques-espacios-que-transforman-comunidades-y-fortalecen-el-alma-de-antioquia/',
  },
  {
    titulo: 'Más de 12.600 visitantes disfrutaron del Volcán de Lodo entre junio y agosto de 2025',
    descripcion:
      'El atractivo turístico de Arboletes continúa recibiendo visitantes y posicionándose como uno de los destinos más representativos del Urabá antioqueño.',
    imagen: '/parques-activa/noticia-3.jpg',
    enlace: 'https://activa.com.co/visitantes-volcan-de-lodo/',
  },
  {
    titulo: 'Conoce el renovado Volcán de Lodo de Arboletes',
    descripcion:
      'Descubre este lugar único de Antioquia, donde la naturaleza, la historia y el trabajo de la comunidad se encuentran.',
    imagen: '/parques-activa/noticia-4.jpg',
    enlace:
      'https://activa.com.co/conoce-el-renovado-volcan-de-lodo-de-arboletes/',
  },
];

function ParquesActiva() {
  return (
    <main className={styles.parquesPage}>

      {/* HEADER DIFUMINADO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            <Tree size={17} weight="bold" />
            TURISMO Y DESARROLLO TERRITORIAL
          </span>

          <h1>Parques ACTIVA</h1>

          <p>
            Espacios que conectan naturaleza, turismo y desarrollo
            para transformar los territorios de Antioquia.
          </p>
        </div>
      </section>

      {/* PRESENTACIÓN GENERAL */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <span className={styles.sectionEyebrow}>
            NUESTRA GESTIÓN
          </span>

          <h2>Parques que conectan territorio, turismo y desarrollo</h2>

          <p>
            En ACTIVA gestionamos parques como espacios de desarrollo
            territorial que integran conservación, turismo y economía
            local. Mediante operación directa y alianzas estratégicas,
            promovemos lugares sostenibles que fortalecen la experiencia
            de los visitantes y generan oportunidades para las comunidades.
          </p>
        </div>
      </section>

      {/* CERRO TUSA */}
      <section className={styles.parkSection}>
        <div className={styles.parkHeading}>
          <span className={styles.sectionEyebrow}>MODELO DE ARTICULACIÓN PÚBLICO-PRIVADA</span>
          <h2>Cerro Tusa</h2>
          <p>
            Un proyecto impulsado por la Gobernación de Antioquia a través
            de ACTIVA y operado actualmente por Comfama, con supervisión
            y acompañamiento estratégico de ACTIVA.
          </p>
        </div>

        <div className={styles.infoGrid}>
          <article className={styles.infoItem}>
            <MapPin size={22} weight="duotone" />
            <span>Ubicación</span>
            <strong>Venecia, Suroeste antioqueño</strong>
          </article>

          <article className={styles.infoItem}>
            <Tree size={22} weight="duotone" />
            <span>Altura</span>
            <strong>1.950 m aproximadamente</strong>
            <small>Pirámide natural más alta del mundo</small>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>21</span>
            <span>Área intervenida</span>
            <strong>Hectáreas – fase 1</strong>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>$8.800</span>
            <span>Inversión aproximada</span>
            <strong>Millones de pesos</strong>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>1.200 m²</span>
            <span>Infraestructura</span>
            <strong>Área construida</strong>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>4.300 m²</span>
            <span>Espacios verdes</span>
            <strong>Senderos y terrazas</strong>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>274</span>
            <span>Empleos</span>
            <strong>Durante la construcción</strong>
          </article>

          <article className={styles.infoItem}>
            <span className={styles.infoNumber}>+30</span>
            <span>Empleos</span>
            <strong>En operación</strong>
          </article>
        </div>
      </section>

      {/* VOLCÁN DE LODO */}
      <section className={styles.parkSection}>
        <div className={styles.parkHeading}>
          <span className={styles.sectionEyebrow}>MODELO DE OPERACIÓN TURÍSTICA</span>
          <h2>Volcán de Lodo de Arboletes</h2>
          <p>
            ACTIVA impulsa la recuperación y el aprovechamiento sostenible
            de uno de los principales atractivos del Urabá antioqueño.
            El proyecto integra mejoramiento de infraestructura,
            organización turística y fortalecimiento de la experiencia
            del visitante, convirtiéndolo en un destino más organizado,
            seguro y sostenible, con oportunidades para la economía local.
          </p>
        </div>

        <div className={styles.volcanDetails}>
          <div className={styles.volcanData}>
            <p><strong>Ubicación:</strong> Arboletes, Urabá antioqueño.</p>
            <p><strong>Atractivo:</strong> volcán de lodo con cráter de aproximadamente 50 m de diámetro.</p>
            <p><strong>Área del proyecto:</strong> cerca de 100.000 m².</p>
            <p><strong>Intervención inicial:</strong> 1.500 m² destinados a senderos, urbanismo y parqueaderos.</p>
          </div>

          <div className={styles.resultsBox}>
            <span>RESULTADOS DE OPERACIÓN · 2025–2026</span>

            <div className={styles.resultsGrid}>
              <div>
                <strong>42.982</strong>
                <small>Visitantes registrados</small>
              </div>

              <div>
                <strong>192</strong>
                <small>Visitantes promedio al día</small>
              </div>
            </div>

            <p>
              Reapertura parcial y operación activa durante la ejecución de las obras.
            </p>
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section className={styles.newsSection}>
        <div className={styles.newsHeading}>
          <span className={styles.sectionEyebrow}>ACTUALIDAD</span>
          <h2>Historias que transforman nuestros parques</h2>
          <p>
            Conoce las noticias, avances y experiencias que hacen parte
            de la gestión de los parques en Antioquia.
          </p>
        </div>

        <div className={styles.newsList}>
          {noticias.map((noticia, index) => (
            <article
              className={styles.newsRow}
              key={noticia.titulo}
            >
              <div className={styles.newsImage}>
                <img src={noticia.imagen} alt={noticia.titulo} />
              </div>

              <div className={styles.newsContent}>
                <span className={styles.newsNumber}>
                  NOTICIA 0{index + 1}
                </span>

                <h3>{noticia.titulo}</h3>

                <p>{noticia.descripcion}</p>

                <a
                  href={noticia.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer noticia
                  <ArrowUpRight size={18} weight="bold" />
                </a>
              </div>
            </article>
          ))}
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
            Diseñemos juntos experiencias sostenibles que impulsen
            comunidades, emprendedores y resultados reales.
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

export default ParquesActiva;
