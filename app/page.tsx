'use client';

import { motion } from 'framer-motion';
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

  const variants = {
    hidden: { opacity: 0, translateY: -50 },
    visible: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  };

  return (
    <main className="h-screen">
      <div className="h-full flex flex-col items-center justify-center relative">
        <p className="text-xs absolute lg:hidden top-5">{'<about me />'}</p>
        <TypewriterEffectSmooth words={typewriterWords} className="hidden lg:flex" />
        <TextGenerateEffect words={textGenerateWords} timeout={3000} className="hidden lg:flex" />
        <motion.div
          className="w-full flex lg:hidden flex-col items-center gap-4"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.5
          }}>
          <motion.div variants={variants} className="w-full flex justify-center">
            <h2 className="text-3xl text-center px-3 font-bold">
              {'Hello there! My name is '}
              <span className="text-blue-500 dark:text-blue-500">Mateusz Nadolny</span>
            </h2>
          </motion.div>
          <motion.div variants={variants} className="w-full flex justify-center">
            <h3 className="text-xl text-center px-3 font-bold">{textGenerateWords}</h3>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
