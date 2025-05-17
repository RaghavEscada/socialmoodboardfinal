"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";



export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
      
      
        // Add other options as needed
      });
      // Optionally, you can destroy the instance when the component unmounts
      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <>
      <div id="main"> {/* Add an id to the container */}
        <Curve backgroundColor={"#f1f1f1"}>
          <Hero />
         
          <About />
    
          <Projects />
          <Clients />
          <Ready />
        </Curve>
      </div>
    </>
  );
}
