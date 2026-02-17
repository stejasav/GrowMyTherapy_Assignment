import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GetInTouch from '@/components/GetInTouch';
import Specialities from '@/components/Specialties';
import Work from '@/components/Work';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Background from '@/components/Background';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="h-screen">
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
