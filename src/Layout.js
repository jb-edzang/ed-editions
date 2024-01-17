import { AuthProvider } from "@/context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>EMPREINTES & DIGITALES | Editions</title>
        <meta
          name="Description"
          content="Empreintes & Digitales est une maison d'édition consacrée à la photographie engagée pour l'environnement"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header className="" />
        <AuthProvider>
          <main className="">{children}</main>
        </AuthProvider>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
