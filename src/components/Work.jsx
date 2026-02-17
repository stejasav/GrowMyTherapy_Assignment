'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import womenSitting from '../../public/women-sitting.png';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
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

const revealLR = {
  hidden: { x: '-12%', opacity: 0 },
  show: {
    x: '0%',
    opacity: 1,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Work() {
  return (
    <section className="w-full bg-[#C2BFCB]">
      <div className="flex min-h-[105vh] w-full flex-col md:flex-row">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative min-h-[42vh] w-full md:min-h-0 md:w-1/2"
        >
          <Image
            src={womenSitting}
            alt="Woman sitting peacefully"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <div className="flex w-full flex-col text-[#223614] md:w-1/2 md:pt-22">
          <div className="flex flex-1 flex-col px-[7.2vw] pt-[6.2vw] md:px-[4vw] md:pt-[4.6vw]">
            <motion.h2
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-[clamp(36px,4.3vw,62px)] font-medium md:leading-[68.5363px]"
            >
              You don&apos;t have to do this all <span className="italic">alone.</span>
            </motion.h2>

            <motion.p
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.08 }}
              className="mt-8 text-[clamp(20px,1.35vw,20.6px)] leading-[32.9728px]"
            >
              If you are facing any of these, there&apos;s hope:
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-12 space-y-2 pl-10 text-[clamp(20px,1.35vw,20.6px)] leading-[32.9728px]"
            >
              {[
                'Persistent feelings of sadness or hopelessness',
                'Trouble focusing or making decisions',
                'Difficulty maintaining relationships',
                'Feeling constantly exhausted or unmotivated',
                'A pervasive sense of being overwhelmed',
              ].map((text, i) => (
                <motion.li key={text} className="flex items-start" transition={{ delay: 0.06 * i }}>
                  <span className="mt-[0.75em] mr-2 h-1 w-1 shrink-0 rounded-full bg-[#223614]" />
                  <span className="relative overflow-hidden">
                    <motion.span variants={revealLR} className="inline-block">
                      {text}
                    </motion.span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-7 max-w-[62ch] pb-10 text-[clamp(20px,1.35vw,20.6px)] leading-[32.9728px] md:mt-19">
              <span className="relative inline-block overflow-hidden">
                <motion.span
                  variants={revealLR}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="inline-block"
                >
                  With empathy and guidance, we&apos;ll work together to navigate the challenges
                  life throws your way.
                </motion.span>
              </span>
            </p>
          </div>

          <motion.a
            variants={fadeUpSoft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.12 }}
            href="#"
            className="mt-auto cursor-pointer border-t border-[#223614]/50 px-[7.2vw] py-7 text-center transition-colors duration-700 ease-out hover:bg-[#223614] hover:text-[#E5E0DA] focus-visible:ring-2 focus-visible:ring-[#223614] focus-visible:ring-offset-4 focus-visible:ring-offset-[#C2BFCB] focus-visible:outline-none md:px-[4.8vw]"
          >
            <span className="inline-block text-[15px] tracking-[0.12em] uppercase">
              WORK WITH ME &nbsp;→
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
