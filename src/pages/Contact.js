// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mt-4">
      <h2>Contact Us 📞</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
