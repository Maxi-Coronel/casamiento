import './App.css';
import { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Navbar from './Components/Navbar/Navbar';
import presentacion from './Multimedia/YOHANA-NAHUEL-203.jpg';
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
    <div className="App">
      <header className="App-header">
        < Navbar />
        <img src={presentacion} alt="presentacion" />
      </header>
      <Presentacion />
    </div>
  );
}

export default App;
