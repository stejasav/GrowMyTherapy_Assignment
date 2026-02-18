'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import Office1 from '../../public/office1.jpeg';
import Office2 from '../../public/office2.jpeg';
import { ArrowRightIcon } from '@/Icon/ArrowRightIcon';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Office() {
  return (
    <section id="office" className="w-full bg-(--bg-2) py-16 text-(--text)">
      <div className="mx-auto w-full max-w-300 px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-[clamp(34px,5vw,54px)] leading-[1.08] font-medium tracking-[-0.02em]"
            >
              Our office
            </motion.h2>

            <motion.p
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.06 }}
              className="mt-6 max-w-[62ch] text-[clamp(15px,2vw,20px)] leading-[1.65] text-(--text)/82"
            >
              A quiet, private space designed to feel calm and grounding, filled with natural light
              and a comfortable, uncluttered environment. Many clients share that the space itself
              helps them feel more at ease when they arrive.
            </motion.p>

            <motion.p
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-[62ch] text-[clamp(15px,2vw,20px)] leading-[1.65] text-(--text)/82"
            >
              In-person sessions are available in Santa Monica, with secure telehealth across
              California.
            </motion.p>

            <motion.div
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.14 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 border border-(--text)/40 px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-500 hover:bg-(--text) hover:text-(--bg) focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none"
              >
                Schedule a consultation
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="md:col-span-5"
          >
            <div className="rounded-3xl border border-(--text)/15 bg-(--bg) p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.12em] text-(--text) uppercase">
                Office details
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] text-(--text)/70 uppercase">
                    Address
                  </p>
                  <p className="mt-1 leading-[1.6] text-(--text)/82">
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] text-(--text)/70 uppercase">
                    Availability
                  </p>
                  <p className="mt-1 leading-[1.6] text-(--text)/82">
                    In-person in Santa Monica
                    <br />
                    Telehealth across California
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="rounded-full border border-(--text)/15 bg-(--bg-2) px-3 py-1 text-xs text-(--text)/82">
                    Private
                  </span>
                  <span className="rounded-full border border-(--text)/15 bg-(--bg-2) px-3 py-1 text-xs text-(--text)/82">
                    Grounding
                  </span>
                  <span className="rounded-full border border-(--text)/15 bg-(--bg-2) px-3 py-1 text-xs text-(--text)/82">
                    Natural light
                  </span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=123th+Street+45+W,+Santa+Monica,+CA+90401"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 border border-(--text)/40 px-6 py-3 text-xs font-semibold tracking-[0.08em] text-(--text) uppercase transition-colors duration-500 hover:bg-(--text) hover:text-(--bg) focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none"
              >
                View location
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl md:col-span-8"
          >
            <div className="relative aspect-[15.5/10]">
              <Image
                src={Office1}
                alt="Therapy office with natural light and a calm, comfortable setting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 65vw"
                placeholder="blur"
                quality={80}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl md:col-span-4"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={Office2}
                alt="Private, calm counseling space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 35vw"
                placeholder="blur"
                quality={80}
              />
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUpSoft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          transition={{ delay: 0.16 }}
          className="mt-4 text-center text-[14px] leading-[1.6] text-(--text)/70 md:text-left"
        >
          In-person sessions in Santa Monica • Secure telehealth across California
        </motion.p>
      </div>
    </section>
  );
}
