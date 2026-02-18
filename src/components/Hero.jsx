'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroImg from '../../public/hero.png';
import { ArrowRightIcon } from '@/Icon/ArrowRightIcon';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUpSoft = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section aria-label="Hero" className="w-full">
      <div className="mx-auto flex flex-col px-[3.75vw] pt-24 md:mr-7 md:flex-row md:items-center md:gap-[6vw] md:pt-28">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-(--margin-md) flex w-full justify-center md:mb-0 md:w-1/2 md:justify-start"
        >
          <div className="relative w-60 md:w-130">
            <div className="relative aspect-7/10 overflow-hidden rounded-t-[9999px]">
              <Image
                src={HeroImg}
                alt="Dr. Maya Reynolds, PsyD"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 520px"
                priority
                fetchPriority="high"
                placeholder="blur"
                quality={80}
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="mb-(--margin-xl) flex w-full flex-col items-center justify-center text-center md:items-start md:text-left">
          <motion.h1
            variants={fadeUpSoft}
            initial="hidden"
            animate="show"
            className="text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.98] font-medium"
          >
            Anxiety, burnout &amp; trauma therapy in Santa Monica
          </motion.h1>

          <motion.p
            variants={fadeUpSoft}
            initial="hidden"
            animate="show"
            className="mt-(--margin-md) max-w-[56ch] text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.65]"
          >
            For high-achieving adults who feel functional on the outside, but overwhelmed inside.
            In-person in Santa Monica or secure telehealth across California.
          </motion.p>

          <motion.div
            variants={fadeUpSoft}
            initial="hidden"
            animate="show"
            className="mt-(--margin-md)"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#224147] px-6 py-3 text-xs font-medium tracking-[0.08em] uppercase transition-all duration-1000 hover:bg-[#224147] hover:text-[#F4F7F8] focus:ring-2 focus:ring-[#224147]/30 focus:outline-none"
              aria-label="Schedule a consultation with Dr. Maya Reynolds"
            >
              Schedule a consultation
              <ArrowRightIcon />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
