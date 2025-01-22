"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

const ContactCta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      id="contact"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex relative flex-col justify-center items-center gap-4 px-4 h-[20rem] md:h-[70vh] my-16"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-600/40 to-transparent z-10"
        animate={{
          opacity: [0.3, 0.8],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.h2
        variants={itemVariants}
        className="max-w-6xl bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-400 text-2xl sm:text-5xl font-serif font-[900] leading-relaxed"
      >
        Ready to Elevate Your Online Presence or Expand Your Team?
      </motion.h2>
      <motion.h3
        variants={itemVariants}
        className="max-w-2xl text-center text-neutral-400 text-base sm:text-xl font-sans font-[100] leading-relaxed"
      >
        {`Let's Build Something Amazing Together`}
      </motion.h3>

      <motion.a
        href="/contact" // Add your contact section ID here
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="z-20 relative group bg-gradient-to-b my-6 from-neutral-300 to-neutral-100
          text-[#0f1010] text-xs sm:text-base px-6 py-3 rounded-xl font-noto
          font-[600] transition-all duration-300 ease-out
          hover:from-neutral-200 hover:to-white
          focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:ring-offset-[#0f1010]"
        role="button"
        tabIndex={0}
      >
        <span className="relative inline-flex items-center gap-2">
          Contact me
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
        </span>
      </motion.a>
    </motion.section>
  );
};

export default ContactCta;
