"use client";
import { ContactIcon } from "@/components/contact/contact-icon";
import { CONTACT_DATA } from "@/constants/contact-data";
import { motion } from "framer-motion";

const ContactIconSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-[90%] lg:w-[30%]">
      <div className="flex justify-center gap-4 w-full">
        {CONTACT_DATA.map((item, i) => (
          <motion.div
            key={item.id}
            className="w-full"
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
    </div>
  );
};

export default ContactIconSection;
