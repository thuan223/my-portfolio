"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="introduce"
      className="min-h-screen pt-20 md:pt-30 w-full flex flex-col text-white overflow-y-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10"
    >
      <div className="flex flex-col justify-start text-left max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Hello, I'm{" "}
          <span className="text-blue-400">Trần Nguyễn Nam Thuận</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed bg-gray-800/30 rounded-2xl p-4 sm:p-6 mt-4 shadow-lg backdrop-blur-sm text-gray-100 overflow-y-auto max-h-[60vh]">
          I’m a Web Developer passionate about crafting meaningful digital
          experiences. I love transforming ideas into engaging, interactive,
          and visually captivating websites that leave a lasting impression
          while combining creativity, logic, and attention to detail in every
          line of code.
        </p>
      </div>
    </div>
  );
}
