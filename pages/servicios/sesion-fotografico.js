import Image from "next/image";
import { Layout } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default function sesionFotografico() {
  return (
    <Layout
      title="Foto Estudio | Estudio Fotografico Perez "
      description="El foto profesional que se toma en un estudio para mejor calidad y mas calidad es uno de los Servicios que ofrece la empresa Estudio Fotografico Perez"
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
              src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912070/estudio_fotografico_perez/photo-studio_pimf2c.jpg"
              alt="Estudio Fotografico Perez"
              className="img-fluid"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <figure
            className="text-center position-absolute "
            style={{ color: "#fff" }}
          >
            <blockquote className="blockquote">
              <p className="mb-0">
                No hay reglas para las buenas fotografías, son solo buenas
                fotografías
              </p>
            </blockquote>
            <figcaption className="blockquote-footer" style={{ color: "#fff" }}>
              Autor de la frase <cite title="Source Title">Ansel Adams</cite>
            </figcaption>
          </figure>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-md-5">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "700px",
              }}
            >
              <Image
                className="img-fluid rounded  border border-primary"
                src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640912179/estudio_fotografico_perez/photographer_tudiff.jpg"
                layout="fill"
                objectFit="cover"
                alt="Tinta de las impresiones de fotografias"
              />
            </div>
          </div>
          <div className="col-md-5 align-self-center px-5">
            <h1 className="text-center mb-5">FOTO ESTUDIO</h1>
            <p className="mb-3">
              Contamos con un estudio para recrear las fotografías que desees.
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <span style={{ marginRight: "10px" }}>
                  <FontAwesomeIcon
                    style={{ width: 20, height: 20 }}
                    icon={faCheck}
                  />
                </span>
                La duración de la sesión depende del paquete que elijas.
              </li>
              <li className="list-group-item">
                <span style={{ marginRight: "10px" }}>
                  <FontAwesomeIcon
                    style={{ width: 20, height: 20 }}
                    icon={faCheck}
                  />
                </span>
                Puede llevar hasta dos mudas de ropa.
              </li>
              <li className="list-group-item">
                <span style={{ marginRight: "10px" }}>
                  <FontAwesomeIcon
                    style={{ width: 20, height: 20 }}
                    icon={faCheck}
                  />
                </span>
                Todas las fotos incluyen retoque fotográfico.
              </li>
            </ul>

            <p className="mt-3">
              Puedes elegir entre fotos para bebes, niños, pareja, maternidad,
              familia, casting y productos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
