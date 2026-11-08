import {
  Buildings,
  CalendarCheck,
  BookOpenText
} from '@phosphor-icons/react';

import styles from './style/servicios.module.css';

import tarjeta6 from '../assets/tarjeta6.png';
import tarjeta5 from '../assets/tarjeta5.png';
import tarjeta7 from '../assets/tarjeta7.jpeg';

const servicios = [
  {
    id: 1,
    imagen: tarjeta6,
    alt: 'Gestión Institucional',
    icono: Buildings,
    titulo: 'Estamos para hacerlo posible',
    descripcion: 'Diseñamos, planeamos y ejecutamos servicios de operación logística para proyectos y eventos de pequeño, mediano y gran formato. Operamos eventos empresariales, catering, eventos académicos y culturales, congresos, convenciones, exposiciones, ferias, fiestas municipales, eventos deportivos y conciertos.'
  },
  {
    id: 2,
    imagen: tarjeta5,
    alt: 'Eventos y Logística',
    icono: CalendarCheck,
    titulo: 'Operación de activos estratégicos',
    descripcion: 'Operamos y administramos parques, equipamiento propio y de terceros con fines de esparcimiento. Entretenimiento en áreas deportivas, culturales, ecológicas, ambientales, turísticas, comerciales y todas las acciones relacionadas con el desarrollo urbanístico y paisajístico de las mismas.'
  },
  {
    id: 3,
    imagen: tarjeta7,
    alt: 'Capacitación y Formación',
    icono: BookOpenText,
    titulo: 'Proyectos especiales y soluciones',
    descripcion: 'Creamos, diseñamos y ejecutamos experiencias a la medida o necesidad de nuestros clientes. Proveemos dotación y suministros en general; desarrollamos proyectos de posicionamiento de marca, consultoría, contratación de personal por proyectos estratégicos, central de medios, operamos proyectos de bienestar laboral y social.'
  }
];

function Servicios() {
  return (
    <section id="servicios" className={styles.servicesSection}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.badgeTitle}>
            Nuestras Áreas
          </span>

          <h2>
            Nuestros <span>servicios</span>
          </h2>

          <div className={styles.titleDecoration}></div>
        </div>

        <div className={styles.servicesGrid}>
          {servicios.map((servicio) => {
            const Icono = servicio.icono;

            return (
              <article className={styles.serviceCard} key={servicio.id}>

                <div className={styles.serviceImage}>
                  <img
                    src={servicio.imagen}
                    alt={servicio.alt}
                  />

                  <div className={styles.serviceIconFloat}>
                    <Icono size={24} weight="regular" />
                  </div>
                </div>

                <div className={styles.serviceContent}>
                  <h3>{servicio.titulo}</h3>

                  <p>{servicio.descripcion}</p>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Servicios;
