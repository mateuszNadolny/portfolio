"use client";

import ProjectCard from "./project-card";
import { PROJECT_DATA } from "@/constants/projects-data";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-4 mt-[95rem] lg:mt-[35rem] lg:pt-0 lg:z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {PROJECT_DATA.map((project, i) => (
          <motion.div
            key={project.id}
            className={`${
              i % 4 === 0 || i % 4 === 3 ? "md:col-span-2" : "md:col-span-1"
            } h-full`}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ProjectCard {...project} className="h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
