import type { Metadata } from "next";

import ContactSection from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact | Mateusz Nadolny | Fullstack Web Developer",
  description: "Portfolio page of Mateusz Nadolny",
};

const ContactPage = () => {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center min-h-screen relative pt-16 md:pt-24">
      <ContactSection />
    </main>
  );
};

export default ContactPage;
