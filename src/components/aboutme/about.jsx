import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black bg-opacity-70 rounded-lg p-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start text-white"
      >
        <div className="md:w-1/2 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-xl font-bold uppercase tracking-widest text-white">About</h2>
            <p className="text-sm text-gray-400 mt-1">adhilnizar86@gmail.com</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-gray-300 text-sm leading-relaxed"
          >
            Web Developer with 1 year of hands-on experience in building responsive, user-friendly websites
            and web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React.
            Experienced in version control (Git), debugging, and cross-browser compatibility. Strong
            problem-solving skills and a passion for clean, maintainable code. Seeking to contribute
            technical expertise and creativity to a dynamic development team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-10"
          >
            <p className="text-sm text-gray-400">India, Kerala</p>
            <p className="text-sm text-gray-500">Alappuzha</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
