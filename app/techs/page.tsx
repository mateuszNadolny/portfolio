import type { Metadata } from "next";

import TechStack from "@/components/techs/tech-stack";

export const metadata: Metadata = {
  title: "Technologies | Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
};
const TechPage = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-start relative pt-12">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background z-20">
        <p className="text-xs">{"<techs />"}</p>
      </div>
      <TechStack />
    </div>
  );
};

export default TechPage;
