'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';

const mockPlayers = [
  { name: 'QuizMaster99', score: 2840, streak: 14, avatar: 'QM' },
  { name: 'TriviaQueen', score: 2720, streak: 8, avatar: 'TQ' },
  { name: 'BrainiacSteve', score: 2650, streak: 21, avatar: 'BS' },
  { name: 'DailySolver', score: 2400, streak: 5, avatar: 'DS' },
  { name: 'KnowledgeKing', score: 2380, streak: 12, avatar: 'KK' },
];

export default function LeaderboardPreview() {
  return (
    <section id="leaderboard" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
              Compete on the <br />
              <span className="text-primary">Global Leaderboard</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Every point counts. Climb the ranks by answering correctly and quickly. Top players at the end of each month win exclusive badges and Premium status.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Rankings Updated Live</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">See where you stand instantly after every quiz round.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-yellow-600 dark:text-yellow-400 fill-yellow-600 dark:fill-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Monthly Seasons</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">New winners every month. Everyone starts fresh on the 1st.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-[40px] shadow-2xl shadow-purple-200/50 dark:shadow-none p-8 border border-purple-100 dark:border-purple-900/30"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-accent" />
                  Top Players
                </h3>
                <span className="text-gray-400 dark:text-gray-500 font-bold">This Season</span>
              </div>

              <div className="space-y-4">
                {mockPlayers.map((player, index) => (
                  <div 
                    key={player.name}
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-purple-100 dark:hover:border-purple-900 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 font-black text-lg ${index < 3 ? 'text-primary' : 'text-gray-400 dark:text-gray-600'}`}>
                        #{index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                        {player.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{player.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Streak: {player.streak} days</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-gray-900 dark:text-white">{player.score.toLocaleString()}</p>
                      <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider">Points</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                View Full Leaderboard
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
