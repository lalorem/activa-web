
import styles from './style/TrabajaConNosotros.module.css';

function TrabajaConNosotros() {
  return (
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
  );
}

export default TrabajaConNosotros;
