import React from 'react';
import logo from '../../Multimedia/Horizontal/YOHANA-NAHUEL-132.jpg'
import FOTO from '../../Multimedia/Vertical/YOHANA-NAHUEL-33.jpg';

const Presentacion = () => {
    return (
        <main>
            <img src={logo} alt="presentacion" />
            <section>
                <p>¡Nos casamos!</p>
                <p>29 OCTUBRE 2022</p>
                <p>Josefina, Santa Fe</p>
            </section>
            <section>
                <p>¡A ponerse guapos que nos vamos a casar! Tenemos todo… el traje, el auto, el fotógrafo, el lugar de la fiesta, las flores… Pero nos falta lo más importante: ¡Contar con vos en este día tan especial!</p>
            </section>
            <img src={FOTO} alt="" />
        </main>
    );
};

export default Presentacion;