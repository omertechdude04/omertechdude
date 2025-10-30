import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side — Text */}
        <div className="hero-text">
          <h1>Hey, I'm <span className="highlight">Omer</span> 👋</h1>
          <h2 className="subtitle">Front-End & Web Developer</h2>
          <p>
            I design and build modern, responsive, and user-focused web experiences.
            Passionate about clean code, speed, and creativity.
          </p>
          <a href="#projects" className="hero-btn">🚀 View My Work</a>
        </div>

        {/* Right Side — Image */}
        <div className="hero-image-container">
          <img
            src="myPicture.JPG"
            alt="Omer portrait"
            className="hero-photo"
          />
        </div>
      </div>
    </section>
  );
}
