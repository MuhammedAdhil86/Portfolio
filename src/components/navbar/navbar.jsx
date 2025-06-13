import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Search, Mail, Info, Home } from "lucide-react";
import { FaUserAlt } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { BsBriefcase } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* ───── Main Nav Bar ───── */}
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10 text-white">
        {/* Top strip (logo + toggles) */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden z-50"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold uppercase tracking-widest absolute left-1/2 -translate-x-1/2 select-none"
          >
            Portfolio
          </Link>

          {/* Search icon */}
          <button
            className="hover:text-gray-300 transition-colors"
            aria-label="Toggle Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={22} />
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex justify-center space-x-10 pb-3 pt-2">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="font-medium tracking-wide text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>

              {/* underline grow effect */}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-white/0 via-white/60 to-white/0 group-hover:scale-x-100 transition-transform duration-300" />
            </li>
          ))}
        </ul>

        {/* Search field */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex justify-center bg-black/70 backdrop-blur-md px-4 pb-4"
          >
            <input
              type="text"
              placeholder="Search projects or skills…"
              className="w-11/12 md:w-1/2 p-2 rounded-md bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </motion.div>
        )}

        {/* Mobile slide‑down menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md p-6 overflow-y-auto space-y-8"
          >
            <ul className="flex flex-col space-y-6 mt-10">
              {[
                { name: "Home", icon: <Home size={20} />, path: "/home" },
                { name: "Skills", icon: <SiSkillshare size={20} />, path: "/skills" },
                { name: "Projects", icon: <BsBriefcase size={20} />, path: "/projects" },
                { name: "Contact", icon: <Mail size={20} />, path: "/contact" },
                { name: "About", icon: <Info size={20} />, path: "/about" },
              ].map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.25 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-white/10 transition-colors"
                  >
                    {item.icon}
                    <span className="text-lg font-medium">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
}
