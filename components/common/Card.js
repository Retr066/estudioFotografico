import Image from "next/image";
import Link from "next/link";

export default function Card({ img, title, alt, href }) {
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
          <Link href={href} passHref>
            <a>
              <Image src={img} className="card-img-top " layout="fill" objectFit="cover" alt={alt} priority />
            </a>
          </Link>
        </div>
        <div className="card-body d-flex align-items-center align-self-center ">
          <h1 className="card-title text-center ">{title}</h1>
        </div>
      </div>
    </div>
  );
}
