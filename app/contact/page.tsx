import ContactIconSection from '@/components/contact/contact-icon-section';

const ContactPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <p className="text-xs absolute lg:hidden top-12">{'<contact />'}</p>
      <ContactIconSection />
    </div>
  );
};

export default ContactPage;
