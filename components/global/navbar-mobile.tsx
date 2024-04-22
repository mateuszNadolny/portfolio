'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

import { NAV_ELEMENTS } from '@/constants/navbar-data';

const NavbarMobile = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Menu className="fixed mt-4 ml-4 z-10" />
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="justify-center mt-10">
            <h2 className="text-lg text-center mb-8 font-extrabold transition-colors">
              {'<nadolny.dev />'}
            </h2>
            <ul className="flex flex-col h-full justify-around w-full list-none">
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
                {'<resume />'}
              </li>
            </ul>
          </nav>

          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
