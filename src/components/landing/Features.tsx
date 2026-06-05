'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Trophy, 
  Flame, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  Target
} from 'lucide-react';

const features = [
  {
    title: 'Daily Challenges',
    description: 'A fresh set of 10 questions every midnight. Never the same quiz twice.',
    icon: Clock,
    color: 'bg-blue-500'
  },
  {
    title: 'Streak System',
    description: 'Keep your momentum! Lose your streak if you miss a day. Can you hit 100?',
    icon: Flame,
    color: 'bg-orange-500'
  },
  {
    title: '8 Categories',
    description: 'From History to Food & Drink. Test your knowledge across all subjects.',
    icon: Target,
    color: 'bg-purple-500'
  },
  {
    title: 'Global Leaderboards',
    description: 'See how you stack up against the best players in the world.',
    icon: Globe,
    color: 'bg-green-500'
  },
  {
    title: 'Lightning Round',
    description: 'Think fast! Answer as many as possible in 60 seconds.',
    icon: Zap,
    color: 'bg-yellow-500'
  },
  {
    title: 'Personal Stats',
    description: 'Track your accuracy, best streaks, and strongest categories.',
    icon: Trophy,
    color: 'bg-pink-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Built for Brainiacs</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to level up your general knowledge and compete with the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border-2 border-gray-50 dark:border-gray-900 hover:border-purple-100 dark:hover:border-purple-900/30 hover:shadow-xl hover:shadow-purple-50 dark:hover:shadow-none transition-all group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
