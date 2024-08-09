import type { Metadata } from 'next';
import ProjectSection from '@/components/projects/projects-section';

export const metadata: Metadata = {
  title: 'Projects | Mateusz Nadolny | Fullstack Web Developer',
  description: 'Portfolio page of Mateusz Nadolny'
};
const ProjectsPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex flex-col items-center justify-center bg-background z-[9]">
        <p className="text-xs">{'<projects />'}</p>
      </div>
      <ProjectSection />
    </div>
  );
};

export default ProjectsPage;
