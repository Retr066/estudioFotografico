import Image from "next/image";
import Link from "next/link";

interface CardProps {
  img: string;
  title: string;
  alt: string;
  href: string;
}

export default function Card({ img, title, alt, href }: CardProps) {
  return (
    <div className="col">
      <div className="card h-100 border border-primary btn-outline-primary ">
        <div
          style={{
            position: "relative",
            height: "45vh",
            width: "100%",
            cursor: "pointer",
          }}
        >
          <Link href={href} style={{ textDecoration: "none", color: "inherit" }}>

            <div
              style={{
                position: "relative",
                height: "45vh",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                src={img}
                className="card-img-top"
                fill
                style={{ objectFit: "cover" }}
                alt={alt}
                sizes="100%"
                priority
              />
            </div>

          </Link>
        </div>
        <div className="card-body d-flex align-items-center align-self-center ">
          <h1 className="card-title text-center ">{title}</h1>
        </div>
      </div>
    </div>
  );
}
