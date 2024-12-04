import type { Metadata } from "next";

import ContactSection from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact | Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
};

const ContactPage = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center relative">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex flex-col items-center justify-center bg-background z-[9]">
        <p className="text-xs">{"<contact />"}</p>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
