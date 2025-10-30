import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h2 className="about-title">Who I Am</h2>
        <div className="about-line"></div>

        <p className="about-intro">
          I'm <span className="highlight">Omer</span> — a passionate web developer who loves building
          modern, high-performing websites that look great and load fast.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>💻 Front-End Developer</h3>
            <p>
              I focus on creating clean, responsive, and interactive user interfaces using
              <strong> React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
            </p>
          </div>

          <div className="about-card">
            <h3>⚙️ Problem Solver</h3>
            <p>
              I enjoy solving challenges — turning rough ideas into polished web apps
              that are both functional and beautiful.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Always Growing</h3>
            <p>
              I’m constantly learning new technologies and improving my craft. My goal is
              to create digital experiences that inspire and perform.
            </p>
          </div>
        </div>

        <p className="about-closing">
          Whether you need a sleek landing page or a full-stack web solution —
          I’m ready to bring your ideas to life.
        </p>
      </div>
    </section>
  );
}
