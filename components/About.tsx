"use client";
import { motion } from "framer-motion";
import { Code, Database, Palette } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold mb-10">
        About <span className="text-blue-400">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl w-full">
        {/* Left side - introduction */}
      <div>
          <h3 className="text-2xl font-semibold mb-3">
            Passionate Web Developer & Tech Creator
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
        I’m passionate about crafting elegant, efficient web experiences that blend creativity and functionality. As a recent graduate from FPT University Can Tho, I bring enthusiasm and fresh ideas, backed by valuable experience from group and personal projects during my studies.  </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:trannguyennamthuan@gmail.com"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="/CV-TranNguyenNamThuan-WebDeveloper-EN.pdf"
              download
              className="px-6 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right side - skill cards */}
        <div className="grid gap-4">
          <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400 transition">
            <Code className="w-6 h-6 text-blue-400 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Web Development</h4>
              <p className="text-gray-400 text-sm">
                Creating responsive and performant web applications.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400 transition">
            <Palette className="w-6 h-6 text-blue-400 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">UI/UX Design</h4>
              <p className="text-gray-400 text-sm">
                Designing intuitive interfaces and seamless user experiences.
              </p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400 transition">
            <Database className="w-6 h-6 text-blue-400 mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Backend & Database</h4>
              <p className="text-gray-400 text-sm">
                Implementing server-side logic, writing algorithms, and designing efficient database structures.
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
