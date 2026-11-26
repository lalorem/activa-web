import {
  ArrowUpRight,
  Lightbulb,
  Gear,
  ShieldCheck,
} from "@phosphor-icons/react";

import styles from "../components/style/UnidadesNegocio.module.css";
import HeaderDegradado from "../components/HeaderDegradado";
import TrabajaConNosotros from "../components/TrabajaConNosotros";
import logistica from "../assets/logistica4.jpeg";
import suministro from "../assets/tarjeta3.webp";
import proyectosEspeciales from "../assets/volcan4.webp";
import logisticaa from "../assets/logistica.jpeg";
import logisticaaa from "../assets/volcan6.png";
import logisticaaaa from "../assets/noticia3.1.webp";
import milagros from "../assets/mesamilagro.jpeg";

const capacidades = [
  {
    imagen: logistica,
    titulo: "Eventos y logística",
    items: [
      "Producción técnica",
      "Montajes",
      "Personal operativo",
      "Coordinación en sitio",
    ],
  },
  {
    imagen: suministro,
    titulo: "Suministro y operación",
    items: ["Dotación", "Catering", "Equipos", "Mobiliario"],
  },
  {
    imagen: proyectosEspeciales,
    titulo: "Proyectos especiales",
    items: [
      "Intervenciones territoriales",
      "Estrategias institucionales",
      "Activaciones turísticas",
    ],
  },
];

const experiencias = [
  {
    imagen: milagros,
    titulo: "Eventos de alto impacto",
  },
  {
    imagen: logisticaaaa,
    titulo: "Producción y montajes",
  },
  {
    imagen: logisticaa,
    titulo: "Operación logística",
  },
  {
    imagen: logisticaaa,
    titulo: "Experiencias territoriales",
  },
];

function UnidadesNegocio() {
  return (
    <main className={styles.unidadesPage}>
      {/* ENCABEZADO REUTILIZABLE */}
      <HeaderDegradado
        eyebrow="NUESTRAS CAPACIDADES"
        title="Unidades de"
        highlight="Negocio"
        description="Soluciones integrales para transformar ideas en experiencias, proyectos y resultados que generan valor para el territorio."
      />

      {/* INTRODUCCIÓN */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p>
            En ACTIVA entendemos la operación logística como un proceso integral
            que va más allá de ejecutar un evento: es la capacidad de
            estructurar, coordinar y materializar cada proyecto desde su
            planeación hasta su puesta en marcha.
          </p>

          <p>
            Nuestro conocimiento del cliente y del territorio nos permite
            diseñar soluciones logísticas a la medida, articulando proveedores,
            recursos y equipos para garantizar eficiencia, control y calidad en
            cada etapa.
          </p>

          <p>
            Operamos bajo un enfoque que optimiza el uso de los recursos,
            incorpora prácticas sostenibles y promueve el desarrollo económico
            local, vinculando comunidades, emprendedores y actores del entorno.
          </p>

          <p>
            Así, cada proyecto no solo se ejecuta correctamente, sino que genera
            valor compartido: es viable, responsable con el medio ambiente y
            relevante para el territorio.
          </p>

          <div className={styles.approachGrid}>
            <article className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <Lightbulb size={25} weight="duotone" />
              </div>
              <div>
                <h3>Qué hacemos</h3>
                <p>
                  Diseñamos, operamos y ejecutamos eventos y proyectos desde la
                  idea hasta el último detalle en campo.
                </p>
              </div>
            </article>

            <article className={styles.approachCard}>
              <div className={styles.approachIcon}>
                <Gear size={25} weight="duotone" />
              </div>
              <div>
                <h3>Cómo lo hacemos</h3>
                <p>
                  <strong>Pensamos</strong> → estructuración técnica y
                  presupuestal
                  <br />
                  <strong>Activamos</strong> → montaje, logística y operación
                  <br />
                  <strong>Garantizamos</strong> → control, calidad y experiencia
                  final
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className={styles.capacitiesSection}>
        <div className={styles.sectionHeading}>
          <span>LO QUE HACEMOS</span>
          <h2>Nuestras capacidades</h2>
          <p>
            Integramos talento, recursos y experiencia para ofrecer soluciones
            completas en cada proyecto.
          </p>
        </div>

        <div className={styles.capacitiesGrid}>
          {capacidades.map((capacidad) => (
            <article className={styles.capacityCard} key={capacidad.titulo}>
              <div className={styles.capacityImage}>
                <img
                  src={capacidad.imagen}
                  alt={capacidad.titulo}
                  loading="lazy"
                />
                <div className={styles.capacityImageOverlay} />
              </div>

              <div className={styles.capacityContent}>
                <h3>{capacidad.titulo}</h3>

                <ul>
                  {capacidad.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA Y COBERTURA */}
      <section className={styles.impactSection}>
        <div className={styles.impactIcon}>
          <ShieldCheck size={27} weight="duotone" />
        </div>

        <p>
          Más de <strong>125 municipios intervenidos</strong>
          <span />
          Operación de eventos de alto impacto en Antioquia
          <span />
          Articulación con entidades públicas y privadas.
        </p>
      </section>

      {/* GALERÍA */}
      <section className={styles.gallerySection}>
        <div className={styles.sectionHeading}>
          <span>NUESTRA EXPERIENCIA</span>
          <h2>Hacemos que las cosas sucedan</h2>
        </div>

        <div className={styles.galleryGrid}>
          {experiencias.map((experiencia) => (
            <article className={styles.galleryCard} key={experiencia.titulo}>
              <img
                src={experiencia.imagen}
                alt={experiencia.titulo}
                loading="lazy"
              />

              <div className={styles.galleryOverlay}>
                <h3>{experiencia.titulo}</h3>
                <ArrowUpRight size={25} weight="bold" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TRABAJA CON NOSOTROS */}
      <TrabajaConNosotros />
    </main>
  );
}

export default UnidadesNegocio;
