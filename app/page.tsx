"use client";

import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const typewriterWords = [
    {
      text: "Hello",
    },
    {
      text: "there!",
    },
    {
      text: "My",
    },
    {
      text: "name",
    },
    {
      text: "is",
    },
    {
      text: "Mateusz",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Nadolny",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const textGenerateWords = `I am a full-stack web-developer based in Warsaw, Poland`;
  const description = `Self-taught web developer with over three years of commercial experience in crafting websites and online stores using CMS tools. A fullstack enthusiast, who for the past three years has been working on web projects leveraging technologies such as TypeScript, React.js, Next.js, TailwindCSS, MongoDB, and many others.`;

  const variants = {
    hidden: { opacity: 0, translateY: -50 },
    visible: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <section className="flex-1 w-full flex flex-col items-center lg:justify-start relative">
      <div className="flex flex-col items-center justify-center relative lg:gap-5 ">
        <p className="text-xs mt-5 lg:hidden">{"<about me />"}</p>
        <TypewriterEffectSmooth
          words={typewriterWords}
          className="hidden lg:flex pt-36"
        />
        <motion.div
          className="w-full hidden lg:flex flex-col items-center gap-4"
          initial="hidden"
          animate="visible"
          transition={{
            delayChildren: 3.25,
            staggerChildren: 0.5,
          }}
        >
          <motion.div
            variants={variants}
            className="w-full flex justify-center"
          >
            <h2 className="text-3xl text-center px-3 font-bold">
              I am a fullstack web developer based in Warsaw, Poland
            </h2>
          </motion.div>
          <motion.div
            variants={variants}
            className="w-1/2 text-gray-400 flex justify-center"
          >
            <h3 className="text-md text-center px-3 font-bold">
              {description}
            </h3>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex lg:hidden flex-col items-center gap-4"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.5,
            delay: 4,
          }}
        >
          <motion.div
            variants={variants}
            className="w-full flex justify-center pt-20"
          >
            <h2 className="text-3xl text-center px-3 font-bold">
              {"Hello there! 👋"} <br /> {"My name is "} <br />
              <span className="text-blue-500 dark:text-blue-500">
                Mateusz Nadolny
              </span>
            </h2>
          </motion.div>
          <motion.div
            variants={variants}
            className="w-full flex justify-center"
          >
            <h3 className="text-xl text-center px-3 font-bold">
              {textGenerateWords}
            </h3>
          </motion.div>
          <motion.div
            variants={variants}
            className="w-full px-4 text-gray-400 flex justify-start"
          >
            <h3 className="text-sm text-justify px-3 font-bold">
              {description}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
