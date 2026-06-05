'use client';

import Link from 'next/link';
import { Trophy, Zap, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedMode === 'true' || (!savedMode && systemPrefersDark);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-purple-100 dark:border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Zap className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary">
                QuizPulse
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">Features</Link>
            <Link href="#leaderboard" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">Leaderboard</Link>
            <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">Pricing</Link>
            <Link href="/premium" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 font-bold transition-colors flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              Go Premium
            </Link>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link href="/login" className="text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors">Login</Link>
            <Link 
              href="/quiz" 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-purple-200 dark:shadow-purple-900 active:scale-95"
            >
              Play Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-purple-100 dark:border-purple-900 px-4 py-6 flex flex-col gap-4 shadow-xl"
          >
            <Link href="#features" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-700 dark:text-gray-200">Features</Link>
            <Link href="#leaderboard" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-700 dark:text-gray-200">Leaderboard</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-700 dark:text-gray-200">Pricing</Link>
            <Link href="/premium" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Go Premium
            </Link>
            <hr className="border-gray-100 dark:border-gray-800" />
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-700 dark:text-gray-200">Login</Link>
            <Link 
              href="/quiz" 
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-center"
            >
              Play Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}