import ThreeBackground from "./ThreeBackground";
import './hero.css'
export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <h1>Hi, I'm Sugapriyan Saravanan</h1>

        <h2>MERN Stack Developer</h2>

        <p>
          Building scalable full-stack web applications
          with React, Node.js, Express.js and MongoDB.
        </p>

        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
      </div>

      <div className="hero-right">
        <ThreeBackground />
      </div>
    </div>
  );
}