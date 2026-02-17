"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import heroImg from '../../public/hero.jpg';

export default function Hero() {

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpSoft = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section>
      <div className="mx-auto flex flex-col px-[3.75vw] pt-24 md:mr-7 md:flex-row md:items-center md:gap-[6vw] md:pt-28">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex w-full justify-center md:w-1/2 md:justify-start"
        >
          <div className="relative w-60 md:w-142.5">
            <div className="overflow-hidden pb-[142.857%]">
              <Image
                src={heroImg}
                alt="Flower image"
                fill
                className="absolute top-0 left-0 rounded-t-[9999px] object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="mt-10 mb-25 flex w-full flex-col items-center justify-center text-center whitespace-nowrap">
          <motion.h1
            variants={fadeUpSoft}
            initial="hidden"
            animate="show"
            className="text-[clamp(3.2rem,8vw,5.75rem)] leading-[0.95] font-medium whitespace-nowrap"
          >
            Live your life
            <br />
            in full bloom
          </motion.h1>

          <p className="mt-7 text-[clamp(1.1rem,2.2vw,1.0625rem)] leading-[1.6] font-normal whitespace-nowrap">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <motion.button
            variants={fadeUpSoft}
            initial="hidden"
            animate="show"
            className="mt-9 cursor-pointer border border-[#213614] px-8 py-3 text-[12px] font-medium tracking-[0.05em] whitespace-nowrap uppercase transition-all duration-300 hover:bg-[#213614] hover:text-[#FBF6F1]"
          >
            CONNECT WITH ME &nbsp;→
          </motion.button>
        </div>
      </div>
    </section>
  );
}
