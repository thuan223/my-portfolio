"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section id="introduce"   
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen pt-30  text-white">
      <div className="flex-col justify-start text-left px-8">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight"
        >
          Hello, I'm <span className="text-blue-400">Trần Nguyễn Nam Thuận</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 md:text-lg  leading-relaxed"
        >
          I’m a Web Developer passionate about crafting meaningful digital experiences. I love transforming ideas into engaging, interactive, and visually captivating websites that leave a lasting impression while combining creativity, logic, and attention to detail in every line of code.
        </motion.p>
      </div>
    </motion.section>
  );
}
