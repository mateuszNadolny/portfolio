import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

import { blurhashToBase64 } from "blurhash-base64";

interface TechCardProps {
  title: string;
  url: string;
  image: string;
  tooltip?: string;
}

const TechCardSkeleton = () => {
  return <Skeleton className="h-40 w-40 lg:h-[50] lg:w-[50] rounded-md" />;
};

const TechCard = ({ title, url, image, tooltip }: TechCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={url} target="_blank">
            <div className="h-[90px] w-[140px] p-5 lg:h-[100px] lg:w-[100px] rounded-md flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-secondary to-gray-900 hover:bg-secondary/90 hover:scale-105 transition-all duration-300">
              <Suspense fallback={<TechCardSkeleton />}>
                <Image
                  priority
                  src={image}
                  alt={title}
                  width={50}
                  height={50}
                  className="hidden lg:flex"
                  placeholder="blur"
                  blurDataURL={blurhashToBase64("LD7Uk[D$IVt6~pE2M|s:?GIqR-oK")}
                />
                <Image
                  priority
                  src={image}
                  alt={title}
                  width={40}
                  height={40}
                  className="flex lg:hidden"
                  placeholder="blur"
                  blurDataURL={blurhashToBase64("LD7Uk[D$IVt6~pE2M|s:?GIqR-oK")}
                />
              </Suspense>

              <p className="text-[12px] lg:text-xs text-center text-gray-300">
                {title}
              </p>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip ? tooltip : title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechCard;
