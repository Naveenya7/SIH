// FAQ.js
import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [faqItems, setFaqItems] = useState([
    {
      question: 'What is GreenVouchers and how does it promote recycling?',
      answer: 'GreenVouchers is an innovative app designed to revolutionize domestic waste recycling. It introduces a unique incentive-based approach to encourage recycling and community engagement. Users earn rewards for recycling, creating a sustainable and eco-friendly environment. To get started, sign up, explore recycling campaigns, and earn points for your contributions.',
      isOpen: false
    },
    {
      question: 'How can I participate in recycling campaigns on GreenVouchers?',
      answer: 'Participating in GreenVouchers recycling campaigns is simple. Sign up on the app, explore the available recycling campaigns, and choose the ones you want to support. You can also create your own recycling campaign to raise awareness. Share the campaigns with your network to maximize impact and earn rewards.',
      isOpen: false
    },
    {
      question: 'Where can I find the nearest community collection centers?',
      answer: 'GreenVouchers provides information on the nearest community collection centers for the convenient drop-off of recyclable materials. Use the app to locate the community collection centers in your area, making recycling easy and accessible.',
      isOpen: false
    },
    {
      question: 'Does GreenVouchers collaborate with local businesses?',
      answer: 'Yes, GreenVouchers collaborates with local businesses to provide vouchers and incentives to users. These partnerships enhance the reward system, giving users more reasons to participate in recycling campaigns and contribute to a greener environment.',
      isOpen: false
    },
    {
      question: 'How does the point-based system work on GreenVouchers?',
      answer: 'GreenVouchers operates on a point-based system where users earn points for their recycling efforts. These points can be redeemed within the app for various rewards and incentives. The in-app redemption mechanism ensures a seamless and rewarding experience for users.',
      isOpen: false
    },
    {
      question: 'Is my personal information secure with GreenVouchers?',
      answer: 'Yes, GreenVouchers prioritizes the security and privacy of user information. The platform uses encryption and follows best practices to protect personal data from unauthorized access. Your information is safe, allowing you to focus on contributing to a sustainable future.',
      isOpen: false
    },
    {
      question: 'How can I get in touch with GreenVouchers support?',
      answer: 'For any questions or assistance, the GreenVouchers support team is ready to help. Reach out to us at support@greenvouchers.com, and we will promptly respond to your inquiries and provide the support you need.',
      isOpen: false
    }
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className='faq-container'>
      <div className='heading'><h2>GreenVouchers Frequently Asked Questions</h2></div>
      {faqItems.map((item, index) => (
        <div className='faq-item' key={index}>
          <div className={`faq-question ${item.isOpen ? 'open' : ''}`} onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
          </div>
          {item.isOpen && <p className='faq-answer'>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
