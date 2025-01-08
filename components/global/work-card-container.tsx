"use client";

import WorkCard from "@/components/global/work-card";
import { WORK_DATA } from "@/constants/work-data";

import { motion } from "framer-motion";

const WorkCardContainer = () => {
  return (
    <div className="container flex flex-col items-center space-y-10 sm:space-y-12 md:space-y-24">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl md:text-3xl text-neutral-500 font-[100] uppercase"
      >
        Latest Work
      </motion.h2>
      <div className="grid grid-cols-1 gap-10 sm:gap-12 md:gap-16">
        {WORK_DATA.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>
    </div>
  );
};

export default WorkCardContainer;
