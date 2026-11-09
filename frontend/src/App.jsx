
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Error404 from "./pages/Error404";
import Estadisticas from "./components/estadisticas";
import Servicios from "./components/Servicios";
import Clientes from "./components/Clientes";
import Noticias from "./components/Noticias";
import Ubicacion from "./components/Ubicacion";
import QuienesSomos from "./pages/QuienesSomos";
import Calendario from "./pages/Calendario";
import DirectorioInstitucional from "./pages/DirectorioInstitucional";
import NoticiasGeneral from "./pages/NoticiasGeneral";
import LineasAccion from "./pages/LineasAccion";
import MisionVision from "./pages/MisionVision";
import PublicacionHojasVida from "./pages/PublicacionHojasVida";
import Organigrama from "./pages/Organigrama";
import Transparencia from "./pages/Transparencia";
import OficinaControlInterno from "./pages/OficinaControlInterno";
import CertificadosAccesibilidad from "./pages/CertificadosAccesibilidad";
import InformacionMujeres from "./pages/InformacionMujeres";
import InformacionNNA from "./pages/InformacionNNA";

import Footer from "./components/Footer";

function Inicio() {
  return (
    <>
      <Home />
      <Estadisticas />
      <Servicios />
      <Clientes />
      <Noticias />
      <Ubicacion />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/*" element={<Error404 />} />

        <Route path="/quienes-somos" element={<QuienesSomos />} />

        <Route path="/calendario" element={<Calendario />} />

        <Route path="/directorio-institucional" element={<DirectorioInstitucional />}/>

        <Route path="/noticias-general" element={<NoticiasGeneral />} />

        <Route path="/lineas-accion" element={<LineasAccion />} />

        <Route path="/mision-vision" element={<MisionVision />} />

        <Route path="/publicacion-hojas-vida" element={<PublicacionHojasVida />} />

        <Route path="/organigrama" element={<Organigrama />} />

        <Route path="/transparencia" element={<Transparencia />} />

        <Route path="/oficina-control-interno" element={<OficinaControlInterno />} />

        <Route path="/certificados-accesibilidad" element={<CertificadosAccesibilidad />} />

        <Route path="/informacion-mujeres" element={<InformacionMujeres />} />

        <Route path="/informacion-nna" element={<InformacionNNA />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
