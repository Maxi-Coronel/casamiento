import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { db, getCollection } from '../../Service/Index';

const ItemBusqueda = ({ documento, name, texto }) => {

    const [enviar, setEnviar] = useState(false)

    const updateAttendance = (event) => {
        event.preventDefault()
        const value = document.querySelector('#prueba').value;
        console.log(value);
        getCollection("invitados", "apellido", documento.apellido)
            .then(snapshot => {
                snapshot.docs.map(e => setDoc(doc(db, 'invitados', e.id), {asiste: value}, { merge: true }));
                setEnviar(true)
        })
    }

    return (
            <div className='ItemDeseos-marg'>

                <hr />
                {!enviar
                ?<div>
                    <p>Apellido: {documento.apellido}</p>
                    <p>Nombre: {documento.nombre}</p>
                    <Form onSubmit={updateAttendance}>
                    <Form.Group className="mb-3">
                        <section className='flex'>
                            <Form.Select id='prueba'>
                            <option value={"true"}>Por supuesto, ahí estare</option>
                            <option value={"false"}>No podre estar presente</option>
                            </Form.Select>
                        </section>
                        <Button variant="primary" type="submit" className='margin5'>
                            Enviar
                        </Button>
                    </Form.Group>
                    </Form>
                </div>
                :  <p>Tu asistencia ya fue actualizada</p>}
            </div>
    );
};

export default ItemBusqueda;