import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import TimelineRuler from './components/TimelineRuler';
import Capability from './components/Capability';
import Work from './components/Work2';
import Design from './components/Design';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';


/* =========================
   SHARED LAYOUT
========================= */

function Layout() {
  return (
    <>
      <div className="bg-field"></div>

      <Nav />

      <Outlet />

      <Footer />
    </>
  );
}


/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <>
      <Hero />

      <TimelineRuler
        chapter="CH. 01"
        label="CAPABILITY"
        strong="WHAT I DELIVER"
        delay="0s"
      />

      <Capability />

      <TimelineRuler
        chapter="CH. 02"
        label="SELECTED WORK"
        strong="RECENT CUTS"
        delay="-2.6s"
      />

      <Work />

      <Stats />

      <TimelineRuler
        chapter="CH. 03"
        label="TESTIMONIALS"
        strong="FROM THE CLIENTS"
        delay="-5.2s"
      />

      <Testimonials />

      <CTA />
    </>
  );
}


/* =========================
   APP / ROUTES
========================= */

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* DESIGN PORTFOLIO */}
          <Route path="/Design" element={<Design />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}