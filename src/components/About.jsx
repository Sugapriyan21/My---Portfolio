import { motion } from "framer-motion";
import './about.css'

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <h3>Hi, I'm Sugapriyan 👋</h3>

          <p>
            I'm a passionate MERN Stack Developer focused on building
            modern, scalable, and responsive web applications.
          </p>

          <p>
            I specialize in React.js, Node.js, Express.js, and MongoDB,
            creating full-stack solutions with clean UI/UX and efficient
            backend architecture.
          </p>

          <p>
            My goal is to transform ideas into high-performance digital
            products that provide excellent user experiences.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h4>10+</h4>
              <span>Projects</span>
            </div>

            <div className="stat-card">
              <h4>MERN</h4>
              <span>Specialist</span>
            </div>

            <div className="stat-card">
              <h4>100%</h4>
              <span>Responsive</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="profile-card">
            <div className="profile-glow"></div>

            <h2>Sugapriyan</h2>

            <p>MERN Stack Developer</p>

            <div className="tech-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}