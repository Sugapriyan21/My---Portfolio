import { AppBar, Toolbar } from "@mui/material";
import './navbar.css'

export default function Navbar() {
  return (
    <AppBar
      sx={{
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(15px)",
        boxShadow: "none",
      }}
    >
      <Toolbar className="navbar">
        <div className="logo">
          My-Portfolio
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </Toolbar>
    </AppBar>
  );
}