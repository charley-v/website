import React from 'react';
import './CSS/about.css';

const faqData = [
  {
    question: 'What is KnifeX?',
    answer: 'KnifeX is a platform where users can buy and sell various types of knives. We offer a wide range of knives to cater to different needs and preferences.'
  },
  {
    question: 'How do I create an account?',
    answer: 'To create an account, click on the "Sign Up" button at the top right corner of the homepage. Fill in your details and follow the instructions to complete the registration process.'
  },
  {
    question: 'How do I sell a knife?',
    answer: 'Once you are logged in, navigate to the "Sell" page. Select the knife you want to sell from your inventory.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods including credit/debit cards, PayPal, and other secure payment gateways.'
  },
  {
    question: 'What is the refund policy?',
    answer: 'All sales are final'
  }
];

const About = () => {
  return (
    <div className='about-container'>
      <h1>About KnifeX</h1>
      <p>At Knifex, we offer the best CS:GO knife skins to elevate your gaming experience. Discover your perfect blade today!</p>      
      <h2>Frequently Asked Questions:</h2>
      <div className='faq-section'>
        {faqData.map((item, index) => (
          <div key={index} className='faq-item'>
            <h3 className='faq-question'>{item.question}</h3>
            <p className='faq-answer'>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
