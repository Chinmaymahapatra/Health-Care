import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer text-light d-flex">
        <div className="brand-name">
          <h1>HealthCare</h1>
        </div>
        <div className="footer-links">
          <ul className="foot-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul className="foot-links">
            <li><a href="/">Login</a></li>
            <li><a href="/">Register</a></li>
            <li><a href="/">Community</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul className="foot-links">
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Terms&Conditions</a></li>
          </ul>
        </div>
        <div className="follow-us">
          <h4>Connect with us</h4>
          <ul id="social-icons">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/home" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter" target="_blank" rel="noreferrer"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
