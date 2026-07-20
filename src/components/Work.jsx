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
          <h2 className="section-title">
            A few frames from recent projects.
          </h2>
        </div>

        <div className="work-grid reveal" ref={gridRef}>
          {workItems.map((item) => {
            const Card = item.link ? 'a' : 'div';

            return (
              <Card
                key={item.id}
                href={item.link}
                target={item.link ? "_blank" : undefined}
                rel={item.link ? "noopener noreferrer" : undefined}
                className={`work-card ${item.id} ${item.size || ''} ${item.layout || ''}`}
              >
                {/* ===========================
                    MEDIA
                =========================== */}
                {item.media && (
                  <div className="work-media">
                    {item.media.type === 'video' ? (
                      <video
                        src={item.media.src}
                        poster={item.media.poster}
                        controls
                        preload="metadata"
                        playsInline
                        onClick={(e) => e.stopPropagation()}
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
                =========================== */}
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

                  {/* Show a small badge only for linked cards */}
                  {item.link && (
                    <div className="work-link">
                      ↗ View More
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}