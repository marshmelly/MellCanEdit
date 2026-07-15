import useReveal from '../hooks/useReveal';
import { workItems } from '../data/content';

export default function Work() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <div className="section-kicker mono">PORTFOLIO</div>
          <h2 className="section-title">A few frames from recent projects.</h2>
          <p className="section-desc">
            Swap these placeholders for your real thumbnails, stills, and reel exports —
            each card is sized and tagged the way a client's asset library would be.
          </p>
        </div>

        <div className="work-grid reveal" ref={gridRef}>
          {workItems.map((item) => (
            <div
              className={`work-card ${item.id} ${item.size || ''} ${item.layout || ''}`}
              key={item.id}
            >

              {/* ===========================
                  MEDIA (Image / Video)
                  This fills the entire card.
              ============================ */}
              {item.media && (
                <div className="work-media">
                  {item.media.type === 'video' ? (
                    <video
                      src={item.media.src}
                      poster={item.media.poster}
                      controls
                      preload='metadata'
                      playsInline
                    />
                  ) : (
                    <img
                      src={item.media.src}
                      alt={item.title}
                    />
                  )}
                </div>
              )}

              {/* ===========================
                  TEXT OVERLAY
                  Appears on top of the media.
              ============================ */}
              <div className="work-meta">
                <div className="work-tags">
                  <span className="wtag mono">{item.category}</span>
                  <span className="wtag mono">{item.ratio}</span>
                </div>

                <div className="work-title">
                  {item.title}
                </div>

                <div className="work-client">
                  {item.client}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}