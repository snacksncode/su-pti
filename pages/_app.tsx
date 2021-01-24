import "../styles/global.scss";
import Head from "next/head";

const SuPTI = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Samorząd Uczniowski - PTI</title>
        <meta name="theme-color" content="#4286f4" />
        <meta
          name="description"
          content="Prywatne Technikum Informatyczne - Strona Samorządu Uczniowskiego"
        />
        <link rel="SHORTCUT ICON" href="/favicon.ico" />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default SuPTI;
