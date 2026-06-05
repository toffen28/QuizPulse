import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Trophy, Medal, Crown, ArrowUp, ArrowDown, Search } from 'lucide-react';

const fullLeaderboard = [
  { rank: 1, name: 'QuizMaster99', score: 28400, streak: 14, avatar: 'QM', change: 'up' },
  { rank: 2, name: 'TriviaQueen', score: 27200, streak: 8, avatar: 'TQ', change: 'down' },
  { rank: 3, name: 'BrainiacSteve', score: 26500, streak: 21, avatar: 'BS', change: 'none' },
  { rank: 4, name: 'KnowledgeKing', score: 25800, streak: 12, avatar: 'KK', change: 'up' },
  { rank: 5, name: 'DailySolver', score: 24000, streak: 5, avatar: 'DS', change: 'none' },
  { rank: 6, name: 'SmartyPants', score: 23500, streak: 3, avatar: 'SP', change: 'up' },
  { rank: 7, name: 'EinsteinJunior', score: 22100, streak: 30, avatar: 'EJ', change: 'down' },
  { rank: 8, name: 'QuizWiz', score: 21800, streak: 10, avatar: 'QW', change: 'up' },
  { rank: 9, name: 'TheThinker', score: 20500, streak: 7, avatar: 'TT', change: 'none' },
  { rank: 10, name: 'GeniusBar', score: 19900, streak: 4, avatar: 'GB', change: 'down' },
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-3xl mb-6 rotate-6 shadow-xl shadow-yellow-100 dark:shadow-none">
              <Trophy className="w-10 h-10 text-yellow-600 dark:text-yellow-400 fill-yellow-600 dark:fill-yellow-400" />
            </div>
            <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">Global Leaderboard</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">The world's smartest players, all in one place.</p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 mb-16 items-end">
            {/* Rank 2 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden font-black text-gray-600 dark:text-gray-400">
                TQ
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-t-[32px] w-full text-center border-x border-t border-gray-100 dark:border-gray-800 shadow-sm h-32 flex flex-col justify-center">
                <Medal className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
                <p className="font-black text-gray-900 dark:text-white">#2</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold truncate">TriviaQueen</p>
              </div>
            </div>

            {/* Rank 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-gray-900 shadow-xl overflow-hidden font-black text-white relative">
                QM
                <div className="absolute -top-1 -right-1 bg-accent p-1 rounded-full border-2 border-white dark:border-gray-900">
                  <Crown className="w-3 h-3 text-gray-900 fill-gray-900" />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-t-[40px] w-full text-center border-x border-t border-purple-100 dark:border-purple-900/30 shadow-xl h-48 flex flex-col justify-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full">CHAMPION</div>
                <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-2 fill-yellow-500" />
                <p className="font-black text-gray-900 dark:text-white text-2xl">#1</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">QuizMaster99</p>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden font-black text-orange-600 dark:text-orange-400">
                BS
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-t-[32px] w-full text-center border-x border-t border-gray-100 dark:border-gray-800 shadow-sm h-24 flex flex-col justify-center">
                <Medal className="w-8 h-8 text-orange-400 dark:text-orange-600 mx-auto mb-2" />
                <p className="font-black text-gray-900 dark:text-white">#3</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold truncate">BrainiacSteve</p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-900 rounded-[32px] shadow-xl border border-purple-50 dark:border-purple-900/20 overflow-hidden">
            <div className="p-6 border-b border-gray-50 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Find a player..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border-transparent focus:bg-white dark:focus:bg-gray-700 focus:border-primary focus:ring-0 transition-all font-medium dark:text-white"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-sm">Global</button>
                <button className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Friends</button>
                <button className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Monthly</button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-widest font-black border-b border-gray-50 dark:border-gray-800">
                    <th className="px-8 py-4">Rank</th>
                    <th className="px-8 py-4">Player</th>
                    <th className="px-8 py-4">Streak</th>
                    <th className="px-8 py-4 text-right">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {fullLeaderboard.map((player) => (
                    <tr key={player.rank} className="border-b border-gray-50 dark:border-gray-800 hover:bg-purple-50/30 dark:hover:bg-purple-900/10 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <span className={`font-black text-lg ${player.rank <= 3 ? 'text-primary' : 'text-gray-400 dark:text-gray-600'}`}>
                            #{player.rank}
                          </span>
                          {player.change === 'up' && <ArrowUp className="w-3 h-3 text-success" />}
                          {player.change === 'down' && <ArrowDown className="w-3 h-3 text-error" />}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-black text-gray-500 dark:text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                            {player.avatar}
                          </div>
                          <span className="font-bold text-gray-900 dark:text-white">{player.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="font-bold text-orange-500 flex items-center gap-1">
                          🔥 {player.streak}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="font-black text-gray-900 dark:text-white">{player.score.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 text-center bg-gray-50/50 dark:bg-gray-800/50">
              <button className="text-primary dark:text-purple-400 font-black hover:underline underline-offset-4">LOAD MORE PLAYERS</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
