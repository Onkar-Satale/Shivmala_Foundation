import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      subtitle="BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"
    >
      <div className="policy-intro">
        <div className="policy-intro-image">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Shivmala Foundation Members" />
        </div>
        <div className="policy-intro-text">
          <h3>LEARN ABOUT NON PROFIT AGENCY</h3>
          <h2>Discover About us</h2>
          <p>
            Shivmala Foundation is committed to the virtuous collection, retention and use of Information that you provide to us about yourself (Personal Information) on this site: https://www.shivmalafoundation.org/.
          </p>
        </div>
      </div>

      <div className="policy-text-block">
        <p>1. Your Personal Information may integrate the following:</p>
        <ul>
          <li>a) Your name</li>
          <li>b) Your age</li>
          <li>c) Your occupation</li>
          <li>d) A user ID and password of your choice</li>
          <li>e) Your email and mailing address</li>
          <li>f) Your mobile number</li>
          <li>g) Your payment processing details</li>
          <li>h) Limited personal details</li>
          <li>i) Any other data as Shivmala Foundation may require.</li>
        </ul>
        <p>2. The following Privacy Policy sets forth our understanding with you on the collection, use, and protection of your Personal Information.</p>
        <p>3. Your use of the website constitutes your consent to all the terms and conditions in this privacy policy (as amended from time to time), and you shall be bound by the same.</p>
        <h3>4. Collection of Information:-</h3>
        <p>4.1) Site Browsing: You browse the Site anonymously. We do not require you to distinguish yourself or reveal Personal Information while browsing the website. However, you may be able to access certain sections of the Site or interact with us by supplying us with Personal Information. For instance, you could negotiate at the Site or make any donations only by providing the Site with Personal Information. If you desire to register at the Site, you must provide your Personal Information.</p>
        <p>4.2) While you are browsing through the Site, the Site's operating system may automatically record some general information (General Information) about your visit.</p>
      </div>
    </PolicyLayout>
  );
}

export default PrivacyPolicy;
