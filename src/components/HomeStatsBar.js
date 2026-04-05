import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
import "./HomeStatsBar.css";

function StatItem({ target, icon, label, suffix = "", localeFormat = false }) {
  const [n, ref] = useAnimatedNumber(target, {
    duration: 2400,
    pauseMs: 4800,
    loop: true,
  });

  const display = localeFormat ? n.toLocaleString("en-IN") : String(n);

  return (
    <li ref={ref}>
      <span className="home-stats-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="home-stats-value" aria-live="polite">
        {display}
        {suffix}
      </span>
      <span className="home-stats-label">{label}</span>
    </li>
  );
}

function HomeStatsBar() {
  return (
    <section className="home-stats" aria-label="Impact at a glance">
      <div className="home-stats-inner">
        <ul className="home-stats-grid">
          <StatItem
            target={12400}
            icon="👥"
            label="Visitors"
            suffix="+"
            localeFormat
          />
          <StatItem target={180} icon="🤲" label="Donors" suffix="+" />
          <StatItem target={28} icon="👤" label="Members" />
          <StatItem target={45} icon="🤝" label="Volunteers" suffix="+" />
        </ul>
      </div>
    </section>
  );
}

export default HomeStatsBar;
