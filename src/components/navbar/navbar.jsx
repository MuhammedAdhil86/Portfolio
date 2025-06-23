// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Menu, Search, Home, Mail, Info } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { BsBriefcase } from "react-icons/bs";

const NAV_LINKS = [
  { name: "Home",     path: "/home",     icon: <Home size={22} /> },
  { name: "Skills",   path: "/skills",   icon: <SiSkillshare size={22} /> },
  { name: "Projects", path: "/projects", icon: <BsBriefcase size={22} /> },
  { name: "Contact",  path: "/contact",  icon: <Mail size={22} /> },
  { name: "About",    path: "/about",    icon: <Info size={22} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [isSearch, setSearch] = useState(false);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      {/* ───────────── Top Navigation Bar ───────────── */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          
          {/* Hamburger / FaTimes toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(p => !p)}
            className="md:hidden z-50"
          >
            {isOpen ? (
              <FaTimes size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold uppercase tracking-widest absolute left-1/2 -translate-x-1/2 select-none"
          >
            Portfolio
          </Link>

          {/* Search toggle */}
          <button
            aria-label="Toggle search"
            onClick={() => setSearch(p => !p)}
            className="hover:text-gray-300 transition-colors"
          >
            <Search size={22} />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-10 pb-3 pt-2">
          {NAV_LINKS.map(({ name, path }) => (
            <li key={name} className="relative group">
              <Link
                to={path}
                className="font-medium tracking-wide text-gray-300 hover:text-white transition-colors"
              >
                {name}
              </Link>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-white/0 via-white/60 to-white/0 group-hover:scale-x-100 transition-transform duration-300" />
            </li>
          ))}
        </ul>

        {/* Search Input Bar */}
        <AnimatePresence>
          {isSearch && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full flex justify-center bg-black/70 backdrop-blur-md px-4 pb-4"
            >
              <input
                type="text"
                placeholder="Search projects or skills…"
                className="w-11/12 md:w-1/2 p-2 rounded-md bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ───────────── Mobile Fullscreen Overlay ───────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden fixed inset-0 h-screen w-screen z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
          >
            {/* Close button in top right with more spacing */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-4" // top-10 adds more margin from top
              aria-label="Close menu"
            >
              <FaTimes size={30} className="text-white" />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col space-y-8">
              {NAV_LINKS.map(({ name, path, icon }, idx) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.25 }}
                >
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-xl font-medium text-white hover:text-gray-300 transition-colors"
                  >
                    {icon}
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
