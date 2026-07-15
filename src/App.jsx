import Nav from './components/Nav';
import Hero from './components/Hero';
import TimelineRuler from './components/TimelineRuler';
import Capability from './components/Capability';
import Work from './components/Work';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="bg-field"></div>

      <Nav />
      <Hero />

      <TimelineRuler chapter="CH. 01" label="CAPABILITY" strong="WHAT I DELIVER" delay="0s" />
      <Capability />

      <TimelineRuler chapter="CH. 02" label="SELECTED WORK" strong="RECENT CUTS" delay="-2.6s" />
      <Work />

      <Stats />

      <TimelineRuler chapter="CH. 03" label="TESTIMONIALS" strong="FROM THE CLIENTS" delay="-5.2s" />
      <Testimonials />

      <CTA />
      <Footer />
    </>
  );
}
