'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import bookCoffee from '../../public/book-coffee.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0.1, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

const viewportOnce = { once: true, amount: 0.30 };

export default function GetInTouch() {
  return (
    <section className="mb-1 w-full bg-[#E5E0DA] md:h-[85.5%]">
      <div className="flex w-full flex-col md:h-full md:flex-row">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-1 min-h-80 w-full md:order-2 md:h-full md:w-[45%]"
        >
          <Image
            src={bookCoffee}
            alt="Flatlay with coffee, notebook, flowers"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text */}
        <div className="order-2 flex w-full flex-col text-[#223614] md:order-1 md:h-full md:w-[55%]">
          <div className="px-[3.75vw] py-16 md:flex md:flex-1 md:flex-col md:justify-center md:py-0">
            <motion.h2
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.05 }}
              className="text-[clamp(2.5rem,4vw,4.2rem)] leading-[1.05] font-[520] tracking-[-0.02em]"
            >
              Live a fulfilling life.
            </motion.h2>

            <motion.div
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.5 }}
              className="mt-8 space-y-4 text-[15px] leading-[1.85] sm:text-[15.5px] md:text-[17px] lg:text-[19px]"
            >
              <p>
                Life can be challenging—especially when you&apos;re trying to balance your personal
                and professional life.
              </p>
              <p>
                It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I want
                you to know that I&apos;m here to help.
              </p>
            </motion.div>
          </div>

          <motion.a
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.5 }}
            href="#contact"
            className="mt-auto border-t border-[#223614] bg-[#E5E0DA] px-[3.75vw] py-7 text-center transition-colors duration-1000 ease-out hover:bg-[#223614] hover:text-[#E5E0DA] focus-visible:ring-2 focus-visible:ring-[#223614] focus-visible:ring-offset-4 focus-visible:ring-offset-[#E5E0DA] focus-visible:outline-none"
          >
            <span className="inline-block text-[13.696px] font-semibold tracking-[0.12em] uppercase">
              GET IN TOUCH &nbsp;→
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
