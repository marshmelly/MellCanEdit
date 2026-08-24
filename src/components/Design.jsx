import useReveal from '../hooks/useReveal';
import { workItems } from '../data/content';

export default function Design() {
  const headRef = useReveal();
  const gridRef = useReveal();

  // Get only design projects from content.js
  const designWorks = workItems.filter(
    (item) => item.category === 'DESIGN'
  );

  return (
    <main className="design-page">

      {/* =========================
          PAGE HEADER
      ========================= */}
      <section className="design-hero">
        <div className="wrap">

          <div
            className="section-head reveal"
            ref={headRef}
          >
            <div className="section-kicker mono">
              DESIGN PORTFOLIO
            </div>

            <h1 className="section-title">
              Visuals built to make brands stand out.
            </h1>

            <p className="design-intro">
              A selection of branding, social media creatives,
              advertisements and visual design projects.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          DESIGN WORK
      ========================= */}
      <section className="design-work">
        <div className="wrap">

          <div
            className="design-grid reveal"
            ref={gridRef}
          >

            {designWorks.map((item) => (
              <article
                key={item.id}
                className={`design-card ${item.size || ''} ${item.layout || ''}`}
              >

                {/* MEDIA */}
                {item.media && (
                  <div className="design-media">

                    {item.media.type === 'video' ? (
                      <video
                        src={item.media.src}
                        poster={item.media.poster}
                        controls
                        preload="metadata"
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.media.src}
                        alt={item.title}
                        loading="lazy"
                      />
                    )}

                  </div>
                )}

                {/* INFO */}
                <div className="design-meta">

                  <div className="design-tags">

                    <span className="wtag mono">
                      {item.category}
                    </span>

                    <span className="wtag mono">
                      {item.ratio}
                    </span>

                  </div>

                  <h2 className="design-title">
                    {item.title}
                  </h2>

                  <p className="design-client">
                    {item.client}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}