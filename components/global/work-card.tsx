"use client";

import { useRef } from "react";
import { useViewportSize } from "@/hooks/useViewportSize";

import Image from "next/image";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { blurhashToBase64 } from "blurhash-base64";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  technologies: string[];
  url: string;
}

const WorkCard = ({
  id,
  title,
  description,
  image,
  video,
  technologies,
  url,
}: WorkCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewportSize();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 .9", "1.1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.99, 1]);
  const scale = useSpring(scaleProgress, { stiffness: 10, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 1]);
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
        className="container relative flex flex-col bg-[#151514] border-neutral-900 border-2 rounded-xl p-4 md:p-6 lg:p-8 lg:w-[80vw] h-auto lg:h-[70vh] overflow-hidden hover:shadow-2xl hover:shadow-neutral-400/10"
      >
        <h3 className="text-neutral-400 text-xs md:text-sm font-[200] uppercase md:mb-2 lg:mb-6">{`${id} | ${technologies.join(
          ", "
        )}`}</h3>

        <div className="flex flex-col lg:flex-row h-full items-center my-8 lg:my-auto">
          <div className="w-full flex flex-col items-center gap-4 lg:items-start lg:w-[47%] lg:mt-[-2rem]">
            <h4 className="text-neutral-200 text-3xl md:text-3xl lg:text-6xl font-serif font-[400]">
              {title}
            </h4>
            <p className="text-neutral-400 text-xs text-center md:text-start md:text-sm lg:text-md tracking-tight font-[200]">
              {description}
            </p>
          </div>
          <div
            className={`
              rounded-xl border-[13px] bg-neutral-800 border-neutral-800 ring-2 ring-neutral-400/20
              ${
                isMobile
                  ? "w-full mt-8"
                  : "hidden lg:block md:w-[200px] md:h-[200px] lg:absolute lg:right-[-15rem] lg:bottom-[-4rem] lg:w-[70%] lg:h-[500px]"
              }
            `}
          >
            <CldVideoPlayer
              src={video}
              width="100%"
              height={isMobile ? "auto" : "100%"}
              aspectRatio="16:9"
              autoplay={true}
              fluid={true}
              muted={true}
              loop={true}
              controls={false}
              playsinline={true}
              className={`
                rounded-[10px] object-cover
                ${isMobile ? "w-full h-auto" : "w-full h-full"}
              `}
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default WorkCard;
