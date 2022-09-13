import React from 'react';
import logo from '../../Multimedia/YOHANA-NAHUEL-129.jpg';

const Presentacion = () => {
    return (
        <main>
            <section>
                <p>¡Nos casamos!</p>
                <p>29 OCTUBRE 2022</p>
                <p>Josefina, Santa Fe</p>
                
            </section>
            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quibusdam? Reiciendis impedit, ipsam perspiciatis accusantium dignissimos reprehenderit ut inventore molestiae ex nisi distinctio facilis error, earum voluptas dolor voluptates dolore?</p>
            </section>
            <img src={logo} alt="" />
            <section>
                <p>Johana & Nahuel</p>
                <p>29 Octubre 2022</p>
            </section>
        </main>
    );
};

export default Presentacion;