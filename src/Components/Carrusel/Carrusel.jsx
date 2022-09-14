import { Carousel } from 'react-bootstrap';
import fotoB from '../../Multimedia/Horizontal/YOHANA-NAHUEL-203.jpg'
import fotoC from '../../Multimedia/Horizontal/YOHANA-NAHUEL-132.jpg'

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={fotoC}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={fotoB}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={fotoC}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;