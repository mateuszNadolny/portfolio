import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const WorkCard = ({
  id,
  title,
  description,
  image,
  technologies,
}: WorkCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        cursor: "pointer",
        shadow: "3px 5px 38px -6px rgba(223, 230, 255, 1)",
      }}
      transition={{ duration: 0.3 }}
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
  );
};

export default WorkCard;
