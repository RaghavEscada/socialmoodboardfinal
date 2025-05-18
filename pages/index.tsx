"use client";

import { Curve, Ready } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";

export default function Home() {
  // No Locomotive Scroll initialization

  return (
    <>
      <div id="main" className="overflow-auto"> {/* Add overflow-auto for natural scrolling */}
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