import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">Prashanth</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link to="/startup" className="text-gray-700 hover:text-indigo-600 transition-colors">Startup</Link>
              <Link to="/projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</Link>
              <Link to="/connect" className="text-gray-700 hover:text-indigo-600 transition-colors">Connect</Link>
            </div>

            {/* Mobile Navigation Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link to="/startup" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Startup</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Projects</Link>
              <Link to="/connect" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Connect</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/vadityavathprashanth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-500"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/prashanth-vadityavath" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-gray-500"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:prashanthvadityavath@gmail.com" 
              className="text-gray-400 hover:text-gray-500"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-500">
            © {new Date().getFullYear()} Prashanth Vadityavath. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}