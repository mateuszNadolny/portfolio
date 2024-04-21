'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { NAV_ELEMENTS } from '@/constants/navbar-data';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex justify-center h-[2%] w-full mt-10">
      <ul className="flex gap-12 list-none">
        {NAV_ELEMENTS.map((item) => (
          <li
            key={item.id}
            className={cn(
              "text-[10px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'",
              pathname === item.url ? 'bg-accent text-accent-foreground' : ''
            )}>
            <Link href={item.url!}>{item.text}</Link>
          </li>
        ))}
        <li className="text-[10px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'">
          {'<resume />'}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
