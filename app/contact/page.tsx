'use client';
import { motion } from 'framer-motion';

import { ContactForm } from '@/components/contact/contact-form';
import ContactIconSection from '@/components/contact/contact-icon-section';

const ContactPage = () => {
  const variants = {
    hidden: { opacity: 0, translateY: -50 },
    visible: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  };
  return (
    <div className="flex flex-col items-center pt-16 lg:pt-0 lg:mt-[200px] gap-3 lg:pb-0 lg:overflow-clip">
      <div className="fixed lg:hidden top-0 h-[50px] w-full flex items-center justify-center bg-background">
        <p className="text-xs">{'<contact />'}</p>
      </div>
      <motion.div
        className="w-full flex flex-col items-center gap-4"
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.2
        }}>
        <motion.div variants={variants} className="w-full flex justify-center">
          <ContactForm />
        </motion.div>
        <motion.div variants={variants} className="w-full flex justify-center">
          <ContactIconSection />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
