'use client';

import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  const upAccumRef = useRef(0);

  const UP_REVEAL_THRESHOLD = 160;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;
    upAccumRef.current = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;

      if (currentScrollY <= 10) {
        if (!visible) setVisible(true);
        upAccumRef.current = 0;
        lastScrollYRef.current = currentScrollY;
        return;
      }

      const lastY = lastScrollYRef.current;
      const delta = currentScrollY - lastY;

      if (delta > 0) {
        upAccumRef.current = 0;
        if (currentScrollY > 50 && visible) setVisible(false);
      } else if (delta < 0) {
        upAccumRef.current += Math.abs(delta);
        if (upAccumRef.current >= UP_REVEAL_THRESHOLD && !visible) {
          setVisible(true);
          upAccumRef.current = 0;
        }
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 h-10 w-full bg-[#F4F7F8]/70 px-[3.75vw] py-[1vw] backdrop-blur-md transition-transform duration-300 ease-in-out md:h-auto ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="relative flex items-center justify-between">
          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#224147]/50 focus-visible:ring-offset-4 focus-visible:ring-offset-[#F4F7F8] focus-visible:outline-none md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[#224147] transition-all duration-300 ease-in-out ${
                open ? 'translate-y-1 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#224147] transition-all duration-300 ease-in-out ${
                open ? '-translate-y-1 -rotate-45' : ''
              }`}
            />
          </button>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="absolute right-0 text-right text-[17.8912px] leading-[21.4694px] font-medium md:static md:text-center md:text-[33.28px] md:leading-[39.936px]"
          >
            Dr. Maya Reynolds
          </a>

          <nav className="hidden gap-[37.77px] text-[19.0216px] leading-[32.9728px] md:flex">
            <a href="#specialties" className="transition-opacity duration-200 hover:opacity-70">
              Specialties
            </a>
            <a href="#contact" className="transition-opacity duration-200 hover:opacity-70">
              Contact
            </a>
          </nav>

          <div className="w-8 md:hidden" aria-hidden="true" />
        </div>
      </header>

      {/* Mobile view */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-18 right-0 bottom-0 left-0 z-50 flex flex-col bg-[#F4F7F8]/70 backdrop-blur-md transition-all duration-300 ease-in-out ${
          open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className="flex flex-1 flex-col items-center justify-center gap-8 text-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#specialties"
            onClick={() => setOpen(false)}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            Specialties
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
