// Contact.js
import React from "react";
import "./Contact.css"; // Make sure you create and import Contact.css

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-links">
        <h3>If you’d like to have a chat with me feel free to do so !! </h3>

        <a
          href="CV_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Get a copy of my CV
        </a>
        <a href="mailto:lwamzeche@kaist.ac.kr" className="contact-link">
          lwamzeche@kaist.ac.kr
        </a>
        <a href="https://hci.social/@lwam" className="contact-link">
          Mastodon
        </a>
        <a href="https://github.com/lwamzeche" className="contact-link">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/lwam-zemikael-araya-3568531b4"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>

      <footer className="contact-footer">
        <p>Made by Lwam</p>
        <p>2024.01.28</p>
      </footer>
    </div>
  );
}

export default Contact;
