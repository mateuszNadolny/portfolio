'use client';
import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ContactIconProps {
  title: string;
  url: string;
}

export function ContactIcon({ title, url }: ContactIconProps) {
  let content = <></>;
  if (title === 'LinkedIn') {
    content = <Linkedin className="text-primary" />;
  } else if (title === 'Github') {
    content = <Github className="text-primary" />;
  } else {
    content = <span className="text-primary text-xs">{title}</span>;
  }

  return (
    <Button className="w-full bg-accent hover:bg-muted-foreground">
      <Link href={url}>{content}</Link>
    </Button>
  );
}
