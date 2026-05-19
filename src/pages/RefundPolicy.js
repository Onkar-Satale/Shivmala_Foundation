import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

function RefundPolicy() {
  return (
    <PolicyLayout 
      title="Refund Policy" 
      subtitle="BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"
    >
      <div className="policy-text-block" style={{ marginTop: '40px' }}>
        <p>Refund Policy for Shivmala Foundation:</p>
        
        <h3>Donor Refund Request:</h3>
        <p>Donors who wish to claim a refund must do so within 14 days of making the donation.</p>
        <p>A valid reason for the refund request must be provided, along with supporting documents or evidence.</p>
        <p>Donors can submit their refund request by contacting Shivmala Foundation through our official communication channels (as mentioned on our website or official correspondence).</p>
        
        <h3>Refund Processing:</h3>
        <p>Upon receiving a valid refund request, Shivmala Foundation will review the request and supporting documents provided.</p>
        <p>If the refund request is approved, the donation amount will be refunded to the original payment source.</p>
        <p>A processing fee of 5% of the total donation received will be deducted from the refunded amount to cover administrative and transaction costs.</p>
        
        <h3>Timelines for Refund:</h3>
        <p>Shivmala Foundation aims to process refund requests promptly and efficiently.</p>
        <p>Shivmala Foundation will process refund within 5 working days from the approval of Refund.</p>
        <p>However, the actual time taken for the refund to reflect in the donor's account may vary depending on the payment gateway or financial institution involved.</p>
        <p>Shivmala Foundation will provide reasonable updates and support during the refund process.</p>
        
        <h3>Non-Refundable Donations:</h3>
        <p>Certain types of donations may be non-refundable. This includes donations made towards specific projects, campaigns, or events where it is explicitly stated that the donation is non-refundable.</p>
        <p>In such cases, Shivmala Foundation will clearly communicate the non-refundable nature of the donation at the time of solicitation.</p>
        
        <h3>Changes to the Refund Policy:</h3>
        <p>Shivmala Foundation reserves the right to modify or amend this refund policy at any time. Any changes to the policy will be effective immediately upon posting the updated policy on our official website.</p>
        <p>Please note that Shivmala Foundation is committed to utilizing donations efficiently and effectively for the betterment of society. We encourage donors to carefully consider their donation before making a contribution and to reach out to us with any questions or concerns they may have.</p>
      </div>
    </PolicyLayout>
  );
}

export default RefundPolicy;
