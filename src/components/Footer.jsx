import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>💎 Luxury Gold Jewelry © {new Date().getFullYear()}</p>
        <p>
          Follow us:
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>|
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a>|
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a>
        </p>
        <p>Email: support@luxurygold.com | Phone: +1 234 567 890</p>
      </div>
    </footer>
  );
}

export default Footer;
