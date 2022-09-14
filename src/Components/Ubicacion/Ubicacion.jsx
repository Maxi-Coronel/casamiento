import React from 'react';
import './Ubicacion.css';

export default function App(props) {
    /* const {
        iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.4857048405743!2d-61.9885275419274!3d-31.405586444480427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cad74a280be219%3A0x820ad1f8289cb52a!2sLa%20Faustina%20Eventos!5e1!3m2!1ses-419!2sar!4v1663197910538!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
      } = props; */
    return (
        <section className='ubicacion'>
            <h2>Ubicación</h2>
            <p>Ha llegado nuestro momento. Nos casamos y nos encantaría compartir con ustedes este día tan especial.</p>
            
            <hr />
            <h4>Ceremonia - Parroquia San José - 19 Hs</h4>
            <a href="https://www.google.com/maps/place/Iglesia+San+Jos%C3%A9/@-31.4072268,-61.9926767,243m/data=!3m1!1e3!4m5!3m4!1s0x95cad748867fe54f:0xf6d83dea62a7ea46!8m2!3d-31.4073778!4d-61.9925505!5m1!1e4">ir a ubicación</a>
            <br />
            <br />
            <hr />
            <h4>Fiesta- La Faustina - 21 Hs</h4>
            <a href="https://www.google.com/maps/place/La+Faustina+Eventos/@-31.4055864,-61.9885275,577m/data=!3m1!1e3!4m5!3m4!1s0x95cad74a280be219:0x820ad1f8289cb52a!8m2!3d-31.4045769!4d-61.9879307!5m1!1e4">ir a ubicación</a>
            {/* <div className="App" dangerouslySetInnerHTML={{__html: iframeSource}}></div> */}
        </section>
    );
};