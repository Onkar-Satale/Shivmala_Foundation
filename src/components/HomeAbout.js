import React, { useEffect, useRef, useState } from "react";
import "./HomeAbout.css";

const copy = `Shivmala Foundation works with rural communities in Maharashtra to expand access to
quality education, digital skills, and sustainable livelihoods. Through LearnCraft Training Institute
and grassroots partnerships, we support children, youth, and women with practical learning,
health awareness, and community-led initiatives. Our programmes are designed for long-term impact:
building confidence, employability, and civic participation where it matters most.`;

function HomeAbout() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`home-about ${isVisible ? "is-visible" : ""}`} 
      aria-labelledby="home-about-heading"
      ref={sectionRef}
    >
      <div className="home-about-inner">
        <div className="home-about-wrapper">
          <div className="home-about-media">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
              alt="Student engaged in learning at a desk"
              width={560}
              height={700}
              loading="lazy"
            />
          </div>
          <div className="home-about-card">
            <h2 id="home-about-heading" className="home-about-title">
              Best NGO for CSR in India<br />Shivmala Foundation
            </h2>
            <p className="home-about-body">{copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
