import Image from 'next/image';

import { Layout } from '../../components';

export default function impresiones() {
  return (
    <Layout
      title="Impresiones | Estudio Fotográfico Perez "
      description="Las Impresiones de imágenes o fotos para cuadros es uno de los Servicios que ofrece la empresa Estudio Fotográfico Perez"
    >
      <div className="container-fluid mb-5">
        <div className="row justify-content-center align-items-end">
          <div
            style={{
              position: "relative",
              height: "90vh",
            }}
          >
            <Image
              src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640294572/estudio_fotografico_perez/impresiones_baner_nv2z0n.jpg"
              alt="imagen de losbos en 4k"
              className="img-fluid"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <figure className="text-center position-absolute " style={{ color: "#fff" }}>
            <blockquote className="blockquote">
              <p className="mb-0">
                La fotografía es, en un mismo instante, el reconocimiento simultáneo de la significación de un hecho y de la organización
                rigurosa de las formas percibidas visualmente que expresan y significan ese hecho
              </p>
            </blockquote>
            <figcaption className="blockquote-footer" style={{ color: "#fff" }}>
              Autor de la frase <cite title="Source Title">Henri Cartier-Bresson</cite>
            </figcaption>
          </figure>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-md-5">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "70vh",
              }}
            >
              <Image
                className="img-fluid rounded  border border-primary"
                src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640230118/estudio_fotografico_perez/pagina_impresiones_ywyuml.jpg"
                layout="fill"
                objectFit="cover"
                alt="Tinta de las impresiones de fotografías"
              />
            </div>
          </div>
          <div className="col-md-5 align-self-center text-center">
            <h1 className="text-center">IMPRESIONES</h1>
            <p>
              Somos una Microempresa dedicada al rubro fotográfico, nos orientamos a brindar soluciones e ideas creativas para tus
              proyectos. Nuestro objetivo es trasmitir a través de la fotografía, la historia que deseas contar o plasmar en un recuerdo.
            </p>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-md-5 align-self-center text-center">
            <h1 className="text-center">TAMAÑOS</h1>
            <div className="row justify-content-center my-5 ">
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    10x15
                    <span className="badge bg-primary rounded-pill">S./0.50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    13x18
                    <span className="badge bg-primary rounded-pill">S./0.70</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    15x20
                    <span className="badge bg-primary rounded-pill">S./1.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    20x25
                    <span className="badge bg-primary rounded-pill">S./4.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    20x30
                    <span className="badge bg-primary rounded-pill">S./4.00</span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    30x40
                    <span className="badge bg-primary rounded-pill">S./8.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    30x60
                    <span className="badge bg-primary rounded-pill">S./15.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    40x50
                    <span className="badge bg-primary rounded-pill">S./20.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    40x60
                    <span className="badge bg-primary rounded-pill">S./30.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    60x90
                    <span className="badge bg-primary rounded-pill">S./50.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>Los precios son por unidad, incluyen IGV y no incluyen el marco.</p>
            <h3>Advertencia:</h3>
            <p>Los precios son aproximaciones del mercado actual, se puede poner en contacto para saber los precios actuales</p>
          </div>
          <div className="col-md-5">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "600px",
              }}
            >
              <Image
                className="img-fluid rounded  border border-primary"
                src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640303365/estudio_fotografico_perez/ampliaciones_mi5myb.jpg"
                layout="fill"
                objectFit="fill"
                alt="Tinta de las impresiones de fotografias"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
