'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import PersonInTherapy from '../../public/person-in-therapy2.png';
import { ArrowRightIcon } from '@/Icon/ArrowRightIcon';

const viewportOnce = { once: true, amount: 0.3 };

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const bulletReveal = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
    <section className="w-full bg-(--bg-3)">
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
            src={PersonInTherapy}
            alt="Person in therapy session, sitting on a couch and talking to a therapist"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <div className="flex w-full flex-col text-[#223614] md:w-1/2">
          <div className="md:py-auto flex flex-1 flex-col px-[7.2vw] pt-[6.2vw] md:px-[4vw]">
            <motion.h2
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-[clamp(36px,4.3vw,62px)] font-medium md:leading-[68.5363px]"
            >
              You don&apos;t have to carry this <span className="italic">alone.</span>
            </motion.h2>

            <motion.p
              variants={fadeUpSoft}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: 0.08 }}
              className="mt-(--margin-sm) text-[clamp(19px,1.35vw,20.6px)] leading-[32.9728px] md:mt-(--margin-md)"
            >
              If any of this feels familiar, therapy can help:
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-(--margin-sm) space-y-2 pl-10 text-[clamp(19px,1.35vw,20.6px)] leading-[32.9728px] md:mt-(--margin-md)"
            >
              {[
                'Persistent worry or overthinking',
                'Physical tension or feeling constantly on edge',
                'Sleep difficulties or ongoing sense of threat',
                'Panic symptoms or sudden overwhelm',
                'Burnout, perfectionism, or unsustainable pressure',
              ].map((text, i) => (
                <motion.li key={text} className="flex items-start" transition={{ delay: 0.06 * i }}>
                  <motion.span
                    variants={bulletReveal}
                    className="mt-[0.75em] mr-2 h-1 w-1 shrink-0 rounded-full bg-(--text)"
                  />
                  <span className="relative overflow-hidden">
                    <motion.span variants={revealLR} className="inline-block">
                      {text}
                    </motion.span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-(--margin-sm) max-w-[62ch] pb-10 text-[clamp(19px,1.35vw,20.6px)] leading-[32.9728px] md:mt-(--margin-md)">
              <span className="relative inline-block overflow-hidden">
                <motion.span
                  variants={revealLR}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="inline-block"
                >
                  Sessions are warm and collaborative, integrating CBT, EMDR, mindfulness, and
                  body-based approaches to support greater daily regulation.
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
            className="mt-8 border-t border-(--text) bg-transparent px-[3.75vw] py-7 text-center transition-colors duration-1000 hover:bg-(--text) hover:text-(--bg) focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none lg:mt-auto"
          >
            <span className="inline-flex items-center justify-center gap-2 text-[15px] font-semibold tracking-[0.12em] uppercase">
              WORK WITH ME
              <ArrowRightIcon />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
