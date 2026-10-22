
function News() {
  const news = [
    {
      image: 'tarjeta1.webp',
      category: 'Turismo',
      title:
        'El Volcán de Lodo de Arboletes se prepara para convertirse en uno de los parques turísticos más importantes del Caribe colombiano.',
      link: '/noticia1.html',
    },
    {
      image: 'tarjeta2.webp',
      category: 'ACTIVA',
      title:
        'ACTIVA avanza en la transformación del Volcán de Lodo de Arboletes como destino turístico sostenible.',
      link: '/noticia2.html',
    },
    {
      image: 'tarjeta3.webp',
      category: 'Comunidad',
      title:
        'ACTIVA operó la atención humanitaria en Urabá antioqueño durante la emergencia por temporada de lluvias.',
      link: '/noticia3.html',
    },
    {
      image: 'tarjeta4.webp',
      category: 'Institucional',
      title:
        'ACTIVA realizó su Rendición de Cuentas Interna y compartió resultados con su equipo de trabajo.',
      link: '/noticia4.html',
    },
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-title">Actualidad</span>
          <h2>
            Noticias <span className="marker-title">ACTIVA</span>
          </h2>
          <p>
            Conoce las noticias, proyectos y acontecimientos más recientes
            de ACTIVA.
          </p>
        </div>

        <div className="news-grid">
          {news.map((item) => (
            <article className="news-card" key={item.link}>
              <div className="news-image">
                <img src={`/assets/${item.image}`} alt="" />
              </div>

              <div className="news-content">
                <span className="news-category">{item.category}</span>
                <h3>{item.title}</h3>
                <a className="news-button" href={item.link}>
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
