"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#0f1010] bg-dot-white/[0.2] relative flex flex-col items-start justify-center pl-32 overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="font-noto text-lg font-light relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-neutral-400 to-neutral-700"
      >{`I'm Mateusz and I create`}</motion.span>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.2,
        }}
        className="font-serif text-4xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-neutral-300 to-neutral-400 py-2 tracking-tight leading-[1.1]"
      >
        Custom Websites <br />
        That Turn Visitors
        <br /> Into Customers
      </motion.h1>
      <motion.div
        className="hidden md:block absolute bottom-50 right-10 z-20"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{
          y: [0, -40, 40],
          rotate: [3, -3],
        }}
        viewport={{ once: false }}
        transition={{
          // Entrance animations
          x: { duration: 1, ease: "easeOut", type: "spring" },
          opacity: { duration: 1, ease: "easeOut", type: "spring" },
          // Continuous animations
          y: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
          rotate: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <Image
          src="/hero2.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute opacity-90 z-20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-[400px] h-[400px] rounded-full blur-3xl bg-white z-10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
