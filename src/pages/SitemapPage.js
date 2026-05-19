import React from 'react';
import { Link } from 'react-router-dom';
import PolicyLayout from '../components/PolicyLayout';

function SitemapPage() {
  return (
    <PolicyLayout 
      title="Sitemap" 
      subtitle="BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"
    >
      <div className="policy-text-block" style={{ marginTop: '40px' }}>
        <h3>Main Navigation</h3>
        <ul>
          <li><Link to="/" style={{ color: '#f26522', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: '#f26522', textDecoration: 'none' }}>About Us</Link></li>
          <li><Link to="/initiatives" style={{ color: '#f26522', textDecoration: 'none' }}>Projects & Initiatives</Link></li>
          <li><Link to="/gallery/photos/1" style={{ color: '#f26522', textDecoration: 'none' }}>Media & Gallery</Link></li>
          <li><Link to="/impact" style={{ color: '#f26522', textDecoration: 'none' }}>Get Involved</Link></li>
          <li><Link to="/centers" style={{ color: '#f26522', textDecoration: 'none' }}>Centers</Link></li>
          <li><Link to="/contact" style={{ color: '#f26522', textDecoration: 'none' }}>Contact Us</Link></li>
          <li><Link to="/donate" style={{ color: '#f26522', textDecoration: 'none' }}>Donate Now</Link></li>
        </ul>

        <h3>Get Involved</h3>
        <ul>
          <li><Link to="/volunteer" style={{ color: '#f26522', textDecoration: 'none' }}>Volunteer</Link></li>
          <li><Link to="/join-ngo" style={{ color: '#f26522', textDecoration: 'none' }}>Join NGO</Link></li>
          <li><Link to="/corporate" style={{ color: '#f26522', textDecoration: 'none' }}>Corporate CSR</Link></li>
          <li><Link to="/individual-member" style={{ color: '#f26522', textDecoration: 'none' }}>Individual Member</Link></li>
          <li><Link to="/career" style={{ color: '#f26522', textDecoration: 'none' }}>Career</Link></li>
          <li><Link to="/ngo-internship" style={{ color: '#f26522', textDecoration: 'none' }}>NGO Internship</Link></li>
        </ul>

        <h3>Centers</h3>
        <ul>
          <li><Link to="/centers/maharashtra" style={{ color: '#f26522', textDecoration: 'none' }}>Maharashtra</Link></li>
          <li><Link to="/centers/gujarat" style={{ color: '#f26522', textDecoration: 'none' }}>Gujarat</Link></li>
          <li><Link to="/centers/delhi" style={{ color: '#f26522', textDecoration: 'none' }}>Delhi</Link></li>
          <li><Link to="/centers/haryana" style={{ color: '#f26522', textDecoration: 'none' }}>Haryana</Link></li>
        </ul>
        
        <h3>Legal</h3>
        <ul>
          <li><Link to="/privacy" style={{ color: '#f26522', textDecoration: 'none' }}>Privacy Policy</Link></li>
          <li><Link to="/terms" style={{ color: '#f26522', textDecoration: 'none' }}>Terms & Conditions</Link></li>
          <li><Link to="/refund" style={{ color: '#f26522', textDecoration: 'none' }}>Refund Policy</Link></li>
        </ul>
      </div>
    </PolicyLayout>
  );
}

export default SitemapPage;
