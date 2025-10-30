import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skillset</h2>
        <div className="skills-line"></div>
        <p className="skills-intro">
          Here are the tools and technologies I use to bring ideas to life — from design to deployment.
        </p>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <h3>🧩 Languages</h3>
            <p>HTML5, CSS3, JavaScript, Python</p>
          </div>

          {/* Front-End */}
          <div className="skill-card">
            <h3>🎨 Front-End</h3>
            <p>React, Responsive Design, JavaScript & CSS Animations</p>
          </div>

          {/* Back-End */}
          <div className="skill-card">
            <h3>⚙️ Back-End</h3>
            <p>Node.js, Express, REST APIs, Contact Forms (Render)</p>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3>🛠 Tools</h3>
            <p>Git, GitHub, VS Code, NPM</p>
          </div>

          {/* Other */}
          <div className="skill-card">
            <h3>💡 Other</h3>
            <p>Web Accessibility, SEO, DOM Manipulation</p>
          </div>

          {/* Deployment */}
          <div className="skill-card">
            <h3>🚀 Deployment</h3>
            <p>GitHub Pages, Render</p>
          </div>
        </div>
      </div>
    </section>
  );
}
