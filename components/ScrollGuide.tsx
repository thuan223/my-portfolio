"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ScrollGuide() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-50">
      {/* Biểu tượng chuột */}
      <motion.div
        className="w-8 h-14 border-2 border-white rounded-full flex justify-center relative"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-3 bg-white rounded-full absolute top-2"
          animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Dòng chữ */}
      <motion.p
        className="mt-3 text-sm opacity-80"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll to next planet
      </motion.p>

      {/* Nút OK */}
      <button
        onClick={() => setVisible(false)}
        className="mt-3 px-4 py-1 border border-white rounded-full text-xs hover:bg-white hover:text-black transition"
      >
        OK
      </button>
    </div>
  );
}
