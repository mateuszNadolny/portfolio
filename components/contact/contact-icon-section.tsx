"use client";
import { ContactIcon } from "@/components/contact/contact-icon";
import { CONTACT_DATA } from "@/constants/contact-data";
import { motion } from "framer-motion";

const ContactIconSection = () => {
  return (
    <div className="w-[90vw] md:w-[30vw] flex flex-col md:flex-row items-center justify-center gap-2 mt-4 mb-6 md:gap-12">
      <div className="flex items-center justify-center gap-12">
        {CONTACT_DATA.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.2,
              delay: i * 0.4,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <ContactIcon key={item.id} title={item.title} url={item.url} />
          </motion.div>
        ))}
      </div>
      <p className="text-neutral-500 text-sm select-all">{`nadolny.dev@gmail.com`}</p>
    </div>
  );
};

export default ContactIconSection;
