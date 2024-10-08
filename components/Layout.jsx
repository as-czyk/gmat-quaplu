import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Quaplu</title>
        <meta
          name="description"
          content="Taking your GMAT Preperation into the AI Cenntury"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Quaplu_transparent.svg" />
      </Head>
      <Toaster position="top-right" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
