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
            <div className="h-[58px] w-[58px] p-5 lg:h-[100px] lg:w-[100px] rounded-md hover:scale-105 flex flex-col gap-2 items-center justify-center bg-secondary">
              <Image src={image} alt={title} width={50} height={50} className="hidden lg:flex" />
              <Image src={image} alt={title} width={20} height={20} className="flex lg:hidden" />

              <p className="text-[9px] lg:text-xs text-center text-muted-foreground">{title}</p>
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
