import type { Metadata } from "next";

import TechSection from "@/components/techs/tech-section";

export const metadata: Metadata = {
  title: "Technologies | Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
};
const TechPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center pb-10 no-srollbar">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background z-20">
        <p className="text-xs">{"<techs />"}</p>
      </div>
      <TechSection />
    </div>
  );
};

export default TechPage;
