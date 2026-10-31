import { Link } from 'react-router-dom';
import { Diamond, Activity, Zap, Heart, Sun, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="page-container fade-in">
      <div className="services-header">
        <div className="container">
          <h1 className="font-accent">Advanced Healing Modalities</h1>
          <p>Discover our comprehensive range of Pranic Healing therapies tailored to your needs.</p>
        </div>
      </div>

      <div className="container services-page-content">
        {/* Basic & Advanced Pranic Healing */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Zap size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Basic &amp; Advanced Pranic Healing</h2>
            <p>Using color pranas (energy) to accelerate the healing of physical ailments. From minor injuries to chronic physical conditions, this therapy revitalizes the affected chakras and organs.</p>
            <ul>
              <li>Fever, Colds, and Coughs</li>
              <li>Migraines and Headaches</li>
              <li>Digestive Disorders</li>
              <li>Sports Injuries</li>
            </ul>
          </div>
        </div>

        {/* Crystal Healing */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Diamond size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Pranic Healing Using Crystal</h2>
            <p>Harnessing the natural power of crystals. Crystals act as energy amplifiers, making the healing process exponentially faster, deeper, and more profound.</p>
            <ul>
              <li>Deep cellular healing</li>
              <li>Rapid extraction of diseased energy</li>
              <li>Enhanced auric shielding</li>
            </ul>
          </div>
        </div>

        {/* Common Problems */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Shield size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Common Problems</h2>
            <p>Pranic Healing is highly effective in treating many common physical and emotional issues:</p>
            <ul>
              <li>Headache/Migraine</li>
              <li>Eyestrain or Tired Eyes</li>
              <li>Sore Throat or Laryngitis</li>
              <li>Cold with Cough &amp; Fever</li>
              <li>Lower Back Pain &amp; Frozen Shoulder</li>
              <li>Insomnia &amp; General Weakness</li>
            </ul>
          </div>
        </div>

        {/* Physical Healing */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Activity size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Physical Healing</h2>
            <p>Advanced techniques to accelerate the body's natural healing rate for various physical ailments. Learn how cleansing and energizing the energy body can promote overall physical wellness.</p>
            <Link to="/services/physical-healing" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Learn More</Link>
          </div>
        </div>

        {/* Psychotherapy */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Heart size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Psychotherapy</h2>
            <p>A highly effective therapy for emotional and psychological ailments. By extracting negative thoughts and emotions from the chakras, we restore peace, joy, and emotional stability.</p>
            <Link to="/services/psychotherapy" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Learn More</Link>
          </div>
        </div>

        {/* Spiritual Growth */}
        <div className="service-detail-card glass soft-shadow">
          <div className="service-detail-icon"><Sun size={48} /></div>
          <div className="service-detail-text">
            <h2 className="font-accent">Spiritual Growth</h2>
            <p>Spiritual development through advanced energy practices and guided meditations. Learn Grandmaster Choa Kok Sui's Meditation on Twin Hearts to achieve divine consciousness, inner peace, and global loving-kindness.</p>
            <Link to="/services/spiritual-growth" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
