import './App.css';
import { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrusel from './Components/Carrusel/Carrusel';
import Navegador from './Components/Navbar/Navbar';
import Presentacion from './Components/Presentacion/Presentacion';
import Ubicacion from './Components/Ubicacion/Ubicacion';
import Footer from './Components/Footer/Footer';

function App() {

  /* useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'invitados')
    getDocs(itemCollection)
    .then(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
    })
    .catch(
      err => console.log(err)
    )
  }, []) */
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navegador />
        </header>
        <Routes>
          <Route path='/' element={<Presentacion />} />
          <Route path='/fotos' element={<Carrusel />} />
          <Route path='/ubicacion' element={<Ubicacion />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
