import React, { useEffect, useState } from 'react';
import '../santos/navs.css';
import logopng from '../Imagem/semrosa1.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="logo">
          <img src={logopng} className="imag" alt="Logo" />
        </div>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Nós</a>
          </li>
          <li className="nav-item">
            <a href="#app" onClick={() => setMenuOpen(false)}>Aplicativo</a>
          </li>
          <li className="nav-item">
            <a href="#avaliacao" onClick={() => setMenuOpen(false)}>Avaliação</a>
          </li>
          <li className="nav-item">
            <a href="#informacoes" onClick={() => setMenuOpen(false)}>Informações</a>
          </li>
          <li className="nav-item">
            <a href="#cadastro" onClick={() => setMenuOpen(false)}>Entre no Zen</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
