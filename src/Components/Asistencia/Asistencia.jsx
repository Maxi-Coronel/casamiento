import React, { useState,useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import './Asistencia.css';
import {Form, Button} from 'react-bootstrap';
import { getCollection } from '../../Service/Index';

const Asistencia = () => {
    
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

  
  const [busqueda, setBusqueda] = useState()

    const buscar = (event) => {
      event.preventDefault()
      const surname = document.querySelector('#surname').value
      setBusqueda(getCollection("invitados", "apellido", surname)
      .then(snapshot => {
        console.log(snapshot.docs.map(doc => doc.data()));
      }))
    }

    return (
      <>
        <section className='sec-asistencia'>
          <h2>¿Nos acompañas o te lo perdés?</h2>
          <p>Para confirmar tu asistencia al casamiento sólo tenés que escribir tu nombre y darle a Buscar. Aparecerá tu nombre y sólo tenés que confirmar tu asistencia. Si no te encuentras en el listado, infórmanos para que te agreguemos. Muchas gracias!</p>
          <p>Valor de la tarjeta : $ 7.000</p>
          <p>EL pago de tarjeta se puede realizar mediante transferencia bancaria: CBU: ???????</p>
        </section>
        <Form className='form-asistencia' onSubmit={buscar}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" id='name'/>
            <Form.Text className="text-muted">
              Por favor escriba su nombre
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" id='surname'/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </>
    );
};

export default Asistencia;