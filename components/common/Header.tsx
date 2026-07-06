'use client';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

import logo from '../../public/EFP3.svg';
import styles from '../../app/nosotros/styles.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <nav className={`${styles.header} navbar navbar-expand-lg navbar-light bg-light`}>
        <div className="container-fluid">
          <Link href="/" className="navbar-brand d-flex align-items-center">

            <Image src={logo} alt="logo Estudio Fotográfico Perez" width="90" height="90" className="d-inline-block align-text-top" />
            <span className="ms-2 d-none d-sm-block">Estudio Fotográfico Pérez</span>

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
            <ul className="navbar-nav d-flex ">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${pathname == "/" ? "active" : ""} `}>

                  <FontAwesomeIcon icon={faHome} style={{ width: 25, height: 25 }} />

                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle  ${
                    pathname == "/servicios/impresiones" ||
                    pathname == "/servicios/cuadros" ||
                    pathname == "/servicios/sesion-fotografico" ||
                    pathname == "/servicios/diseno-grafico"
                      ? "active"
                      : ""
                  } `}
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <div className="dropdown-menu">
                  <Link
                    href="/servicios/impresiones"
                    className={`dropdown-item  ${pathname == "/servicios/impresiones" ? "active" : ""} `}>
                    Impresiones
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    href="/servicios/sesion-fotografico"
                    className={`dropdown-item  ${pathname == "/servicios/sesion-fotografico" ? "active" : ""} `}>
                    
                      Sesión Fotográfico
                    
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    href="/servicios/cuadros"
                    className={`dropdown-item  ${pathname == "/servicios/cuadros" ? "active" : ""} `}> 
                    Cuadros
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    href="/servicios/diseno-grafico"
                    className={`dropdown-item  ${pathname == "/servicios/diseno-grafico" ? "active" : ""} `}>
                    Diseño Gráfico
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  href="/nosotros"
                  className={`nav-link ${pathname == "/nosotros" ? "active" : ""} `}>
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/promociones"
                  className={`nav-link ${pathname == "/promociones" ? "active" : ""} `}>
                  Promociones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contacto"
                  className={`nav-link ${pathname == "/contacto" ? "active" : ""} `}>
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
