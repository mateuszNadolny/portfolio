"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutTextSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-gradient-to-b from-[#151514] to-neutral-900 w-full max-w-full md:max-w-[50vw] rounded-xl p-4 md:p-12 border-2 border-neutral-800"
        variants={itemVariants}
      >
        <h1 className="scroll-m-20 text-neutral-300 text-2xl md:text-4xl font-serif mb-4 tracking-tight lg:text-5xl">
          {`Hey, I'm Mateusz`}
        </h1>
        <p className="leading-7 text-neutral-400 mb-10 tracking-tight">
          For past three years I have been creating, updating and mantaining
          websites and online stores at{" "}
          <Link
            href="https://cheil.com"
            target="_blank"
            className="text-green-700 hover:text-neutral-300"
          >
            Cheil Poland
          </Link>
          .{" "}
          <b className="decoration-green-900 underline underline-offset-4">
            Enterprise-level web technologies and content management systems are
            bread and butter for me
          </b>
          .
        </p>
        <p className="leading-7 text-neutral-400 mb-10 tracking-tight">
          Coding since 2020. Pasionate about computer science since always.{" "}
          <b className="decoration-green-900 underline underline-offset-4">
            I thrive on building with modern web tools
          </b>{" "}
          and{" "}
          <b className="decoration-green-900 underline underline-offset-4 tracking-tight">
            I am deeply passionate about creating conversion-focused websites
            that help businesses grow
          </b>
          . I enjoy bridging the gap between design, development, and marketing
          by leveraging data-driven strategies to enhance user experience and
          drive measurable results.
        </p>
        <p className="leading-7 text-neutral-400 mb-10 tracking-tight">
          I am constantly expanding my knowledge of web technologies, SaaS
          trends, and marketing strategies. Whether it is refining the art of
          crafting user-friendly interfaces or optimizing a site for better
          conversion rates,{" "}
          <b className="decoration-green-900 underline underline-offset-4">
            I aim to bring value to every project I take on
          </b>
          .
        </p>
        <p className="leading-7 text-neutral-400 tracking-tight">
          Beyond coding, I am passionate about storytelling through design.{" "}
          <b className="decoration-green-900 underline underline-offset-4">
            I believe every website should serve a purpose—whether that is
            generating leads, increasing sales, or building brand trust
          </b>{" "}
          — and I specialize in creating websites that do just that .
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutTextSection;
