import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-7xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="text-gray-400 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition"
      >
        <FaArrowLeft className="text-sm" />
        Go Home
      </Link>
    </motion.div>
  );
}
