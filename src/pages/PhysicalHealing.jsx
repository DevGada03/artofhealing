import { Link } from 'react-router-dom';
import { Zap, Heart, Activity, CheckCircle } from 'lucide-react';
import './PhysicalHealing.css';

const PhysicalHealing = () => {
  return (
    <div className="page-container fade-in physical-healing-page">
      <section className="healing-hero">
        <div className="container">
          <div className="hero-badge"><Zap size={16} /> Physical Healing Modality</div>
          <h1 className="font-accent">Physical Healing</h1>
          <p className="subtitle">Accelerating the body's natural ability to heal itself using life-force energy (Prana).</p>
          <Link to="/book" className="btn-primary">Book a Healing Session</Link>
        </div>
      </section>

      <div className="container healing-content">
        <section className="intro-section glass soft-shadow">
          <h2 className="font-accent">What is Pranic Physical Healing?</h2>
          <p>
            Pranic Physical Healing is a highly evolved and tested system of energy medicine developed by Grandmaster Choa Kok Sui. It utilizes prana (or life-force) to balance, harmonize, and transform the body's energy processes. 
          </p>
          <p>
            The physical body is surrounded and interpenetrated by an energy body, also known as the aura. Physical ailments appear first as energetic disruptions or imbalances in this energy field before they manifest in the physical body. By treating the energy body, the healing of the physical body is accelerated dramatically.
          </p>
        </section>

        <div className="healing-details-grid">
          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><Activity size={24} className="detail-icon" /> How the Healing Works</h3>
            <p>Our sessions focus on two main energetic actions to restore balance:</p>
            <ol className="steps-list">
              <li>
                <strong>Cleansing:</strong> Removing the diseased, congested, or dirty energy from the affected organ, chakra, and auric field. This removes blockages and allows energy to flow freely.
              </li>
              <li>
                <strong>Energizing:</strong> Projecting clean, fresh prana (often using specific color energy frequencies) to the cleansed area. This accelerates the regeneration of physical cells and organs.
              </li>
            </ol>
          </section>

          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><CheckCircle size={24} className="detail-icon" /> Benefits of Physical Healing</h3>
            <ul className="benefits-list">
              <li><strong>Non-Touch & Drugless:</strong> No physical contact is required, and no medicines are prescribed. It complements traditional medicine perfectly.</li>
              <li><strong>Fast Recovery:</strong> Accelerates the body's rate of healing by 3x or more for both acute and chronic conditions.</li>
              <li><strong>Prevention:</strong> Detects and clears energy blockages before they manifest as physical sickness.</li>
              <li><strong>Vitality Boost:</strong> Restores overall stamina, balances the chakras, and strengthens the immune system.</li>
            </ul>
          </section>
        </div>

        <section className="ailments-section glass soft-shadow">
          <h2 className="font-accent text-center">Conditions We Frequently Treat</h2>
          <div className="ailments-grid">
            <div className="ailment-category">
              <h4>Minor/Acute Ailments</h4>
              <ul>
                <li>Fever, Colds, and Coughs</li>
                <li>Migraines and Headaches</li>
                <li>Muscle Pain, Strains, and Sprains</li>
                <li>Minor Burns and Cuts</li>
                <li>Eyestrain and Tired Eyes</li>
              </ul>
            </div>
            <div className="ailment-category">
              <h4>Chronic/Major Conditions</h4>
              <ul>
                <li>Respiratory Diseases (Asthma, Sinusitis)</li>
                <li>Gastrointestinal Disorders (Acidity, IBS)</li>
                <li>Rheumatoid Arthritis and Back Pain</li>
                <li>Heart and Circulatory Conditions</li>
                <li>Chronic Fatigue and Low Immunity</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center book-footer">
          <p>Ready to experience physical rejuvenation?</p>
          <Link to="/book" className="btn-primary">Schedule Your Session Now</Link>
        </div>
      </div>
    </div>
  );
};

export default PhysicalHealing;
