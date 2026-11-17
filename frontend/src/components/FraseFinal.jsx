
import styles from './style/FraseFinal.module.css';

function FraseFinal({ frase, descripcion }) {
  return (
    <section className={styles.genderClosing}>
      <div className={styles.genderClosingContent}>
        <span className={styles.closingSymbol}>✦</span>

        <h2>{frase}</h2>

        <p>{descripcion}</p>
      </div>
    </section>
  );
}

export default FraseFinal;
