import { Link } from 'react-router-dom';
import { Activity, Heart, Sun, Calendar, Star, MapPin, Mail, Phone } from 'lucide-react';
import ChakraVisualizer from '../components/ChakraVisualizer';
import ImageSlider from '../components/ImageSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <section className="hero">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>

        <div className="container hero-inner">
          <div className="hero-content">
            <h1 className="font-accent">Awaken Your Inner Healing Power</h1>
            <p>Experience deep physical, emotional, and spiritual well-being through the ancient science and art of Pranic Healing.</p>
            <div className="hero-buttons">
              <Link to="/book" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Book a Session</Link>
              <Link to="/about" className="btn-secondary">Discover More</Link>
            </div>
          </div>
          <div className="hero-slider-wrapper">
            <ImageSlider />
          </div>
        </div>
      </section>

      <div style={{ padding: '2rem 0' }}>
        <ChakraVisualizer />
      </div>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title font-accent">Our Healing Services</h2>
          <div className="services-grid">

            <div className="service-card glass soft-shadow hover-glow">
              <div className="service-icon">
                <Activity size={40} />
              </div>
              <h3 className="font-accent">Physical Healing</h3>
              <p>Advanced techniques to accelerate the body's natural healing rate for various physical ailments.</p>
              <Link to="/services/physical-healing" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '6px 16px' }}>Learn More</Link>
            </div>

            <div className="service-card glass soft-shadow hover-glow">
              <div className="service-icon">
                <Heart size={40} />
              </div>
              <h3 className="font-accent">Psychotherapy</h3>
              <p>Alleviate emotional and mental patterns, stress, trauma, and phobias effectively.</p>
              <Link to="/services/psychotherapy" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '6px 16px' }}>Learn More</Link>
            </div>

            <div className="service-card glass soft-shadow hover-glow">
              <div className="service-icon">
                <Sun size={40} />
              </div>
              <h3 className="font-accent">Spiritual Growth</h3>
              <p>Meditation techniques like Twin Hearts to achieve higher consciousness and peace.</p>
              <Link to="/services/spiritual-growth" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '6px 16px' }}>Learn More</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title font-accent">Reviews by the patient</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card glass soft-shadow">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="quote">"I am deeply grateful to Shri Dhiren ji for his exceptional healing work and unwavering support. I approached him initially for a painful ear injury, and the relief I experienced through his Pranic Healing sessions was remarkable. His expertise, compassion, and commitment to the practice are truly inspiring."</p>
              <h4 className="author font-accent">- Dhanesh Nagrale</h4>
            </div>
            
            <div className="testimonial-card glass soft-shadow">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="quote">"Healing is one of the best ways to cure any problem. My son was going through a continuous cough and cold and not stopping watching mobile phone. Within a few days of Pranic healing by Dhiren sir, my son's health improved and his phone addiction was gone. I highly recommend reaching out to him."</p>
              <h4 className="author font-accent">- Urvashi Karani</h4>
            </div>

            <div className="testimonial-card glass soft-shadow">
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="quote">"I took Dhiren Sir's help when my child was preparing for the campus interview. It helped my son a lot to control his anxiety and give his best performance. For our family Dhiren Sir is always a go-to person for any health or mental stress issues."</p>
              <h4 className="author font-accent">- Deepali Nagrale</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-container">
          <div className="contact-info-wrap glass soft-shadow">
            <h2 className="font-accent">Contact Us</h2>
            <p>Ready to start your healing journey? Reach out to us</p>
            <ul className="contact-details">
              <li><MapPin className="icon" />No Direct calls please</li>
              <li><Phone className="icon" />+91 9969071424</li>
              <li><Mail className="icon" /> dhirensoul@gmail.com</li>
            </ul>
            <div className="hours">
              <h4>Opening Hours</h4>
              <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="contact-map soft-shadow">
            {/* Placeholder for iframe map */}
            <div className="map-placeholder">
              <MapPin size={48} color="var(--primary-blue)" />
              <p>Interactive Map</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
