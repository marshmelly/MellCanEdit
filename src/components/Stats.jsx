import useReveal from '../hooks/useReveal';
import { stats } from '../data/content';

export default function Stats() {
  const ref = useReveal();

  return (
    <div className="stats-bar reveal" ref={ref}>
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <div className="stat-num mono">{stat.num}</div>
          <div className="stat-label mono">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
