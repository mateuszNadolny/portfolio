'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string;
  image: string;
  github: string;
  live: string;
}

const ProjectCard = ({ title, description, techs, image, github, live }: ProjectCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative bg-hovercard group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-[290px] lg:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            priority
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="130" className="mt-2 text-xs font-light text-muted-foreground">
          {techs}
        </CardItem>
        <div className="flex gap-3 items-center mt-5 lg:mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-primary text-secondary">
            Source code
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={live}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-primary text-secondary">
            Live page
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
