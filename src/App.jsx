import './App.css';
import { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Carrusel from './Components/Carrusel/Carrusel';
import Presentacion from './Components/Presentacion/Presentacion';

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
          < Navbar />
        </header>
        <Routes>
          <Route path='/' element={<Presentacion />} />
          <Route path='/fotos' element={<Carrusel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
