import React from 'react';
import { useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import './Asistencia.css';
import {Form, Button} from 'react-bootstrap';

const Asistencia = () => {
    
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'invitados')
    getDocs(itemCollection)
    .then(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
    })
    .catch(
      err => console.log(err)
    )
  }, [])

    return (
      <>
        <section className='sec-asistencia'>
          <h2>¿Nos acompañas o te lo perdés?</h2>
          <p>Para confirmar tu asistencia al casamiento sólo tenés que escribir tu nombre y darle a Buscar. Aparecerá tu nombre y sólo tenés que confirmar tu asistencia. Si no te encuentras en el listado, infórmanos para que te agreguemos. Muchas gracias!</p>
          <p>Valor de la tarjeta : <br /> ADULTOS : $ 7.000 <br /> MENORES ( De 5 a 10 años) : $3.500</p>
          <p>EL pago de tarjeta se puede realizar mediante transferencia bancaria: CBU: 2850303340094866394658 / 0110467130046764424279</p>
        </section>
        <Form className='form-asistencia'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
            <Form.Text className="text-muted">
              Por favor escriba su nombre
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </>
    );
};

export default Asistencia;