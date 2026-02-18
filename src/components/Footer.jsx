'use client';

import { motion } from 'framer-motion';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUpRow = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.18,
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto min-h-96 w-full max-w-400 px-6 py-9 md:px-12 lg:px-18">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-8">
          <div className="text-center md:text-left">
            <motion.h3
              custom={0}
              variants={fadeUpRow}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mb-6 text-[32px] leading-[1.13] font-medium text-(--text) sm:text-[34px] md:mb-8 md:text-[37.402px] md:leading-[42.1895px]"
            >
              Dr. Maya Reynolds
            </motion.h3>

            <motion.div
              custom={1}
              variants={fadeUpRow}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-[16px] leading-[1.6] text-(--text)/82 sm:text-[17px] md:text-[19.456px] md:leading-[31.1296px]"
            >
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpRow}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 flex flex-col text-[16px] leading-[1.6] sm:text-[17px] md:mt-8 md:text-[19.456px] md:leading-[31.1296px]"
            >
              <a
                href="mailto:hello@drmayareynolds.com"
                className="text-(--text) underline underline-offset-4"
              >
                hello@drmayareynolds.com
              </a>
              <a href="tel:+13105551234" className="text-(--text) underline underline-offset-4">
                (310) 555-1234
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col justify-start gap-10 text-center md:flex-row md:gap-16 md:text-left lg:gap-20">
            <div>
              <motion.h4
                custom={0}
                variants={fadeUpRow}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mb-6 text-[26px] leading-[1.15] font-medium text-(--text) sm:text-[28px] md:mb-8 md:text-[30.268px] md:leading-[34.8687px]"
              >
                Session Options
              </motion.h4>

              <motion.div
                custom={1}
                variants={fadeUpRow}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="text-[16px] leading-[1.6] font-normal text-(--text)/82 sm:text-[17px] md:text-[19.456px] md:leading-[31.1296px]"
              >
                <p>In-person (Santa Monica)</p>
                <p>Secure telehealth (California)</p>
              </motion.div>
            </div>

            <nav aria-label="Footer navigation">
              <motion.h4
                custom={0}
                variants={fadeUpRow}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mb-6 text-center text-[26px] leading-[1.15] font-medium text-(--text) sm:text-[28px] md:mb-8 md:text-right md:text-[30.268px] md:leading-[34.8687px]"
              >
                Find
              </motion.h4>

              <motion.div
                custom={1}
                variants={fadeUpRow}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="flex flex-col text-center text-[16px] leading-[1.6] text-(--text)/82 sm:text-[17px] md:text-right md:text-[19.456px] md:leading-[31.1296px]"
              >
                <a href="#specialties" className="underline underline-offset-4">
                  Specialties
                </a>
                <a href="#about" className="underline underline-offset-4">
                  About
                </a>
                <a href="#contact" className="underline underline-offset-4">
                  Contact
                </a>
              </motion.div>
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--bg-2)">
        <div className="mx-auto flex min-h-54.25 w-full max-w-400 flex-col justify-between px-6 py-1.5 md:px-0 md:py-4.5">
          <div>
            <motion.nav
              custom={3}
              variants={fadeUpRow}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              aria-label="Legal"
              className="text-center sm:pt-5 md:pt-7.5"
            >
              <ul className="mx-auto mb-4 flex max-w-275 flex-wrap justify-center gap-x-6 text-center text-[16px] leading-[25.6px] font-normal text-(--text)/82 md:gap-y-3">
                <li>
                  <a href="#" className="underline underline-offset-4">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline underline-offset-4">
                    Website Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="underline underline-offset-4">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </motion.nav>

            <motion.p
              custom={3}
              variants={fadeUpRow}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-center text-[16px] leading-[25.6px] font-normal text-(--text)/82"
            >
              In-person therapy in Santa Monica, CA • Telehealth available across California.
            </motion.p>
          </div>

          <motion.p
            custom={4}
            variants={fadeUpRow}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-6 text-center text-[16px] leading-[25.6px] font-normal text-(--text)/82"
          >
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
