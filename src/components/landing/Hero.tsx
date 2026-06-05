'use client';

import { motion } from 'framer-motion';
import { Play, Trophy, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-100/50 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-primary text-sm font-bold mb-6">
            <Trophy className="w-4 h-4" />
            #1 Daily Trivia Game
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
            How Smart Are You <span className="text-primary">Really?</span>
            <br />
            Find Out Every Day.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            One new set of 10 questions every single day. Compete with friends, maintain your streak, and climb the global leaderboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/quiz"
              className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-purple-200 dark:shadow-none active:scale-95"
            >
              <Play className="w-5 h-5 fill-white" />
              START TODAY'S QUIZ
              <div className="absolute -top-3 -right-3 bg-accent text-gray-900 text-xs font-black px-2 py-1 rounded-lg rotate-12 shadow-lg group-hover:scale-110 transition-transform">
                FREE
              </div>
            </Link>
            <Link 
              href="#features"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-2 border-gray-100 dark:border-gray-800 px-8 py-4 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 grayscale opacity-60 dark:opacity-40">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Zap className="w-6 h-6" />
              <span className="font-bold">Fast Paced</span>
            </div>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Trophy className="w-6 h-6" />
              <span className="font-bold">Competitive</span>
            </div>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <div className="w-6 h-6 rounded-full bg-black dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-black font-bold">10</div>
              <span className="font-bold">Daily Questions</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Demo Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-purple-100 dark:border-purple-900/30 overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            <div className="p-8 text-left w-full max-w-md">
              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-400 dark:text-gray-500 font-bold text-sm">Question 4 of 10</span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-bold">Category: History</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Which ancient civilization built the Great Pyramid of Giza?</h3>
              <div className="grid grid-cols-1 gap-3">
                {['Romans', 'Greeks', 'Egyptians', 'Mayans'].map((opt, i) => (
                  <div 
                    key={opt}
                    className={`p-4 rounded-xl border-2 font-bold transition-all ${i === 2 ? 'border-success bg-success/10 text-success' : 'border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-200 dark:hover:border-purple-800'}`}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full -z-0 opacity-20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full -z-0 opacity-10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
