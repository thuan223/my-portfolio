"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import ScrollGuide from "./ScrollGuide";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Navbar hidden={hidden} setHidden={setHidden} />
      <ScrollGuide />

      {/* Layer điều khiển opacity và animation khi hidden thay đổi */}
      <motion.div
        key={`${pathname}-${hidden}`} // trigger khi route hoặc hidden thay đổi
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? -15 : 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 w-full"
        style={{
          pointerEvents: hidden ? "none" : "auto",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
