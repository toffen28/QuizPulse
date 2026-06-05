'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Shield, Star, Award } from 'lucide-react';
import { useGame } from '@/context/GameContext';
import { useRouter } from 'next/navigation';

const premiumFeatures = [
  { title: 'Unlimited Replays', description: 'Play as many daily quizzes as you want. Perfect your score.', icon: Zap },
  { title: 'All Categories Unlocked', description: 'Access exclusive questions in niche categories.', icon: Star },
  { title: 'Ad-Free Experience', description: 'No interruptions between rounds. Just pure trivia.', icon: Shield },
  { title: 'Detailed Analytics', description: 'Deep dive into your performance and improvements.', icon: Award },
  { title: 'Exclusive Frames', description: 'Stand out on the leaderboard with Pro badge frames.', icon: Crown },
  { title: 'Priority Support', description: 'Get your questions answered faster by our team.', icon: Check },
];

export default function PremiumPage() {
  const { togglePremium, isPremium } = useGame();
  const router = useRouter();

  const handleSubscribe = () => {
    // In a real app, this would redirect to Stripe Checkout
    // For demo, we just toggle premium and redirect to success
    togglePremium();
    router.push('/premium/success');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-black mb-6 border border-accent/20"
            >
              <Crown size={16} className="fill-accent" />
              QUIZPULSE PREMIUM
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Unlock Your Full <br /> <span className="text-primary">Trivia Potential</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of Pro players and get access to exclusive features, unlimited play, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
            {/* Monthly */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-10 rounded-[40px] border-2 border-gray-100 dark:border-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Monthly</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white">$3.99</span>
                <span className="text-gray-500 font-bold">/mo</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">Perfect for those who want to try all features.</p>
              <button 
                onClick={handleSubscribe}
                className="w-full py-5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-black text-lg hover:bg-gray-200 transition-all active:scale-95"
              >
                START MONTHLY
              </button>
            </motion.div>

            {/* Annual */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-10 rounded-[40px] border-4 border-primary shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-3xl font-black text-xs">BEST VALUE</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Annual</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-900 dark:text-white">$19.99</span>
                <span className="text-gray-500 font-bold">/yr</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">Save over 50% compared to monthly billing.</p>
              <button 
                onClick={handleSubscribe}
                className="w-full py-5 rounded-2xl bg-primary text-white font-black text-lg hover:bg-primary/90 shadow-xl shadow-purple-200 dark:shadow-none transition-all active:scale-95"
              >
                GO PRO NOW
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
