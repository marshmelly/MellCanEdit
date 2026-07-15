export default function TimelineRuler({ chapter, label, strong, delay = '0s' }) {
  return (
    <div className="timeline-ruler">
      <div className="wrap">
        <div className="ruler-track">
          <span className="ruler-label mono">{chapter}</span>
          <div className="ticks">
            <div className="playhead" style={{ animationDelay: delay }}></div>
          </div>
          <span className="ruler-label mono">
            {label} — <b>{strong}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
