'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import faqFlowerImg from '../../public/faq-flower.png';

const viewportOnce = { once: true, amount: 0.35 };

const fadeUpImage = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUpText = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'Do you take insurance?', answer: 'Answer goes here.' },
    { question: 'What are your rates?', answer: 'Answer goes here.' },
    { question: 'Do you have any openings?', answer: 'Answer goes here.' },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full py-25">
      <div className="mx-auto flex w-full max-w-300 flex-col gap-5 px-6 md:flex-row md:items-center">
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
                  src={faqFlowerImg}
                  alt="Lavender flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
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
            className="leading-[ 55.8182px] mb-6 md:mb-12 text-[clamp(34px,5vw,50.5px)] font-medium"
          >
            FAQs
          </motion.h2>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUpText}
                custom={index + 1}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="border-t border-[#223614]/110 last:border-b"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center py-3.75 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <span className="absolute h-px w-8 bg-[#223614]" />
                    <span
                      className={`absolute h-8 w-px bg-[#223614] transition-transform duration-300 ${
                        openIndex === index ? '-rotate-90' : ''
                      }`}
                    />
                  </span>

                  <span className="pl-7.5 text-[22px] leading-[1.2] font-medium text-[#223614] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[41.92px]">
                    {faq.question}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 text-[16px] leading-[1.7] text-[#223614] md:text-[17px] lg:text-[18px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
