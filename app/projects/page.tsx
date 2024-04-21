import ProjectSection from '@/components/projects/projects-section';
const Projects = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <p className="text-xs absolute lg:hidden top-12">{'<projects />'}</p>
      <ProjectSection />
    </div>
  );
};

export default Projects;
