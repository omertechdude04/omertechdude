import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Popcorn Time",
      url: "https://popcorntimewebapp.netlify.app",
      img: "/popcorntime.png",
      desc: "Movie discovery app powered by TMDB API. Explore trending titles, filter by genre, and view details in modals.",
    },
    {
      title: "Sell Us Your Land",
      url: "https://www.sellusyourlandnow.com",
      img: "/sellusyourlandlogo.jpg",
      desc: "Mobile-friendly site for a land-buying company. Includes contact form with backend integration and SEO optimization.",
    },
    {
      title: "Space Kitten Studio",
      url: "https://www.spacekittenstudios.com",
      img: "/spacekittenstudioslogo.png",
      desc: "Portfolio site for a costume-making business. Focused on layout, design, and visual storytelling.",
    },
    {
      title: "Speech Accent Trainer",
      url: "https://omertechdude04.github.io/speechaccentproject/",
      desc: "Language pronunciation tool using browser speech synthesis. Hear words in different voices and accents.",
    },
    {
      title: "Unit Conversion Tool",
      url: "https://omertechdude04.github.io/unitconverter/",
      desc: "Convert temperature, length, and more with a sleek, responsive interface.",
    },
    {
      title: "Rock Paper Scissors",
      url: "https://omertechdude04.github.io/rockpaperscissors/",
      desc: "Classic game: user vs computer. Simple, fun, and interactive.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-line"></div>
        <p className="projects-subtitle">
          A selection of my favorite builds — from front-end experiments to full web solutions.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.img && (
                <div className="project-image">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} alt={project.title} />
                  </a>
                </div>
              )}
              <div className="project-content">
                <h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
