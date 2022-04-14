import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        id="my-script"
        src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"
        dangerouslySetInnerHTML={{
          __html: `hljs.initHighlightingOnLoad();`,
        }}
      ></Script>
    </Layout>
  );
}

export default MyApp;
