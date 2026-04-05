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
            style={{ backgroundImage: `url(${s.image})` }}
            aria-hidden={i !== index}
          />
        ))}
        <div className="hero-banner-overlay" />

        <button
          type="button"
          className="hero-nav hero-nav--prev"
          aria-label="Previous slide"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="hero-nav hero-nav--next"
          aria-label="Next slide"
          onClick={() => go(1)}
        >
          ›
        </button>

        <div className="hero-banner-inner">
          <div key={slide.kicker + slide.headline} className="hero-text-block">
            <p className="hero-kicker">{slide.kicker}</p>
            <h1 className="hero-title">{slide.headline}</h1>
            <Link to={slide.ctaTo} className="hero-cta">
              {slide.cta}
            </Link>
          </div>
        </div>

        <div className="hero-slant" aria-hidden="true" />
      </section>
    </div>
  );
}

export default Hero;
