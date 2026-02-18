'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import WomanSitting from '../../public/woman-sitting-left.png';

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

const viewportOnce = { once: true, amount: 0.35 };

export default function GetInTouch() {
  return (
    <section className="w-full bg-(--bg-2) md:h-[85.5%]">
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
            src={WomanSitting}
            alt="Woman sitting in a calm space"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            placeholder="blur"
          />
        </motion.div>

        {/* Text */}
        <div className="order-2 flex w-full flex-col text-(--text) md:order-1 md:h-full md:w-[55%]">
          <div className="p-(--margin-md) md:flex md:flex-1 md:flex-col md:justify-center md:py-0">
            <motion.h2
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-[clamp(2.5rem,4vw,4.2rem)] leading-[1.05] font-[520] tracking-[-0.02em]"
            >
              Feel more grounded inside and out.
            </motion.h2>

            <motion.div
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-(--margin-md) space-y-(--margin-sm) text-[15px] leading-[1.85] sm:text-[15.5px] md:text-[17px] lg:text-[19px]"
            >
              <p>
                Many high-achieving adults appear functional on the outside while quietly dealing
                with constant worry, tension, poor sleep, or a lingering sense that something might
                go wrong.
              </p>
              <p>
                Therapy offers space to slow down, feel more regulated, and build sustainable ways
                of living using a collaborative approach that integrates CBT, EMDR, mindfulness, and
                body-based techniques.
              </p>
            </motion.div>
          </div>

          <motion.a
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            href="#contact"
            className="mt-auto border-t border-(--text) bg-transparent px-[3.75vw] py-7 text-center transition-colors duration-1000 hover:bg-(--text) hover:text-(--bg) focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none"
          >
            <span className="inline-block text-[13.696px] font-semibold tracking-[0.12em] uppercase">
              Get in touch
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
