import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © 2025 <span>Omer Tech Dude</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
