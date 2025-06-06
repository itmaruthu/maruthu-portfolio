import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../App';
import './Layout.css';

const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`layout-wrapper theme-${theme}`}>
      <header className="nav-header">
        <h1 className="site-logo" onClick={() => navigate('/')}>Maruthu Pandi</h1>
        <nav className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Maruthu Pandi. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/maruthu-pandi-pt" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://github.com/itmaruthu" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="footer-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;