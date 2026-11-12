
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
import Planeacion from "./pages/Planeacion";
import SistemaGestionCalidad from "./pages/SistemaGestionCalidad";
import NormativaEntidad from "./pages/NormativaEntidad";
import Resoluciones from './pages/Resoluciones';
import PoliticasLineamientosManuales from "./pages/PoliticasLineamientosManuales";
import EstadosFinancieros from "./pages/EstadosFinancieros";
import DescripcionGeneral from "./pages/DescripcionGeneral";
import RendicionCuentas from './pages/RendicionCuentas';
import CanalesAtencion from './pages/CanalesAtencion';
import EntesVigilancia from './pages/EntesVigilancia';
import Contratacion from './pages/Contratacion';
import Proveedores from './pages/Proveedores';

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

        <Route path="/planeacion" element={<Planeacion />} />

        <Route path="/sistema-gestion-calidad" element={<SistemaGestionCalidad />} />

        <Route path="/normativa-entidad" element={<NormativaEntidad />} />

        <Route path="/resoluciones" element={<Resoluciones />} />

        <Route path="/politicas-lineamientos-manuales" element={<PoliticasLineamientosManuales />} />

        <Route path="/estados-financieros" element={<EstadosFinancieros />} />   

        <Route path="/descripcion-general" element={<DescripcionGeneral />} /> 

        <Route path="/rendicion-de-cuentas" element={<RendicionCuentas />} />

        <Route path="/canales-de-atencion-presencial-y-telefonica" element={<CanalesAtencion />} />

        <Route path="/entes-y-autoridades-que-nos-vigilan" element={<EntesVigilancia />} />

        <Route path="/contratacion" element={<Contratacion />} />

        <Route path="/proveedores" element={<Proveedores />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
