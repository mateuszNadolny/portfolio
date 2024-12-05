"use client";

import { motion } from "framer-motion";

import { techCategories } from "@/constants/techs-data";
import TechSection from "./tech-section";

const TechStack: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl"
    >
      {techCategories.map((category) => (
        <motion.div key={category.name} variants={categoryVariants}>
          <TechSection category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
