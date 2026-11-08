
import {
  House,
  ArrowLeft,
  MagnifyingGlass,
  Compass
} from '@phosphor-icons/react';

import styles from '../components/style/Error404.module.css';

function Error404() {
  const volverAtras = () => {
    window.history.back();
  };

  return (
    <main className={styles.errorPage}>

      {/* DECORACIONES */}
      <div className={styles.errorDecorationOne}></div>
      <div className={styles.errorDecorationTwo}></div>
      <div className={styles.errorDecorationThree}></div>

      {/* CONTENIDO */}
      <section className={styles.errorContent}>

        {/* ICONO */}
        <div className={styles.errorIcon}>
          <Compass size={38} weight="duotone" />
        </div>

        {/* CÓDIGO */}
        <div className={styles.errorNumber}>
          404
        </div>

        {/* MENSAJE */}
        <span className={styles.errorLabel}>
          PÁGINA NO ENCONTRADA
        </span>

        <h1>
          ¡Ups! Parece que te has perdido.
        </h1>

        <p>
          La página que estás buscando no existe, fue movida
          o ya no se encuentra disponible. ¡Pero no te preocupes!
          Puedes regresar y seguir explorando ACTIVA.
        </p>

        {/* BOTONES */}
        <div className={styles.errorButtons}>

          <a href={`${import.meta.env.BASE_URL}`} className={styles.errorHomeButton}>
            <House size={20} weight="bold" />
            Volver al inicio
          </a>

          <button
            type="button"
            onClick={volverAtras}
            className={styles.errorBackButton}
          >
            <ArrowLeft size={19} />
            Página anterior
          </button>

        </div>

        {/* MENSAJE INFERIOR */}
        <div className={styles.errorFooter}>
          <MagnifyingGlass size={16} />
          <span>Continúa explorando los contenidos de ACTIVA</span>
        </div>

      </section>

    </main>
  );
}

export default Error404;
