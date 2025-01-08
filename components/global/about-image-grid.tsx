"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blurhashToBase64 } from "blurhash-base64";

const AboutImageGrid = () => {
  return (
    <motion.div
      className="max-w-[50vw] w-[50vw] grid grid-cols-1 md:grid-cols-2 space-y-5 lg:-space-x-16 lg:-space-y-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative lg:col-start-1 lg:-rotate-[5deg] lg:row-start-1 lg:col-span-1 transition-transform duration-300 hover:z-30 hover:scale-105">
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
      </div>

      <div className="relative flex justify-center w-full lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:rotate-[2deg] lg:translate-y-16 hover:z-30 transition-transform duration-300 hover:scale-105 w-[160px] h-[160px] lg:w-[250px] lg:h-[250px]">
        <Image
          src="/greece.png"
          alt="Greece"
          fill
          className="rounded-xl "
          placeholder="blur"
          blurDataURL={blurhashToBase64("LBA2TBcH4Txb00%$_MxZ?FibEQXT")}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-xl">
          <p className="text-neutral-100 font-medium">Creete, Greece</p>
        </div>
      </div>

      <div className="relative lg:col-start-2 lg:row-start-2 lg:col-span-1 lg:-translate-x-16 lg:rotate-2 hover:z-30 transition-transform duration-300 hover:scale-105">
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
      </div>
    </motion.div>
  );
};

export default AboutImageGrid;
