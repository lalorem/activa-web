
import styles from './style/Spinner.module.css';

function Spinner({ texto = 'Cargando...', pantallaCompleta = false }) {
  return (
    <div
      className={`${styles.spinnerContainer} ${
        pantallaCompleta ? styles.fullScreen : ''
      }`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.spinner}>
        <span className={styles.spinnerCenter}></span>
      </div>

      {texto && (
        <p className={styles.spinnerText}>
          {texto}
        </p>
      )}
    </div>
  );
}

export default Spinner;
