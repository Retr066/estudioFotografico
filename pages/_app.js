import "../styles/globals.css";
import "bootswatch/dist/lux/bootstrap.css";

import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
