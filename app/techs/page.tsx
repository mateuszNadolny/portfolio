import TechSection from '@/components/techs/tech-section';
const TechPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <p className="text-xs absolute lg:hidden top-12">{'<techs />'}</p>
      <TechSection />
    </div>
  );
};

export default TechPage;