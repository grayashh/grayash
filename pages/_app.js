import "../styles/globals.css";
import "../styles/transition.css";
import { ChakraProvider } from "@chakra-ui/react";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </ChakraProvider>
  );
}

export default MyApp;
