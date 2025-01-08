import Hero from "@/components/global/hero";
import Work from "@/components/global/work";
import Footer from "@/components/global/footer";
import ContactCta from "@/components/global/contact-cta";

export default function Home() {
  return (
    <section className="w-screen min-h-screen">
      <Hero />
      <Work />
      <ContactCta />
    </section>
  );
}
