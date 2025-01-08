"use client";

import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

const WorkCard = ({
  id,
  title,
  description,
  image,
  technologies,
  url,
}: WorkCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 .9", "1.1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 1]);
  // const y = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <Link href={url} target="_blank">
      <motion.div
        ref={containerRef}
        whileHover={{
          cursor: "pointer",
          shadow: "3px 5px 38px -6px rgba(223, 230, 255, 1)",
        }}
        style={{
          scale,
          opacity,
          rotateX,
          transformPerspective: 1000,
          transformOrigin: "bottom",
        }}
        transition={{ duration: 0.2 }}
        className="container relative flex flex-col bg-[#151514] border-neutral-900 border-2 rounded-xl p-4 md:p-6 lg:p-8 lg:w-[80vw] h-auto lg:h-[70vh] overflow-hidden hover:shadow-2xl hover:shadow-neutral-400/10"
      >
        <h3 className="text-neutral-400 text-xs md:text-sm font-[200] uppercase md:mb-2 lg:mb-6">{`${id} | ${technologies.join(
          ", "
        )}`}</h3>

        <div className="flex flex-col lg:flex-row h-full items-center my-8 lg:my-auto">
          <div className="w-full flex flex-col items-center lg:items-start lg:w-[47%] lg:mt-[-2rem]">
            <h4 className="text-neutral-200 text-3xl md:text-3xl lg:text-6xl font-serif font-[400]">
              {title}
            </h4>
            <p className="text-neutral-400 text-xs text-center md:text-start md:text-sm lg:text-md tracking-tight font-[200]">
              {description}
            </p>
          </div>
          <div className="block lg:hidden mt-8 rounded-xl border-[13px] bg-neutral-800 border-neutral-800 ring-2 ring-neutral-800/20">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className=" rounded-[10px] md:object-contain lg:object-cover"
            />
          </div>
          <div className="hidden lg:block rounded-xl border-[13px] bg-neutral-800 border-neutral-800 ring-2 ring-neutral-800/20 md:w-[200px] md:h-[200px] lg:absolute lg:right-[-15rem] lg:bottom-[-4rem] lg:w-[70%] lg:h-[500px] ">
            <Image
              src={image}
              alt={title}
              fill
              className=" rounded-[10px] md:object-contain lg:object-cover"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkCard;
