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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quibusdam? Reiciendis impedit, ipsam perspiciatis accusantium dignissimos reprehenderit ut inventore molestiae ex nisi distinctio facilis error, earum voluptas dolor voluptates dolore?</p>
            </section>
            <img src={FOTO} alt="" />
        </main>
    );
};

export default Presentacion;