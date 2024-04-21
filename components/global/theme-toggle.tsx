'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(useTheme().resolvedTheme);

  const handleTheme = () => {
    if (currentTheme === 'dark') {
      setTheme('light');
      setCurrentTheme('light');
    } else {
      setTheme('dark');
      setCurrentTheme('dark');
    }
  };

  return (
    <div onClick={handleTheme} className="fixed bottom-10 w-full flex justify-center">
      <p className="w-[130px] text-[10px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'">
        {useTheme().resolvedTheme === 'dark' ? '<dark mode />' : '<light mode />'}
      </p>
    </div>
  );
}
