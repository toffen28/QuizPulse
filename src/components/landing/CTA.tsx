'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden dark:shadow-none shadow-2xl shadow-purple-200"
        >
          {/* Animated background shapes */}
          <div className="absolute top-0 left-0 w-full h-full -z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-xl">
              <Zap className="w-10 h-10 text-gray-900 fill-gray-900" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to test your <br /> knowledge?
            </h2>
            <p className="text-purple-100 text-xl mb-12 max-w-2xl mx-auto">
              Join over 50,000 players and start your streak today. The next quiz is waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/quiz"
                className="group inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-gray-50 transition-all shadow-2xl active:scale-95"
              >
                PLAY FOR FREE
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/login"
                className="text-white font-bold text-lg hover:underline underline-offset-8 decoration-accent decoration-4"
              >
                Create an account
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
