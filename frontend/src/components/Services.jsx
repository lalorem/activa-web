
function Services() {
  const services = [
    {
      image: '/assets/tarjeta6.png',
      alt: 'Gestión institucional',
      title: 'Estamos para hacerlo posible',
      description:
        'Diseñamos, planeamos y ejecutamos servicios de operación logística para proyectos y eventos de pequeño, mediano y gran formato.',
    },
    {
      image: '/assets/tarjeta5.png',
      alt: 'Operación de activos',
      title: 'Operación de activos estratégicos',
      description:
        'Operamos y administramos parques y equipamientos para actividades deportivas, culturales, ambientales y turísticas.',
    },
    {
      image: '/assets/tarjeta7.jpeg',
      alt: 'Proyectos especiales',
      title: 'Proyectos especiales y soluciones',
      description:
        'Creamos, diseñamos y ejecutamos experiencias a la medida de las necesidades de nuestros clientes.',
    },
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-title">Nuestras Áreas</span>
          <h2>
            Nuestros <span className="marker-title">servicios</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-img">
                <img src={service.image} alt={service.alt} />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
