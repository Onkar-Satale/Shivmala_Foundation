import { useAnimatedNumber } from "../hooks/useAnimatedNumber";
import { FaUsers, FaHandsHelping, FaUser, FaUserFriends } from "react-icons/fa";
import "./HomeStatsBar.css";

function StatItem({ target, icon: Icon, label, suffix = "", localeFormat = false }) {
  const [n, ref] = useAnimatedNumber(target, {
    duration: 2400,
    pauseMs: 4800,
    loop: true,
  });

  const display = localeFormat ? n.toLocaleString("en-IN") : String(n);

  return (
    <li ref={ref}>
      <span className="home-stats-icon" aria-hidden="true">
        <Icon />
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
          <StatItem target={265} icon={FaUsers} label="Centers" suffix="+" />
          <StatItem target={28} icon={FaUser} label="Members" />
          <StatItem target={37} icon={FaUserFriends} label="Volunteers" />
          <StatItem target={100} icon={FaHandsHelping} label="Donors" suffix="+" />
        </ul>
      </div>
    </section>
  );
}

export default HomeStatsBar;
