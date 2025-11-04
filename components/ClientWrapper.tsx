"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollGuide from "./ScrollGuide";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Navbar hidden={hidden} setHidden={setHidden} />
      <ScrollGuide /> 
      <main
        className={`max-w-5xl mx-10 px-0 py-0 transition-opacity duration-500 ${
          hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </main>
    </>
  );
}
