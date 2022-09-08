import '../styles/globals.css';
import 'bootswatch/dist/lux/bootstrap.css';
import 'sweetalert2/src/sweetalert2.scss';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
