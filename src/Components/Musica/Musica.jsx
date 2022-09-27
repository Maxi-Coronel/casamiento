import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { sendList, sendMusic } from '../../Service/Index';
import { List } from '../Array/ListaInvitados';
import ItemDeseos from '../Deseos/ItemDeseos';
import './Musica.css'

const Musica = () => {

    const [enviado, setEnviado] = useState(false)
    const [canciones, setCanciones] = useState()

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'canciones')
        getDocs(itemCollection)
        .then(snapshot => {
            setCanciones(snapshot.docs.map(doc => doc.data()));
        })
        .catch(
            err => console.log(err)
        )
    }, [])

    const enviar = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const text = document.querySelector('#cancion').value

        const send = () => {
            sendMusic(name, text)
        }
        send()
        setEnviado(true)
    }
    return (
        <div className='musica'>
            <h3>¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</h3>
            {!enviado
            ? <Form onSubmit={enviar}>
            <Form.Group className="mb-3">
                <Form.Label>Dejanos tu canción favorita</Form.Label>
                <Form.Control type="text" id='name' placeholder='artista'/>
                <Form.Control type="text" id='cancion' placeholder='cancion'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sugerir
            </Button>
        </Form>
            : <p>Tu mensaje fue enviado, actualiza para poder verlo</p>}
            {canciones?.map((cancion, key) => <ItemDeseos key={key} documento={cancion} name={"Artista"} texto={"Canción"}/>)}
            
        </div>
    );
};

export default Musica;



    
