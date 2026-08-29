// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Sugapriyan</h2>

        <p className="footer-text">
          MERN Stack Developer • React.js • Node.js • MongoDB
        </p>

        <div className="footer-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sugapriyan Saravanan. Made with{" "}
          <FaHeart className="heart" /> using React.js
        </p>
      </div>
    </footer>
  );
}