import React from 'react';
import "../App.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {/* Column 1: Legal Links */}
        <div className="footer-column">
          <a href="#">Regulatory Disclosures</a>
          <a href="#">Privacy and Security</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Archives</a>
        </div>

        {/* Column 2: Social Media */}
        <div className="footer-column">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">+91 11 41299800</a>
        </div>

        {/* Column 3: Company */}
        <div className="footer-column">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-newsletter">
          <h4>LKS NEWSLETTERS</h4>
          <input type="email" placeholder="your work email here" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        © 1985–2025, Lakshmikumaran & Sridharan, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
