"use client";

import Link from "next/link";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

import { Dock, DockIcon } from "@/components/magicui/dock";

import { GoHomeFill } from "react-icons/go";
import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  home: (props: IconProps) => <GoHomeFill {...props} />,
  about: (props: IconProps) => <FaUserCircle {...props} />,
  email: (props: IconProps) => <IoMdMail {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
  github: (props: IconProps) => <FaGithub {...props} />,
};

export const DockNavbar = () => {
  return (
    <div className="hidden lg:flex lg:fixed -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-50">
      <TooltipProvider>
        <Dock
          direction="middle"
          className="bg-neutral-900/30 rounded-xl border border-neutral-900"
          iconMagnification={50}
          iconDistance={100}
        >
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/">
                  <Icons.home className="text-neutral-500 hover:text-neutral-400 cursor-pointer size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-800 rounded-xl border border-neutral-900">
                <p className="text-neutral-500 text-xs font-[900] hover:text-neutral-400 uppercase tracking-widest">
                  Mateusz Nadolny
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/about">
                  <span className="text-neutral-500 text-sm font-[900] hover:text-neutral-400 uppercase tracking-widest">
                    About
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-800 rounded-xl border border-neutral-900">
                <p className="text-neutral-500 text-xs font-[900] hover:text-neutral-400 uppercase tracking-widest">
                  about me
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator
            orientation="vertical"
            className="h-full bg-neutral-800 ml-4"
          />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/contact">
                  <Icons.email className="text-neutral-500 hover:text-neutral-400 cursor-pointer size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-800 rounded-xl border border-neutral-900">
                <p className="text-neutral-500 text-xs font-[900] hover:text-neutral-400 uppercase tracking-widest">
                  mail me{" "}
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="https://www.linkedin.com/in/mateusz-nadolny-web-dev/"
                  target="_blank"
                >
                  <Icons.linkedin className="text-neutral-500 hover:text-neutral-400 cursor-pointer size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-800 rounded-xl border border-neutral-900">
                <p className="text-neutral-500 text-xs font-[900] hover:text-neutral-400 uppercase tracking-widest">
                  visit my linkedin
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <Link href="https://github.com/mateuszNadolny" target="_blank">
                  <Icons.github className="text-neutral-500 hover:text-neutral-400 cursor-pointer size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-800 rounded-xl border border-neutral-900">
                <p className="text-neutral-500 text-xs font-[900] hover:text-neutral-400 uppercase tracking-widest">
                  visit my github
                </p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
};
