import { profile } from '../data/content';

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">
          <span className="rec-dot"></span>
          {profile.name.toUpperCase()}
        </div>
        <ul className="navlinks">
          <li><a href="#work">Work</a></li>
          <li><a href="#capability">Capability</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <a href="#contact" className="nav-cta">START A PROJECT →</a>
      </div>
    </nav>
  );
}
