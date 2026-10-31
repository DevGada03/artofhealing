import { Link } from 'react-router-dom';
import { Sun, Heart, Award, CheckCircle } from 'lucide-react';
import './SpiritualGrowth.css';

const SpiritualGrowth = () => {
  return (
    <div className="page-container fade-in spiritual-growth-page">
      <section className="healing-hero">
        <div className="container">
          <div className="hero-badge"><Sun size={16} /> Spiritual Growth Modality</div>
          <h1 className="font-accent">Spiritual Growth &amp; Meditations</h1>
          <p className="subtitle">Awaken your consciousness, achieve deep inner peace, and accelerate your spiritual path.</p>
          <Link to="/book" className="btn-primary">Connect With Us</Link>
        </div>
      </section>

      <div className="container healing-content">
        <section className="intro-section glass soft-shadow">
          <h2 className="font-accent">What is Spiritual Growth in Pranic Healing?</h2>
          <p>
            Spiritual development is a core component of the teachings of Grandmaster Choa Kok Sui. True wellness is holistic: it integrates a healthy physical body, a balanced emotional mind, and an active connection with the Higher Soul.
          </p>
          <p>
            Through specific energy practices and character building, we help you clear ancient karma, detach from negative energetic ties (spiritual cords), and build a powerful light body. This allows you to experience divine love, high-frequency energy, and true peace.
          </p>
        </section>

        <div className="healing-details-grid">
          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><Award size={24} className="detail-icon" /> Core Techniques &amp; Teachings</h3>
            <p>Our spiritual guidance covers the following transformative areas:</p>
            <ol className="steps-list">
              <li>
                <strong>Meditation on Twin Hearts:</strong> An advanced meditation technique targeting the Heart (emotional love) and Crown (spiritual love) chakras to download massive amounts of divine energy.
              </li>
              <li>
                <strong>Character Building:</strong> Understanding the science of Karma, the 5 Virtues, and how to consciously align your everyday actions with soul progression.
              </li>
              <li>
                <strong>Energy Hygiene:</strong> Techniques to cut cords, clean your energy field, and maintain spiritual shield protection to avoid picking up heavy energies from the surroundings.
              </li>
            </ol>
          </section>

          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><CheckCircle size={24} className="detail-icon" /> Spiritual &amp; Life Benefits</h3>
            <ul className="benefits-list">
              <li><strong>Deep Inner Peace:</strong> Expels anxiety and stress, replacing them with a quiet mind and joy.</li>
              <li><strong>Enhanced Intuition:</strong> Cleanses the Ajna (Third Eye) and Crown chakras to sharpen inner guidance.</li>
              <li><strong>Positive Karma:</strong> By blessing the earth during Twin Hearts, you generate massive good karma in your life.</li>
              <li><strong>Soul Alignment:</strong> Feel a stronger, conscious connection to your Higher Soul and spiritual purpose.</li>
            </ul>
          </section>
        </div>

        <section className="ailments-section glass soft-shadow">
          <h2 className="font-accent text-center">Spiritual Practices We Offer &amp; Support</h2>
          <div className="ailments-grid">
            <div className="ailment-category">
              <h4>Active Meditation</h4>
              <ul>
                <li>Meditation on Twin Hearts (for peace &amp; illumination)</li>
                <li>Chakra cleansing and activation</li>
                <li>Self-healing through guided meditation</li>
                <li>Loving-kindness meditation for relationships</li>
              </ul>
            </div>
            <div className="ailment-category">
              <h4>Energy Work &amp; Alignment</h4>
              <ul>
                <li>Spiritual cord cutting &amp; clearing</li>
                <li>Character building guidance and counseling</li>
                <li>Soul realization energy alignment</li>
                <li>Aura cleansing and light expansion</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center book-footer">
          <p>Ready to accelerate your spiritual journey?</p>
          <Link to="/book" className="btn-primary">Schedule Your Session Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SpiritualGrowth;
