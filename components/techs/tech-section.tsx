"use client";

import TechCard from "./tech-card";
import { motion } from "framer-motion";
import { techCategories } from "@/constants/techs-data";
import { TechCategory } from "@/constants/types";

interface TechGridProps {
  category: TechCategory;
}

const TechSection: React.FC<TechGridProps> = ({ category }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Shorter stagger for tech cards within a section
        delayChildren: 0.2, // Small delay after the section appears
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-12 px-7"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {<category.icon className="w-6 h-6 text-indigo-600" />}
        {category.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {category.technologies.map((tech) => (
          <motion.div key={tech.name} variants={itemVariants}>
            <TechCard tech={tech} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechSection;
