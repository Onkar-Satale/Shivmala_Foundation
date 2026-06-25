import React from 'react';

const DonorsSection = ({ className = "donors-section", style = {} }) => {
  const donorLogos = [
    { src: '/images/donors/shivmala-infra.png', alt: 'Shivmala Infrastructure Pvt. Ltd.' },
    { src: '/images/donors/lekcon-infra.png', alt: 'Lekcon Infra' },
    { src: '/images/donors/learncraft-institute.png', alt: 'Learncraft Training Institute' },
    { src: '/images/donors/learncraft-consultant.png', alt: 'Learncraft Engineering & Consultant' },
    { src: '/images/donors/mahi-events.png', alt: 'Mahi Events & Promotions' }
  ];

  return (
    <section className={className} style={style}>
      <h2>Our Donors</h2>
      <div className="donors-logos">
        {donorLogos.map((donor, idx) => (
          <img 
            key={idx} 
            src={`${process.env.PUBLIC_URL}${donor.src}`} 
            alt={donor.alt} 
            title={donor.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default DonorsSection;
