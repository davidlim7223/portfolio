import React, {useState} from 'react';
import "./ContactMe.scss";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  return (
    <div className="container mt-5">
      <div className="contact">
        <h2 className="title">Contact Me</h2>
        <form action="https://formsubmit.co/d7e06f9923993f96ad82c6a1d9b10dfa" method="POST">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Contact Email:
            </label>
            <input className="form-control" type="email" name="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" name="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
          Send
          </button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm;