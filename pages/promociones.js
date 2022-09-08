import Image from 'next/image';

import { Layout } from '../components';

export default function promociones() {
  return (
    <Layout title="Promociones | Estudio Fotográfico Perez" description="Promociones que ofrece la empresa Estudio Fotográfico Perez">
      <div className="container-fluid my-5">
        <div className="row justify-content-center ">
          <div className="col-md-8">
            <div className="row justify-content-center ">
              <div className="col-md-6 justify-content-center ">
                <Image
                  className="img-fluid rounded border border-primary"
                  src="/promociones.jpeg"
                  layout="responsive"
                  width={800}
                  height={1000}
                  objectFit="cover"
                  alt="fotografo sobre nosotros"
                  priority
                />
              </div>
              <div className="col-md-6 justify-content-center  align-self-center">
                <div className="row justify-content-center ">
                  <h1 className="text-center mb-3">Promociones</h1>
                  <figure>
                    <blockquote className="blockquote">
                      <p className="mb-0">Presente la imagen presentado para obtener descuentos.</p>
                      <p>Descargue la imagen en su celular o imprimirlo y presentarlo cuando valla al local.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Si presenta la imagen obtendrás un descuento en una compra o servicio
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
