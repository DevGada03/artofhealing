import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import './Book.css';

const Book = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: ''
  });

  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const startDayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const bookableDates = [];
  // Allow any upcoming date in the current month
  for (let i = today.getDate(); i <= daysInMonth; i++) {
    bookableDates.push(i);
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 2) {
      const phoneNumber = '919969071424'; // Basic default
      const text = `Hi, I would like to book a healing session.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Date:* ${currentMonth} ${selectedDate}, ${currentYear}\n*Time:* ${selectedTime}\n*Notes:* ${formData.notes}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      setStep(3);
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <div className="page-container fade-in">
      <div className="book-header">
        <div className="container">
          <h1 className="font-accent">Schedule Your Healing Session</h1>
          <p>Take the first step towards deep physical and emotional rejuvenation.</p>
        </div>
      </div>

      <div className="container book-content">
        <div className="booking-widget glass soft-shadow">

          {/* Progress Indicator */}
          <div className="booking-progress">
            <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>1. Date & Time</div>
            <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2. Your Details</div>
            <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3. Confirmation</div>
          </div>

          <div className="booking-body">

            {/* STEP 1: DATE & TIME */}
            {step === 1 && (
              <div className="step-content fade-in flex-desktop">
                <div className="calendar-ui soft-shadow">
                  <div className="calendar-header">
                    <ChevronLeft className="cal-nav disabled" style={{ opacity: 0.3, cursor: 'not-allowed' }} />
                    <h4>{currentMonth} {currentYear}</h4>
                    <ChevronRight className="cal-nav disabled" style={{ opacity: 0.3, cursor: 'not-allowed' }} />
                  </div>
                  <div className="calendar-grid">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d} className="cal-day-name">{d}</div>)}
                    {[...Array(startDayOffset)].map((_, i) => (
                      <div key={`empty-${i}`} className="cal-day empty"></div>
                    ))}
                    {[...Array(daysInMonth)].map((_, i) => {
                      const dayNumber = i + 1;
                      const isBookable = bookableDates.includes(dayNumber);
                      const isSelected = selectedDate === dayNumber;
                      return (
                        <div
                          key={i}
                          className={`cal-day ${isSelected ? 'selected' : ''} ${!isBookable ? 'disabled' : ''}`}
                          onClick={() => {
                            if (isBookable) setSelectedDate(dayNumber);
                          }}
                          style={{
                            // Custom inline style handling for disabled and selected states
                            opacity: isBookable ? 1 : 0.3,
                            cursor: isBookable ? 'pointer' : 'not-allowed',
                            backgroundColor: isSelected ? 'var(--primary-blue)' : (isBookable ? 'var(--bg-light)' : 'transparent'),
                            color: isSelected ? 'white' : 'inherit'
                          }}
                        >
                          {dayNumber}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="time-ui">
                  <h4 className="font-ui" style={{ marginBottom: '1rem' }}><Clock size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Select a Time</h4>
                  <div className="time-slots">
                    {times.map((t, idx) => (
                      <button
                        key={idx}
                        className={`time-btn ${selectedTime === t ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(t)}
                        disabled={!selectedDate}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button
                    className="btn-primary w-100"
                    style={{ marginTop: '2rem' }}
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue to Details
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DETAILS */}
            {step === 2 && (
              <form className="step-content form-ui fade-in" onSubmit={handleNext}>
                <h3 className="font-accent" style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Patient Information</h3>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Dhiren Dhedia" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" required placeholder="xyz@example.com" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Notes / Intentions</label>
                  <textarea rows="4" placeholder="Briefly describe what Problem are you facing" name="notes" value={formData.notes} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                  <button type="submit" className="btn-primary">Confirm & Book via WhatsApp</button>
                </div>
              </form>
            )}

            {/* STEP 3: CONFIRMATION */}
            {step === 3 && (
              <div className="step-content success-ui fade-in">
                <CheckCircle size={80} color="#25D366" style={{ marginBottom: '1.5rem' }} />
                <h2 className="font-accent" style={{ color: 'var(--primary-blue)' }}>Booking Initialized!</h2>
                <p>Your healing session details for <strong>{currentMonth} {selectedDate}, {currentYear} at {selectedTime}</strong> have been opened in WhatsApp.</p>
                <p style={{ opacity: 0.8 }}>Please send the generated message to confirm your appointment.</p>
                <button className="btn-secondary" style={{ marginTop: '2rem' }} onClick={() => {
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: '', email: '', notes: '' });
                }}>
                  Book Another Session
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
