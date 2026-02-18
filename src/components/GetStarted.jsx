'use client';

import { ArrowRightIcon } from '@/Icon/ArrowRightIcon';
import { motion } from 'framer-motion';

const viewportOnce = { once: true, amount: 0.4 };

const fadeUpRow = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.15,
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function GetStarted() {
  return (
    <section className="min-h-[50vh] w-full bg-(--text) py-16 sm:py-20 md:min-h-[68vh] md:py-24">
      <div className="mx-auto flex max-w-225 flex-col items-center px-6 text-center sm:px-8 md:max-w-250 lg:max-w-281.25">
        <motion.h2
          custom={0}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-[30px] leading-9 font-medium text-(--bg) sm:text-[36px] sm:leading-10.5 md:text-[41.92px] md:leading-[47.2858px]"
        >
          Get started with therapy in Santa Monica.
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-4 max-w-130 text-[16px] leading-6.5 text-(--bg) sm:mt-6 sm:text-[18px] sm:leading-7.25 md:mt-10 md:max-w-145 md:text-[19.456px] md:leading-[31.1296px] lg:max-w-162.5"
        >
          If you’ve been feeling overwhelmed by anxiety, burnout, panic, or the lingering effects of
          past experiences, you don’t have to navigate it alone.
          <br />I offer in-person sessions in Santa Monica and secure telehealth for clients across
          California.
        </motion.p>

        <motion.a
          custom={2}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          href="#contact"
          className="mt-10 inline-flex items-center border border-(--bg) px-6 py-3 text-[13px] font-semibold tracking-[0.08em] text-(--bg) uppercase transition-colors duration-500 hover:bg-(--bg) hover:text-(--text) focus-visible:ring-2 focus-visible:ring-(--bg)/60 focus-visible:ring-offset-4 focus-visible:ring-offset-(--text) focus-visible:outline-none sm:mt-14 sm:px-8 sm:text-[14px] md:mt-19 md:text-[14.5732px]"
        >
          <span className="inline-flex items-center gap-2">
            Get in touch
            <ArrowRightIcon />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
