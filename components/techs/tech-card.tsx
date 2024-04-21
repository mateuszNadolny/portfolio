import Image from 'next/image';

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
          <a href={url}>
            <div className="h-[50px] w-[50px] lg:border lg:p-5 lg:h-[100px] lg:w-[100px] rounded-md hover:scale-105 flex flex-col gap-2 items-center justify-center">
              <Image src={image} alt={title} width={100} height={100} className="rounded-md" />
              <p className="text-xs text-center text-muted-foreground lg:flex hidden">{title}</p>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip ? tooltip : title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechCard;
