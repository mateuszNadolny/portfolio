'use client';

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Home() {
  const typewriterWords = [
    {
      text: 'Hello'
    },
    {
      text: 'there!'
    },
    {
      text: 'My'
    },
    {
      text: 'name'
    },
    {
      text: 'is'
    },
    {
      text: 'Mateusz',
      className: 'text-blue-500 dark:text-blue-500'
    },
    {
      text: 'Nadolny',
      className: 'text-blue-500 dark:text-blue-500'
    }
  ];

  const textGenerateWords = `I am a full-stack web-developer based in Warsaw, Poland`;

  return (
    <main className="h-full">
      <div className="h-full flex flex-col items-center justify-center relative">
        <p className="text-xs absolute lg:hidden top-12">{'<about me />'}</p>
        <TypewriterEffectSmooth words={typewriterWords} />
        <TextGenerateEffect words={textGenerateWords} />
      </div>
    </main>
  );
}
