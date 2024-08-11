import React, { useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the main contact email
    emailjs.send(
      'service_2zj4gmj',  // Replace with your service ID
      'template_aprqzue', // Replace with your main template ID
      formData,
           // Replace with your user ID
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        alert('Your message has been sent successfully!');
        
        // Send the auto-reply email
        emailjs.send(
          'your_service_id',  // Replace with your service ID
          'your_auto_reply_template_id', // Replace with your auto-reply template ID
          {
            name: formData.name,
            email: formData.email,
          },
          'your_user_id'      // Replace with your user ID
        ).then(
          (result) => {
            console.log('Auto-reply successfully sent!', result.text);
          },
          (error) => {
            console.log('Failed to send the auto-reply. Error:', error.text);
          }
        );
      },
      (error) => {
        console.log('Failed to send the email. Error:', error.text);
        alert('Failed to send your message. Please try again later.');
      }
    );

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Element name="contact">
      <AnimatedSection name="contact">
        <h2 className="contact-title">Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </AnimatedSection>
    </Element>
  );
};

export default Contact;
