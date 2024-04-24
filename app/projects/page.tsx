import ProjectSection from '@/components/projects/projects-section';
const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background z-[9]">
        <p className="text-xs">{'<projects />'}</p>
      </div>
      <ProjectSection />
    </div>
  );
};

export default Projects;
