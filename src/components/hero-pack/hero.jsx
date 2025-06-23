import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-2">MUHAMMED</h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider">ADHIL N</h2>
        </motion.div>

        {/* Handwriting Animated Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 w-full flex justify-center"
        >
          <p className="text-3xl md:text-4xl handwriting relative text-black z-0">
            Web Developer
          </p>
        </motion.div>

        {/* Portfolio Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-14">
          <Link to="/home">
            <button className="border-2 border-black px-8 py-3 text-lg uppercase tracking-wider hover:bg-black hover:text-white transition duration-300">
              Portfolio
            </button>
          </Link>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-lg uppercase tracking-widest mb-6">Get in Touch</h3>
          <div className="flex justify-center space-x-6">
            <motion.a whileHover={{ y: -5 }} href="#" className="text-2xl hover:text-gray-600 transition">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="text-2xl hover:text-gray-600 transition">
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="text-2xl hover:text-gray-600 transition">
              <FaEnvelope />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/muhammed-adhil-991701230/" className="text-2xl hover:text-gray-600 transition">
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
