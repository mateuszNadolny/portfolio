import Image from 'next/image';
import Link from 'next/link';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TechCardProps {
  title: string;
  url: string;
  image: string;
  tooltip?: string;
}

const TechCard = ({ title, url, image, tooltip }: TechCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={url} target="_blank">
            <div className="h-[90px] w-[140px] p-5 lg:h-[100px] lg:w-[100px] rounded-md hover:scale-105 flex flex-col gap-2 items-center justify-center bg-secondary">
              <Image
                priority
                src={image}
                alt={title}
                width={50}
                height={50}
                className="hidden lg:flex"
              />
              <Image
                priority
                src={image}
                alt={title}
                width={40}
                height={40}
                className="flex lg:hidden"
              />
              <p className="text-[12px] lg:text-xs text-center text-muted-foreground">{title}</p>
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
