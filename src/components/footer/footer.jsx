import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-10 px-6 mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo or Name */}
        <h3 className="text-xl font-semibold tracking-wider uppercase">
          © 2025 Muhammed Adhil
        </h3>

  {/* Social Links */}
<div className="flex space-x-6 text-xl">
  <a
    href="https://github.com/MuhammedAdhil86/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/muhammed-adhil-991701230/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href="mailto:adhilnizar86@gmail.com"
    className="hover:text-gray-400 transition"
  >
    <FaEnvelope />
  </a>
  <a
    href="https://instagram.com/adhil_nizar"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition"
  >
    <FaInstagram />
  </a>
</div>

      </div>
    </motion.footer>
  );
}
