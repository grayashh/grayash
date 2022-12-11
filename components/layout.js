import Header from "./header";
import Footer from "./footer";
import { mergeRefs } from "react-merge-refs";
import { forwardRef, useRef } from "react";

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef();
  return (
    <div ref={mergeRefs([ref, localRef])} className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
});
export default Layout;
