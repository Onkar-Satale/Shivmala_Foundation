import React, { useState } from "react";
import BoardMembersSection from "../components/BoardMembersSection";
import "./AboutMembers.css";

function AboutMembers() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const faqs = [
    {
      question: "Make a difference in the life of a child",
      answer: "As an NGO we function to create awareness at the grassroots level. Your contribution can help us bring meaningful change to millions of lives."
    },
    {
      question: "Let's do the right thing now",
      answer: "We need your support to continue our efforts in providing education, healthcare, and equal opportunities to those in need."
    },
    {
      question: "Join your hand with us for a better life",
      answer: "Together we can ensure that people have access to basic amenities and a chance for a brighter, secure future."
    }
  ];

  return (
    <div className="members-page-container">
      {/* 1. Header Section */}
      <section className="members-header-section">
        <h1 className="members-main-title">Members</h1>
        <p className="members-sub-title">"BEST NGO FOR CSR IN INDIA SHIVMALA FOUNDATION"</p>
        <div className="members-hero-image">
          <img src="/images/1.jpg" alt="Shivmala Foundation Members" />
        </div>
      </section>

      {/* 2. Board Members Section */}
      <BoardMembersSection id="members-board" />

      {/* 3. Discover About us */}
      <section className="discover-about-section">
        <div className="discover-heading">
          <span className="heart-icon">♥</span>
          <h2>Discover About us</h2>
        </div>
        <div className="discover-content">
           <div className="discover-text-full">
            <p className="discover-para"><b>Shivmala Foundation</b> was established with the passion of "Devotion to the Nation" and the vision of a "prosperous Nation".</p>

            <p className="discover-para">We are the best NGO in India. Our endeavor for child's growth, of the nation and its people. We are the best social organization in India. Support by Donate to NGO in India. We mainly focus on poverty in India, child development, Women empowerment, skill development, education for poor & street children, health programs, environment protection, consumer awareness, elderly care, rural development programs, slum development, Donate for Livelihood, etc. Donate to Indian real NGO and support development. At Shivmala, we believe that each and every person is entitled to a worthy, meaningful, and dignified life, as well as mentioned under Article 21 (Right to life and personal liberty) of the Indian constitution.</p>
            
            <p className="discover-para">The organization is marked being a country with the second most population in the world and one of the largest economies, India is still suffering from issues like abject poverty, many social evils, educational backwardness, environment degradation, and health, etc and to overcome these hurdles to the development of we serve our Nation.</p>

            <p className="discover-para">Thus followed the words of our Honorable former President and "missile man" of the country Dr. APJ Abdul Kalam – "you have to dream before the dream come true" – we dream of a strong and developed India with equality, peace, brotherhood, and a nation where all its people get to live a quality life.</p>
            
            <p className="discover-para">So far Shivmala Foundation has been contributing all its efforts towards the fulfillment of this dream by arranging meals and clothes for the poor and unprivileged, organizing placement and skill development programs and placements drives for youth, organizing health checkups, plantation, and environment awareness programs, conducting counseling on social issues and many more programs for the betterment of the society and nature too!</p>

            <p className="discover-para">Our organization is dedicated to the wholesome upliftment of society, and we do not limit ourselves in specific issues. We understand that with the passage of time, the needs of our society change. Therefore, we have kept our horizons open to address every challenge and make our nation shine brighter.</p>

            <p className="discover-para">As the top 10 NGO and the best NGO in India, we encourage everyone to join us in our efforts to make a difference. We invite professionals to our cause regardless of how small the amount may be. Your contribution will help us in supporting underprivileged children and bringing them a better future. We have various social causes and activities that you can be a part of. You can donate to education, or donate for poor child education in India. We also encourage you to donate to slum children, donate to poor children, and donate to orphan homes.</p>
           </div>
        </div>
      </section>

      {/* 4. We Believe Section */}
      <section className="we-believe-section">
        <h2 className="believe-title">We Believe that We can Save More Lifes with you</h2>
        <div className="believe-values">
          <div className="value-card">
            <div className="value-icon sustainability"></div>
            <h3>Sustainability</h3>
            <p>environmental conservation</p>
          </div>
          <div className="value-card">
            <div className="value-icon community"></div>
            <h3>Community</h3>
            <p>Community empowerment</p>
          </div>
          <div className="value-card">
            <div className="value-icon equality"></div>
            <h3>Equality</h3>
            <p>Advocating for equal</p>
          </div>
          <div className="value-card">
            <div className="value-icon healthcare"></div>
            <h3>Healthcare</h3>
            <p>Improving access</p>
          </div>
        </div>
        <button className="donation-btn">DONATION</button>
      </section>

      {/* 5. Sewing Machines Image */}
      <section className="sewing-section">
        <img src="/images/2.jpg" alt="Empowerment" />
      </section>

      {/* 6. Dark Banner */}
      <section className="fingerprints-banner">
        <h2>Our fingerprints on the lives we touch<br/>never fade</h2>
      </section>

      {/* 7. Donors */}
      <section className="donors-section">
        <h2>Our Donors</h2>
        <div className="donors-logos">
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
             <div className="faq-header-content">
               <span className="heart-icon">♥</span>
               <h2>Have Any Question?</h2>
               <p>Every minute 5 questions</p>
             </div>
             <img src="/images/4.jpg" alt="Questions" className="faq-image" />
          </div>
          <div className="faq-right">
             <div className="accordion">
               {faqs.map((faq, idx) => (
                 <div key={idx} className={`accordion-item ${activeFaq === idx ? 'active' : ''}`}>
                   <div className="accordion-header" onClick={() => toggleFaq(idx)}>
                     <h3>{faq.question}</h3>
                     <span className="icon">{activeFaq === idx ? '-' : '+'}</span>
                   </div>
                   {activeFaq === idx && (
                     <div className="accordion-body">
                       <p>{faq.answer}</p>
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMembers;
