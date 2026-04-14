import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import "./PillarPage.css";

const pillarData = {
  education: {
    title: "Modern Education",
    subtitle: "AI & Robotics training for rural kids",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    descriptionDark: 
      "Shivmala Foundation brings cutting-edge technology directly to rural classrooms. Our Modern Education initiative introduces AI and Robotics training, bridging the digital divide for students in Bardapur and surrounding regions.",
    descriptionLight:
      "By equipping schools with digital boards and structured curricula, we empower the youth to excel in a rapidly advancing world. Education goes beyond textbooks; we provide hands-on experience with drone technology, app development, and cybersecurity basics.",
    galleryCategory: "Education"
  },
  healthcare: {
    title: "Healthcare",
    subtitle: "Free medical camps and checkups",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    descriptionDark: 
      "Accessible healthcare is a fundamental right. We regularly organize free medical camps across rural Maharashtra, offering full-body checkups, dental clinics, eye exams, and blood donation drives.",
    descriptionLight:
      "Our focus is on preventive care, women's health, and senior citizen awareness to build healthier, resilient communities. Hundreds of volunteers, including expert doctors, systematically cover interior villages bringing life-saving early diagnostics to the doorstep.",
    galleryCategory: "Medical Camp"
  },
  "skill-development": {
    title: "Skill Development",
    subtitle: "Training for youth and women",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80",
    descriptionDark: 
      "We believe in economic independence through targeted skill learning. Our foundation provides free education and short-term courses encompassing beauty services, tailoring, hardware repairing, and digital skills.",
    descriptionLight:
      "This empowers youth and women to start local micro-enterprises and secure stable livelihoods. Post-training mentorship and linkages to CSR-funded toolkits ensure that learners can translate skills into practical business opportunities, drastically lifting local economic standards.",
    galleryCategory: "Free Education"
  },
  environment: {
    title: "Environment",
    subtitle: "Tree plantation drives",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    descriptionDark: 
      "Environmental sustainability is at the core of our rural development strategy. We have successfully launched massive tree plantation drives with careful planning, local soil-testing, and rigorous community involvement.",
    descriptionLight:
      "Local volunteers actively participate in not just planting but nurturing over 10,000+ saplings, fostering a greener ecosystem and broad social awareness. Regular drives along barren stretches and degraded water bodies are rapidly transforming the ecological landscape of Maharashtra.",
    galleryCategory: "Social Awareness"
  }
};

function PillarPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = pillarData[id];
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [id]);

  if (!data) {
    return (
      <div className="pillar-page-not-found">
        <h2>Pillar not found</h2>
        <button className="pillar-photos-btn" onClick={() => navigate("/")}>Return Home</button>
      </div>
    );
  }

  const handleSeePhotos = () => {
    navigate("/gallery/photos/1", { state: { category: data.galleryCategory } });
  };

  return (
    <div className={`pillar-page-wrapper ${animate ? "is-loaded" : ""}`}>
      <SEO 
        title={`${data.title} | Shivmala Foundation Pillars`} 
        description={data.descriptionDark} 
      />
      <div className="pillar-hero">
        <div 
          className="pillar-hero-bg" 
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <div className="pillar-hero-overlay" />
        <div className="pillar-hero-content">
          <h1 className="slide-up-1">{data.title}</h1>
          <p className="slide-up-2">{data.subtitle}</p>
        </div>
      </div>

      <div className="pillar-body-container">
        <div className="pillar-info-box dark-theme-box slide-up-3">
          <h2>About this Initiative</h2>
          <p>{data.descriptionDark}</p>
        </div>
        
        <div className="pillar-info-box light-theme-box slide-up-4">
          <h2>Our Impact Details</h2>
          <p>{data.descriptionLight}</p>
        </div>

        <div className="pillar-action-box slide-up-4">
          <h3>See Our Impact In Action</h3>
          <p>Browse through our visual archives to see how we're making a difference.</p>
          <button className="pillar-photos-btn" onClick={handleSeePhotos}>
            See Photos
          </button>
        </div>
      </div>
    </div>
  );
}

export default PillarPage;
