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
        <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem', fontSize: '2rem' }}>Shivmala Foundation चा Impact - Live Numbers</h2>
        <ul className="home-stats-grid">
          <StatItem target={1000} icon={FaUsers} label="Citizens - Shivmala Foundation Digital Literacy Mission 2026" suffix="+" />
          <StatItem target={10000} icon={FaHandsHelping} label="Trees - Shivmala Foundation Environment Drive" suffix="+" />
          <StatItem target={50} icon={FaUser} label="Schools - Shivmala Foundation Digital Board Installation" suffix="+" />
          <StatItem target={1200} icon={FaUserFriends} label="Students - Shivmala Foundation Knowledge Test" suffix="+" />
        </ul>
      </div>
    </section>
  );
}

export default HomeStatsBar;
