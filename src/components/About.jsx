'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import flowerGuyImg from '../../public/flower-guy.png';
import lilacFlowerImg from '../../public/lilac-flower.png';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUpImage = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpText = {
  hidden: { opacity: 0.1, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section className="w-full bg-[#E5E0DA] py-25">
      <div className="mx-auto flex w-full max-w-300 flex-col-reverse gap-14 px-6 md:flex-row md:items-center">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <motion.h2
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-[clamp(34px,5vw,50px)] leading-[55.8182px] font-medium"
          >
            Hi, I&apos;m Lilac.
          </motion.h2>

          <motion.p
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.08 }}
            className="mt-8 text-[clamp(15px,2vw,20px)] leading-[31.1296px]"
          >
            I&apos;m committed to providing a safe and supportive environment where we can explore
            your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work
            together to navigate the challenges life throws your way.
          </motion.p>

          <motion.div
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.14 }}
            className="mt-12 flex justify-center md:mt-18"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center border border-[#223614]/70 px-6 py-3 text-[clamp(13px,1.4vw,15px)] leading-normal uppercase transition-colors duration-500 hover:bg-[#223614] hover:text-[#E5E0DA]"
            >
              LET&apos;S CHAT &nbsp;→
            </a>
          </motion.div>
        </div>

        {/* Images */}
        <div className="mr-20 w-full md:w-1/2">
          <div className="flex justify-center md:justify-end md:pr-10">
            <div className="relative w-58.75 md:w-102.5">
              <motion.div
                variants={fadeUpImage}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="relative overflow-hidden rounded-t-[9999px]"
              >
                <div className="pb-[150%]" />
                <Image
                  src={flowerGuyImg}
                  alt="Lilac holding flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </motion.div>

              <motion.div
                variants={fadeUpImage}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ delay: 0.18 }}
                className="absolute -right-9 -bottom-17 md:-right-29 md:-bottom-4 lg:-right-32 lg:-bottom-4"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-62.5 md:w-62.5 lg:h-70 lg:w-70">
                  <Image
                    src={lilacFlowerImg}
                    alt="Lilac flower close-up"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 160px, 280px"
                  />
                </div>
              </motion.div>

              <div className="md:h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
