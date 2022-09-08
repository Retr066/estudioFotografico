import Image from 'next/image';

import { Layout } from '../../components';

export default function cuadros() {
  return (
    <>
      <Layout title="Cuadros" description="Cuadros Fotográficos">
        <section className="container-fluid   text-dark">
          {/* <div className="row align-items-center text-center mx-5 mb-5">
            <div className="col">
              <Image src="/cuadro1.jpg" alt="Chica posando frente de cuadros" width={800} height={400} objectFit="cover" priority />
            </div>
            <div className="col">
              <Image src="/cuadro2.jpg" alt="Exhibición de cuadros" layout="responsive" width={800} height={400} objectFit="cover" />
            </div>
          </div> */}
          <div className="row justify-content-center align-items-end">
            <div
              style={{
                position: "relative",
                height: "90vh",
              }}
            >
              <Image src="/cuadro1.jpg" alt="imagen de losbos en 4k" className="img-fluid" layout="fill" objectFit="cover" />
            </div>
            <figure className="text-center position-absolute " style={{ color: "#fff" }}>
              <blockquote className="blockquote">
                <p className="mb-0">Si tus fotografías no son lo suficientemente buenas, es porque no estás lo suficientemente cerca</p>
              </blockquote>
              <figcaption className="blockquote-footer" style={{ color: "#fff" }}>
                Autor de la frase <cite title="Source Title">Robert Capa</cite>
              </figcaption>
            </figure>
          </div>

          <div className="row align-items-center mt-5">
            <h1 className="text-center mb-3">Cuadros Fotográficos</h1>
          </div>
          <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
              <div className="col">
                <Image
                  className="img-fluid rounded border border-primary w-100"
                  src="/cuadro3.jpg"
                  alt="Cuadro de niña"
                  layout="responsive"
                  width={800}
                  height={1000}
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="col align-self-center">
                <div className="card bg-secondary mb-3">
                  <div className="card-header">Cuadros</div>

                  <div className="card-body">
                    <h4 className="card-title">Cuadros Fotográficos</h4>
                    <p className="card-text">
                      Los cuadros fotográficos son una excelente opción para decorar tu hogar, oficina o negocio. Son una forma de recordar
                      momentos especiales y de inmortalizarlos para siempre.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cuadros fotográficos de alta calidad</li>
                    <li className="list-group-item">Marcos creativos con los diseños para escoger</li>
                    <li className="list-group-item">Marcos de diferentes tamaños para escoger</li>
                  </ul>
                  <div className="card-footer text-muted">Puede consultar los precios directamente por WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
