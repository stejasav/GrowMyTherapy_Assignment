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

  const items = [
    {
      title: 'Who I Work With',
      content:
        'I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high achieving, thoughtful, and self-aware but internally feel exhausted, stuck in overthinking, or emotionally on edge.',
    },
    {
      title: 'What I Help With Most',
      content:
        'My work often focuses on anxiety, panic, trauma, and burnout. Clients often describe feeling “functional” on the outside while privately struggling with constant worry, tension in their body, difficulty sleeping, or feeling like they’re always bracing for something to go wrong.',
    },
    {
      title: 'My Approach',
      content:
        'Therapy is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. My goal is not just symptom relief, but helping you build insight, resilience, and a stronger relationship with yourself over time.',
    },
    {
      title: 'Methods I Integrate',
      content:
        'I integrate evidence based methods such as cognitive behavioral therapy (CBT), EMDR, mindfulness based practices, and body oriented techniques to support both the emotional and physiological sides of what you’re experiencing.',
    },
    {
      title: 'Trauma Work',
      content:
        'Trauma work is paced carefully, with an emphasis on safety and stabilization. I work with both single incident trauma and more complex, long standing patterns that may stem from childhood, relationships, or chronic stress with a focus on feeling more regulated in daily life.',
    },
    {
      title: 'Session Options',
      content:
        'I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.',
    },
  ];

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="flex min-h-[66vh] w-full items-center justify-center bg-(--bg-2) py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-140 flex-col items-center px-6">
        <motion.h2
          variants={fadeUpRow}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-7 text-center text-[32px] leading-[1.13] font-medium text-(--text) sm:text-[35px] md:text-[37.402px] md:leading-[42.1895px]"
        >
          How I Work
        </motion.h2>

        <div className="w-full border-t border-(--text)/20">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpRow}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="border-b border-(--text)/20"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full cursor-pointer items-center justify-between py-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-(--text)/40 focus-visible:ring-offset-4 focus-visible:ring-offset-(--bg) focus-visible:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-[22px] leading-[1.2] font-normal text-(--text)">
                  {item.title}
                </span>

                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <span className="absolute h-px w-4 bg-(--text)" />
                  <span
                    className={`absolute h-4 w-px bg-(--text) transition-transform duration-300 ${
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
                <p className="pl-12 text-left text-[18px] leading-[1.6] font-normal text-(--text)/82">
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
