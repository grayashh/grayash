import Header from "./header";
import Footer from "./footer";
import { mergeRefs } from "react-merge-refs";
import { forwardRef, useRef } from "react";

const Layout = forwardRef(
  ({ children, ...props }: { children: React.ReactNode }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    return (
      <div ref={mergeRefs([ref, localRef])} className="bg-primary">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
);
export default Layout;
