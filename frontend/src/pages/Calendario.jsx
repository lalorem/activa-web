
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarBlank,
  Clock,
  MapPin,
} from "@phosphor-icons/react";

import styles from "../components/style/calendario.module.css";

// Fecha en formato local: YYYY-MM-DD
const obtenerClaveFecha = (fecha) => {
  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");

  return `${anio}-${mes}-${dia}`;
};

// Fecha actual
const fechaActual = new Date();

// Por ahora no hay eventos registrados.
// Más adelante estos datos vendrán del panel administrativo.
const eventos = [];

function Calendario() {
  const [mesActual, setMesActual] = useState(
    new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1)
  );

  const [fechaSeleccionada, setFechaSeleccionada] = useState(
    new Date(
      fechaActual.getFullYear(),
      fechaActual.getMonth(),
      fechaActual.getDate()
    )
  );

  // Nombre del mes y año
  const nombreMes = mesActual.toLocaleDateString("es-CO", {
    month: "long",
    year: "numeric",
  });

  // Primer día del mes
  const primerDiaMes = new Date(
    mesActual.getFullYear(),
    mesActual.getMonth(),
    1
  );

  // El calendario comienza en lunes
  const desplazamiento = (primerDiaMes.getDay() + 6) % 7;

  // Fecha inicial visible en la cuadrícula
  const fechaInicio = new Date(
    primerDiaMes.getFullYear(),
    primerDiaMes.getMonth(),
    1 - desplazamiento
  );

  // Generar las 42 casillas del calendario
  const diasCalendario = Array.from({ length: 42 }, (_, indice) => {
    const fecha = new Date(
      fechaInicio.getFullYear(),
      fechaInicio.getMonth(),
      fechaInicio.getDate() + indice
    );

    return fecha;
  });

  // Cambiar de mes
  const cambiarMes = (cantidad) => {
    setMesActual(
      new Date(
        mesActual.getFullYear(),
        mesActual.getMonth() + cantidad,
        1
      )
    );
  };

  // Regresar a la fecha actual
  const irAHoy = () => {
    const hoy = new Date();

    setMesActual(
      new Date(hoy.getFullYear(), hoy.getMonth(), 1)
    );

    setFechaSeleccionada(
      new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
    );
  };

  // Seleccionar un día
  const seleccionarDia = (fecha) => {
    setFechaSeleccionada(fecha);

    // Si se selecciona un día de otro mes, cambiar la vista
    if (fecha.getMonth() !== mesActual.getMonth() ||
        fecha.getFullYear() !== mesActual.getFullYear()) {
      setMesActual(
        new Date(fecha.getFullYear(), fecha.getMonth(), 1)
      );
    }
  };

  // Eventos del día seleccionado
  const eventosDelDia = eventos.filter(
    (evento) => evento.fecha === obtenerClaveFecha(fechaSeleccionada)
  );

  const esHoy = (fecha) =>
    obtenerClaveFecha(fecha) === obtenerClaveFecha(fechaActual);

  const esSeleccionado = (fecha) =>
    obtenerClaveFecha(fecha) === obtenerClaveFecha(fechaSeleccionada);

  return (
    <>
      {/* HERO */}
      <section className={styles.calendarHero}>
        <div className={styles.calendarHeroOverlay}></div>

        <div className={styles.calendarHeroContent}>
          <h1>Calendario de Actividades y Eventos</h1>
          <div className={styles.calendarHeroLine}></div>
        </div>
      </section>

      {/* CALENDARIO */}
      <main className={styles.calendarSection}>
        <div className={styles.calendarContainer}>

          {/* ENCABEZADO */}
          <div className={styles.calendarHeading}>
            <div className={styles.calendarHeadingText}>
              <span className={styles.calendarSectionLabel}>
                Agenda ACTIVA
              </span>

              <h2>{nombreMes}</h2>
            </div>

            <div className={styles.calendarNavigation}>
              <button
                className={styles.calendarNavBtn}
                onClick={() => cambiarMes(-1)}
                aria-label="Mes anterior"
                type="button"
              >
                <ArrowLeft weight="bold" />
              </button>

              <button
                className={styles.calendarTodayBtn}
                onClick={irAHoy}
                type="button"
              >
                Hoy
              </button>

              <button
                className={styles.calendarNavBtn}
                onClick={() => cambiarMes(1)}
                aria-label="Mes siguiente"
                type="button"
              >
                <ArrowRight weight="bold" />
              </button>
            </div>
          </div>

          {/* CUADRÍCULA */}
          <div className={styles.calendarCard}>
            <div className={styles.calendarWeekdays}>
              {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
                (dia) => (
                  <div key={dia}>{dia}</div>
                )
              )}
            </div>

            <div className={styles.calendarDays}>
              {diasCalendario.map((fecha) => {
                const claveFecha = obtenerClaveFecha(fecha);
                const tieneEvento = eventos.some(
                  (evento) => evento.fecha === claveFecha
                );

                const esOtroMes =
                  fecha.getMonth() !== mesActual.getMonth();

                return (
                  <button
                    key={claveFecha}
                    type="button"
                    className={[
                      styles.calendarDay,
                      esOtroMes ? styles.otherMonth : "",
                      esHoy(fecha) ? styles.today : "",
                      esSeleccionado(fecha) ? styles.selected : "",
                    ].join(" ")}
                    onClick={() => seleccionarDia(fecha)}
                    aria-label={fecha.toLocaleDateString("es-CO", {
                      dateStyle: "full",
                    })}
                    aria-pressed={esSeleccionado(fecha)}
                  >
                    <span className={styles.calendarDayNumber}>
                      {fecha.getDate()}
                    </span>

                    {tieneEvento && (
                      <span className={styles.calendarEventDot}></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* EVENTOS DEL DÍA SELECCIONADO */}
          <section className={styles.eventsSection}>
            <div className={styles.eventsHeading}>
              <div>
                <span className={styles.calendarSectionLabel}>
                  Agenda del día
                </span>

                <h3>
                  {fechaSeleccionada.toLocaleDateString("es-CO", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </h3>
              </div>

              <CalendarBlank size={30} weight="duotone" />
            </div>

            {eventosDelDia.length > 0 ? (
              <div className={styles.eventsList}>
                {eventosDelDia.map((evento) => (
                  <article
                    className={styles.eventCard}
                    key={evento.id}
                  >
                    <h4>{evento.titulo}</h4>

                    <p>{evento.descripcion}</p>

                    {evento.hora && (
                      <span>
                        <Clock size={16} />
                        {evento.hora}
                      </span>
                    )}

                    {evento.lugar && (
                      <span>
                        <MapPin size={16} />
                        {evento.lugar}
                      </span>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyEvents}>
                <CalendarBlank size={35} weight="duotone" />

                <p>No hay eventos programados para esta fecha.</p>
              </div>
            )}
          </section>

        </div>
      </main>
    </>
  );
}

export default Calendario;
