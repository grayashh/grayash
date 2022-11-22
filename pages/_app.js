import "../styles/globals.css";
import "../styles/transition.css";
import Transition from "../components/Transition";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isMounted, set_isMounted] = useState(false);

  useEffect(() => {
    set_isMounted(true);
  }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyDY1jrJFJe3Tc8467-yHTnIzABWgTcsXkU",
    authDomain: "portfolio-e3641.firebaseapp.com",
    projectId: "portfolio-e3641",
    storageBucket: "portfolio-e3641.appspot.com",
    messagingSenderId: "131602198232",
    appId: "1:131602198232:web:9b6dd5b03fa5c9589531ad",
    measurementId: "G-C23K04SZ6W",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = dynamic(
    () =>
      import("firebase/analytics").then(() => {
        getAnalytics(app);
      }),
    { ssr: false }
  );

  return (
    isMounted && (
      <>
        <ThemeProvider attribute="class">
          <Layout>
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </Layout>
        </ThemeProvider>
      </>
    )
  );
}

export default MyApp;
