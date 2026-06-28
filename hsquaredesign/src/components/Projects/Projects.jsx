import "./Projects.css";

import project1 from "../../assets/images/projects/modernvilla.jpg";
import project2 from "../../assets/images/projects/corporateoffice.jpg";
import project3 from "../../assets/images/projects/luxury.jpg";
import project4 from "../../assets/images/projects/industryplant.jpg";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Modern Villa",
      category: "Residential",
    },
    {
      image: project2,
      title: "Corporate Office",
      category: "Commercial",
    },
    {
      image: project3,
      title: "Luxury Apartment",
      category: "Residential",
    },
    {
      image: project4,
      title: "Industrial Plant",
      category: "Industrial",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <span className="section-title">FEATURED PROJECTS</span>

        <h2>Crafting Landmarks That Define Excellence</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <span>{project.category}</span>

                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
