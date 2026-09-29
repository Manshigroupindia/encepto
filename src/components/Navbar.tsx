import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { MaterialIcon } from './MaterialIcon';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on resize to desktop or route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-colors">
      <div className="h-16 w-full px-margin-mobile lg:px-margin flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-lg">
          <Link className="flex flex-col group" to="/">
            <span className="font-headline-md text-headline-md tracking-wider text-on-surface uppercase font-bold group-hover:text-secondary transition-colors">
              ENCEPTO
            </span>
            <span className="font-mono-label text-mono-label text-on-surface-variant uppercase tracking-widest text-[9px] sm:text-[11px]">
              Embedded AI · Intelligent Sensing
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/technology')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/technology"
          >
            Technology
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/applications')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/applications"
          >
            Applications
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/product')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/product"
          >
            Product
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/research')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/research"
          >
            Research
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/about')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`font-mono-label text-mono-label uppercase transition-colors ${
              isCurrent('/contact')
                ? 'text-on-surface font-bold border-b border-secondary pb-0.5'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle UI Theme"
            className="w-9 h-9 border border-outline-variant flex items-center justify-center bg-surface-container hover:bg-surface-container-high transition-colors"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? (
              <MaterialIcon name="light_mode" className="text-[18px] text-on-surface" />
            ) : (
              <MaterialIcon name="dark_mode" className="text-[18px] text-on-surface" />
            )}
          </button>

          {/* CTA Button */}
          <Link
            className="hidden sm:inline-flex items-center justify-center px-space-md h-9 bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider hover:bg-surface-container-highest hover:text-on-surface transition-colors border border-primary font-bold"
            to="/contact"
          >
            Start a Conversation
          </Link>


          {/* Mobile Hamburger Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden w-9 h-9 border border-outline-variant flex items-center justify-center bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-outline-variant bg-surface px-margin-mobile py-space-md flex flex-col gap-space-md shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-space-sm">
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
              <span className="text-secondary font-mono-label text-[10px]">00</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/technology') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/technology"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Technology</span>
              <span className="text-secondary font-mono-label text-[10px]">01</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/applications') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/applications"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Applications</span>
              <span className="text-secondary font-mono-label text-[10px]">02</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/product') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Product</span>
              <span className="text-secondary font-mono-label text-[10px]">03</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/research') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/research"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Research</span>
              <span className="text-secondary font-mono-label text-[10px]">04</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/about') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
              <span className="text-secondary font-mono-label text-[10px]">05</span>
            </Link>
            <Link
              className={`font-mono-label text-body-md uppercase py-2 border-b border-outline-variant/40 flex items-center justify-between ${
                isCurrent('/contact') ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
              <span className="text-secondary font-mono-label text-[10px]">06</span>
            </Link>
          </nav>

          {/* Secondary Mobile Navigation */}
          <div className="pt-space-xs border-t border-outline-variant/60 flex items-center justify-around font-mono-label text-[10px] text-on-surface-variant uppercase">
            <Link
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className={`hover:text-on-surface transition-colors ${
                isCurrent('/case-studies') ? 'text-secondary font-bold' : ''
              }`}
            >
              Case Studies
            </Link>
            <span>·</span>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`hover:text-on-surface transition-colors ${
                isCurrent('/careers') ? 'text-secondary font-bold' : ''
              }`}
            >
              Careers
            </Link>
            <span>·</span>
            <Link
              to="/collaboration"
              onClick={() => setMobileMenuOpen(false)}
              className={`hover:text-on-surface transition-colors ${
                isCurrent('/collaboration') ? 'text-secondary font-bold' : ''
              }`}
            >
              Collaboration
            </Link>
          </div>

          <Link
            className="w-full flex items-center justify-center py-space-sm bg-primary text-on-primary font-mono-label text-mono-label uppercase tracking-wider border border-primary font-bold"
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Conversation
          </Link>
        </div>
      )}
    </header>
  );
};
