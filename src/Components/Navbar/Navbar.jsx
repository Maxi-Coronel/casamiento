import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navegador() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Yoha & Nahui</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/fotos">Fotos</Nav.Link>
              <Nav.Link as={Link} to="/asistencia">Confirma asistencia</Nav.Link>
              <Nav.Link as={Link} to="/deseos">Dejanos tus buenos deseos</Nav.Link>
              <Nav.Link as={Link} to="/deseos">Ayudanos a elegir la música</Nav.Link>
              <Nav.Link as={Link} to="/ubicacion">Ubicación</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navegador;