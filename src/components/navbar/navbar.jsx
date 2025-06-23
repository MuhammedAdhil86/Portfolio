import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, Home, Mail, Info } from "lucide-react";
import { FaTimes } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { BsBriefcase } from "react-icons/bs";
import { skills } from "../../data/skills";          // ← make sure this path is correct

/* Top-level links that scroll to sections inside /home */
const NAV_LINKS = [
  { name: "Home",     hash: "#top",      icon: <Home size={22} /> },
  { name: "About",    hash: "#about",    icon: <Info size={22}/> },
  { name: "Skills",   hash: "#skills",   icon: <SiSkillshare size={22}/> },
  { name: "Projects", hash: "#projects", icon: <BsBriefcase size={22}/> },
  { name: "Contact",  hash: "#contact",  icon: <Mail size={22}/> },
];

export default function Navbar() {
  const navigate             = useNavigate();
  const location             = useLocation();
  const [overlayOpen, setOpen]     = useState(false); // mobile menu
  const [searchOpen, setSearch]    = useState(false); // search bar
  const [query, setQuery]          = useState("");

  /* Prevent body scroll when mobile overlay open */
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [overlayOpen]);

  /* Navigate helper: close UI → go to /home#hash → hook scrolls */
  const goToHash = (hash) => {
    setOpen(false);
    setSearch(false);
    setQuery("");
    location.pathname.startsWith("/home")
      ? (window.location.hash = hash)
      : navigate(`/home${hash}`);
  };

  /* Live suggestions (alphabetic) */
  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return skills
      .filter(s => s.name.toLowerCase().startsWith(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query]);

  return (
    <>
      {/* ★ Top Bar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md text-white border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* hamburger */}
          <button onClick={() => setOpen(!overlayOpen)} className="md:hidden">
            {overlayOpen ? <FaTimes size={28}/> : <Menu size={28}/>}
          </button>

          {/* logo */}
          <button
            onClick={() => goToHash("#top")}
            className="absolute left-1/2 -translate-x-1/2 text-xl font-bold uppercase tracking-widest"
          >
            Portfolio
          </button>

          {/* search toggle */}
          <button onClick={() => setSearch(p => !p)}><Search size={22}/></button>
        </div>

        {/* desktop nav links */}
        <ul className="hidden md:flex justify-center space-x-10 pb-3 pt-2">
          {NAV_LINKS.map(l => (
            <li key={l.name} className="relative group">
              <button onClick={() => goToHash(l.hash)}
                      className="font-medium tracking-wide text-gray-300 hover:text-white">
                {l.name}
              </button>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 origin-left bg-gradient-to-r from-white/0 via-white/60 to-white/0 group-hover:scale-x-100 transition-transform duration-300"/>
            </li>
          ))}
        </ul>

        {/* ★ Search bar + suggestions */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full bg-black/70 backdrop-blur-md px-4 pb-4 relative"
            >
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type a skill…"
                className="w-11/12 md:w-1/2 p-2 rounded-md bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />

              <ul className="absolute left-1/2 -translate-x-1/2 mt-2 w-11/12 md:w-1/2 bg-black/90 rounded-md max-h-60 overflow-auto">
                {suggestions.map(s => (
                  <li key={s.id}>
                    <button
                      onClick={() => goToHash(`#skill-${s.id}`)}
                      className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-white/10"
                    >
                      <span className="text-xl">{s.icon}</span>{s.name}
                    </button>
                  </li>
                ))}
                {!suggestions.length && query && (
                  <li className="px-4 py-2 text-gray-400">No matches</li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ★ Mobile overlay */}
      <AnimatePresence>
        {overlayOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
          >
            <button onClick={() => setOpen(false)} className="absolute top-10 right-4">
              <FaTimes size={30}/>
            </button>
            <ul className="flex flex-col space-y-8">
              {NAV_LINKS.map((l,i) => (
                <motion.li key={l.name}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: i*0.06, duration: 0.25 }}>
                  <button onClick={() => goToHash(l.hash)}
                          className="flex items-center gap-4 text-xl font-medium text-white hover:text-gray-300">
                    {l.icon} {l.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
