import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import './contact.css'

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's Work Together 🚀</h3>

          <p>
            I'm a MERN Stack Developer passionate about building modern,
            responsive, and scalable web applications.
          </p>

          <div className="contact-links">
            <a href="mailto:sugapriyan3028@gmail.com" >
              <FaEnvelope />
              Email
              sugapriyan3028@gmail.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/Sugapriyan Saravanan"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
              Sugapriyan Saravanan
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}