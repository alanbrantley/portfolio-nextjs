import Navbar from '../components/Navbar';
import '../styles/globals.css';

import {NextUIProvider} from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
