import { Link } from "react-router-dom";
import "./HomeCampaignCards.css";

const campaigns = [
  {
    title: "Support digital learning in villages",
    goal: "₹5,00,000",
    raised: "₹1,25,000",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Donate to rural children’s education",
    goal: "₹8,00,000",
    raised: "₹2,40,000",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Skill training & women’s livelihoods",
    goal: "₹6,50,000",
    raised: "₹90,000",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
];

function HomeCampaignCards() {
  return (
    <section className="home-campaigns" aria-labelledby="campaigns-heading">
      <div className="home-campaigns-inner">
        <h2 id="campaigns-heading" className="visually-hidden">
          Support our campaigns
        </h2>
        <ul className="home-campaigns-grid">
          {campaigns.map((c) => (
            <li key={c.title} className="home-campaign-card">
              <div className="home-campaign-media">
                <img src={c.image} alt="" width={400} height={240} loading="lazy" />
              </div>
              <div className="home-campaign-body">
                <h3>{c.title}</h3>
                <p className="home-campaign-stats">
                  <span>Goal {c.goal}</span>
                  <span>Raised {c.raised}</span>
                </p>
                <Link to="/contact" className="home-campaign-btn">
                  Read more
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
