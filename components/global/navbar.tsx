"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { NAV_ELEMENTS } from "@/constants/navbar-data";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full hidden lg:flex flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl font-extrabold transition-colors select-none">
        {"<nadolny.dev />"}
      </h2>
      <nav className="flex justify-center z-10">
        <ul className="flex gap-12 list-none pt-6">
          {NAV_ELEMENTS.map((item) => (
            <li
              key={item.id}
              className={cn(
                "text-[10px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'",
                pathname === item.url ? "bg-accent text-accent-foreground" : ""
              )}
            >
              <Link href={item.url!}>{item.text}</Link>
            </li>
          ))}
          <li className="text-[10px] p-3 md:text-sm cursor-pointer flex items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'">
            <Link
              href={
                "https://drive.google.com/file/d/1lZwKt9yD4yIozK2RBa1Fh7ZBZV763uXA/view?usp=sharing"
              }
              target="blank"
            >
              {"<resume />"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
