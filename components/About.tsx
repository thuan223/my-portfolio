"use client";
import { useState } from "react";
import { Code, Database, Palette } from "lucide-react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const text =
    "I’m passionate about crafting elegant, efficient web experiences that blend creativity and functionality. As a recent graduate from FPT University Can Tho, I bring enthusiasm and fresh ideas, backed by valuable experience from group and personal projects during my studies.";

  return (
    <div
      id="about"
    className="min-h-screen flex flex-col pt-15 sm:pt-30 items-center text-white px-4 sm:px-8 md:px-16 lg:px-20 py-10"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 text-center">
        About <span className="text-blue-400">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-start max-w-6xl w-full">
        {/* Left side */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            Passionate Web Developer & Tech Creator
          </h3>

          <p
            className={`text-gray-300 leading-relaxed mb-3 text-sm sm:text-base transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {text}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 hover:underline text-sm mb-6"
          >
            {expanded ? "Show less" : "Show more"}
          </button>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="mailto:trannguyennamthuan@gmail.com"
              className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="/CV-TranNguyenNamThuan-WebDeveloper-EN.pdf"
              download
              className="px-4 sm:px-6 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="grid gap-4 sm:gap-6">
          {[
            {
              icon: (
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3 mt-1" />
              ),
              title: "Web Development",
              text: "Creating responsive and performant web applications.",
            },
            {
              icon: (
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3 mt-1" />
              ),
              title: "UI/UX Design",
              text: "Designing intuitive interfaces and seamless user experiences.",
            },
            {
              icon: (
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3 mt-1" />
              ),
              title: "Backend & Database",
              text: "Implementing server-side logic, writing algorithms, and designing efficient database structures.",
            },
          ].map(({ icon, title, text }, i) => (
            <div
              key={i}
              className="flex items-start p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400 transition"
            >
              {icon}
              <div>
                <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
                <p className="hidden sm:block text-gray-400 text-xs sm:text-sm">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
