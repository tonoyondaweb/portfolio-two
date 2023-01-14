import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
