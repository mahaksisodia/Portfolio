import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Mahak Sisodia</h2>
        <button className="toggle-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* HERO SECTION */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I’m Mahak 🚀</h1>
        <p>
  B.Tech CSE Student specializing in Frontend Development,
  focused on building clean, responsive, and user-friendly web applications.
</p>
        <button className="primary-btn">Download Resume</button>
      </motion.section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>Projects</h2>

        <div className="project-grid">

          {/* PROJECT 1 */}
          <motion.div
  className="project-card"
  whileHover={{ y: -10 }}
>
  <h3>📦 Package Delivery Tracker</h3>
  <p>
  <p>
  Designed and developed a Java-based delivery tracking system
  to help local stores manage package status efficiently.
</p>

  </p>
  <span>Java • MySQL</span>
</motion.div>


          {/* PROJECT 2 */}
          <motion.div
  className="project-card"
  whileHover={{ y: -10 }}
>
  <h3>🎨 ArtSphere</h3>
  <p>
  <p>
  Built a web platform that allows artists to showcase,
  manage, and sell their artwork through a digital gallery🫟.
</p>

  </p>
  <span>Java • MySQL • Maven</span>
</motion.div>

        </div>
      </section>
      {/* SKILLS SECTION */}
<section className="skills">
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <h3>🌐 Frontend</h3>
      <p>HTML, CSS, JavaScript, React</p>
    </div>

    <div className="skill-card">
      <h3>⚙️ Backend</h3>
      <p>Java, JSP, Servlets, MySQL</p>
    </div>

    <div className="skill-card">
      <h3>🛠 Tools</h3>
      <p>Git, GitHub, VS Code, IntelliJ</p>
    </div>
  </div>
</section>
{/* EDUCATION SECTION */}
<section className="education">
  <h2>Education</h2>

  <div className="timeline">
    <div className="timeline-item">
      <h3>B.Tech in Computer Science Engineering</h3>
      <span>2025 – Present</span>
      <p>Galgotias University</p>
    </div>

    <div className="timeline-item">
      <h3>Senior Secondary (12th)</h3>
      <span>2022 – 2023</span>
      <p>CBSE Board</p>
    </div>

    <div className="timeline-item">
      <h3>Secondary (10th)</h3>
      <span>2020 – 2021</span>
      <p>CBSE Board</p>
    </div>
  </div>
</section>


      {/* CONTACT SECTION */}
<section className="contact">
  <h2><h2>Let’s Connect</h2>
  </h2>
  <p style={{ marginBottom: "20px", color: "#666" }}>
  Feel free to reach out for opportunities, collaborations, or queries.
</p>

  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5"></textarea>
    <button className="primary-btn">Send Message</button>
  </form>
</section>


    </div>
  );
}

export default App;
