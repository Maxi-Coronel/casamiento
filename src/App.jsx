import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrusel from './Components/Carrusel/Carrusel';
import Navegador from './Components/Navbar/Navbar';
import Presentacion from './Components/Presentacion/Presentacion';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Footer from './Components/Footer/Footer';
import Asistencia from './Components/Asistencia/Asistencia';

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
          <Route path='/ubicacion' element={<Ubicacion />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
