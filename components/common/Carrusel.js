import Image from 'next/image';

export default function Carrusel() {
  const ImagenesCarrusel = [
    {
      id: 1,
      src: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221004/estudio_fotografico_perez/impresiones_v2_hbuxmj.jpg",
      alt: "Impresiones de imágenes",
      titulo: "IMPRESIONES",
      descripcion: "Fotos impresas en la mejor calidad para la satisfacción del profesional de las imágenes y el consumidor aficionado",
      color: "#fff",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg",
      alt: "Estudio Fotográfico",
      titulo: "FOTO ESTUDIO",
      descripcion: "Contamos con un estudio para recrear las fotografías que desees.",
      color: "#000",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221018/estudio_fotografico_perez/cuadros_v2_wgqzxe.jpg",
      alt: "Venta de Cuadros fotográfico",
      titulo: "CUADROS",
      descripcion: "Nuestros cuadros son elaborados con papel fotográfico en su interior para mayor durabilidad y calidad de imagen.",
      color: "#fff",
    },
    {
      id: 4,
      src: "/diseno_grafico.jpeg",
      alt: "Diseño Gráfico",
      titulo: "DISEÑO GRÁFICO",
      descripcion: "Areglo de imágenes, digitalización de imágenes, fotomontaje, etc...",
      color: "#000",
    },
  ];

  return (
    <div id="carouselExampleDark" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button> */}
        {ImagenesCarrusel.map((imagen) => (
          <button
            key={imagen.id}
            className={imagen.id === 1 ? "active" : ""}
            type="button"
            aria-current={imagen.id === 1 ? "true" : "false"}
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={imagen.id - 1}
            aria-label={`Slide ${imagen.id}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {ImagenesCarrusel.map((imagen) => (
          <div
            key={imagen.id}
            style={{ width: "100%", height: "90vh", position: "relative" }}
            className={`carousel-item ${imagen.id === 1 ? "active" : ""}`}
            data-bs-interval={imagen.id === 1 ? "8000" : "4000"}
          >
            <Image src={imagen.src} alt={imagen.alt} layout="fill" objectFit="cover" quality={100} />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: imagen.color }}>{imagen.titulo}</h5>
              <p style={{ color: imagen.color }}>{imagen.descripcion}</p>
            </div>
          </div>
        ))}

        {/* 
<div style={{ width: "100%", height: "90vh", position: "relative" }} className="carousel-item active" data-bs-interval="2000">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221004/estudio_fotografico_perez/impresiones_v2_hbuxmj.jpg"
            className="d-block w-100 "
            alt="impresiones de imagenes"
            priority
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "#fff" }}>IMPRESIONES</h5>
            <p>Fotos impresas en la mejor calidad para la satisfacción del profesional de las imágenes y el consumidor aficionado.</p>
          </div>
        </div> */}
        {/* <div style={{ width: "100%", height: "90vh", position: "relative" }} className="carousel-item" data-bs-interval="2000">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg"
            className="d-block w-100"
            alt="Estudio Fotografico Perez"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>FOTO ESTUDIO</h5>
            <p className="text-primary">Contamos con un estudio para recrear las fotografías que desees.</p>
          </div>
        </div>
        <div style={{ width: "100%", height: "90vh", position: "relative" }} className="carousel-item">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221018/estudio_fotografico_perez/cuadros_v2_wgqzxe.jpg"
            className="d-block w-100"
            alt="Venta de Cuadros fotografico"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "#fff" }}>CUADROS</h5>
            <p>Nuestros cuadros son elaborados con papel fotográfico en su interior para mayor durabilidad y calidad de imagen.</p>
          </div>
        </div> */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Atras</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}
