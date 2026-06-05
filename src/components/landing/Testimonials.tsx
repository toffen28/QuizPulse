'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "I've been playing QuizPulse every morning for three months. My streak is at 84 and I'm not stopping!",
    author: "Sarah J.",
    role: "History Buff",
    avatar: "SJ"
  },
  {
    content: "The lightning round is intense! It's the perfect way to wake up my brain before work.",
    author: "Marcus T.",
    role: "Tech Lead",
    avatar: "MT"
  },
  {
    content: "Finally a trivia app that isn't pay-to-win. The questions are challenging and the design is beautiful.",
    author: "Elena R.",
    role: "Trivia Champion",
    avatar: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Loved by Quiz Lovers</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join a community of thousands who test their knowledge every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-[32px] border border-purple-50 dark:border-purple-900/20 shadow-lg shadow-purple-100/20 dark:shadow-none relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-purple-100 dark:text-purple-900/30" />
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{t.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
