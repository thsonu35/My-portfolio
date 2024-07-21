// src/components/Contact.jsx
import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';

const Contact = () => (
  <Element name="contact">
    <AnimatedSection name="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </AnimatedSection>
  </Element>
);

export default Contact;
