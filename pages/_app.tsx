import Footer from "@/componentes/Footer";
import Nav from "@/componentes/Nav";
import type { AppProps } from "next/app";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
    <Head>
        <title>BCWP world</title>
    </Head>
    <Nav />
     <main>
      <Component {...pageProps} />
     </main>
     <Footer />
   </> 
);
}
