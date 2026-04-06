import { useState, useEffect, useRef } from "react";
import "./CentersReviews.css";

const reviews = [
  {
    name: "Parul Chauhan",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    text: "I am thankful to Shivmala Foundation and their team for kind help for the placement of the girls.",
    role: "Social Worker"
  },
  {
    name: "Amit Sharma",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    text: "The dedication of the foundation brings immense positive change in our rural communities.",
    role: "Community Leader"
  },
  {
    name: "Priya Desai",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    text: "Incredible work bringing digital literacy and skill training to our youth.",
    role: "Educator"
  },
  {
    name: "Rahul Verma",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Their community programs are truly inspiring and bring people together.",
    role: "Local Volunteer"
  }
];

function CentersReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const totalItems = reviews.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 3500); // swipe after a little time (3.5 seconds)
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="centers-reviews" aria-label="Reviews">
      <div 
        className="centers-reviews-box"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="centers-reviews-nav centers-reviews-nav-left" onClick={handlePrev} aria-label="Previous">
          &lt;
        </button>

        <div className="centers-reviews-viewport">
          <div 
            className="centers-reviews-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="centers-review-slide">
                <div className="centers-review-img-wrap">
                  <img src={review.img} alt={review.name} width={70} height={70} loading="lazy" />
                </div>
                <h4 className="centers-review-name">{review.name}</h4>
                <p className="centers-review-text">{review.text}</p>
                <div className="centers-review-meta">
                  <span className="centers-review-author">{review.name}</span>
                  <div className="centers-review-stars">★★★★★</div>
                  <span className="centers-review-role">{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="centers-reviews-nav centers-reviews-nav-right" onClick={handleNext} aria-label="Next">
          &gt;
        </button>

        <div className="centers-reviews-dots">
          {reviews.map((_, i) => (
            <span 
              key={i} 
              className={`centers-reviews-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CentersReviews;
