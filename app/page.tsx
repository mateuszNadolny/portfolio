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
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffectSmooth words={typewriterWords} />
      <TextGenerateEffect words={textGenerateWords} />
    </div>
  );
}
