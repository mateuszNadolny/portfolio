'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './theme-toggle';

import { cn } from '@/lib/utils';

import { NAV_ELEMENTS } from '@/constants/navbar-data';

const NavbarMobile = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Menu className="fixed mt-4 ml-4 z-10" />
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="mt-10">
            <h2 className="text-lg text-center mb-8 font-extrabold transition-colors">
              {'<nadolny.dev />'}
            </h2>
            <ul className="flex flex-col h-full w-full list-none relative">
              {NAV_ELEMENTS.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-[12px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'",
                    pathname === item.url ? 'bg-accent text-accent-foreground' : ''
                  )}>
                  <Link href={item.url!}>{item.text}</Link>
                </li>
              ))}
              <li
                className="text-[12px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'"
                onClick={() => setOpen(false)}>
                <Link
                  href={
                    'https://drive.google.com/file/d/1lZwKt9yD4yIozK2RBa1Fh7ZBZV763uXA/view?usp=sharing'
                  }
                  target="blank">
                  {'<resume />'}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-10 -translate-x-1/2 left-1/2 ">
            <ModeToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
