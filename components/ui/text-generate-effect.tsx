'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    setTimeout(() => {
      animate(
        'span',
        {
          opacity: 1
        },
        {
          duration: 2,
          delay: stagger(0.3)
        }
      );
    }, 3000);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="dark:text-white text-black opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-0 lg:mt-4">
        <div className="text-center dark:text-white text-black text-xl lg:text-2xl sm:text-base md:text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
