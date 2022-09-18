import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { sendDesire } from '../../Service/Index';
import './Deseos.css'
import ItemDeseos from './ItemDeseos';

const Deseos = () => {
    
    const [enviado, setEnviado] = useState(false)
    const [deseos, setDeseo] = useState()
   
    useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'deseos')
    getDocs(itemCollection)
    .then(snapshot => {
        setDeseo(snapshot.docs.map(doc => doc.data()));
    })
    .catch(
      err => console.log(err)
    )
  }, [])

    const desire = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const desire = document.querySelector('#desire').value

        const send = () => {
            sendDesire(name, desire)
        }
        send()
        setEnviado(true)
    }
    return (
        <div className='deseos'>
            <p>Porque creemos que aquellos que guardan recuerdos, reviven momentos más felices</p>
            <h3>Dejanos tu mensaje!</h3>
            {!enviado
            ? <Form onSubmit={desire}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="text" id='name'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Dejanos tu mensaje!</Form.Label>
                    <Form.Control as="textarea" rows={3} id='desire'/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Enviar
                </Button>
            </Form>
            : <p>Tu mensaje fue enviado, actualiza para poder verlo</p>}
            {deseos?.map((deseo, key) => <ItemDeseos key={key} deseo={deseo}/>)}
            
        </div>
    );
};

export default Deseos;