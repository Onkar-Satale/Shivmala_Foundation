import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { category, projectId } = useParams();

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, projectId]);

  if (!projectsData[category] || !projectsData[category][projectId]) {
    // If not found, redirect to an overview or home
    return <Navigate to="/" />;
  }

  const project = projectsData[category][projectId];

  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <div className="project-detail-header-inner">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-category">
            <Link to="/">Home</Link> &raquo; Projects &raquo;{" "}
            <span className="capitalize">{category.replace(/-/g, " ")}</span>
          </p>
        </div>
      </header>

      <section className="project-detail-content">
        <div className="project-detail-container">
          <div className="project-detail-main">
            <div className="project-image-wrapper">
              <img src={project.mainImage} alt={project.title} className="project-main-img" />
              <div className="project-image-overlay">
                <h2>{project.subtitle}</h2>
              </div>
            </div>

            <div className="project-text-content">
              {project.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {project.listItems && project.listItems.length > 0 && (
                <div className="project-list-block">
                  {project.listTitle && <h3>{project.listTitle}</h3>}
                  <ul>
                    {project.listItems.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.highlight && (
                <div className="project-highlight-box">
                  <p>{project.highlight}</p>
                </div>
              )}
            </div>
          </div>
          
          <aside className="project-detail-sidebar">
            <div className="sidebar-widget">
              <h3>Other Projects</h3>
              <ul className="sidebar-links">
                {Object.keys(projectsData[category]).map((key) => {
                  if (key === projectId) return null;
                  return (
                    <li key={key}>
                      <Link to={`/projects/${category}/${key}`}>
                        {projectsData[category][key].title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <div className="sidebar-widget donate-widget">
              <h3>Support Our Cause</h3>
              <p>Your contribution can help us reach more people and create a lasting impact.</p>
              <Link to="/donate" className="btn-donate-sidebar">Donate Now</Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
