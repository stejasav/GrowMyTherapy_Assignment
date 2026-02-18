'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import FaqImg from '../../public/therapy-faq.png';

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
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Do you offer in-person and online therapy?',
      answer:
        'Yes. I offer in-person therapy from my Santa Monica office, and secure telehealth sessions for clients located anywhere in California.',
    },
    {
      question: 'What do you help with most often?',
      answer:
        'My work often focuses on anxiety, panic, trauma, burnout, perfectionism, and high internal pressure especially for high achieving adults who feel functional on the outside but overwhelmed inside.',
    },
    {
      question: 'What is your approach to therapy?',
      answer:
        'My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving space for reflection and depth. I integrate CBT, EMDR, mindfulness based practices, and body oriented techniques.',
    },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full py-25">
      <div className="mx-auto flex w-full max-w-300 flex-col gap-10 px-6 md:flex-row md:items-center">
        {/* Image */}
        <motion.div
          variants={fadeUpImage}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="w-full md:w-1/2"
        >
          <div className="flex justify-center md:justify-start">
            <div className="relative w-58.75 md:w-102.5">
              <div className="relative overflow-hidden rounded-t-[9999px]">
                <div className="pb-[150%]" />
                <Image
                  src={FaqImg}
                  alt="Girl thinking about questions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <div className="w-full md:w-1/2">
          <motion.h2
            variants={fadeUpText}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mb-6 text-[clamp(34px,5vw,50.5px)] leading-[1.12] font-medium text-(--text) md:mb-12"
          >
            FAQs
          </motion.h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeUpText}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  className="border-t border-(--text)/20 last:border-b last:border-(--text)/20"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full cursor-pointer items-center py-4 text-left focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                      <span className="absolute h-px w-8 bg-(--text)" />
                      <span
                        className={`absolute h-8 w-px bg-(--text) transition-transform duration-300 ${
                          isOpen ? '-rotate-90' : ''
                        }`}
                      />
                    </span>

                    <span className="pl-7.5 text-[22px] leading-[1.2] font-medium text-(--text) sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[41.92px]">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-8 text-[16px] leading-[1.75] text-(--text)/82 md:text-[17px] lg:text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
