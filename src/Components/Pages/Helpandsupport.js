// HelpAndSupport.js

import React from 'react';
import './Helpandsupport.css';
import Faq from '../Faq/Faq';
import Navbar from '../Navbar/Navbar';

const HelpAndSupport = () => {
  return (
    <div>
      <Navbar/>
    <div className="help-support-container">
      <header>
        <h1>Help and Support</h1>
        <p>Welcome to GreenVouchers Support Center. We're here to help you!</p>
      </header>

      <section className="contact-section">
        <h2>Contact Support</h2>
        <p>
          Our dedicated support team is available to assist you. Choose the option that suits you best:
        </p>
        <div className="contact-options">
          <div className="contact-option">
            <h3>Email</h3>
            <p>Email us support@greenvouchers.com</p>
          </div>
          <div className="contact-option">
            <h3>Phone</h3>
            <p>Call us at +1 (123) 456-7890</p>
          </div>
        </div>
       
      </section>

      <section className="knowledge-base">
        {/* <h2>Knowledge Base</h2>
        <p>
          Explore our Knowledge Base for answers to common questions and helpful resources.
        </p>
        <a href="/knowledge-base">Visit Knowledge Base</a> */}
        <Faq/>
      </section>

      <section className="submit-ticket">
        <h2>Submit a Support Ticket</h2>
        <p>
          If you couldn't find an answer in our Frequently Asked Questions section, submit a support ticket,
          and we'll get back to you as soon as possible.
        </p>
        <div className='ticket'>
        <button>Submit a Ticket</button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default HelpAndSupport;
