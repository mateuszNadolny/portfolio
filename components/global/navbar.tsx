import React from "react";

import { IoMdMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-5 w-full flex justify-center z-50">
      <div className="w-[90vw] md:w-[60vw] h-16 bg-[#0f1010] rounded-xl border border-neutral-900 flex items-center justify-between px-4 md:px-8">
        <p className="text-neutral-500 text-xs md:text-sm font-ibm font-[600] uppercase tracking-widest">
          Mateusz Nadolny
        </p>
        <div className="flex items-center gap-8">
          <IoMdMail className="text-neutral-500 text-[20px] md:text-[30px] hover:text-neutral-400 cursor-pointer" />
          <SiLinkedin className="text-neutral-500 text-[18px] md:text-[24px] hover:text-neutral-400 cursor-pointer" />
          <FaGithub className="text-neutral-500 text-[18px] md:text-[28px] hover:text-neutral-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
