"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({
  hidden,
  setHidden,
}: {
  hidden: boolean;
  setHidden: (v: boolean) => void;
}) {
  const [activeSection, setActiveSection] = useState<string>("introduce");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "introduce", label: "Introduce" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center py-6 px-10 fixed top-0 left-0 w-full bg-transparent text-white z-50"
    >
      <h1 className="font-bold text-xl">{`${hidden ? "" : "Portfolio"}`}</h1>
      <div className="flex items-center space-x-6 text-sm">
        {!hidden && (
          <>
            {links.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className={`transition ${
                  activeSection === link.id
                    ? "text-purple-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </>
        )}
        <button
          onClick={() => setHidden(!hidden)}
          className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
        >
          {hidden ? "Show" : "Hide"}
        </button>
      </div>
    </motion.nav>
  );
}
