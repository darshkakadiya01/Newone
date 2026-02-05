import React, { useRef, useState  } from "react";
import emailjs from "emailjs-com";
import "./App.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kyp8cjh",  
        "template_4t8r84a",  
        form.current,
        "e4cj_ZrXDDyLp2e0C"    
      )
      .then(
        (result) => {
          setMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setMessage("Failed to send message. Please try again.");
        }
      );
  };

    return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Carvocarz</h2>
        <p className="contact-subtitle">
          Have questions or suggestions? Fill the form below and we will get back to you.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;