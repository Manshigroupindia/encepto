import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { MaterialIcon } from './MaterialIcon';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="h-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2.5 group" to="/">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-sm tracking-tight shadow-xs group-hover:bg-blue-600 dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-slate-900 dark:text-white uppercase leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                ENCEPTO
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                Embedded AI &amp; Sensing
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/technology')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/technology"
          >
            Technology
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/applications')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/applications"
          >
            Applications
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/product')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/product"
          >
            Product
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/research')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/research"
          >
            Research
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/about')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`text-sm font-medium transition-colors py-1 ${
              isCurrent('/contact')
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Right Controls: Theme Toggle & Understated CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle UI Theme"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? (
              <MaterialIcon name="light_mode" className="text-[18px]" />
            ) : (
              <MaterialIcon name="dark_mode" className="text-[18px]" />
            )}
          </button>

          {/* Understated Primary CTA */}
          <Link
            className="hidden sm:inline-flex items-center justify-center px-4 h-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs hover:shadow transition-all"
            to="/contact"
          >
            Let's Talk
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <MaterialIcon name={mobileMenuOpen ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>

      </div>

      {/* Responsive Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-5 flex flex-col gap-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/technology') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/technology"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Technology</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/applications') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/applications"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Applications</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/product') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Product</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/research') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/research"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Research</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/about') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>About</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
            <Link
              className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                isCurrent('/contact') ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact</span>
              <MaterialIcon name="chevron_right" className="text-[18px] opacity-40" />
            </Link>
          </nav>

          {/* Secondary Links */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around text-xs text-slate-500 dark:text-slate-400 font-medium">
            <Link
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
            >
              Case Studies
            </Link>
            <span>&bull;</span>
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
            >
              Careers
            </Link>
            <span>&bull;</span>
            <Link
              to="/collaboration"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1"
            >
              Collaboration
            </Link>
          </div>

          <Link
            className="w-full flex items-center justify-center py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-xs hover:bg-blue-700 transition-colors"
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </Link>
        </div>
      )}
    </header>
  );
};
