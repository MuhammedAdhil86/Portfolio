import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React, Tailwind CSS and Framer Motion.",
    image: "https://source.unsplash.com/800x500/?portfolio,website", // Replace with your image or local
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Blog API",
    description: "A Django REST Framework powered API for managing blog posts.",
    image: "https://source.unsplash.com/800x500/?coding,api", // Replace
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather App",
    description: "Weather forecast web app built using React and OpenWeather API.",
    image: "https://source.unsplash.com/800x500/?weather,app", // Replace
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React, Tailwind CSS and Framer Motion.",
    image: "https://source.unsplash.com/800x500/?portfolio,website", // Replace with your image or local
    demoLink: "#",
    codeLink: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-3xl font-bold text-center uppercase tracking-widest mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
