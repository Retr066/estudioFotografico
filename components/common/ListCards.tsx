import React from 'react';

import Card from './Card';

const dataCards = [
  {
    id: 1,
    title: "IMPRESIONES",
    img: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223008/estudio_fotografico_perez/impresiones_u2xn6m.jpg",
    href: "/servicios/impresiones",
    alt: "Impresiones fotográficas",
  },
  {
    id: 2,
    title: "SESIÓN FOTOGRÁFICO",
    img: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223000/estudio_fotografico_perez/foto-sesion_qupttf.jpg",
    href: "/servicios/sesion-fotografico",
    alt: "Estudio Fotográfico",
  },
  {
    id: 3,
    title: "CUADROS",
    img: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640223004/estudio_fotografico_perez/cuadros_s8rdbv.jpg",
    href: "/servicios/cuadros",
    alt: "Venta de Cuadros Fotográficos",
  },
  {
    id: 4,
    title: "DISEÑO GRÁFICO",
    img: "/diseno_grafico.jpeg",
    href: "/servicios/diseno-grafico",
    alt: "Diseño Gráfico",
  },
];

export default React.forwardRef(function Cards() {
  return (
    <section className="container-fluid my-5 ">
      <div className="row align-items-center">
        <h1 className="text-center mb-3">Ofrecemos</h1>
      </div>
      <div>
        <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {dataCards.map((dataCard) => (
              <Card key={dataCard.id} {...dataCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
