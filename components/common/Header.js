import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '../../public/EFP3.svg';
import styles from '../../styles/Home.module.css';

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <nav className={`${styles.header} navbar navbar-expand-lg navbar-light bg-light`}>
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand d-flex align-items-center">
              <Image src={logo} alt="logo Estudio Fotográfico Perez" width="90" height="90" className="d-inline-block align-text-top" />
              <span className="ms-2 d-none d-sm-block">Estudio Fotográfico Pérez</span>
            </a>
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
                <Link href="/" passHref>
                  <a className={`nav-link ${router.pathname == "/" ? "active" : ""} `}>
                    <FontAwesomeIcon icon={faHome} style={{ width: 25, height: 25 }} />
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle  ${
                    router.pathname == "/servicios/impresiones" ||
                    router.pathname == "/servicios/cuadros" ||
                    router.pathname == "/servicios/sesion-fotografico" ||
                    router.pathname == "/servicios/diseno-grafico"
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
                  <Link href="/servicios/impresiones" passHref>
                    <a className={`dropdown-item  ${router.pathname == "/servicios/impresiones" ? "active" : ""} `}>Impresiones</a>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link href="/servicios/sesion-fotografico" passHref>
                    <a className={`dropdown-item  ${router.pathname == "/servicios/sesion-fotografico" ? "active" : ""} `}>
                      Sesión Fotográfico
                    </a>
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link href="/servicios/cuadros" passHref>
                    <a className={`dropdown-item  ${router.pathname == "/servicios/cuadros" ? "active" : ""} `}>Cuadros</a>
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link href="/servicios/diseno-grafico" passHref>
                    <a className={`dropdown-item  ${router.pathname == "/servicios/diseno-grafico" ? "active" : ""} `}>Diseño Gráfico</a>
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link href="/nosotros" passHref>
                  <a className={`nav-link ${router.pathname == "/nosotros" ? "active" : ""} `}>Nosotros</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/promociones" passHref>
                  <a className={`nav-link ${router.pathname == "/promociones" ? "active" : ""} `}>Promociones</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto" passHref>
                  <a className={`nav-link ${router.pathname == "/contacto" ? "active" : ""} `}>Contactanos</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
