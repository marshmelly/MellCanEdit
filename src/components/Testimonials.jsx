import useReveal from '../hooks/useReveal';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="section-kicker mono">CLIENT NOTES</div>
          <h2 className="section-title">What it's like on set and in the timeline.</h2>
        </div>

        <div className="testi-grid reveal" ref={gridRef}>
          {testimonials.map((t) => (
            <div className="testi-card" key={t.id}>
              <div className="testi-quote-mark">"</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-footer">
                <div className={`testi-avatar ${t.avatarClass}`}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
