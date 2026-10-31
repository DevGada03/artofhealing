import { Instagram, Facebook, Youtube, Phone } from 'lucide-react';
import './Socials.css';

const Socials = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      link: "https://www.instagram.com/artofhealing.dhirendedhia?utm_source=qr&igsh=NWZlZHZldjRmOW84",
      color: "#E1306C",
      handle: "@artofhealing.dhirendedhia",
      description: "Daily insights, healing techniques, and behind-the-scenes."
    },
    {
      name: "Facebook",
      icon: <Facebook size={32} />,
      link: "https://www.facebook.com/share/1C6ryo421z/",
      color: "#1877F2",
      handle: "Art of Healing | Dhiren Dedhia",
      description: "Join our supportive community of healers and seekers."
    },
    {
      name: "YouTube",
      icon: <Youtube size={32} />,
      link: "https://youtube.com/@artofhealing.dhirendedhia?si=HTsrzsBW31IZ3W32",
      color: "#FF0000",
      handle: "@artofhealing.dhirendedhia",
      description: "Guided meditations, workshops, and comprehensive guides."
    },
    {
      name: "WhatsApp",
      icon: <Phone size={32} />,
      link: "https://wa.me/919969071424",
      color: "#25D366",
      handle: "+91 99690 71424",
      description: "Direct messaging for quick queries and appointment booking."
    }
  ];

  return (
    <div className="page-container fade-in">
      <div className="socials-header">
        <div className="container text-center">
          <h1 className="font-accent" style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Connect With Us</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
            Stay updated with our latest offerings, daily wisdom, and connect with our global community across all platforms.
          </p>
        </div>
      </div>

      <div className="container socials-content">
        <div className="socials-grid">
          {socials.map((social, index) => (
            <a 
              href={social.link} 
              key={index} 
              className="social-card glass soft-shadow"
              target="_blank" 
              rel="noreferrer"
            >
              <div className="social-icon" style={{ backgroundColor: social.color + '20', color: social.color }}>
                {social.icon}
              </div>
              <h3 className="font-accent" style={{ marginTop: '1rem' }}>{social.name}</h3>
              <p className="social-handle" style={{ color: social.color, fontWeight: '500', marginBottom: '0.5rem' }}>{social.handle}</p>
              <p className="social-desc" style={{ fontSize: '0.95rem', opacity: 0.8 }}>{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
