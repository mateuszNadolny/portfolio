'use client';

import ProjectCard from './project-card';
import { PROJECT_DATA } from '@/constants/projects-data';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const ProjectSection = () => {
  return (
    <div className="pt-[10px] lg:pt-0 no-scrollbar overflow-scroll lg:overflow-hidden ">
      <div className="hidden lg:flex gap-3 lg:gap-12 overflow-x-scroll lg:overflow-hidden no-scrollbar">
        {PROJECT_DATA.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.2,
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}>
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              techs={item.techs}
              image={item.image}
              github={item.github}
              live={item.live}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex lg:hidden">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {PROJECT_DATA.map((item) => (
              <CarouselItem key={item.id}>
                <ProjectCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  techs={item.techs}
                  image={item.image}
                  github={item.github}
                  live={item.live}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectSection;
