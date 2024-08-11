import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => (
  <Element name="contact">
    <AnimatedSection name="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </AnimatedSection>
  </Element>
);

export default Contact;
