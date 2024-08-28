import Contact from "@/Components/Contact/ClientContact";
import HeaderComponent from "@/Components/Header/HeaderComponent";
import NavigationComponent from "@/Components/Navigation/ClientNavComponent";
import ServicesComponent from "@/Components/Service/ServicesComponent";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationComponent />
      <HeaderComponent />
      <ServicesComponent />
      <Contact />
    </>
  );
}
