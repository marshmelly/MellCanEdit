import useReveal from '../hooks/useReveal';
import { portfolioCategories } from '../data/content';

export default function Work() {
  const headRef = useReveal();
  const gridRef = useReveal();

 

  return (
    <section id="work">
      <div className="wrap">

        {/* SECTION HEADER */}
        <div
          className="section-head reveal"
          ref={headRef}
        >
          <div className="section-kicker mono">
            PORTFOLIO
          </div>

          <h2 className="section-title">
            Explore my work.
          </h2>
        </div>


        {/* PORTFOLIO GRID */}
        <div
          className="work-grid reveal"
          ref={gridRef}
        >

          {portfolioCategories.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={!item.internal ? '_blank' : undefined}
              rel={
                !item.internal
                  ? 'noopener noreferrer'
                  : undefined
              }
              className={`work-card portfolio-category ${item.id}`}
            >

              {/* PREVIEW IMAGE */}
              <div className="work-media">

                {item.media?.type === 'video' ? (
                  <video
                    src={item.media.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : item.media?.src ? (
                  <img
                    src={item.media.src}
                    alt={item.title}
                  />
                ) : (
                  <div className="portfolio-placeholder">
                    <span className="mono">
                      {item.category}
                    </span>
                  </div>
                )}

              </div>


              {/* CARD INFORMATION */}
              <div className="work-meta">

                <div className="work-tags">
                  <span className="wtag mono">
                    {item.category}
                  </span>

                  <span className="wtag mono">
                    {item.ratio}
                  </span>
                </div>

                <div className="work-title">
                  {item.title}
                </div>

                <div className="work-client">
                  {item.description}
                </div>

                <div className="work-link">
                  ↗ Explore Work
                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}