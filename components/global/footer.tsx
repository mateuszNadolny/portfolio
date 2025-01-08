"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { footerItems } from "@/constants/footer-data";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const router = useRouter();

  const handleClick = (section: string, link: string) => {
    if (section) {
      scrollToSection(section);
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <motion.footer
      className="flex flex-col items-center justify-start py-4 h-[25vh] sm:py-4 md:py-10 md:h-[25vh] bg-[#151514] relative overflow-clip"
      aria-label="Footer"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center md:items-start text-slate-50">
        <div className="flex justify-center md:justify-start">
          <p className="text-xs tracking-tight bg-gradient-to-r from-zinc-200 to-gray-400 bg-clip-text text-transparent">
            © Mateusz Nadolny. 2025. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 justify-center">
          {footerItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.section, item.link)}
              className="text-sm text-neutral-300 hover:text-neutral-400 transition-all duration-150 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-8 md:gap-4 justify-center md:justify-end">
          <Link href="https://github.com/mateuszNadolny" target="_blank">
            <FaGithub className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-300 hover:text-neutral-400 transition-all duration-150 cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mateusz-nadolny-web-dev/"
            target="_blank"
          >
            <FaLinkedinIn className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-300 hover:text-neutral-400 transition-all duration-150 cursor-pointer" />
          </Link>

          <Link href="https://x.com/codeslav" target="_blank">
            <FaSquareXTwitter className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-300 hover:text-neutral-400 transition-all duration-150 cursor-pointer" />
          </Link>
        </div>
      </div>

      <h2 className="absolute bottom-[-45px] sm:bottom-[-15px] md:bottom-[-55px] text-[20px] sm:text-[50px] md:text-[80px] font-extrabold tracking-tight bg-gradient-to-r from-neutral-500 to-neutral-700 bg-clip-text text-transparent uppercase">
        Mateusz Nadolny
      </h2>
    </motion.footer>
  );
};

export default Footer;
