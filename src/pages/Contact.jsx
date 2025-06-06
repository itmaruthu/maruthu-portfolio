import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0lbrue7',
      'template_w2vglya',
      formRef.current,
      'MzH2bC_BhsA9gqJWe'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((err) => {
      console.error('Email send error:', err);
      alert('Failed to send message.');
    });
  };

  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;