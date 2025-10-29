"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/constants/framer-variants";

const AboutTools = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-gradient-to-b from-[#151514] to-neutral-900 w-full max-w-full md:max-w-[50vw] rounded-xl p-4 md:p-12 border-2 border-neutral-800"
        variants={itemVariants}
      >
        <motion.h3
          variants={itemVariants}
          className="scroll-m-20 text-neutral-300 text-lg font-serif mb-6 tracking-tight lg:text-2xl decoration-green-900 underline underline-offset-4"
        >
          {`Tools I create with`}
        </motion.h3>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">Frontend: </span>
            HTML / JavaScript / TypeScript / React.js / Next.js / Redux / Redux
            Toolkit / Zustand / RTK Query / React Query
          </p>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">CMS: </span>
            Adobe Experience Manager / Drupal CMS
          </p>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">UI: </span>
            CSS / CSSModules / Bootstrap / TailwindCSS / FramerMotion / shadcn /
            NextUI / Chart.JS / Aceternity
          </p>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">Backend: </span>
            Node.js / Express / Prisma / Supabase / MongoDB / Firebase / Pusher
            / ClerkAuth / NextAuth / Auth.js
          </p>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">Testing: </span>
            Jest / react-testing-library / Postman / Mock Service Worker
          </p>
        </motion.div>
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <p className="text-neutral-500 text-sm text-pretty font-[200] mb-6 tracking-tight lg:text-lg">
            <span className="font-[600] font-bold">Other tools: </span>
            git / Webpack / Figma / Jira / SEO optimization
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutTools;
