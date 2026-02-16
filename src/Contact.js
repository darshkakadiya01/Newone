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

        <meta name="keywords" content="CARVOCARZ, contact, About branded cars, new ev cars, Branded ev car price, cng cars, new cars, car comparison, car reviews, About cars, carvoc carz, cars, car prise in india, car price, branded car price, about branded cars, compare branded cars, branded cars review, indian cars, type of cars, History of cars timeline, About cars in english, When Were cars popularized, facts about cars, all car price, Top 10 indian cars, paragraph about cars, most expansive cars in the world, pagani cars, pagani, volvo, cars build quality,  luxury cars, BMW, Audi, Mercedes, Tesla, SUV cars, electric cars India" />

        <meta name="author" content="CARVOCARZ" />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="CARVOCARZ - Premium Car Marketplace" />
        <meta property="og:description" content="Explore luxury cars, compare models and read reviews at CARVOCARZ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://carvocarz.vercel.app/" />
        <meta property="og:image" content="https://carvocarz.vercel.app/CARVOCARZ-favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CARVOCARZ - Compare & Explore Cars" />
        <meta name="twitter:description" content="Find your perfect car. Compare models and read reviews at CARVOCARZ." />
        <meta name="twitter:image" content="https://carvocarz.vercel.app/CARVOCARZ-favicon.png" />

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