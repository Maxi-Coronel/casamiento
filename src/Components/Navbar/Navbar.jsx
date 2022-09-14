import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Yoha & Nahui</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/fotos'}>Nuestras fotos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/asistencia'}>Confirma asistencia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/deseos'}>Dejanos tus buenos deseos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={'/ubicacion'}>Ubicación</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;