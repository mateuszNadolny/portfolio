import type { Metadata } from "next";

import TechSection from "@/components/techs/tech-section";

export const metadata: Metadata = {
  title: "Technologies | Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
};
const TechPage = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-start relative pt-20">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background z-20">
        <p className="text-xs">{"<techs />"}</p>
      </div>
      <TechSection />
    </div>
  );
};

export default TechPage;
