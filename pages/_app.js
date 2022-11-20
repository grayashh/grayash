import "../styles/globals.css";
import "../styles/transition.css";
import Transition from "../components/Transition";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
