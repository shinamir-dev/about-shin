import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        <div className="section-container">
          <div className="hero-content">
            <h1>Hi, I'm Shin Amir 👋</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I build modern web applications using React, Node.js, and PHP.
              Passionate about writing scalable and clean code that solves
              real-world problems.
            </p>

            <div className="hero-buttons">
              <button>View Projects</button>
              <button className="outline">Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <div className="section-container">
          <h2>About Me</h2>
          <p>
            I'm a developer from the Philippines focused on building responsive
            and user-friendly applications. I enjoy backend logic, frontend
            design, and continuously learning new technologies to improve my
            craft.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <div className="section-container">
          <h2>Tech Stack</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vite</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHP</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Railway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="languages">
        <div className="section-container">
          <h2>Programming Languages</h2>

          <div className="language-bars">
            <div className="bar">
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-fill js"></div>
              </div>
            </div>

            <div className="bar">
              <span>Git</span>
              <div className="progress">
                <div className="progress-fill git"></div>
              </div>
            </div>

            <div className="bar">
              <span>SQL</span>
              <div className="progress">
                <div className="progress-fill sql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}