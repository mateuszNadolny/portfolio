"use client";

import Image from "next/image";
import { containerVariants, itemVariants } from "@/constants/framer-variants";
import { motion } from "framer-motion";

const AboutExperience = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-gradient-to-b from-[#151514] to-neutral-900 w-full max-w-full rounded-xl p-4 md:p-12 border-2 border-neutral-800"
        variants={itemVariants}
      >
        <motion.h3
          variants={itemVariants}
          className="scroll-m-20 text-neutral-300 text-lg font-serif mb-6 tracking-tight lg:text-2xl decoration-green-900 underline underline-offset-4"
        >
          {`Professional experience`}
        </motion.h3>
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Image
            src="/cheil.webp"
            alt="Cheil logo"
            width={50}
            height={50}
            className="rounded-xl shadow-lg"
          />
          <div className="flex flex-col">
            <p className="text-neutral-400 text-sm">Senior Web Publisher</p>
            <p className="text-neutral-400 text-sm">2024 - Present</p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border-l border-green-900 b-2 ml-6 my-2 h-[20px]"
        />
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <Image
            src="/cheil.webp"
            alt="Cheil logo"
            width={50}
            height={50}
            className="rounded-xl shadow-lg"
          />
          <div className="flex flex-col">
            <p className="text-neutral-400 text-sm">Web Publisher</p>
            <p className="text-neutral-400 text-sm">2022 - 2024</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutExperience;
