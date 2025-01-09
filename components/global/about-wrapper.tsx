import AboutImageGrid from "@/components/global/about-image-grid";
import AboutTextSection from "@/components/global/about-text-section";
import AboutExperience from "@/components/global/about-experience";

const AboutWrapper = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen pt-28 px-4 gap-4 md:px-16 w-full mb-12">
      <AboutTextSection />
      <div className="flex flex-col gap-4 items-start justify-start">
        <AboutExperience />
        <AboutImageGrid />
      </div>
    </div>
  );
};

export default AboutWrapper;
