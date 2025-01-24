import Hero from "@/components/global/hero";
import Work from "@/components/global/work";
import ContactCta from "@/components/global/contact-cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Work />
      <ContactCta />
    </main>
  );
}
