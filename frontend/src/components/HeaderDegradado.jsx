
import styles from "./style/HeaderDegradado.module.css";

function HeaderDegradado({ eyebrow, title, highlight, description }) {
  return (
    <section className={styles.hero}>

      {/* =====================================================
          FONDO Y OVERLAY
      ====================================================== */}

      <div className={styles.heroBg}></div>

      {/* =====================================================
          CONTENIDO DEL HEADER
      ====================================================== */}

      <div className={styles.heroContent}>

        <span className={styles.eyebrow}>
          {eyebrow}
        </span>

        <h1>
          {title}
          <br />
          <span>{highlight}</span>
        </h1>

        <p>
          {description}
        </p>

      </div>

      {/* =====================================================
          DECORACIONES
      ====================================================== */}

      <div className={`${styles.heroShape} ${styles.shapeOne}`}></div>

      <div className={`${styles.heroShape} ${styles.shapeTwo}`}></div>

    </section>
  );
}

export default HeaderDegradado;
