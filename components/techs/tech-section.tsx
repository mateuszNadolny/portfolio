"use client";

import TechCard from "./tech-card";
import { motion } from "framer-motion";

import { TECH_ELEMENTS } from "@/constants/techs-data";

const TechSection = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-9 grid-flow-row gap-5 mb-5 lg:px-10">
      {Object.values(TECH_ELEMENTS).map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.2,
            delay: i * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <TechCard
            key={item.id}
            title={item.title}
            url={item.url}
            image={item.image}
            tooltip={item.tooltip}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechSection;
