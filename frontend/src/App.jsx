
import './App.css';
import '../../css/style.css';

import GovBar from './components/GovBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Clients from './components/Clients';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GovBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Clients />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
