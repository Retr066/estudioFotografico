import Image from "next/image";
import { Layout } from "../components";
import style from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
export default function nosotros() {
  return (
    <Layout title="Nosotros | Estudio Fotografico Perez" description="A que se dedica la micro empresa Estudio Fotografico Perez">
      <div className="container-fluid my-5">
        <div className="row justify-content-center ">
          <div className="col-md-4">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "70vh",
              }}
            >
              <Image
                className="img-fluid rounded  border border-primary"
                src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640225721/estudio_fotografico_perez/nosotros_ziozwj.jpg"
                layout="fill"
                objectFit="cover"
                alt="fotografo sobre nosotros"
                priority
              />
            </div>
          </div>
          <div className={`col-md-4 ${style.margin} align-self-center text-center`}>
            <h1 className="text-center">Nosotros</h1>
            <p>
              Somos una Microempresa dedicada al rubro fotográfico, nos orientamos a brindar soluciones e ideas creativas para tus
              proyectos. Nuestro objetivo es trasmitir a través de la fotografía, la historia que deseas contar o plamar en un recuerdo.
            </p>
            <div className="row justify-content-center ">
              <div className="col">
                <FontAwesomeIcon className="my-3" style={{ width: 40, height: 40 }} icon={faCameraRetro} />
                <h2>Misión</h2>
                <p>Brindar un servicio completo de: calidad, profesional y creatividad para nuestros clientes.</p>
              </div>
              <div className="col">
                <FontAwesomeIcon className="my-3" style={{ width: 40, height: 40 }} icon={faCamera} />
                <h2>Visión</h2>
                <p>Convertirnos en una empresa consolidada en ambito de la fotografía.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
