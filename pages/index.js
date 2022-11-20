import Head from "next/head";
import dynamic from "next/dynamic";

export default function Home() {
  const NoSsr = dynamic(() => import("../components/Home/hero"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Grayash`s Portfolio</title>
        <meta name="description" content="Kang's Portflolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <NoSsr />
        </div>
      </section>
    </>
  );
}
