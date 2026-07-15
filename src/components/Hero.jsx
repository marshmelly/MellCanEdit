import { useEffect, useState } from 'react';
import { reelFrames } from '../data/content';

const pad = (n) => String(n).padStart(2, '0');

export default function Hero() {
  // Live timecode ticker: hh:mm:ss:frame at 30fps, purely decorative.
  const [tc, setTc] = useState({ h: 0, m: 0, s: 2, f: 14 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTc((prev) => {
        let { h, m, s, f } = prev;
        f += 1;
        if (f > 29) { f = 0; s += 1; }
        if (s > 59) { s = 0; m += 1; }
        if (m > 59) { m = 0; h += 1; }
        return { h, m, s, f };
      });
    }, 1000 / 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow mono">
          <span className="rec-dot"></span>
          {` ${pad(tc.h)}:${pad(tc.m)}:${pad(tc.s)}:${pad(tc.f)} — SHOWREEL 001`}
        </div>

        <h1 className="hero-title">
          Frame by frame,<br />brand by <span className="accent">brand.</span>
        </h1>

        <p className="hero-sub">
          I edit video, shoot photography, and design graphics for brands that need
          content built to stop the scroll — not just look nice sitting still.
          Two years in, fully booked reasons why.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">VIEW THE WORK →</a>
          <a href="#contact" className="btn-secondary">Book a call</a>
        </div>

       <div className="reel-strip">
  {reelFrames.map((frame) => (
    <div key={frame.id} className={`reel-frame ${frame.id}`}>
      
      <img
        src={frame.image}
        alt={frame.tag}
        className="reel-image"
      />

      <span className="gtag mono">{frame.tag}</span>

    </div>
  ))}
</div>
      </div>
    </header>
  );
}
