"use client";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Stiktify Social",
    desc: "A short video social media platform similar to TikTok, where users can create, share, and explore creative video content.",
    tech: ["Next.js", "Nest.js", "MongoDB", "Neo4j", "Google Colab", "Firebase"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/z7188989759389_2ab586c2a53f01155cd7767d491b54b0.jpg?alt=media&token=108f0b81-907d-4b6c-8def-4919fa05fa10",
    link: "#",
    github: [
      "https://github.com/thuan223/Stiktify-frontend.git",
      "https://github.com/thuan223/Stiktify-backend.git",
    ],
  },
  {
    title: "SweetBite",
    desc: "An online bakery shop with a friendly interface that allows users to browse, choose, and order their favorite cakes easily.",
    tech: ["Java", "HTML/CSS", "SQL Server"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/z5264223602813_d5cbdc28fbc34a914bd77419a5312999.jpg?alt=media&token=85cb4b07-7bfe-4bf7-8da9-49e81f4c8778",
    link: "#",
    github: ["https://github.com/thuan223/prm-sweetbite"],
  },
  {
    title: "Mekong Candle",
    desc: "A handcrafted candle shopping app with an elegant interface that helps customers explore and purchase unique candle products.",
    tech: ["React Native", "Firebase", "HTML/CSS"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/z7189162658931_68155ac248bf0b86eaa7d559d8e6be6c.jpg?alt=media&token=0680f100-2ece-4691-aa96-bf4fb5f54124",
    link: "#",
    github: ["https://github.com/thuan223/candleappexe"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-20 pt-0 md:pt-0 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-thin px-2">
        <div className="flex gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400 transition"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs border border-blue-400/40 rounded-full text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="flex space-x-2">
                    {Array.isArray(p.github)
                      ? p.github.map((link, idx) => (
                          <a key={idx} href={link} target="_blank" className="hover:text-blue-400 transition">
                            <Github size={18} />
                          </a>
                        ))
                      : (
                          <a href={p.github} target="_blank" className="hover:text-blue-400 transition">
                            <Github size={18} />
                          </a>
                        )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              </div>
            </div>
          ))}

          {/* Card nút Github (như card project) */}
          <div className="min-w-[250px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center hover:border-blue-400 transition">
            <a
              href="https://github.com/thuan223"
              target="_blank"
              className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition text-sm font-semibold text-white"
            >
              Check My Github →
            </a>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: gray;
            border-radius: 3px;
          }
        `}</style>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400 transition"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs border border-blue-400/40 rounded-full text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <div className="flex space-x-2">
                  {Array.isArray(p.github)
                    ? p.github.map((link, idx) => (
                        <a key={idx} href={link} target="_blank" className="hover:text-blue-400 transition">
                          <Github size={18} />
                        </a>
                      ))
                    : (
                        <a href={p.github} target="_blank" className="hover:text-blue-400 transition">
                          <Github size={18} />
                        </a>
                      )}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nút Github cho desktop */}
      <div className="hidden md:flex justify-center mt-10">
        <a
          href="https://github.com/thuan223"
          target="_blank"
          className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          Check My Github →
        </a>
      </div>
    </section>
  );
}
