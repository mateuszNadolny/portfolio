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
  return (
    <Button className="w-full bg-accent hover:bg-muted-foreground">
      <Link href={url}>
        {title === 'LinkedIn' ? (
          <Linkedin className="text-primary" />
        ) : (
          <Github className="text-primary" />
        )}
      </Link>
    </Button>
  );
}
