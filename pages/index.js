import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense, useEffect } from "react";
import Hero from "../components/Home/hero";

export default function Home() {
  const Background = dynamic(() => import("../components/background"), {
    loading: () => <p>Loading...</p>,
    ssr: false,
    suspense: true,
  });
  return (
    <>
      <Head>
        <title>Grayash`s Portfolio</title>
        <meta name="description" content="Kang's Portflolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Suspense fallback={`Loading...`}>
          <Background />
        </Suspense>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </>
  );
}
