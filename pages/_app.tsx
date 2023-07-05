import "../styles/globals.css";
import "../styles/transition.css";
import Transition from "../components/transition";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { useRef, createContext, useState, useContext, Dispatch } from "react";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { NextComponentType } from "next";
import Realistic from "../components/confetti";
import { Analytics } from "@vercel/analytics/react";

const Scene = dynamic(() => import("../components/scene"));

interface MyAppProps extends AppProps {
  Component: NextComponentType & {
    canvas?: (props: any) => JSX.Element;
  };
}
interface counterContextValue {
  count: number;
  setCount: Dispatch<number>;
}

export const counterContext = createContext<counterContextValue | undefined>(
  undefined
);

export const useCounterContext = () => {
  const context = useContext(counterContext);
  if (!context) {
    throw new Error(
      "useCounterContext must be used within a CounterContextProvider"
    );
  }
  return context;
};

function MyApp({ Component, pageProps = { title: "index" } }: MyAppProps) {
  const [count, setCount] = useState<number>(0);

  const ref = useRef<HTMLElement>(null!);
  // null! 값은 ref 객체가 초기에 null로 설정되지만 런타임에서 항상 값을 가지게 될 것임을 TypeScript에 알리는 non-null assertion operator입니다.
  return (
    <ThemeProvider attribute="class">
      <Layout ref={ref}>
        <Transition>
          <Component {...pageProps} />
          {Component.canvas && (
            <>
              <counterContext.Provider value={{ count, setCount }}>
                <Scene eventSource={ref} eventPrefix="client">
                  {Component.canvas(pageProps)}
                </Scene>
                <Realistic />
              </counterContext.Provider>
            </>
          )}
        </Transition>
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
