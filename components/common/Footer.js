import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export default React.forwardRef(function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/foto.estudioperez"
            role="button"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon style={{ width: 40, height: 40 }} icon={faFacebookF}></FontAwesomeIcon>
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://wa.link/9m0n4a"
            role="button"
            target={"_blank"}
            rel="noreferrer"
          >
            <FontAwesomeIcon style={{ width: 40, height: 40 }} icon={faWhatsapp}></FontAwesomeIcon>
          </a>
        </section>

        <section className="mb-4">
          <p>Contactanos por cualquiera de nuestras redes</p>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Estudio Fotografico Peréz
                </h6>
                <p>
                  Somos una microempresa dedicada al rubro fotográfico, nos orientamos a brindar soluciones e ideas creativas para tus
                  proyectos.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>

                <p>
                  <Link href="/nosotros" passHref>
                    <a className="text-reset">Nosotros</a>
                  </Link>
                </p>
                <p>
                  <Link href="/promociones" passHref>
                    <a className="text-reset">Promociones</a>
                  </Link>
                </p>

                <p>
                  <Link href="/contacto" passHref>
                    <a className="text-reset">Contactanos</a>
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <FontAwesomeIcon icon={faHome} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>
                  AV.Los Quechuas Nº 1142 Salamanca Ate
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>
                  foto_estudioperez@hotmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>+ 51 989 882
                  819
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © Todos los Derechos Reservados - Estudio Fotografico Peréz | Diseñado por:
        <a className="text-white" target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/jherson-lopez-a70584225/">
          Retr0
        </a>
      </div>
    </footer>
  );
});
