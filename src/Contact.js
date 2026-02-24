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
      <>
      <head>
        <title>CARVOCARZ - About Cars Contact | Compare & Reviews</title>

        <meta name="description" content="CARVOCARZ is a premium car website where you can explore top brands, compare cars, check specifications and read expert reviews. Discover luxury, electric and performance cars in one place." />

        <meta name="keywords" content="CARVOCARZ, contact, contact for branded cars," />

        <meta name="author" content="CARVOCARZ" />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="CARVOCARZ - Premium Car Marketplace" />
        <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARVOCARZ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carvocarz.vercel.app/" />

        <link rel="canonical" href="https://carvocarz.vercel.app/" />

        <link rel="icon" type="image/png" href="/CARVOCARZ-favicon.png" />

        <meta name="theme-color" content="#FBC664" />
      </head>
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
    </>
  );
};

export default Contact;