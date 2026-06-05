'use client';

import { GameProvider, useGame } from '@/context/GameContext';
import QuizGame from '@/components/game/QuizGame';
import Navbar from '@/components/layout/Navbar';
import { Play, Zap, Clock, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

function QuizHome() {
  const { gameMode, startDailyQuiz, startLightningRound } = useGame();

  if (gameMode) {
    return <QuizGame />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-32 pb-20 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">Choose Your Mode</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">How do you want to play today?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Daily Quiz */}
          <motion.button
            whileHover={{ y: -10 }}
            onClick={startDailyQuiz}
            className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-xl border-2 border-transparent hover:border-primary text-left group transition-all dark:shadow-none"
          >
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/40 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-primary dark:text-purple-400" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Daily Quiz</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              10 fresh questions. Only one chance to keep your streak alive. Resets at midnight.
            </p>
            <div className="flex items-center gap-2 text-primary dark:text-purple-400 font-black text-lg">
              PLAY NOW
              <Play className="w-5 h-5 fill-primary dark:fill-purple-400" />
            </div>
          </motion.button>

          {/* Lightning Round */}
          <motion.button
            whileHover={{ y: -10 }}
            onClick={startLightningRound}
            className="bg-white dark:bg-gray-900 p-10 rounded-[40px] shadow-xl border-2 border-transparent hover:border-accent text-left group transition-all dark:shadow-none"
          >
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/40 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400 fill-yellow-600 dark:fill-yellow-400" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Lightning Round</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              60 seconds. Unlimited questions. How fast can you think under pressure?
            </p>
            <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-black text-lg">
              START SPRINT
              <Zap className="w-5 h-5 fill-yellow-600 dark:fill-yellow-400" />
            </div>
          </motion.button>
        </div>

        <div className="mt-16 bg-primary rounded-[32px] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-purple-200 font-bold uppercase tracking-widest text-sm">Next Daily Quiz In</p>
              <p className="text-3xl font-black">09:42:15</p>
            </div>
          </div>
          <button className="bg-white text-primary px-8 py-4 rounded-2xl font-black hover:bg-gray-50 transition-all active:scale-95">
            Set Reminder
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <GameProvider>
      <Navbar />
      <QuizHome />
    </GameProvider>
  );
}
