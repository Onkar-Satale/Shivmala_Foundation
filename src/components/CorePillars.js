import { Link } from "react-router-dom";
import "./CorePillars.css";

function CorePillars() {
    return (
        <section className="core-pillars-section">
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#111827' }} className="core-pillars-heading">
                Shivmala Foundation चे ४ मुख्य खांब : 
            </h2>
            <div className="grid">
                <div className="pillar-card">
                    <div className="pillar-content">
                        <h3>Modern Education</h3>
                        <p>Empowering rural children and farmers through cutting-edge AI, Robotics, and foundational computer literacy training.</p>
                    </div>
                    <Link to="/pillars/education" className="pillar-btn">Read more</Link>
                </div>
                <div className="pillar-card">
                    <div className="pillar-content">
                        <h3>Healthcare</h3>
                        <p>Delivering essential health services via free medical camps, full-body checkups, and specialized clinics for rural communities.</p>
                    </div>
                    <Link to="/pillars/healthcare" className="pillar-btn">Read more</Link>
                </div>
                <div className="pillar-card">
                    <div className="pillar-content">
                        <h3>Skill Development</h3>
                        <p>Fostering economic independence with short-term vocational courses from beauty services to hardware repairing.</p>
                    </div>
                    <Link to="/pillars/skill-development" className="pillar-btn">Read more</Link>
                </div>
                <div className="pillar-card">
                    <div className="pillar-content">
                        <h3>Environment</h3>
                        <p>Building a sustainable future through massive local tree plantation drives, active stewardship, and social awareness.</p>
                    </div>
                    <Link to="/pillars/environment" className="pillar-btn">Read more</Link>
                </div>
            </div>
        </section>
    );
}

export default CorePillars;