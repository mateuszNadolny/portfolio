"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blurhashToBase64 } from "blurhash-base64";
import { containerVariants, itemVariants } from "@/constants/framer-variants";
const AboutImageGrid = () => {
  return (
    <motion.div
      className="flex gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={itemVariants}
        className="relative"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/norway.png"
          alt="Norway"
          width={250}
          height={250}
          placeholder="blur"
          blurDataURL={blurhashToBase64("LBA2TBcH4Txb00%$_MxZ?FibEQXT")}
          className="rounded-xl "
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-xl">
          <p className="text-neutral-100 font-medium">Verdens Ende, Norway</p>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="relative"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="/tunis.png"
          alt="Tunis"
          width={250}
          height={250}
          className="rounded-xl"
          placeholder="blur"
          blurDataURL={blurhashToBase64("LBA2TBcH4Txb00%$_MxZ?FibEQXT")}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-xl">
          <p className="text-black-900 font-bod">Sahara, Tunisia</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutImageGrid;
