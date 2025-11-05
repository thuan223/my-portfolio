"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  hidden,
  setHidden,
}: {
  hidden: boolean;
  setHidden: (v: boolean) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Introduce" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Cập nhật currentPath ngay khi pathname thay đổi
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Hàm chuyển route không delay
  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    if (href !== pathname) {
      startTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <nav
      // layout
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.15 }}
      className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md text-white z-50 flex items-center justify-between px-6 sm:px-10 py-4"
    >
      <h1 className="font-bold text-lg sm:text-xl">{hidden ? "" : "Portfolio"}</h1>

      {/* Nút toggle cho mobile */}
      <div className="sm:hidden flex items-center gap-3">
        <button
          onClick={() => setHidden(!hidden)}
          className="px-2 py-1 border border-white rounded text-sm hover:bg-white hover:text-black transition"
        >
          {hidden ? "Show" : "Hide"}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu desktop */}
      <div className="hidden sm:flex items-center space-x-6 text-sm">
        {!hidden &&
          links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className={`transition ${
                currentPath === link.href
                  ? "text-purple-400 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {link.label}
            </button>
          ))}
        <button
          onClick={() => setHidden(!hidden)}
          className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition"
        >
          {hidden ? "Show" : "Hide"}
        </button>
      </div>

      {/* Menu mobile overlay */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-center py-4 flex flex-col space-y-4 sm:hidden">
          {!hidden &&
            links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className={`transition ${
                  currentPath === link.href
                    ? "text-purple-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {link.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
}
