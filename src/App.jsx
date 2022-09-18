import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrusel from './Components/Carrusel/Carrusel';
import Navegador from './Components/Navbar/Navbar';
import Presentacion from './Components/Presentacion/Presentacion';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Footer from './Components/Footer/Footer';
import Asistencia from './Components/Asistencia/Asistencia';
import Deseos from './Components/Deseos/Deseos';
import Musica from './Components/Musica/Musica';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navegador />
        </header>
        <Routes>
          <Route path='/' element={<Presentacion />} />
          <Route path='/fotos' element={<Carrusel />} />
          <Route path='/asistencia' element={<Asistencia />} />
          <Route path='/musica' element={<Musica />} />
          <Route path='/ubicacion' element={<Ubicacion />} />
          <Route path='/deseos' element={<Deseos />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;