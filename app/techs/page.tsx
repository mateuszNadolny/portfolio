import TechSection from '@/components/techs/tech-section';
const TechPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center pb-10 no-srollbar">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background">
        <p className="text-xs">{'<techs />'}</p>
      </div>
      <TechSection />
    </div>
  );
};

export default TechPage;
