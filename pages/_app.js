import Layout from "../components/Layout";
import { StoreProvider } from "../client/context";

import Headers from "../components/Headers/Header";
import Head from "next/head";
import Providers from "../components/Providers";
import Chat from "../components/Chat";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>Viện Công Nghệ & Sáng Tạo</title>
      </Head>

      <Headers />
      <Layout>
        <Component {...pageProps} />
        <Providers>
          <Chat />
        </Providers>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
