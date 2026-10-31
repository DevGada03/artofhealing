import { useState } from 'react';
import { BookOpen, Video, ChevronDown, ChevronUp } from 'lucide-react';
import './Resources.css';

const faqData = [
  {
    question: "What is Pranic Healing?",
    answer: "Pranic Healing is a no-touch, no-drug complementary therapy system that uses prana (energy) to balance, harmonize, and transform the body's energy processes to accelerate healing."
  },
  {
    question: "Do I need to believe in it for it to work?",
    answer: "No, belief is not required. However, having an open mind and not resisting the healing energy can make the process faster and smoother."
  },
  {
    question: "Can I replace my medical treatment with Pranic Healing?",
    answer: "No. Pranic Healing is extremely effective as a complementary therapy but is not intended to replace orthodox medicine. Always consult your medical doctor for severe conditions."
  },
  {
    question: "Are there any side effects?",
    answer: "Pranic healing is extremely safe when applied by a certified healer. It simply removes diseased energy and replaces it with fresh, revitalizing prana."
  }
];

const Resources = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-container fade-in">
      <div className="resources-header">
        <div className="container">
          <h1 className="font-accent">Resources & Knowledge Base</h1>
          <p>Expand your understanding and find answers to common questions.</p>
        </div>
      </div>

      <div className="container resources-content">
        
        <section className="blog-section">
          <h2 className="section-title font-accent">Latest Articles</h2>
          <div className="blog-grid">
            {/* Articles will be populated here */}
          </div>
        </section>

        <section className="faq-section">
          <h2 className="section-title font-accent">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item soft-shadow ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3 className="font-ui">{faq.question}</h3>
                  {openFaq === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
                </div>
                <div className="faq-answer" style={{ maxHeight: openFaq === index ? '200px' : '0' }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Resources;
