'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for casual daily trivia.',
    features: [
      'Daily 10-question quiz',
      'Global leaderboard access',
      'Basic personal stats',
      'Earn basic badges',
      'Ad-supported'
    ],
    cta: 'Start Playing',
    popular: false
  },
  {
    name: 'Premium',
    price: '$3.99',
    period: '/mo',
    description: 'For the ultimate trivia enthusiast.',
    features: [
      'Unlimited quiz replays',
      'All 8 categories unlocked',
      'No ads between rounds',
      'Detailed performance analytics',
      'Exclusive Premium badge frames',
      'Friends challenge mode'
    ],
    cta: 'Go Premium',
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Choose Your Level</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get more out of QuizPulse with our premium features. No commitment, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[40px] border-2 transition-all ${
                plan.popular 
                  ? 'border-primary shadow-2xl shadow-purple-100 dark:shadow-none bg-white dark:bg-gray-900' 
                  : 'border-gray-100 dark:border-gray-800 hover:border-purple-100 dark:hover:border-purple-900 bg-gray-50 dark:bg-gray-900/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-sm font-black flex items-center gap-2 shadow-lg">
                  <Crown className="w-4 h-4 fill-white" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 font-bold">{plan.period}</span>}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 font-medium">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-purple-400' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Free' ? '/quiz' : '/premium'}
                className={`block w-full py-5 rounded-2xl text-center font-black text-lg transition-all active:scale-95 ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-purple-200 dark:shadow-none' 
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-accent fill-accent" />
            Special offer: Get 2 months free with an annual subscription!
          </p>
        </div>
      </div>
    </section>
  );
}
