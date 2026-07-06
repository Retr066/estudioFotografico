import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, ...props }: { children: React.ReactNode; title?: string; description?: string }) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
