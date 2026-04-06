import { Link } from "react-router-dom";
import "./HomeCampaignCards.css";

const campaigns = [
  {
    title: "Health Programmes",
    goal: "₹5,00,000.00",
    raised: "₹1,25,000.00",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    badge: "Health",
    percentage: "25%"
  },
  {
    title: "Donate To Poor Children",
    goal: "₹8,00,000.00",
    raised: "₹2,40,000.00",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773f?auto=format&fit=crop&w=800&q=80",
    badge: "Education",
    percentage: "30%"
  },
  {
    title: "Support Coronavirus Relief",
    goal: "₹6,50,000.00",
    raised: "₹90,000.00",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80",
    badge: "Relief",
    percentage: "14%"
  },
];

function HomeCampaignCards() {
  return (
    <section className="home-campaigns" aria-labelledby="campaigns-heading">
      <div className="home-campaigns-inner">
        <div className="home-campaigns-header">
          <h2 id="campaigns-heading">Latest Causes</h2>
          <p className="home-campaigns-sub">HELP US NOW</p>
        </div>
        <ul className="home-campaigns-grid">
          {campaigns.map((c) => (
            <li key={c.title} className="home-campaign-card">
              <div className="home-campaign-media">
                <img src={c.image} alt="" width={400} height={240} loading="lazy" />
                <span className="home-campaign-badge">{c.badge}</span>
              </div>
              <div className="home-campaign-body">
                <h3>{c.title}</h3>
                
                <div className="home-campaign-progress-bar">
                  <div className="home-campaign-progress-fill" style={{ width: c.percentage }}></div>
                </div>

                <div className="home-campaign-stats">
                  <div className="home-campaign-stat-item">
                    Raised: <span>{c.raised}</span>
                  </div>
                  <div className="home-campaign-stat-item">
                    Goal: <span>{c.goal}</span>
                  </div>
                </div>
                
                <Link to="/contact" className="home-campaign-btn">
                  Donate Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeCampaignCards;
