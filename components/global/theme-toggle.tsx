'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ModeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('');

  const handleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      setCurrentTheme('<dark mode />');
    } else if (resolvedTheme === 'light') {
      setCurrentTheme('<light mode />');
    }
  }, [resolvedTheme]);

  return (
    <div onClick={handleTheme} className={className}>
      <p className="w-[130px] p-3 text-[10px] md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
        {currentTheme}
      </p>
    </div>
  );
}
