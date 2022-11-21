import React from "react";
import Head from "next/head";
import Hero from "../components/Home/hero";
import dynamic from "next/dynamic";

const Back = dynamic(() => import("../components/background"), {
  loading: () => <p>...</p>,
  ssr: false,
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
        <Back />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </>
  );
}
