import React from "react";
import { motion } from "framer-motion";

const animationData = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export default function AnimatedPages({ children }) {
  return (
    <motion.div
      variants={animationData}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="w-full items-center"
    >
      {children}
    </motion.div>
  );
}
