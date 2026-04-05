import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  donationCampaigns,
  DONATION_CAROUSEL_MS,
} from "../data/donationCampaigns";
import "./DonationBar.css";

function formatInr(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatPct(raised, goal) {
  const v = Math.round((raised / goal) * 1000) / 10;
  if (Number.isInteger(v)) return `${v}%`;
  return `${v.toFixed(1)}%`;
}

function DonationBar() {
  const n = donationCampaigns.length;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, DONATION_CAROUSEL_MS);
    return () => clearInterval(t);
  }, [n]);

  return (
    <div
      className="donation-carousel"
      role="region"
      aria-label="Fundraising campaigns"
      aria-live="polite"
    >
      <div className="donation-carousel-viewport">
        <div
          className="donation-carousel-track"
          style={{
            transform: `translateX(-${index * (100 / n)}%)`,
            width: `${n * 100}%`,
          }}
        >
          {donationCampaigns.map((c) => {
            const pct = Math.min(100, (c.raised / c.goal) * 100);
            const pctDisplay = formatPct(c.raised, c.goal);
            return (
              <div
                key={c.id}
                className="donation-carousel-panel"
                style={{ width: `${100 / n}%` }}
              >
                <div className="donation-carousel-slide">
                  <div className="donation-bar-inner">
                    <div className="donation-bar-label">
                      <span className="donation-bar-label-text">{c.label}</span>
                    </div>
                    <div className="donation-bar-track">
                      <div className="donation-bar-amount-row">
                        <span className="donation-bar-raised">
                          {formatInr(c.raised)}
                        </span>
                        <span className="donation-bar-pct">{pctDisplay}</span>
                      </div>
                      <div className="donation-bar-progress" aria-hidden="true">
                        <div
                          className="donation-bar-fill"
                          style={{ width: `${Math.min(pct, 100)}%` }}
                        />
                      </div>
                      <p className="donation-bar-goal">
                        of {formatInr(c.goal)} goal ·{" "}
                        <Link to="/contact" className="donation-bar-more">
                          Read More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="donation-carousel-controls">
        <button
          type="button"
          className="donation-carousel-arrow"
          aria-label="Previous campaign"
          onClick={() => go(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="donation-carousel-arrow"
          aria-label="Next campaign"
          onClick={() => go(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default DonationBar;
