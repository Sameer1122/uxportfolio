import Footer from "../components/Global/Footer";
import Navbar from "../components/Global/Navbar";
import NavbarWeb from "../components/Global/NavbarWeb";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <NavbarWeb />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
