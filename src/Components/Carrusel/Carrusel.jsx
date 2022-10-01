import { Carousel } from 'react-bootstrap';
import './Carrusel.css'
import fotoA from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-206.jpg'
import fotoB from '../../Multimedia/Horizontal/YOHANA-NAHUEL-203.jpg'
import fotoC from '../../Multimedia/Horizontal/YOHANA-NAHUEL-132.jpg'
import imgA from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-204.jpg'
import imgB from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-206.jpg'
import imgC from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-207.jpg'
import imgD from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-214.jpg'
import imgE from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-220.jpg'
import imgF from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-222.jpg'
import imgG from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-227.jpg'
import imgH from '../../Multimedia/Horizontal/YOHANA Y NAHUEL-232.jpg'

function Carrusel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={fotoA}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={fotoB}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={fotoC}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <div className='galeria'>
        <img src={imgA} alt="" />
        <img src={imgB} alt="" />
        <img src={imgC} alt="" />
        <img src={imgD} alt="" />
        <img src={imgE} alt="" />
        <img src={imgF} alt="" />
        <img src={imgG} alt="" />
        <img src={imgH} alt="" />
      </div>
    </div>
  );
}

export default Carrusel;