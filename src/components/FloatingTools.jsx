import { useState, useEffect } from 'react';
import { MessageCircle, Moon, Sun } from 'lucide-react';
import './FloatingTools.css';

const FloatingTools = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="floating-tools">
      <button 
        className="tool-btn theme-toggle glass soft-shadow hover-glow" 
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {theme === 'light' ? <Moon size={24} color="#1E88E5" /> : <Sun size={24} color="#64B5F6" />}
      </button>

      <a 
        href="https://wa.me/919969071424" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="tool-btn whatsapp-btn soft-shadow hover-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default FloatingTools;
