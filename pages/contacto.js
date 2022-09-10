import { faEnvelope, faHome, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { FormContacto, Layout } from '../components';

export default function contacto() {
  return (
    <Layout title="Contactos | Estudio Fotografico Perez " description="Para contactos y trabajar con la empresa Estudio Fotografico Perez">
      <div className="container-fluid my-5">
        <div className="row justify-content-center ">
          <div className="col-md-4">
            <h1>Ubicacion</h1>

            <div className="row align-items-start my-5">
              <div className="col-2 d-flex justify-content-end">
                <FontAwesomeIcon icon={faEnvelope} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>
              </div>
              <div className="col-9">
                <div className="row align-items-start" style={{ fontWeight: "bold" }}>
                  DIRECCION
                </div>
                <div className="row align-items-start">AV.Los Quechuas Nº 1142 Salamanca Ate</div>
              </div>
            </div>
            <div className="row align-items-start mb-5">
              <div className="col-2 d-flex justify-content-end">
                <FontAwesomeIcon icon={faPhoneSquareAlt} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>
              </div>
              <div className="col-9">
                <div className="row align-items-start" style={{ fontWeight: "bold" }}>
                  CORREO
                </div>
                <div className="row align-items-start">foto_estudioperez@hotmail.com</div>
              </div>
            </div>
            <div className="row align-items-start mb-5">
              <div className="col-2 d-flex justify-content-end">
                <FontAwesomeIcon icon={faHome} style={{ width: 30, height: 30, marginRight: 10 }}></FontAwesomeIcon>
              </div>
              <div className="col-9">
                <div className="row align-items-start" style={{ fontWeight: "bold" }}>
                  TELEFONO
                </div>
                <div className="row align-items-start">+ 51 924 606 740</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.8508037428814!2d-76.98025489645579!3d-12.075043490503468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c728e753d155%3A0xad3a4d4361b25adb!2sEstudio%20Fotografico%20Perez!5e0!3m2!1ses-419!2spe!4v1640383784190!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="col-md-4">
            <div
              style={{
                width: "100%",
                position: "relative",
                height: "445px",
              }}
            >
              <Image
                className="img-fluid rounded  border border-primary"
                src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640388794/estudio_fotografico_perez/contactos_fx6tcq.jpg"
                layout="fill"
                objectFit="cover"
                alt="fotografo sobre nosotros"
                priority
              />
            </div>
          </div>
          <div className="col-md-6">
            <FormContacto />
          </div>
        </div>
      </div>
    </Layout>
  );
}
