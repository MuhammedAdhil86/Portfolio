import { motion, useInView } from "framer-motion";
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { SiC, SiDjango, SiRedux, SiTailwindcss, SiJquery, SiPostgresql, SiSqlite, SiFigma, SiVercel, SiJavascript } from "react-icons/si";
import { useRef } from "react";

const allSkills = [
  { icon: <SiC className="text-blue-400" />, name: "C" },
  { icon: <FaPython className="text-yellow-400" />, name: "Python" },
  { icon: <SiJavascript className="text-yellow-300" />, name: "JavaScript" },
  { icon: <SiDjango className="text-green-500" />, name: "Django" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap className="text-indigo-400" />, name: "Bootstrap" },
  { icon: <SiJquery className="text-blue-300" />, name: "jQuery" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" },
  { icon: <SiSqlite className="text-gray-300" />, name: "SQLite3" },
  { icon: <SiSqlite className="text-gray-400" />, name: "SQL" },
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <SiVercel className="text-white" />, name: "Vercel" },
  { icon: <SiFigma className="text-pink-400" />, name: "Figma" },
  { icon: <FaLinux className="text-yellow-300" />, name: "Linux" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black text-white px-8 py-20 flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-xl hover:bg-opacity-20 transition w-28 h-28 justify-center"
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-sm mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
