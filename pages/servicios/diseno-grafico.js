import Image from 'next/image';

import { Layout } from '../../components';

export default function diseñoGráfico() {
  return (
    <Layout
      title="Diseño Gráfico | Estudio Fotográfico Perez"
      description="Servicios de diseño gráfico que ofrece la empresa Estudio Fotográfico Perez"
    >
      <div className="container-fluid">
        <div className="row justify-content-center align-items-end">
          <div
            style={{
              position: "relative",
              height: "90vh",
            }}
          >
            <Image src="/diseno.jpg" alt="Diseño Gráfico" className="img-fluid" layout="fill" objectFit="cover" priority />
          </div>
          <figure className="text-center position-absolute " style={{ color: "#fff" }}>
            <blockquote className="blockquote">
              <p className="mb-0">
                La fotografía sólo puede representar el presente. Una vez fotografiados, el sujeto se convierte en parte del pasado
              </p>
            </blockquote>
            <figcaption className="blockquote-footer" style={{ color: "#fff" }}>
              Autor de la frase <cite title="Source Title">Berenice Abbott</cite>
            </figcaption>
          </figure>
        </div>

        <div className="row justify-content-center my-5">
          <div className="col-md-8">
            <h1 className="text-center">Diseño Gráfico</h1>
            <p className="text-center mb-5">
              Permita que podamos restaurar su fotografía y traer al presente momentos inolvidables. Las imágenes antiguas se desvanecen y
              se degradan con el tiempo, Por lo que es importante corregir las fotos viejas y dañadas antes de que sea demasiado tarde.
              También se agrietan, se rasgan y se ensucian. Somos especialistas en restauración.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center ">
                <Image
                  className="img-fluid rounded  border border-primary"
                  src="/foto_restauracion.jpg"
                  layout="responsive"
                  width={800}
                  height={600}
                  objectFit="cover"
                  alt="fotografo sobre nosotros"
                  priority
                />
              </div>
              <div className="col-md-6">
                <h5 className="text-center">Servicios que realizamos para las fotos</h5>
                <ul className="list-group">
                  <li className="list-group-item">
                    <p>Digitalización de fotos a CD</p>
                  </li>
                  <li className="list-group-item">
                    <p>Restauración de fotos antiguas</p>
                  </li>
                  <li className="list-group-item">
                    <p>Colorización de Fotos</p>
                  </li>
                  <li className="list-group-item">
                    <p>Eliminación de Elementos</p>
                  </li>
                  <li className="list-group-item">
                    <p>Fotomontaje</p>
                  </li>
                  <li className="list-group-item">
                    <p>Retoque Fotográfico</p>
                  </li>
                  <li className="list-group-item">
                    <p>Ampliación de Fotografía</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
