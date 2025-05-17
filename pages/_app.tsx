import "@/styles/globals.css";
import { Footer, MobileNav } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import type { NextComponentType } from "next";


interface MyAppProps extends AppProps {
  Component: NextComponentType;
}

export default function App({
  Component,
  pageProps,
  router,
}: MyAppProps) {
  const hideFooterRoutes = ["/core"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <>
      {!isMobile && <Navbar />}
      {isMobile && <MobileNav />}
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      {!hideFooterRoutes.includes(router.route) && <Footer />}
    </>
  );
}
