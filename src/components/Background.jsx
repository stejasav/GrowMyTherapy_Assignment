'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const viewportOnce = { once: true, amount: 0.35 };


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

export default function Background() {
  const [openIndex, setOpenIndex] = useState(null);

  const backgrounds = [
    {
      title: 'Education',
      content:
        'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
      title: 'Licensure',
      content:
        'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
      title: 'Certifications',
      content:
        'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex min-h-[66vh] w-full items-center justify-center bg-[#E5E0DA] py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-140 flex-col items-center px-6">
        <motion.h2
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-7 text-center text-[32px] leading-[1.13] font-medium sm:text-[35px] md:text-[37.402px] md:leading-[42.1895px]"
        >
          My Professional Background
        </motion.h2>

        <div className="border-t border-[#223614]/110">
          {backgrounds.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpRow}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="border-b border-[#223614]/110"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full cursor-pointer items-center justify-between py-3.75 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-[22.966px] leading-[1.2] font-normal">{item.title}</span>

                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <span className="absolute h-px w-4 bg-[#223614]" />
                  <span
                    className={`absolute h-4 w-px bg-[#223614] transition-transform duration-300 ${
                      openIndex === index ? '-rotate-90' : ''
                    }`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-10' : 'max-h-0'
                }`}
              >
                <p className="pl-12 text-left text-[18.7864px] leading-[30.0582px] font-normal text-[#223614]/90">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
