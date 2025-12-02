import { motion } from "framer-motion";

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`px-5 py-3 rounded bg-[#48297A] text-white ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
