import "../styles/globals.css";
import "../styles/transition.css";
import { ChakraProvider } from "@chakra-ui/react";
import Transition from "../components/Transition";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
