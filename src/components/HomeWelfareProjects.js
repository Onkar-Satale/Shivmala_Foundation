import "./HomeWelfareProjects.css";
import { Link } from "react-router-dom";

function HomeWelfareProjects() {
  return (
    <section className="welfare-projects-section">
      <div className="welfare-projects-header">
        <h2>Our Welfare Projects</h2>
        <p className="welfare-projects-sub">SHIVMALA FOUNDATION</p>
      </div>
      
      <div className="welfare-projects-grid">
        <div className="welfare-project-card">
          <div className="welfare-project-text">
            <p>Our organization is dedicated to the core values inside
              each and every child and to real life issues like 
              specific areas. We are bringing real life changes at 
              times, the health of our society changes. Volunteers are 
              those deployed farmers again. It continues every challenge 
              and makes our nation shine brighter.</p>
            <Link to="/initiatives" className="welfare-project-btn">READ MORE</Link>
          </div>
        </div>
        
        <div className="welfare-project-card welfare-project-list">
          <div className="welfare-project-list-col">
            <span className="welfare-project-badge">HEALTH</span>
            <ul>
              <li>Environment & Tree Plantation</li>
              <li>Rural Development</li>
              <li>Skill Training</li>
              <li>Women Empowerment</li>
            </ul>
            <Link to="/initiatives" className="welfare-project-btn">READ MORE</Link>
          </div>
          <div className="welfare-project-list-col">
            <span className="welfare-project-badge">EDUCATION</span>
            <ul>
              <li>Slum Children Education</li>
              <li>Senior Citizen Old Age</li>
              <li>Street Children Education</li>
              <li>Women Empowerment</li>
            </ul>
            <Link to="/initiatives" className="welfare-project-btn">READ MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeWelfareProjects;
