import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";
import Hero from "../components/Home/hero";

const Back = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  suspense: true,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Grayash`s Portfolio</title>
        <meta name="description" content="Kang's Portflolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Back scene="/3d.splinecode">
          <Suspense />
        </Back>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </>
  );
}
