import { Activity, Star, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="page-container fade-in">
      <div className="about-header">
        <div className="container">
          <h1 className="font-accent">About Art of Healing</h1>
          <p>Illuminating the path to holistic wellness and spiritual awakening.</p>
        </div>
      </div>

      <div className="container about-content">
        <section className="about-section glass soft-shadow">
          <h2 className="font-accent">Our Philosophy</h2>
          <p>
            Pranic Healing is a highly evolved and tested system of energy medicine developed by Grandmaster Choa Kok Sui that utilizes prana to balance, harmonize and transform the body's energy processes. Prana is a Sanskrit word that means life-force. This invisible bio-energy or vital energy keeps the body alive and maintains a state of good health.
          </p>
          <p>
            At Art of Healing, we believe that the body has an innate ability to heal itself. Our role is to facilitate and accelerate this natural process by cleansing and energizing your energy body.
          </p>
        </section>

        <section className="about-stats">
          <div className="stat-card soft-shadow hover-glow">
            <Users size={40} className="stat-icon" />
            <h3 className="font-accent">2700+</h3>
            <p>Clients Healed</p>
          </div>

        </section>

        <section className="team-section">
          <h2 className="section-title font-accent" style={{ textAlign: 'center' }}>Meet Our Lead Healer</h2>
          <div className="team-grid">
            <div className="team-card soft-shadow">
              <img
                src="/images/lead-healer.jpeg"
                alt="Dhiren Dedhia"
                className="lead-healer-img"
              />
              <h3>Dhiren Dedhia</h3>
              <p className="role">Pranic Healer</p>
              <p>With over  27 years of experience,specializes in severe Physical and Psychological aliments and chronic pain management.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
