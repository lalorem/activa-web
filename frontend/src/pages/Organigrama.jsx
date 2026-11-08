
import { useEffect, useState } from 'react';

import {
  MagnifyingGlassPlus,
  FilePdf,
  X,
  Minus,
  Plus,
  ArrowsIn,
  Hand
} from '@phosphor-icons/react';

import styles from '../components/style/Organigrama.module.css';
import organigrama from '../assets/ORGANIGRAMA.webp';

function Organigrama() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Abrir visor
  const abrirModal = () => {
    setModalAbierto(true);
    setZoom(1);
  };

  // Cerrar visor
  const cerrarModal = () => {
    setModalAbierto(false);
    setZoom(1);
  };

  // Controles de zoom
  const ampliar = () => {
    setZoom((actual) => Math.min(actual + 0.25, 3));
  };

  const reducir = () => {
    setZoom((actual) => Math.max(actual - 0.25, 0.5));
  };

  const restablecerZoom = () => {
    setZoom(1);
  };

  // Cerrar con Escape
  useEffect(() => {
    const manejarTeclado = (event) => {
      if (event.key === 'Escape') {
        cerrarModal();
      }
    };

    window.addEventListener('keydown', manejarTeclado);

    return () => {
      window.removeEventListener('keydown', manejarTeclado);
    };
  }, []);

  return (
    <main className={styles.estructuraPage}>

      {/* HERO */}
      <section className={styles.estructuraHero}>
        <div className={styles.estructuraHeroOverlay}></div>

        <div className={styles.estructuraHeroContent}>
          <h1>ORGANIGRAMA</h1>
        </div>
      </section>

      {/* ESTRUCTURA ORGANIZACIONAL */}
      <section className={styles.estructuraSection}>

        {/* IMAGEN */}
        <div className={styles.organigramaWrapper}>
          <button
            className={styles.organigramaPreview}
            type="button"
            onClick={abrirModal}
            aria-label="Ver estructura orgánica en tamaño completo"
          >
            <img
              src={organigrama}
              alt="Estructura Orgánica de ACTIVA"
            />

            <div className={styles.organigramaOverlay}>
              <div className={styles.zoomIcon}>
                <MagnifyingGlassPlus size={25} />
              </div>

              <span>Haz clic para ampliar</span>
            </div>
          </button>
        </div>

        {/* DESCARGA */}
        <div className={styles.organigramaDownload}>
          <p>
            ¿Necesitas conservar o compartir esta información?
          </p>

          <a
            href={`${import.meta.env.BASE_URL}documentos/ORGANIGRAMA.pdf`}
            download
            className={styles.btnDownloadOrganigrama}
          >
            <FilePdf size={21} />
            <span>Descargar en PDF</span>
          </a>
        </div>

      </section>

      {/* MODAL / VISOR */}
      {modalAbierto && (
        <div className={styles.organigramaModal}>

          <button
            className={styles.modalBackdrop}
            onClick={cerrarModal}
            aria-label="Cerrar visor"
          />

          <div
            className={styles.organigramaModalContent}
            role="dialog"
            aria-modal="true"
            aria-label="Estructura Orgánica ampliada"
          >

            {/* CERRAR */}
            <button
              className={styles.modalClose}
              onClick={cerrarModal}
              type="button"
              aria-label="Cerrar imagen"
            >
              <X size={23} />
            </button>

            {/* CONTROLES */}
            <div className={styles.modalControls}>
              <button type="button" onClick={reducir} title="Reducir">
                <Minus size={19} />
              </button>

              <button
                type="button"
                onClick={restablecerZoom}
                title="Restablecer zoom"
              >
                <ArrowsIn size={19} />
              </button>

              <button type="button" onClick={ampliar} title="Ampliar">
                <Plus size={19} />
              </button>
            </div>

            {/* IMAGEN AMPLIADA */}
            <div className={styles.organigramaViewer}>
              <img
                src={organigrama}
                alt="Estructura Orgánica de ACTIVA"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            {/* INDICACIÓN */}
            <div className={styles.modalHelp}>
              <Hand size={16} />
              <span>
                Puedes ampliar la imagen para consultar los detalles.
              </span>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}

export default Organigrama;
