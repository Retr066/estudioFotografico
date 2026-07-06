import CtaBanner from '@/components/home/CtaBanner';
import Faq from '@/components/home/Faq';
import Gallery from '@/components/home/Gallery';
import Highlights from '@/components/home/Highlights';
import Hero from '@/components/home/Hero';
import Manifesto from '@/components/home/Manifesto';
import Process from '@/components/home/Process';
import RestorationShowcase from '@/components/home/RestorationShowcase';
import ServicesBento from '@/components/home/ServicesBento';
import SocialStrip from '@/components/home/SocialStrip';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesBento />
      <Process />
      <RestorationShowcase />
      <Gallery />
      <Highlights />
      <Testimonials />
      <SocialStrip />
      <Faq />
      <CtaBanner />
    </>
  );
};

export default Home;
