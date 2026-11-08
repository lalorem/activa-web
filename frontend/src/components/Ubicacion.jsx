
import { MapPin, PlayCircle } from '@phosphor-icons/react';

import styles from './style/ubicacion.module.css';

import videoActiva from '../assets/proyectos activa agosto.mp4';

function Ubicacion() {
  return (
    <section className={styles.locationSection} id="ubicacion">
      <div className="container">

        <div className={styles.sectionHeader}>
          <span className={styles.badgeTitle}>Encuéntranos</span>

          <h2>
            Nuestra <span>ubicación</span>
          </h2>

          <p>
            Visítanos en nuestra oficina principal en Medellín,
            ubicada en el Centro Administrativo Departamental La Alpujarra.
          </p>
        </div>

        <div className={styles.locationGrid}>

          {/* MAPA */}
          <article className={styles.locationCard}>
            <div className={styles.locationTitle}>
              <div className={styles.titleIcon}>
                <MapPin size={25} weight="fill" />
              </div>

              <div>
                <h3>Oficina principal</h3>
                <p>Medellín, Antioquia</p>
              </div>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2225.9267140101!2d-75.5748643944392!3d6.243850593496059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442854ae4f392b%3A0x1c2703562ee757f9!2sGobernaci%C3%B3n%20de%20Antioquia!5e0!3m2!1ses-419!2sco!4v1786897236514!5m2!1ses-419!2sco"
                title="Ubicación de la Gobernación de Antioquia"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </article>

          {/* VIDEO */}
          <article className={styles.locationCard}>
            <div className={styles.locationTitle}>
              <div className={styles.titleIcon}>
                <PlayCircle size={25} weight="fill" />
              </div>

              <div>
                <h3>Conoce nuestras instalaciones</h3>
                <p>Descubre más sobre ACTIVA</p>
              </div>
            </div>

            <div className={styles.videoContainer}>
              <video controls>
                <source src={videoActiva} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
