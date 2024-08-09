import type { Metadata } from 'next';

import ContactSection from '@/components/contact/contact-section';

export const metadata: Metadata = {
  title: 'Contact | Mateusz Nadolny | Fullstack Web Developer',
  description: 'Portfolio page of Mateusz Nadolny'
};

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center pt-16 lg:pt-0 lg:mt-[200px] gap-3 pb-10 lg:pb-0 lg:overflow-clip">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background">
        <p className="text-xs">{'<contact />'}</p>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
