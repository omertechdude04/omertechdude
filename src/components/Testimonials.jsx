import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love it, thank you Omer!",
      author: "Rommie Taib",
      company: "Space Kitten Studio",
    },
    {
      quote:
        "Wow, Omer—absolutely beautiful! You did an excellent job and it was a pleasure working with you. We’ll gladly recommend you.",
      author: "Yossi Hacohen",
      company: "Sell Us Your Land",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What People Say</h2>
        <div className="testimonials-line"></div>
        <p className="testimonials-subtitle">
          Kind words from people I’ve collaborated with — here’s what they had to say.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="author-name">— {t.author}</span>
                <span className="author-company">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
