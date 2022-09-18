import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Musica.css'

const Musica = () => {
    return (
        <div className='musica'>
            <h3>¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu canción favorita</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit">
                Sugerir
            </Button>
        </div>
    );
};

export default Musica;