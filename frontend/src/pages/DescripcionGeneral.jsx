
import { useState } from 'react';

import {
  EnvelopeSimple,
  Phone,
  Globe,
  MapPin,
  FileText,
  WhatsappLogo,
  MagnifyingGlass,
  X
} from '@phosphor-icons/react';

import styles from '../components/style/DescripcionGeneral.module.css';
import HeaderDegradado from '../components/HeaderDegradado';

import gruposValor from '../assets/grupos-valor.jpg';

const canalesContacto = [
  {
    titulo: 'Correo electrónico de contacto',
    informacion: 'info@activa.com.co',
    icono: EnvelopeSimple,
    enlace: 'mailto:info@activa.com.co',
    color: 'azul'
  },
  {
    titulo: 'Línea de Atención a Ciudadanía',
    informacion: '+57 604 383 80 42',
    icono: Phone,
    enlace: 'tel:+576043838042',
    color: 'verde'
  },
  {
    titulo: 'Sitio Web',
    informacion: 'Click Aquí',
    icono: Globe,
    enlace: 'https://activa.com.co/canales-de-atencion-presencial-y-telefonica/',
    color: 'lima'
  },
  {
    titulo: 'Presencial',
    informacion: 'Calle 42B Número 52-106 Centro Administrativo Departamental «José María Córdova»',
    icono: MapPin,
    color: 'azul'
  },
  {
    titulo: 'Radica una PQRSDF',
    informacion: 'Click Aquí',
    icono: FileText,
    enlace: 'https://activa.com.co/pqrs/',
    color: 'verde'
  },
  {
    titulo: 'Próximamente',
    informacion: 'WhatsApp',
    icono: WhatsappLogo,
    color: 'lima',
    proximamente: true
  }
];

function DescripcionGeneral() {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  return (
    <main className={styles.descripcionGeneralPage}>

      {/* =====================================================
          HEADER DEGRADADO
      ====================================================== */}

      <HeaderDegradado
        eyebrow="PARTICIPACIÓN CIUDADANA"
        title="Descripción"
        highlight="General"
        description="Conoce los espacios y mecanismos de participación ciudadana de ACTIVA."
      />

      {/* =====================================================
          DESCRIPCIÓN
      ====================================================== */}

      <section className={styles.descripcion}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <h2>Participa</h2>
          </div>

          <div className={styles.textos}>
            <p>
              <strong>Participa</strong> es un espacio creado para construir con
              la ciudadanía y para la ciudadanía, fortaleciendo el interés y la
              incidencia de las personas en las decisiones públicas, base
              fundamental de una democracia real.
            </p>

            <p>
              En esta sección encontrarás toda la información sobre los
              espacios, mecanismos y acciones que permiten la participación
              ciudadana en cada etapa de la gestión pública: diagnóstico,
              formulación, implementación, evaluación y seguimiento, a través
              del portal web de la Empresa de Parques y Eventos de Antioquia
              ACTIVA.
            </p>

            <p>
              Nuestro propósito es vincular activamente a la ciudadanía y a
              los grupos de interés en las decisiones y acciones públicas,
              promoviendo y garantizando la participación como un derecho.
              ¡Bienvenidos!
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          CANALES DE PARTICIPACIÓN
      ====================================================== */}

      <section className={styles.canalesSection}>
        <div className={styles.container}>

          <div className={styles.sectionHeading}>
            <h2>¿Cómo se puede participar?</h2>
          </div>

          <div className={styles.canalesGrid}>
            {canalesContacto.map((canal, index) => {
              const Icono = canal.icono;
              const Elemento = canal.enlace ? 'a' : 'div';

              return (
                <Elemento
                  key={index}
                  href={canal.enlace || undefined}
                  target={
                    canal.enlace?.startsWith('https://')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    canal.enlace?.startsWith('https://')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className={`${styles.canalCard} ${
                    styles[`canal${canal.color}`]
                  } ${canal.proximamente ? styles.canalProximamente : ''}`}
                >
                  <div className={styles.canalIcono}>
                    <Icono size={38} weight="duotone" />
                  </div>

                  <div className={styles.canalContenido}>
                    <h3>{canal.titulo}</h3>
                    <p>{canal.informacion}</p>
                  </div>
                </Elemento>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          GRUPOS DE VALOR
      ====================================================== */}

      <section className={styles.gruposSection}>
        <div className={styles.gruposWrapper}>

          <button
            type="button"
            className={styles.gruposImagenButton}
            onClick={() => setImagenAmpliada(true)}
            aria-label="Ampliar imagen de grupos de valor"
          >
            <img
              src={gruposValor}
              alt="Grupos de valor de ACTIVA"
              className={styles.gruposImagen}
            />

            <span className={styles.gruposImageHint}>
              <MagnifyingGlass size={19} weight="bold" />
              Ampliar imagen
            </span>
          </button>

        </div>
      </section>

      {/* =====================================================
          VISOR DE IMAGEN AMPLIADA
      ====================================================== */}

      {imagenAmpliada && (
        <div
          className={styles.gruposLightbox}
          onClick={() => setImagenAmpliada(false)}
          role="presentation"
        >
          <button
            type="button"
            className={styles.gruposLightboxClose}
            onClick={() => setImagenAmpliada(false)}
            aria-label="Cerrar imagen"
          >
            <X size={25} weight="bold" />
          </button>

          <img
            src={gruposValor}
            alt="Grupos de valor de ACTIVA ampliada"
            className={styles.gruposLightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}

export default DescripcionGeneral;
