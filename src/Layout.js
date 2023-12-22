import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
//import "tailwindcss/tailwind.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>EMPREINTES & DIGITALES | Editions</title>
        <meta
          name="Description"
          content="E&D est une maison d'éditions consacrée à la photographie engagée pour l'environnement"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header className="fixed top-0 w-full " />
        <main className="flex-grow">{children}</main>
        <Footer className=" " />
      </div>
    </>
  );
};

export default Layout;
