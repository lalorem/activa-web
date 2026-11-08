
import React from 'react';
import styles from './style/estadisticas.module.css';

const statsData = [
  {
    id: 1,
    icon: 'ph ph-calendar-blank',
    number: '5400',
    prefix: '+',
    title: 'Eventos Gestionados',
    desc: 'A nivel nacional'
  },
  {
    id: 2,
    icon: 'ph ph-map-pin',
    number: '125',
    prefix: '+',
    title: 'Municipios Atendidos',
    desc: 'En todo el país'
  },
  {
    id: 3,
    icon: 'ph ph-users',
    number: '23',
    prefix: '+',
    title: 'Clientes Satisfechos',
    desc: 'Sector público'
  }
];

export default function Estadisticas() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsDecoration}>
        <div className={styles.statsDecorationOne}></div>
        <div className={styles.statsDecorationTwo}></div>
      </div>

      <div className="container">
        <div className={styles.statsIntro}>
          <span className={styles.statsMiniTitle}>
            ACTIVA EN CIFRAS
          </span>

          <p>
            Trabajamos para transformar ideas en experiencias y proyectos con impacto.
          </p>
        </div>

        <div className={styles.statsGrid}>
          {statsData.map((stat) => (
            <div className={styles.statItem} key={stat.id}>
              <div className={styles.statIconContainer}>
                <i className={`${stat.icon} ${styles.statIcon}`}></i>
              </div>

              <div className={styles.statContent}>
                <div className={styles.statNumber}>
                  {stat.prefix}
                  <span className={styles.counter}>
                    {stat.number}
                  </span>
                </div>

                <div className={styles.statTitle}>
                  {stat.title}
                </div>

                <div className={styles.statDesc}>
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.statsWave}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,89.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            style={{ fill: 'var(--bg-body)' }}
          ></path>
        </svg>
      </div>
    </section>
  );
}
