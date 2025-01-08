import AboutImageGrid from "@/components/global/about-image-grid";
import AboutTextSection from "@/components/global/about-text-section";

const AboutWrapper = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen pt-28 px-4 gap-4 md:gap-0 md:px-16 w-full mb-12">
      <AboutImageGrid />
      <AboutTextSection />
    </div>
  );
};

export default AboutWrapper;
