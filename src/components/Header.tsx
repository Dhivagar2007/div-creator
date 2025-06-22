
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Portfolio' }, // Added Portfolio link
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeMobileMenu}>
          Div<span>Creater</span>
        </a>
        <button
          className="mobile-menu-btn"
          id="mobileMenuBtn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="navMenu"
        >
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <nav>
          <ul id="navMenu" className={isMobileMenuOpen ? 'active' : ''}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;