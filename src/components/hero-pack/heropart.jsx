import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅  Make sure this relative path matches where the PDF really sits
import resume from "../../doc/RESUME.ADHIL.PORTFOLIO.pdf";

export default function HeroPart() {
  const [showConfirm, setShowConfirm] = useState(false);

  // ——— Handlers ———
  const handleResumeClick = () => setShowConfirm(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;                           // ✅ use imported file
    link.download = "Muhammed_Adhil_Resume.pdf";  // suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowConfirm(false);
  };

  const handleCancel = () => setShowConfirm(false);

  // ——— JSX ———
  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: "#000000" }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-8 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-black w-full h-full absolute top-0 left-0"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between"
      >
        <div className="text-white max-w-md space-y-4">
          <h1 className="text-4xl font-light tracking-widest">Muhammed</h1>
          <h2 className="text-5xl font-bold">ADHIL</h2>
          <p className="text-lg text-gray-300 tracking-wide">Web Developer</p>

          <div className="flex space-x-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleResumeClick}
              className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              Portfolio
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black p-6 rounded-xl shadow-lg text-center max-w-sm w-full"
            >
              <h3 className="text-lg font-semibold mb-4">
                Are you sure you want to download the resume?
              </h3>

              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Yes
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
