import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import { skills } from "../../data/skills";

/** Grid of skill cards with pop highlight on hash-scroll */
export default function Skills() {
  const ref           = useRef(null);
  const inView        = useInView(ref, { once: true });
  const { hash }      = useLocation();
  const [popId, setPop] = useState(null);

  /* Highlight card when hash == #skill-{id} */
  useEffect(() => {
    if (hash.startsWith("#skill-")) {
      const id = hash.slice(7);
      setPop(id);
      const t = setTimeout(() => setPop(null), 1000);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <section id="skills" className="min-h-screen bg-black text-white px-8 py-20 flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold uppercase tracking-widest mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.id}
              id={`skill-${s.id}`}                        /* anchor */
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className={`flex flex-col items-center bg-white/10 p-4 rounded-xl w-28 h-28 justify-center transition
                         ${popId === s.id ? "scale-110 bg-white/20" : "hover:bg-white/20"}`}
            >
              <div className="text-3xl">{s.icon}</div>
              <p className="text-sm mt-2">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
