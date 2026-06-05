import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Trophy, Zap, Target, Flame, Star, Award, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  { name: 'First Quiz', description: 'Complete your first daily quiz', icon: '🎯', unlocked: true },
  { name: 'Perfect Score', description: 'Get 10/10 in a daily quiz', icon: '💎', unlocked: true },
  { name: '7-Day Streak', description: 'Play for 7 days in a row', icon: '🔥', unlocked: true },
  { name: 'Quiz Master', description: 'Reach Level 10', icon: '🧙‍♂️', unlocked: false },
  { name: 'Speed Demon', description: 'Answer 15+ in Lightning Round', icon: '⚡', unlocked: false },
  { name: 'Generalist', description: 'Win in every category', icon: '🌍', unlocked: false },
];

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-12 shadow-xl border border-purple-50 dark:border-purple-900/20 mb-12 flex flex-col md:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-primary rounded-[48px] flex items-center justify-center text-white text-5xl md:text-7xl font-black rotate-3 shadow-2xl shadow-purple-200 dark:shadow-none">
                JD
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-gray-900 font-black px-4 py-2 rounded-2xl shadow-lg border-4 border-white dark:border-gray-900 rotate-12">
                LEVEL 12
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white">JohnDoe_Trivia</h1>
                <span className="inline-flex bg-purple-100 dark:bg-purple-900/40 text-primary dark:text-purple-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider w-fit mx-auto md:mx-0">PRO PLAYER</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-8">Joined January 2024 • Global Rank: #1,245</p>
              
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-4 rounded-full overflow-hidden mb-2">
                <div className="bg-primary h-full w-[65%]" />
              </div>
              <div className="flex justify-between text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <span>1,240 XP</span>
                <span>Next Level: 2,000 XP</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">Edit Profile</button>
              <button className="bg-primary text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-purple-100 dark:shadow-none hover:bg-primary/90 transition-all">Go Premium</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Stats Column */}
            <div className="lg:col-span-2 space-y-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: 'Total Games', value: '142', icon: Trophy, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                  { label: 'Avg Accuracy', value: '84%', icon: Target, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
                  { label: 'Current Streak', value: '12', icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
                  { label: 'Best Streak', value: '24', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                    <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Category Strength */}
              <div className="bg-white dark:bg-gray-900 rounded-[40px] p-8 md:p-10 shadow-xl border border-purple-50 dark:border-purple-900/20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Category Mastery</h3>
                <div className="space-y-6">
                  {[
                    { cat: 'History', score: 92, color: 'bg-purple-500' },
                    { cat: 'Science', score: 78, color: 'bg-blue-500' },
                    { cat: 'Geography', score: 65, color: 'bg-green-500' },
                    { cat: 'Entertainment', score: 88, color: 'bg-pink-500' },
                    { cat: 'General Knowledge', score: 82, color: 'bg-yellow-500' },
                  ].map(( mastery ) => (
                    <div key={mastery.cat}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-700 dark:text-gray-300">{mastery.cat}</span>
                        <span className="font-black text-primary dark:text-purple-400">{mastery.score}%</span>
                      </div>
                      <div className="w-full bg-gray-50 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${mastery.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full ${mastery.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Column */}
            <div className="space-y-12">
              <div className="bg-white dark:bg-gray-900 rounded-[40px] p-8 shadow-xl border border-purple-50 dark:border-purple-900/20">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white">Badges</h3>
                  <span className="text-primary dark:text-purple-400 font-bold text-sm">3/12</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((badge) => (
                    <div 
                      key={badge.name} 
                      className={`p-4 rounded-3xl border-2 flex flex-col items-center text-center transition-all ${badge.unlocked ? 'border-purple-100 dark:border-purple-900/40 bg-purple-50/50 dark:bg-purple-900/10' : 'border-gray-50 dark:border-gray-800 bg-white dark:bg-gray-900 grayscale opacity-40'}`}
                    >
                      <span className="text-4xl mb-2">{badge.icon}</span>
                      <p className="text-xs font-black text-gray-900 dark:text-white mb-1">{badge.name}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">{badge.description}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                  View All Achievements
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Activity Log */}
              <div className="bg-white dark:bg-gray-900 rounded-[40px] p-8 shadow-xl border border-purple-50 dark:border-purple-900/20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6">Recent Activity</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Daily Quiz', score: '9/10', time: '2 hours ago', icon: Calendar },
                    { title: 'Lightning Round', score: '18 correct', time: 'Yesterday', icon: Zap },
                    { title: 'Daily Quiz', score: '7/10', time: '2 days ago', icon: Calendar },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{activity.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time} • <span className="text-primary dark:text-purple-400 font-bold">{activity.score}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
