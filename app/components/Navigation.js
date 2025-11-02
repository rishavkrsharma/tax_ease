'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav 
      className="fixed w-full backdrop-blur-xl shadow-2xl z-50 transition-colors duration-300" 
      style={{backgroundColor: 'var(--nav-bg-scrolled)'}}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <div className="text-3xl font-light tracking-wider">
              <span className="gradient-text">ANY</span>
              <span 
                className="group-hover:opacity-80 transition-opacity duration-300" 
                style={{color: 'var(--text-primary)'}}
              >
                TAX
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm tracking-wider transition-colors duration-300" 
              style={{color: 'var(--text-secondary)'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm tracking-wider transition-colors duration-300" 
              style={{color: 'var(--text-secondary)'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              About
            </Link>
            <button 
              onClick={toggleTheme}
              className="text-xl transition-all duration-300"
              title="Toggle theme"
              style={{color: 'var(--text-secondary)'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link 
              href="/contact" 
              className="text-sm tracking-wider px-8 py-3 transition-all duration-300 gradient-bg hover:opacity-90 text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

