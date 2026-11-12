
import {
  EnvelopeSimple,
  Phone,
  Globe,
  MapPin,
  FileText,
  WhatsappLogo
} from '@phosphor-icons/react';

import styles from '../components/style/DescripcionGeneral.module.css';

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
  return (
    <main className={styles.descripcionGeneralPage}>

      {/* ENCABEZADO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContenido}>
          <h1>Descripción General</h1>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
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

      {/* CANALES DE PARTICIPACIÓN */}
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

      {/* GRUPOS DE VALOR */}
      <section className={styles.gruposSection}>
        <div className={styles.gruposWrapper}>
          <img
            src="https://activa.com.co/wp-content/uploads/2026/03/grupos-de-valor-1024x819.jpeg"
            alt="Grupos de valor de ACTIVA"
            className={styles.gruposImagen}
          />
        </div>
      </section>

    </main>
  );
}

export default DescripcionGeneral;
