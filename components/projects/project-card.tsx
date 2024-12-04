"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { blurhashToBase64 } from "blurhash-base64";

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string;
  image: string;
  github: string;
  live: string;
  className?: string;
}

const ProjectCardSkeleton = () => {
  return <Skeleton className="h-60 w-full object-cover rounded-xl" />;
};

const ProjectCard = ({
  title,
  description,
  techs,
  image,
  github,
  live,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border ${className} bg-gradient-to-br from-secondary to-gray-900 transition-transform duration-300`}
    >
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </h3>
        <p className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
          {description}
        </p>
        <div className="mt-4 flex-grow">
          <Suspense fallback={<ProjectCardSkeleton />}>
            <Image
              priority
              src={image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl transition-transform"
              placeholder="blur"
              blurDataURL={blurhashToBase64("LD7Uk[D$IVt6~pE2M|s:?GIqR-oK")}
              alt="thumbnail"
            />
          </Suspense>
        </div>
        <p className="mt-2 text-xs font-light text-muted-foreground">{techs}</p>
        <div className="flex gap-3 items-center mt-5">
          <Link
            href={github}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-primary text-secondary hover:opacity-90"
          >
            Source code
          </Link>
          <Link
            href={live}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-primary text-secondary hover:opacity-90"
          >
            Live page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
