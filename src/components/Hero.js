import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { heroSlides, HERO_AUTO_MS } from "../data/heroSlides";
import "./Hero.css";

function Hero() {
  const [index, setIndex] = useState(0);
  const n = heroSlides.length;

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, HERO_AUTO_MS);
    return () => clearInterval(t);
  }, [n]);

  const slide = heroSlides[index];

  return (
    <div className="hero-wrap">
      <section className="hero-banner" aria-label="Welcome" aria-roledescription="carousel">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide-bg${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div style={{ backgroundImage: `url(${s.image})`, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </div>
        ))}
        <div className="hero-banner-overlay" />



        <div className="hero-banner-inner">
          <div key={slide.kicker + slide.headline} className="hero-text-block">
            <h1 className="hero-kicker" style={{fontSize: '1em', marginBottom: '1rem', textTransform: 'uppercase'}}>{slide.kicker}</h1>
            <h2 className="hero-title">{slide.headline}</h2>
            {slide.subheadline && <p className="hero-subheadline" style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '2rem' }}>{slide.subheadline}</p>}
            <div className="hero-buttons">
              <Link to={slide.ctaTo} className="hero-cta">
                {slide.cta}
              </Link>
              {slide.cta2 && (
                <Link to={slide.ctaTo2} className="hero-cta hero-cta-secondary" style={{ marginLeft: '1rem', backgroundColor: 'transparent', border: '2px solid #fff' }}>
                  {slide.cta2}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
