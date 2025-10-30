import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="/" className="header-logo">
          <img src="/myLogo.png" alt="Omer Tech Dude Logo" />
        </a>

        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li>
              <a href="#contact">
                <button className="contact-button">Contact Me</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
