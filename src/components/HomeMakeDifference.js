import "./HomeMakeDifference.css";
import { Link } from "react-router-dom";

function HomeMakeDifference() {
  return (
    <section className="difference-section">
      <div className="difference-inner">
        <div className="difference-content">
          <p className="difference-sub">MAKE A DIFFERENCE</p>
          <h2 className="difference-title">We Make a Difference in their Life</h2>
          <p className="difference-desc">
            Shivmala Foundation leads women empowerment, rural development, environment conservation, and awareness campaigns.
            We request you to donate to the poor and support these types of causes to create a lasting, significant impact.
          </p>
          <Link to="/contact" className="difference-btn">
            READ MORE
          </Link>
        </div>
        <div className="difference-media">
          <div className="difference-media-frame">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80" 
              alt="Making a difference" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMakeDifference;
