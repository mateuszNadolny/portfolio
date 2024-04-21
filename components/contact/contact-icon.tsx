'use client';
import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Github, Linkedin } from 'lucide-react';

interface ContactIconProps {
  title: string;
  url: string;
}

export function ContactIcon({ title, url }: ContactIconProps) {
  return (
    <div className="flex justify-center text-center">
      <a href={url}>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
          {title === 'LinkedIn' ? <Linkedin /> : <Github />}
        </HoverBorderGradient>
      </a>
    </div>
  );
}
