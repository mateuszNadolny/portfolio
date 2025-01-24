"use client";

import Link from "next/link";

import { IoMdMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      className="fixed top-5 w-full flex justify-center z-50 "
    >
      <div className=" w-[90vw] md:w-[60vw] h-16 bg-[#0f1010] shadow-lg rounded-xl border border-neutral-900 flex items-center justify-between px-2 sm:px-4 md:px-8">
        <Link
          href="/"
          className="hidden sm:flex text-neutral-500 text-[10px] sm:text-xs md:text-sm font-ibm font-[900] uppercase tracking-widest"
        >
          Mateusz Nadolny
        </Link>
        <div className="flex w-full justify-around sm:w-auto sm:justify-center items-center gap-4 md:gap-8">
          <Link
            href="/about"
            className="text-neutral-500 text-[10px] sm:text-xs md:text-sm font-[900] hover:text-neutral-400 uppercase tracking-widest"
          >
            About
          </Link>
          <Link href="/contact">
            <IoMdMail className="text-neutral-500 text-[20px] md:text-[30px] hover:text-neutral-400 cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mateusz-nadolny-web-dev/"
            target="_blank"
          >
            <SiLinkedin className="text-neutral-500 text-[18px] md:text-[24px] hover:text-neutral-400 cursor-pointer" />
          </Link>
          <Link href="https://github.com/mateuszNadolny" target="_blank">
            <FaGithub className="text-neutral-500 text-[18px] md:text-[28px] hover:text-neutral-400 cursor-pointer" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
