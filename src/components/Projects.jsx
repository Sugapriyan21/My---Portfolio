import { motion } from "framer-motion";
import './projects.css'

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Full-stack e-commerce platform with authentication, cart, payment integration, and admin dashboard.",
    tech: ["React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Todo App",
    description:
      "Collaborative todo app system with JWT authentication and real-time updates.",
    tech: ["React"],
    github: "#",
    demo: "#",
  },
    {
    title: "Website",
    description:
      "a collection of connected web pages with a common address (domain name), hosted on a web server, and viewed using a web browser.",
    tech: ["React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern 3D portfolio website with Three.js, React, animations, and responsive design.",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Calculator",
    description:
      "Calculator to create with React.js.",
    tech: ["React"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}