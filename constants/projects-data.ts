type Project = {
  id: string;
  title: string;
  description: string;
  techs: string;
  image: string;
  github: string;
  live: string;
};

export const PROJECT_DATA: Project[] = [
  {
    id: 'selfspace',
    title: 'Selfspace',
    description: 'A place where you can meditate, breathe, focus and relax.',
    techs:
      'Next.js 13 / React.js / Typescript / Tailwind CSS / Framer-Motion / NextUI / shadcn / ClerkAuth / zod / Supabase / Prisma / Jest / react-testing-library',
    image: '/selfspace.png',
    github: 'https://github.com/mateuszNadolny/selfspace',
    live: 'https://selfspace.vercel.app/'
  },
  {
    id: 'chatter',
    title: 'Chatter',
    description: 'A fullstack, realtime chat app. Build with Next.js and MongoDB',
    techs:
      'Next.js 14 / React.js / Typescript / Tailwind CSS / shadcn / NextAuth / zod / MongoDB / Prisma / axios / Zustand',
    image: '/chatter.png',
    github: 'https://github.com/mateuszNadolny/chatter',
    live: 'https://chatter-connect.vercel.app/'
  }
];
