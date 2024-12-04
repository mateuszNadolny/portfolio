"use client";
import { ContactForm } from "@/components/contact/contact-form";
import ContactIconSection from "@/components/contact/contact-icon-section";

import { motion } from "framer-motion";

const ContactSection = () => {
  const variants = {
    hidden: { opacity: 0, translateY: -50 },
    visible: { opacity: 1, translateY: 0 },
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };
  return (
    <motion.div
      className="w-full flex flex-col items-center gap-4 z-10 lg:overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.2,
      }}
    >
      <motion.div variants={variants} className="w-full flex justify-center">
        <ContactForm />
      </motion.div>
      <motion.div variants={variants} className="w-full flex justify-center">
        <ContactIconSection />
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
