
import {
  FileText,
  ChatCircleDots,
  WarningCircle,
  Lightbulb,
  Megaphone,
  Heart,
  EnvelopeSimple,
  ClipboardText,
  ShieldCheck,
} from '@phosphor-icons/react';

import styles from '../components/style/PQRSDF.module.css';

const tiposPQRSDF = [
  {
    id: 1,
    titulo: 'Petición o Derecho de Petición',
    icono: FileText,
    descripcion:
      'Es aquel derecho que tiene toda persona para solicitar o reclamar ante la Empresa de Parques y Eventos De Antioquia ACTIVA por razones de interés general o interés particular, para elevar solicitudes respetuosas de información y/o consulta para obtener pronta resolución de las mismas.',
  },
  {
    id: 2,
    titulo: 'Queja',
    icono: ChatCircleDots,
    descripcion:
      'Insatisfacción con la conducta o la acción de los servidores públicos o de los particulares que llevan a cabo un servicio público o por la deficiencia en la atención prestada por la Empresa de Parques y Eventos de Antioquia ACTIVA.',
  },
  {
    id: 3,
    titulo: 'Reclamo',
    icono: WarningCircle,
    descripcion:
      'Insatisfacción por la prestación de un servicio deficiente, retraso, desatención o deficiencia en los servicios prestados por la Empresa de Parques y Eventos de Antioquia ACTIVA.',
  },
  {
    id: 4,
    titulo: 'Sugerencia',
    icono: Lightbulb,
    descripcion:
      'Recomendación o propuesta de los ciudadanos para el mejoramiento de los servicios, funciones, metas y objetivos de la a Empresa de Parques y Eventos de Antioquia ACTIVA.',
  },
  {
    id: 5,
    titulo: 'Denuncia',
    icono: Megaphone,
    descripcion:
      'Es la puesta en conocimiento ante una autoridad competente de una conducta posiblemente irregular, para que se adelante la correspondiente investigación penal, disciplinaria, fiscal, administrativa – sancionatoria o ético -profesional. Es necesario que se indiquen las circunstancias de tiempo, modo y lugar, con el objeto de que se establezcan responsabilidades.',
  },
  {
    id: 6,
    titulo: 'Felicitación',
    icono: Heart,
    descripcion:
      'Comunicaciones en las cuales se resaltan la gestión, atención al cliente u otras acciones relacionadas con el quehacer de la a Empresa de Parques y Eventos de Antioquia ACTIVA.',
  },
];

function PQRSDF() {
  return (
    <main className={styles.pqrsPage}>

      {/* HEADER */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            ATENCIÓN Y SERVICIO A LA CIUDADANÍA
          </span>

          <h1>PQRSDF</h1>

          <p>
            Tu voz nos ayuda a mejorar. Estamos aquí para escucharte.
          </p>
        </div>
      </section>


      {/* TIPOS DE SOLICITUDES */}
      <section className={styles.typesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>
            CONOCE TUS DERECHOS
          </span>

          <h2>¿Qué tipo de solicitud deseas presentar?</h2>

          <p>
            Conoce las diferentes modalidades de comunicación que
            puedes presentar ante ACTIVA.
          </p>
        </div>

        <div className={styles.cloudGrid}>
          {tiposPQRSDF.map((tipo) => {
            const Icon = tipo.icono;

            return (
              <article
                className={styles.cloudCard}
                key={tipo.id}
              >
                <div className={styles.cloudIcon}>
                  <Icon size={30} weight="duotone" />
                </div>

                <span className={styles.cloudNumber}>
                  0{tipo.id}
                </span>

                <h3>{tipo.titulo}</h3>

                <p>{tipo.descripcion}</p>
              </article>
            );
          })}
        </div>
      </section>


      {/* POLÍTICAS Y FORMULARIO */}
      <section className={styles.policySection}>

        {/* POLÍTICAS */}
        <article className={styles.policyContent}>
          <div className={styles.policyHeading}>
            <div className={styles.policyIcon}>
              <ShieldCheck size={27} weight="duotone" />
            </div>

            <div>
              <span className={styles.sectionEyebrow}>
                INFORMACIÓN INSTITUCIONAL
              </span>

              <h2>Políticas</h2>
            </div>
          </div>

          <div className={styles.policyText}>
            <p>
              Mediante la presente plataforma, se busca facilitar
              mecanismos de gestión para el trámite adecuado de
              peticiones, quejas reclamos, sugerencias y reconocimientos
              (PQRSDF), con el fin de lograr una atención oportuna a los
              ciudadanos, clientes, proveedores, contratistas y personal
              de trabajo de la Empresa de Parques y Eventos de
              Antioquia-ACTIVA.
            </p>

            <p>
              Es por lo anterior, y teniendo en cuenta que toda persona
              tiene derecho a presentar peticiones respetuosas a las
              diferentes autoridades, lo que implica el ejercicio del
              derecho de petición consagrado en el artículo 23 de la
              Constitución Política, que la Empresa de Parques y Eventos
              de Antioquia-ACTIVA, ha habilitado este canal de recepción
              de PQRSDF, teniendo en cuenta lo preceptuado por la ley
              1755 de 2015, la cual en su artículo 14 establece lo
              siguiente:
            </p>

            <blockquote className={styles.lawQuote}>
              <strong>
                Artículo 14. Términos para resolver las distintas
                modalidades de peticiones.
              </strong>

              <p>
                Salvo norma legal especial y so pena de sanción
                disciplinaria, toda petición deberá resolverse dentro
                de los quince (15) días siguientes a su recepción.
                Estará sometida a término especial la resolución de
                las siguientes peticiones:
              </p>

              <ol>
                <li>
                  Las peticiones de documentos y de información deberán
                  resolverse dentro de los diez (10) días siguientes a
                  su recepción. Si en ese lapso no se ha dado respuesta
                  al peticionario, se entenderá, para todos los efectos
                  legales, que la respectiva solicitud ha sido aceptada
                  y, por consiguiente, la administración ya no podrá
                  negar la entrega de dichos documentos al peticionario,
                  y como consecuencia las copias se entregarán dentro
                  de los tres (3) días siguientes.
                </li>

                <li>
                  Las peticiones mediante las cuales se eleva una
                  consulta a las autoridades en relación con las
                  materias a su cargo deberán resolverse dentro de los
                  treinta (30) días siguientes a su recepción.
                </li>
              </ol>

              <p>
                <strong>Parágrafo.</strong> Cuando excepcionalmente no
                fuere posible resolver la petición en los plazos aquí
                señalados, la autoridad debe informar esta circunstancia
                al interesado, antes del vencimiento del término
                señalado en la ley expresando los motivos de la demora
                y señalando a la vez el plazo razonable en que se
                resolverá o dará respuesta, que no podrá exceder del
                doble del inicialmente previsto.
              </p>
            </blockquote>

            <p>
              No obstante, se deberá tener en cuenta, además, que el
              artículo 5 del Decreto Legislativo 491 de 2020 (aparte
              subrayado) amplía los términos para resolver peticiones,
              durante la vigencia de la Emergencia Sanitaria ocasionada
              por la pandemia del Covid-19, a treinta (30) días
              siguientes a su recepción, normatividad que se encuentra
              vigente a la fecha.
            </p>
          </div>
        </article>


        {/* FORMULARIO */}
        <aside className={styles.formCard}>
          <div className={styles.formHeading}>
            <div className={styles.formIcon}>
              <ClipboardText size={27} weight="duotone" />
            </div>

            <span className={styles.sectionEyebrow}>
              ESTAMOS PARA ESCUCHARTE
            </span>

            <h2>Presenta tu solicitud</h2>

            <p>
              Completa el siguiente formulario para registrar tu
              petición, queja, reclamo, sugerencia, denuncia o
              felicitación.
            </p>
          </div>

          <div className={styles.formEmbed}>
            <iframe
              title="Formulario PQRSDF ACTIVA"
              src="https://forms.office.com/Pages/ResponsePage.aspx?embed=true&id=q-KC6eoWEUGz3_OlN_jXFgwJ-8ds4nhNge4O1yk6VatURDZNMUVBRE1URjYyT0VXM0dSQTYzM1I3SS4u"
              width="100%"
              height="1050"
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              style={{ border: 'none', maxWidth: '100%' }}
              allowFullScreen
            />
          </div>

          <p className={styles.formNote}>
            Tu información será recibida a través de la plataforma
            oficial de formularios de ACTIVA.
          </p>
        </aside>

      </section>


      {/* CONTACTO ADMINISTRATIVO */}
      <section className={styles.contactSection}>
        <div className={styles.contactIcon}>
          <EnvelopeSimple size={32} weight="duotone" />
        </div>

        <div className={styles.contactText}>
          <span>¿PREFIERES ESCRIBIRNOS?</span>

          <h2>Contacto administrativo</h2>

          <p>
            En la Empresa de Parques y Eventos de Antioquia ACTIVA
            disponemos de un correo corporativo para recibir tus
            PQRSDF. También puedes realizar tu solicitud a través
            del formulario disponible en esta página.
          </p>
        </div>

        <a
          href="mailto:info@activa.com.co"
          className={styles.contactButton}
        >
          <EnvelopeSimple size={19} />
          info@activa.com.co
        </a>
      </section>

    </main>
  );
}

export default PQRSDF;
