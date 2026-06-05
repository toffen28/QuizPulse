'use client';

import { useParams } from 'next/navigation';
import { useGame } from '@/context/GameContext';
import { questions } from '@/data/questions';
import QuizGame from '@/components/game/QuizGame';
import Navbar from '@/components/layout/Navbar';
import { Trophy, Play, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ChallengePage() {
  const params = useParams();
  const { gameMode, startChallenge, score, isGameOver } = useGame();
  const [challengerName, setChallengerName] = useState('A Friend');
  const [challengerScore, setChallengerNameScore] = useState(800);

  useEffect(() => {
    // In a real app, fetch challenge details from Supabase using params.id
    // For demo mode, we use mock data
    if (params.id) {
      // Mock lookup logic
      if (params.id === '123') {
        setChallengerName('Alex');
        setChallengerNameScore(900);
      }
    }
  }, [params.id]);

  const handleStart = () => {
    // Pick 10 questions (seeded or specific to challenge)
    const challengeQuestions = [...questions].slice(0, 10);
    startChallenge(challengeQuestions);
  };

  if (gameMode === 'challenge') {
    return (
      <>
        <Navbar />
        <QuizGame />
      </>
    );
  }

  if (isGameOver && gameMode === 'challenge') {
    const won = score > challengerScore;
    return (
      <main className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <Navbar />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-12 shadow-2xl max-w-2xl w-full text-center border border-purple-100 dark:border-purple-900/30"
        >
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg ${won ? 'bg-success text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
            <Trophy size={48} />
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
            {won ? 'You Beat It!' : 'Close One!'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-bold mb-10">
            {won 
              ? `You scored ${score} and beat ${challengerName}'s score of ${challengerScore}!` 
              : `${challengerName} still holds the lead with ${challengerScore}. You scored ${score}.`}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all active:scale-95"
          >
            TRY AGAIN
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-16 shadow-xl border border-purple-50 dark:border-purple-900/20 text-center"
          >
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Share2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Friends Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              <span className="font-black text-primary">{challengerName}</span> has challenged you to beat their score of <span className="font-black text-primary">{challengerScore}</span>!
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/10 rounded-3xl p-8 mb-12 border border-purple-100 dark:border-purple-900/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">Rules</span>
                <span className="bg-purple-100 dark:bg-purple-900/40 text-primary px-3 py-1 rounded-full text-xs font-black">10 QUESTIONS</span>
              </div>
              <ul className="text-left space-y-3 text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex gap-3 items-center">
                  <div className="w-5 h-5 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">✅</span>
                  </div>
                  Same questions Alex answered
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5 h-5 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">✅</span>
                  </div>
                  No time limit (but speed earns XP)
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-5 h-5 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px]">✅</span>
                  </div>
                  Beat the score to win a badge
                </li>
              </ul>
            </div>

            <button 
              onClick={handleStart}
              className="group inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-2xl font-black text-2xl hover:bg-primary/90 transition-all shadow-2xl shadow-purple-200 dark:shadow-none active:scale-95 w-full sm:w-auto"
            >
              ACCEPT CHALLENGE
              <Play className="w-6 h-6 fill-white" />
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
