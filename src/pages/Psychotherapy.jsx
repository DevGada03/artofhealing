import { Link } from 'react-router-dom';
import { Heart, Activity, ShieldAlert, CheckCircle } from 'lucide-react';
import './Psychotherapy.css';

const Psychotherapy = () => {
  return (
    <div className="page-container fade-in psychotherapy-page">
      <section className="healing-hero">
        <div className="container">
          <div className="hero-badge"><Heart size={16} /> Emotional Healing Modality</div>
          <h1 className="font-accent">Pranic Psychotherapy</h1>
          <p className="subtitle">Alleviate psychological distress, negative emotional blocks, and trauma through advanced energy cleaning.</p>
          <Link to="/book" className="btn-primary">Book a Therapy Session</Link>
        </div>
      </section>

      <div className="container healing-content">
        <section className="intro-section glass soft-shadow">
          <h2 className="font-accent">What is Pranic Psychotherapy?</h2>
          <p>
            Pranic Psychotherapy is an advanced branch of Pranic Healing that focuses on alleviating emotional, psychological, and mental disorders. While physical pranic healing deals with the physical body's energy, psychotherapy addresses the emotional and mental bodies.
          </p>
          <p>
            Emotional pain, negative thoughts, phobias, and traumatic memories exist as heavy, negative energy forms (called thought entities or elementals) lodged inside specific chakras (such as the solar plexus, heart, and crown). Pranic Psychotherapy uses advanced techniques to disintegrate and extract these negative patterns directly from the source.
          </p>
        </section>

        <div className="healing-details-grid">
          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><Activity size={24} className="detail-icon" /> The Treatment Process</h3>
            <p>Our sessions help you heal using focused energetic purification:</p>
            <ol className="steps-list">
              <li>
                <strong>Extraction of Thought Entities:</strong> Releasing the deep-seated energetic structures created by negative emotions, phobias, grief, or trauma.
              </li>
              <li>
                <strong>Chakra Balancing &amp; Energizing:</strong> Filling the affected chakras with peaceful, positive, and soothing energies to restore emotional balance.
              </li>
              <li>
                <strong>Auric Shielding:</strong> Creating energy shields around your chakras to prevent external negative influences and stress from affecting you in daily life.
              </li>
            </ol>
          </section>

          <section className="details-card glass soft-shadow">
            <h3 className="font-accent"><CheckCircle size={24} className="detail-icon" /> Key Benefits of Psychotherapy</h3>
            <ul className="benefits-list">
              <li><strong>Mental Clarity:</strong> Calms the overactive mind, relieves brain fog, and brings peace.</li>
              <li><strong>Emotional Release:</strong> Dissolves subconscious baggage and negative emotional loops.</li>
              <li><strong>Behavioral Support:</strong> Helps overcome compulsive behaviors, phobias, and deep-seated patterns.</li>
              <li><strong>Healthy Shielding:</strong> Empowers you to remain calm and unaffected in stressful environments.</li>
            </ul>
          </section>
        </div>

        <section className="ailments-section glass soft-shadow">
          <h2 className="font-accent text-center">Issues We Frequently Help Resolve</h2>
          <div className="ailments-grid">
            <div className="ailment-category">
              <h4>Emotional Disturbance</h4>
              <ul>
                <li>Chronic Stress, Tension, and Burnout</li>
                <li>Anxiety, Panic Attacks, and Nervousness</li>
                <li>Depression, Grief, and Emotional Suffering</li>
                <li>Anger, Irritability, and Resentment</li>
                <li>Relationship Struggles and Heartbreak</li>
              </ul>
            </div>
            <div className="ailment-category">
              <h4>Psychological Conditions</h4>
              <ul>
                <li>Phobias (Fears of heights, public speaking, etc.)</li>
                <li>Obsessive Thoughts and Compulsive Patterns</li>
                <li>Addiction Support (Smoking, alcohol, drugs)</li>
                <li>Trauma Recovery and PTSD Symptoms</li>
                <li>Childhood Trauma and Subconscious Fears</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center book-footer">
          <p>Ready to restore emotional peace and mental balance?</p>
          <Link to="/book" className="btn-primary">Schedule Your Session Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Psychotherapy;
