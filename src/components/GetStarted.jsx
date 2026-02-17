'use client';

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
    <section className="min-h-[50vh] w-full bg-[#7E7B46] py-16 sm:py-20 md:min-h-[68vh] md:py-24">
      <div className="mx-auto flex max-w-225 flex-col items-center px-6 text-center sm:px-8 md:max-w-250 lg:max-w-281.25">
        <motion.h2
          custom={0}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-[30px] leading-9 font-medium text-[#FBF6F1] sm:text-[36px] sm:leading-10.5 md:text-[41.92px] md:leading-[47.2858px]"
        >
          Get started today.
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-4 max-w-130 text-[16px] leading-6.5 text-[#FBF6F1] sm:mt-6 sm:text-[18px] sm:leading-7.25 md:mt-10 md:max-w-145 md:text-[19.456px] md:leading-[31.1296px] lg:max-w-162.5"
        >
          Ready to take the first step towards a happier, healthier you?
          <br />
          Contact me to book your first session. I look forward to starting this therapeutic journey
          with you.
        </motion.p>

        <motion.a
          custom={2}
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          href="#"
          className="mt-10 inline-flex items-center border border-[#FBF6F1] px-6 py-3 text-[13px] tracking-[0.08em] text-[#FBF6F1] uppercase transition-colors duration-900 hover:bg-[#FBF6F1] hover:text-[#7E7B46] sm:mt-14 sm:px-8 sm:text-[14px] md:mt-19 md:text-[14.5732px]"
        >
          GET IN TOUCH &nbsp;→
        </motion.a>
      </div>
    </section>
  );
}
