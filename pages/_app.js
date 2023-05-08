import Layout from "../components/Layout";
import { StoreProvider } from "../client/context";
import "@/styles/globals.css";
import Headers from "../components/Headers/Header";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>Viện Công Nghệ & Sáng Tạo</title>
      </Head>
      <Headers />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
