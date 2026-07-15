import useReveal from '../hooks/useReveal';
import { tracks } from '../data/content';

export default function Capability() {
  const headRef = useReveal();
  const tracksRef = useReveal();

  return (
    <section id="capability">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="section-kicker mono">TIMELINE / TRACKS</div>
          <h2 className="section-title">Three tracks, one output: content that converts.</h2>
          <p className="section-desc">
            Every project runs like a real timeline — video, stills, and design layered
            together so the final cut is consistent, on-brand, and ready to publish.
          </p>
        </div>

        <div className="tracks reveal" ref={tracksRef}>
          {tracks.map((track) => (
            <div className="track" key={track.id}>
              <div className="track-id mono">{track.id}</div>
              <div className="track-name">{track.name}</div>
              <div className="track-desc">{track.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
