import "../styles/globals.css";
import "../styles/transition.css";
import { ChakraProvider } from "@chakra-ui/react";
import Transition from "../components/Transition";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <Transition>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Transition>
  );
}

export default MyApp;
