import { motion } from "framer-motion";
import './skills.css'
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React.js",
  "Material UI",
  "Node.js",
  "MongoDB",
  "Express.js",
];

export default function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="skill-card"
            whileHover={{
              scale: 1.1,
              rotateY: 15,
            }}
            transition={{ duration: 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}