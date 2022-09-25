import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { sendList, sendMusic } from '../../Service/Index';
import { List } from '../Array/ListaInvitados';
import './Musica.css'

const Musica = () => {
    
    const [enviado, setEnviado] = useState(false)

    const enviar = (event) => {
        event.preventDefault()
        const name = document.querySelector('#name').value
        const cancion = document.querySelector('#cancion').value

        const send = () => {
            sendMusic(name, cancion)
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
            : <p>Muchas gracias por tu sugerencia!</p>}
        </div>
    );
};

export default Musica;