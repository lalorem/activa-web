
import HeaderImagenes from "../components/HeaderImagenes";

import header1 from "../assets/header1.jpeg";
import header2 from "../assets/header2.jpeg";
import header3 from "../assets/header3.png";

function Home() {
  return (
    <main>
      <HeaderImagenes
        images={[header1, header2, header3]}
        interval={6000}
        eyebrow="Empresa de la Gobernación de Antioquia"
        title="Hacemos posible"
        highlight="grandes experiencias"
        description="Somos una empresa industrial y comercial de la Gobernación de Antioquia. Diseñamos, planeamos y operamos soluciones logísticas para proyectos, eventos y experiencias que generan impacto."
        primaryButton={{
          text: "Conoce nuestros servicios",
          href: "#servicios",
        }}
        secondaryButton={{
          text: "Conoce ACTIVA",
          to: "/quienes-somos",
        }}
        sideInfo="ANTIOQUIA · COLOMBIA"
      />

      {/* Aquí continúa el resto de las secciones del Home */}
    </main>
  );
}

export default Home;
