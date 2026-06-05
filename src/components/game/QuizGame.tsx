'use client';

import { useGame } from '@/context/GameContext';
import QuizCard from './QuizCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, Clock, RefreshCw, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import AdPlaceholder from '../ui/AdPlaceholder';

export default function QuizGame() {
  const { 
    currentQuestions, 
    currentQuestionIndex, 
    score, 
    isGameOver, 
    gameMode, 
    timeLeft, 
    submitAnswer, 
    resetGame,
    answers,
    streak,
    isPremium
  } = useGame();

  if (!gameMode) return null;

  if (isGameOver) {
    const accuracy = Math.round((answers.filter(a => a).length / answers.length) * 100) || 0;
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center border border-purple-100 dark:border-purple-900/20"
        >
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg rotate-12">
            <Trophy className="w-12 h-12 text-gray-900" />
          </div>
          
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold mb-10">Here's how you did today:</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-3xl border border-purple-100 dark:border-purple-900/40">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Score</p>
              <p className="text-3xl font-black text-primary dark:text-purple-400">{score}</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-3xl border border-yellow-100 dark:border-yellow-900/40">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Accuracy</p>
              <p className="text-3xl font-black text-yellow-600 dark:text-yellow-400">{accuracy}%</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-3xl border border-orange-100 dark:border-orange-900/40">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Best Streak</p>
              <p className="text-3xl font-black text-orange-600 dark:text-orange-400">{streak}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/40">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-1">XP Earned</p>
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400">+{score / 10}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              onClick={resetGame}
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
            >
              <Home className="w-5 h-5" />
              Back Home
            </Link>
            <button 
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-primary/90 transition-all shadow-xl shadow-purple-200 dark:shadow-none"
            >
              Share Result
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-3xl border border-purple-50 dark:border-purple-900/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-purple-100 dark:shadow-none">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Score</p>
              <p className="text-xl font-black text-primary dark:text-purple-400">{score}</p>
            </div>
          </div>

          {gameMode === 'lightning' && (
            <div className={`flex items-center gap-3 px-6 py-2 rounded-2xl border-2 ${timeLeft < 10 ? 'border-error bg-error/5 text-error animate-pulse' : 'border-purple-100 dark:border-purple-900/40 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'}`}>
              <Clock className="w-5 h-5" />
              <span className="text-2xl font-black tabular-nums">{timeLeft}s</span>
            </div>
          )}

          <div className="flex items-center gap-4 text-right">
            <div>
              <p className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Streak</p>
              <p className="text-xl font-black text-orange-500 flex items-center justify-end gap-1">
                <span className="text-lg">🔥</span> {streak}
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentQuestions[currentQuestionIndex] && (
            <QuizCard 
              key={currentQuestionIndex}
              question={currentQuestions[currentQuestionIndex]}
              onAnswer={submitAnswer}
              currentIndex={currentQuestionIndex}
              totalQuestions={gameMode === 'daily' ? 10 : currentQuestions.length}
            />
          )}
        </AnimatePresence>

        {/* Progress dots */}
        {gameMode === 'daily' && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < currentQuestionIndex 
                    ? answers[i] ? 'bg-success' : 'bg-error'
                    : i === currentQuestionIndex ? 'bg-primary w-8' : 'bg-gray-200 dark:bg-gray-800'
                }`}
              />
            ))}
          </div>
        )}

        <AdPlaceholder isPremium={isPremium} />
      </div>
    </div>
  );
}
