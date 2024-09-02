import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { Hotjar } from "../components/Hotjar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Analytics />
      <Hotjar />
      <Component {...pageProps} />
    </Layout>
  );
}
