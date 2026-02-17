'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import specialty1 from '../../public/specialty-1.jpg';
import specialty2 from '../../public/specialty-2.jpg';
import specialty3 from '../../public/specialty-3.png';

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
  },
};

const viewportOnce = { once: true, amount: 0.35 };

export default function Specialties() {
  const specialties = [
    {
      title: 'Self-Esteem',
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: specialty1,
      alt: 'Person in contemplative moment',
    },
    {
      title: 'Relationships',
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: specialty2,
      alt: 'Person sitting outdoors',
    },
    {
      title: 'Burnout',
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: specialty3,
      alt: 'Person reading by bookshelf',
    },
  ];

  return (
    <section className="py-[clamp(3rem,7vw,6rem)]">
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-medium"
      >
        My Specialties
      </motion.h2>

      <div className="mx-auto mt-12 px-[3.75vw] md:mt-16 lg:mt-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <div key={index} className="flex flex-col border border-[#223614] bg-[#E5E0DA] p-5">
              <motion.h3
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ delay: 0.3 }}
                className="text-[20px] font-medium"
              >
                {specialty.title}
              </motion.h3>

              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[15px] leading-[22.9696px]"
              >
                {specialty.description}
              </motion.p>

              <div className="mt-auto flex justify-center pt-8">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="relative aspect-square w-75 overflow-hidden rounded-full"
                >
                  <Image
                    src={specialty.image}
                    alt={specialty.alt}
                    fill
                    className={`object-cover ${index === 0 ? 'object-left' : 'object-bottom'}`}
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
