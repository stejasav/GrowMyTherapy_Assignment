'use client';

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  const upAccumRef = useRef(0);

  const UP_REVEAL_THRESHOLD = 200;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;
    upAccumRef.current = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;
      const lastY = lastScrollYRef.current;
      const delta = currentScrollY - lastY;

      if (delta > 0) {
        upAccumRef.current = 0;

        if (currentScrollY > 50) {
          setVisible(false);
        }
      }

      else if (delta < 0) {
        upAccumRef.current += Math.abs(delta);

        if (upAccumRef.current >= UP_REVEAL_THRESHOLD) {
          setVisible(true);
          upAccumRef.current = 0;
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 flex h-18 w-full items-center justify-between bg-[#FBF6F1] px-[3.75vw] py-[1vw] transition-transform duration-300 ease-in-out md:h-auto ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-[#213614] transition-all duration-300 ease-in-out ${
              open ? 'translate-y-1 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#213614] transition-all duration-300 ease-in-out ${
              open ? '-translate-y-1 -rotate-45' : ''
            }`}
          />
        </button>

        <h1 className="text-center text-[17.8912px] leading-[21.4694px] font-medium md:text-[33.28px] md:leading-[39.936px]">
          Lilac Template
        </h1>

        <nav className="hidden gap-[37.77px] text-[19.0216px] leading-[32.9728px] md:flex">
          <a href="#" className="transition-opacity duration-200 hover:opacity-70">
            Blog
          </a>
          <a href="#" className="transition-opacity duration-200 hover:opacity-70">
            Contact
          </a>
        </nav>
      </header>

      <div
        className={`fixed top-18 right-0 bottom-0 left-0 z-50 flex flex-col bg-[#FBF6F1] transition-all duration-300 ease-in-out ${open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-3xl">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="transition-opacity duration-400 hover:opacity-70"
          >
            Blog
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="transition-opacity duration-400 hover:opacity-70"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
