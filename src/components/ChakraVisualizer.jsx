import { useState } from 'react';
import './ChakraVisualizer.css';

const chakras = [
  { id: 'crown', name: 'Crown', color: '#9C27B0', desc: 'Located at the top of the head, it affects the upper brain and nervous system.' },
  { id: 'third-eye', name: 'Ajna', color: '#3F51B5', desc: 'Located in the middle of the forehead, it affects the brain, eyes, ears, and pituitary gland.' },
  { id: 'throat', name: 'Throat', color: '#03A9F4', desc: 'Located at the throat, it affects the neck, shoulders, larynx, and thyroid gland.' },
  { id: 'heart', name: 'Heart', color: '#4CAF50', desc: 'Located in the center of the chest, it affects the heart, lungs, and circulatory system.' },
  { id: 'solar', name: 'Solar Plexus', color: '#FFEB3B', desc: 'Located in the stomach area, it affects the liver, gut, pancreas, and metabolic system. Key aspects: Confidence, willpower, and personal power.' },
  { id: 'sacral', name: 'Sacral', color: '#FF9800', desc: 'Located in the lower abdomen (below the navel), it affects reproductive organs, sex organs, pelvis, and kidneys.' },
  { id: 'root', name: 'Root', color: '#F44336', desc: 'Located at the base of the spine, it affects the spine, kidneys, bladder, large intestine, and legs.' }
];

const ChakraVisualizer = () => {
  const [activeChakra, setActiveChakra] = useState(null);

  return (
    <section className="chakra-section glass soft-shadow">
      <div className="container chakra-container">
        <div className="chakra-body-map">
          <div className="body-silhouette">
            <img src="/images/meditating-figure.jpeg" alt="Meditating figure with chakras" className="meditation-img" />

            <div className="chakra-points-layer">
              {chakras.map((c) => {
                const positions = {
                  'crown': '23.5%',
                  'third-eye': '30%',
                  'throat': '35.5%',
                  'heart': '43.5%',
                  'solar': '50.5%',
                  'sacral': '56.5%',
                  'root': '62.5%'
                };
                return (
                  <div
                    key={c.id}
                    className={`chakra-point ${activeChakra?.id === c.id ? 'active' : ''}`}
                    style={{
                      '--c-color': c.color,
                      top: positions[c.id]
                    }}
                    onMouseEnter={() => setActiveChakra(c)}
                    onClick={() => setActiveChakra(c)}
                  >
                    <div className="chakra-glow"></div>
                    <div className="chakra-center"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="chakra-info">
          <h2 className="font-accent">Explore the Energy Body</h2>
          <p>Hover or tap on the chakras to understand their physical and psychological functions in Pranic Healing.</p>

          <div className="chakra-details">
            {activeChakra ? (
              <div className="fade-in">
                <h3 className="font-accent" style={{ color: activeChakra.color }}>
                  {activeChakra.name} Chakra
                </h3>
                <p>{activeChakra.desc}</p>
              </div>
            ) : (
              <div style={{ opacity: 0.5 }}>
                <p>Select a chakra to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChakraVisualizer;
