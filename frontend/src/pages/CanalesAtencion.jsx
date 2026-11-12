
import {
  MapPin,
  Phone,
  CalendarCheck,
  Clock,
  EnvelopeSimple,
} from '@phosphor-icons/react';

import styles from '../components/style/CanalesAtencion.module.css';

function CanalesAtencion() {
  return (
    <main className={styles.canalesPage}>

      {/* ENCABEZADO */}
      <header className={styles.hero}>
        <div className={styles.heroDecoracion}></div>

        <div className={styles.heroContenido}>
          <span className={styles.heroEtiqueta}>ACTIVA</span>
          <h1>Canales de Atención Presencial y Telefónica</h1>
        </div>
      </header>

      <div className={styles.container}>

        {/* CANALES DE ATENCIÓN */}
        <section className={styles.canalesSection}>

          <article className={styles.canalItem}>
            <div className={styles.iconoCanal}>
              <MapPin size={46} weight="duotone" />
            </div>

            <h2>Atención Presencial</h2>

            <p>
              Calle 42B Número 52-106 Centro Administrativo
              Departamental «José María Córdova» La Alpujarra.
              Piso 6 – Oficina 610
            </p>
          </article>

          <article className={styles.canalItem}>
            <div className={styles.iconoCanal}>
              <Phone size={46} weight="duotone" />
            </div>

            <h2>Atención Telefónica</h2>

            <p>
              Línea de Atención a la ciudadanía:
            </p>

            <a
              href="tel:+576043838042"
              className={styles.telefonoLink}
            >
              +57 604 383 80 42
            </a>
          </article>

        </section>

        {/* AGENDAR UNA CITA */}
        <section className={styles.citasSection}>

          <div className={styles.iconoCita}>
            <CalendarCheck size={34} weight="duotone" />
          </div>

          <h2>¿Quieres agendar una cita?</h2>

          <p>
            Escríbenos a nuestro correo electrónico para solicitar
            y coordinar tu cita de atención.
          </p>

          <a
            href="mailto:info@activa.com.co"
            className={styles.botonCita}
          >
            <EnvelopeSimple size={20} weight="bold" />
            Haz clic aquí
          </a>

          <div className={styles.horario}>
            <div className={styles.horarioTitulo}>
              <Clock size={23} weight="duotone" />
              <h3>Horario de Atención</h3>
            </div>

            <p>
              <strong>Lunes a jueves:</strong> de 8:00 a. m. a 12:00 m.
              y de 2:00 p. m. a 4:30 p. m.
            </p>

            <p>
              <strong>Viernes:</strong> de 8:00 a. m. a 12:00 m.
              y de 2:00 p. m. a 3:30 p. m.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}

export default CanalesAtencion;
