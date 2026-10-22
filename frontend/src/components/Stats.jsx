import { useEffect, useRef, useState } from 'react';

const statistics = [
  { value: 5400, label: 'Eventos Gestionados', description: 'A nivel nacional', icon: '✦' },
  { value: 125, label: 'Municipios Atendidos', description: 'En todo el país', icon: '⌖' },
  { value: 23, label: 'Clientes Satisfechos', description: 'Sector público', icon: '★' },
];

function Stats() {
  const sectionRef = useRef(null);
 const [counts, setCounts] = useState(
  statistics.map((stat) => stat.value)
);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame;
    let started = false;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;

      started = true;
      observer.disconnect();

      const startTime = performance.now();
      const duration = 1800;

      function animate(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts(
          statistics.map((stat) =>
            progress >= 1 ? stat.value : Math.floor(stat.value * eased)
          )
        );

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      }

      frame = requestAnimationFrame(animate);
    }, { threshold: 0.1 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-decoration stats-decoration-one" />
      <div className="stats-decoration stats-decoration-two" />

      <div className="container">
        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <article className="stat-item" key={stat.label}>
              <div className="stat-icon-container">
                <span className="stat-icon">{stat.icon}</span>
              </div>

              <div className="stat-content">
                <div className="stat-number">
                  +{counts[index].toLocaleString('es-CO')}
                </div>
                <h3 className="stat-title">{stat.label}</h3>
                <p className="stat-desc">{stat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stats-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,55 C300,120 550,15 800,65 C1050,110 1250,30 1440,55 L1440,120 L0,120 Z"
            fill="var(--bg-body)"
          />
        </svg>
      </div>
    </section>
  );
}

export default Stats;
