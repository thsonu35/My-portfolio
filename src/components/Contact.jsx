import React, { useState } from 'react';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactNo: '',  // Added contact number field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Send the main contact email
    emailjs.send(
      'service_2zj4gmj',  // Replace with your EmailJS service ID
      'template_aprqzue', // Replace with your main template ID
      formData,
      'hHes5PjkJNLaf3qWt' // Replace with your EmailJS Public Key
    ).then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Thank you for contacting me. I will connect with you as soon as possible!');
      },
      (error) => {
        console.log('Failed to send the email. Error:', error.text);
        toast.error('Failed to send your message. Please try again later.');
      }
    );

    setFormData({ name: '', email: '', message: '', contactNo: '' });
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
            <label htmlFor="contactNo">Contact No.:</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
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
        <ToastContainer />
      </AnimatedSection>
    </Element>
  );
};

export default Contact;
