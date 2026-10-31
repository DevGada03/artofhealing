import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const handleFooterLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="font-accent footer-logo">Art of Healing | Dhiren Dedhia</h3>
          <p>Experience deep healing and spiritual awakening through ancient energy sciences.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1C6ryo421z/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/artofhealing.dhirendedhia?utm_source=qr&igsh=NWZlZHZldjRmOW84" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://youtube.com/@artofhealing.dhirendedhia?si=HTsrzsBW31IZ3W32" target="_blank" rel="noopener noreferrer"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about" onClick={handleFooterLinkClick}>About Us</Link></li>
            <li><Link to="/services" onClick={handleFooterLinkClick}>Services</Link></li>
            <li><Link to="/socials" onClick={handleFooterLinkClick}>Socials</Link></li>
            <li><Link to="/resources" onClick={handleFooterLinkClick}>Resources</Link></li>
            <li><Link to="/book" onClick={handleFooterLinkClick}>Book a Session</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><Phone size={16} />+91 9969071424</li>
            <li><Mail size={16} />dhirensoul@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Art of Healing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
