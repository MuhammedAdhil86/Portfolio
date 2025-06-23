// src/data/skills.jsx

import {
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap,
  FaGitAlt, FaGithub, FaLinux,
} from "react-icons/fa";
import {
  SiC, SiDjango, SiRedux, SiTailwindcss, SiJquery,
  SiPostgresql, SiSqlite, SiFigma, SiVercel, SiJavascript,
} from "react-icons/si";

/* Master list used by both <Skills/> and Navbar search */
export const skills = [
  { id: "c",          name: "C",           icon: <SiC className="text-blue-400" /> },
  { id: "python",     name: "Python",      icon: <FaPython className="text-yellow-400" /> },
  { id: "js",         name: "JavaScript",  icon: <SiJavascript className="text-yellow-300" /> },
  { id: "django",     name: "Django",      icon: <SiDjango className="text-green-500" /> },
  { id: "react",      name: "React",       icon: <FaReact className="text-cyan-400" /> },
  { id: "redux",      name: "Redux",       icon: <SiRedux className="text-purple-500" /> },
  { id: "tailwind",   name: "Tailwind CSS",icon: <SiTailwindcss className="text-sky-400" /> },
  { id: "bootstrap",  name: "Bootstrap",   icon: <FaBootstrap className="text-indigo-400" /> },
  { id: "jquery",     name: "jQuery",      icon: <SiJquery className="text-blue-300" /> },
  { id: "html",       name: "HTML5",       icon: <FaHtml5 className="text-orange-500" /> },
  { id: "css",        name: "CSS3",        icon: <FaCss3Alt className="text-blue-500" /> },
  { id: "postgres",   name: "PostgreSQL",  icon: <SiPostgresql className="text-blue-600" /> },
  { id: "sqlite",     name: "SQLite3",     icon: <SiSqlite className="text-gray-300" /> },
  { id: "sql",        name: "SQL",         icon: <SiSqlite className="text-gray-400" /> },
  { id: "git",        name: "Git",         icon: <FaGitAlt className="text-orange-400" /> },
  { id: "github",     name: "GitHub",      icon: <FaGithub className="text-white" /> },
  { id: "vercel",     name: "Vercel",      icon: <SiVercel className="text-white" /> },
  { id: "figma",      name: "Figma",       icon: <SiFigma className="text-pink-400" /> },
  { id: "linux",      name: "Linux",       icon: <FaLinux className="text-yellow-300" /> },
];
