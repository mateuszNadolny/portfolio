"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-full md:pl-[10vw] lg:pl-[8vw] xl:pl-[8vw] 2xl:pl-[12vw] bg-[#0f1010] bg-dot-white/[0.2] relative flex flex-col items-center md:items-start justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0f1010] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
        className="z-20 text-lg font-light relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-neutral-400 to-neutral-300"
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
        className="font-serif text-4xl text-center md:text-left md:text-7xl mb-8 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-l from-neutral-200 to-neutral-400 py-2 tracking-tight leading-[1.1]"
      >
        Custom Websites <br />
        That Turn Visitors
        <br /> Into Customers
      </motion.h1>
      <motion.button
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.4,
        }}
        className="z-20 bg-gradient-to-b from-neutral-400 to-neutral-200 text-[#0f1010] px-4 py-2 rounded-xl font-noto font-[400] hover:bg-gradient-to-b hover:from-neutral-300 hover:to-neutral-100"
      >
        {`Let's build your online presence`}
      </motion.button>
      <motion.div
        className="absolute w-[50px] h-[50px] lg:w-[450px] lg:h-[450px] top-40 md:top-20 right-auto lg:top-auto lg:bottom-50 lg:right-[4vw] xl:right-[8vw] 2xl:right-[12vw] z-20"
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
          className="absolute w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] rounded-full blur-3xl bg-white z-10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
