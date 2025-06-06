import React from 'react';
import { useTheme } from '../App';
import './Home.css';

const Home = () => {
  const { toggleTheme } = useTheme();

  return (
    <section className="home-container">
      <div className="home-photo">
        <img src="/profile.jpg" alt="Maruthu Pandi" />
      </div>
      <div className="home-content">
        <h1>Hi, I'm Maruthu Pandi</h1>
        <h2>UI/UX Lead Developer</h2>
        <p>Crafting modern, responsive, and scalable user interfaces.</p>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <div className="resume-buttons">
          <a href="/MaruthuPandi_Resume.pdf" download>Download PDF</a>
          <a href="/MaruthuPandi_Resume.docx" download>Download DOC</a>
        </div>
      </div>
    </section>
  );
};

export default Home;