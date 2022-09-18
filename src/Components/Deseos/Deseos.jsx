import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Deseos.css'

const Deseos = () => {
    return (
        <div className='deseos'>
            <p>Porque creemos que aquellos que guardan recuerdos, reviven momentos más felices</p>
            <h3>Dejanos tu mensaje!</h3>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Dejanos tu mensaje!</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Deseos;