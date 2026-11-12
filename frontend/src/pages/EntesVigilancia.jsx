
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Globe,
} from '@phosphor-icons/react';

import styles from '../components/style/EntesVigilancia.module.css';

const entidades = [
  {
    nombre: 'Procuraduría General de la Nación',
    direccion: 'Carrera 5 # 15-80, Bogotá D.C., Colombia, código postal: 11032',
    telefono: '601 587 8750',
    email: 'procesosjudiciales@procuraduria.gov.co',
    web: 'www.procuraduria.gov.co',
    url: 'https://www.procuraduria.gov.co/',
    control: 'Disciplinario',
  },
  {
    nombre: 'Contraloría General de Antioquia',
    direccion: 'Calle 42B 52-106 Piso 7. Medellín',
    telefono: '604 383 8787',
    email: 'cgr@contraloria.gov.co',
    web: 'www.contraloria.gov.co',
    url: 'https://www.contraloria.gov.co/',
    control: 'Fiscal',
  },
  {
    nombre: 'Transparencia por Colombia',
    direccion: 'Cra. 45A No. 93 – 61 Bogotá',
    telefono: '601 7395656',
    email: 'transparenciatpc@transparenciacolombia.org.co',
    web: 'www.transparenciacolombia.org.co',
    url: 'https://transparenciacolombia.org.co/',
    control: 'Político',
  },
  {
    nombre: 'Departamento Administrativo de la Función Pública',
    direccion: 'Carrera 6 # 12 – 62 Bogotá',
    telefono: '601 7395656',
    email: 'eva@funcionpublica.gov.co',
    web: 'www.funcionpublica.gov.co',
    url: 'https://www.funcionpublica.gov.co/',
    control: 'Administrativo',
  },
  {
    nombre: 'Agencia Nacional de Defensa Jurídica del Estado',
    direccion: 'Carrera 7 N° 75 – 66, Pisos 2 y 3; Bogotá',
    telefono: '601 2558955',
    email: 'agencia@defensajuridica.gov.co',
    web: 'www.defensajuridica.gov.co',
    url: 'https://www.defensajuridica.gov.co/',
    control: 'Administrativo',
  },
  {
    nombre: 'Contaduría General de la República',
    direccion: 'Calle 26 N° 69-76, Edificio Elemento, Torre 1 (Aire) – Pisos 3 y 15, Bogotá',
    telefono: '601 4926400',
    email: 'contactenos@contaduria.gov.co',
    web: 'www.contaduria.gov.co',
    url: 'https://www.contaduria.gov.co/',
    control: 'Fiscal',
  },
];

function EntesVigilancia() {
  return (
    <main className={styles.entesPage}>

      {/* ENCABEZADO */}
      <header className={styles.hero}>
        <div className={styles.heroDecoracion}></div>

        <div className={styles.heroContenido}>
          <span className={styles.heroEtiqueta}>ACTIVA</span>
          <h1>Entes y Autoridades que nos Vigilan</h1>
        </div>
      </header>

      <div className={styles.container}>

        {/* INTRODUCCIÓN */}
        <section className={styles.introduccion}>
          <p>
            Conoce las entidades y autoridades encargadas de ejercer
            vigilancia y control sobre nuestra gestión institucional.
          </p>
        </section>

        {/* TABLA DE ENTIDADES */}
        <section className={styles.tablaSection}>

          <div className={styles.tablaEncabezado}>
            <div className={styles.tablaIcono}>
              <MapPin size={28} weight="duotone" />
            </div>

            <div>
              <h2>Entidades de Vigilancia y Control</h2>
              <p>Información de contacto y tipos de control.</p>
            </div>
          </div>

          <div className={styles.tablaContenedor}>
            <table className={styles.tablaEntidades}>

              <thead>
                <tr>
                  <th>Entidad</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th>WEB</th>
                  <th>Tipo de Control</th>
                </tr>
              </thead>

              <tbody>
                {entidades.map((entidad, index) => (
                  <tr key={index}>

                    <td className={styles.entidadNombre}>
                      {entidad.nombre}
                    </td>

                    <td>{entidad.direccion}</td>

                    <td>
                      <a href={`tel:${entidad.telefono.replace(/\s/g, '')}`}>
                        <Phone size={16} weight="fill" />
                        {entidad.telefono}
                      </a>
                    </td>

                    <td>
                      <a href={`mailto:${entidad.email}`}>
                        <EnvelopeSimple size={16} weight="fill" />
                        {entidad.email}
                      </a>
                    </td>

                    <td>
                      <a
                        href={entidad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} weight="fill" />
                        {entidad.web}
                      </a>
                    </td>

                    <td>
                      <span className={styles.tipoControl}>
                        {entidad.control}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </section>

      </div>
    </main>
  );
}

export default EntesVigilancia;
