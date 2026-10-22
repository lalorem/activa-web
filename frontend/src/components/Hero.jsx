
import { useEffect, useState } from 'react';

const slides = [
  '/assets/header1.jpeg',
  '/assets/header2.jpeg',
  '/assets/header3.png',
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <div className="hero-carousel">
        {slides.map((image, index) => (
          <div
            key={image}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Empresa de la Gobernación de Antioquia
        </div>

        <h1>
          Hacemos posible
          <span className="hero-highlight">grandes experiencias</span>
        </h1>

        <p>
          Somos una empresa industrial y comercial de la Gobernación de
          Antioquia. Diseñamos, planeamos y operamos soluciones logísticas
          para proyectos, eventos y experiencias que generan impacto.
        </p>

        <div className="hero-actions">
          <a href="#servicios" className="btn btn-hero-primary">
            Conoce nuestros servicios
          </a>
          <a href="/quienes-somos.html" className="btn btn-hero-secondary">
            Conoce ACTIVA
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
