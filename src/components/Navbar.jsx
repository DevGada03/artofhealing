import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="nav-logo font-accent" onClick={handleNavLinkClick}>
          <span>Art Of Healing | Dhiren Dedhia</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavLinkClick}>Home</Link>
          <Link to="/about" onClick={handleNavLinkClick}>About</Link>
          <Link to="/services" onClick={handleNavLinkClick}>Services</Link>
          <Link to="/socials" onClick={handleNavLinkClick}>Socials</Link>
          <Link to="/resources" onClick={handleNavLinkClick}>Resources</Link>
          <Link to="/book" className="btn-primary nav-btn" onClick={handleNavLinkClick}>Book Session</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
