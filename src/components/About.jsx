'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import HeroImg from '../../public/hero.png';
import DocInOffice from '../../public/DocInOffice.png';
import { ArrowRightIcon } from '@/Icon/ArrowRightIcon';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUpImage = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="w-full bg-(--bg-2) py-25">
      <div className="mx-auto flex w-full max-w-300 flex-col-reverse gap-1 px-6 md:flex-row md:items-center">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <motion.h2
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-[clamp(34px,5vw,50px)] leading-[1.12] font-medium text-(--text)"
          >
            Hi, I&apos;m Dr. Maya Reynolds
          </motion.h2>

          <motion.p
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.08 }}
            className="mt-(--margin-md) text-[clamp(15px,2vw,20px)] leading-[1.7] text-(--text)"
          >
            I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering
            therapy for adults who feel overwhelmed by anxiety, stress, burnout, or the lingering
            effects of past experiences.
          </motion.p>

          <motion.p
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.12 }}
            className="mt-(--margin-sm) text-[clamp(15px,2vw,20px)] leading-[1.7] text-(--text)"
          >
            My approach is warm, collaborative, and grounded structured enough to feel supportive,
            while still leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness
            based practices, and body oriented techniques to help you feel more regulated in daily
            life.
          </motion.p>

          <motion.p
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.16 }}
            className="mt-(--margin-sm) text-[clamp(15px,2vw,20px)] leading-[1.7] text-(--text)"
          >
            I offer in-person sessions in Santa Monica and secure telehealth for clients across
            California. My goal is not just symptom relief, but helping you build insight,
            resilience, and a stronger relationship with yourself over time.
          </motion.p>

          <motion.div
            variants={fadeUpText}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.18 }}
            className="mt-(--margin-md) flex justify-center md:justify-start"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-(--text)/40 px-6 py-3 text-[clamp(13px,1.4vw,15px)] leading-normal font-semibold tracking-[0.08em] text-(--text) uppercase transition-colors duration-500 hover:bg-(--text) hover:text-(--bg) focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#E9EEF0] focus-visible:outline-none"
            >
              <span className="inline-flex items-center gap-2">
                Schedule a consultation
                <ArrowRightIcon />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Images */}
        <div className="w-full md:w-1/2">
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
                  src={HeroImg}
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover object-left"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  placeholder="blur"
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
                    src={DocInOffice}
                    alt="Doctor sitting in a calm therapy office"
                    fill
                    className="object-cover object-right"
                    sizes="(max-width: 768px) 160px, 280px"
                    placeholder="blur"
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
