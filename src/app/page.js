import dynamic from 'next/dynamic';

import Header from '@/components/Header';
import Hero from '@/components/Hero';

const GetInTouch = dynamic(() => import('@/components/GetInTouch'));
const Specialities = dynamic(() => import('@/components/Specialties'));
const Work = dynamic(() => import('@/components/Work'));
const About = dynamic(() => import('@/components/About'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Background = dynamic(() => import('@/components/Background'));
const GetStarted = dynamic(() => import('@/components/GetStarted'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className='h-screen'>
      <Header />
      <Hero />
      <GetInTouch />
      <Specialities />
      <Work />
      <About />
      <FAQ />
      <Background />
      <GetStarted />
      <Footer />
    </main>
  );
}
