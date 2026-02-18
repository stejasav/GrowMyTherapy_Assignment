'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Anxiety from '../../public/anxiety.png';
import Trauma from '../../public/trauma.png';
import Burnout from '../../public/burnout.png';

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const viewportOnce = { once: true, amount: 0.35 };

export default function Specialties() {
  const specialties = [
    {
      title: 'Anxiety & Panic',
      description:
        'Support for chronic worry, overthinking, tension, and sleep disruption especially when you appear functional but feel overwhelmed.',
      image: Anxiety,
      alt: 'Person with Anxiety sitting on a couch',
      objectClass: 'object-center',
    },
    {
      title: 'Trauma Therapy',
      description:
        'Carefully paced trauma work focused on safety, stabilization, and helping you feel more regulated in daily life.',
      image: Trauma,
      alt: 'Girl holding her head in a moment of overwhelm',
      objectClass: 'object-center',
    },
    {
      title: 'Burnout & Perfectionism',
      description:
        'For high performing professionals navigating pressure, exhaustion, and unsustainable standards.',
      image: Burnout,
      alt: 'Woman sitting at a desk with her head in her hands, overwhelmed',
      objectClass: 'object-center',
    },
  ];


  return (
    <section id="specialties" className="py-[clamp(3rem,7vw,6rem)]">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] font-medium"
      >
        Areas I Support
      </motion.h2>

      <div className="mx-auto mt-(--margin-lg) px-[3.75vw] md:mt-(--margin-xl) lg:mt-(--margin-2xl)">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {specialties.map((s, index) => (
            <div key={index} className="flex flex-col bg-(--bg-2) p-5">
              <motion.h3
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="text-center text-[20px] font-medium"
              >
                {s.title}
              </motion.h3>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="mt-(--margin-sm) md:mt-(--margin-md) text-[15px] leading-[1.6] text-(--text)"
              >
                {s.description}
              </motion.p>

              <div className="mt-auto flex justify-center pt-(--margin-sm) md:pt-(--margin-md)">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative aspect-square w-72 overflow-hidden rounded-full"
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    className={`object-cover ${s.objectClass}`}
                    sizes="(max-width: 768px) 288px, 260px"
                    placeholder="blur"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
