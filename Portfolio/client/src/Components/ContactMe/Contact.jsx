import React from 'react';
import "./Contact.scss"
var Contact = () => {
  return (
  <section id="contact" style={{backgroundImage:"url(/space2.jpg)"}}>
    <div className="contact-box">
      <div className="contact-links">
        <h2 className="contactTitle">CONTACT</h2>
      </div>
      <div className="contact-form-wrapper">
        <form action="https://formsubmit.co/d7e06f9923993f96ad82c6a1d9b10dfa" method="POST">
          <div className="form-item">
            <input className="contactInput" type="text" name="sender" id="sender"required/>
            <label className="contactLabel">Name:</label>
          </div>
          <div className="form-item">
            <input className="contactInput" type="text" name="email" id="email" required/>
            <label className="contactLabel">Email:</label>
          </div>
          <div className="form-item">
            <textarea  className="contactInput" name="message" id="message" required></textarea>
            <label className="contactLabel">Message:</label>
          </div>
          <button className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default Contact;