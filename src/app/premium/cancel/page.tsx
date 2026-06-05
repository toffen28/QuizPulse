'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { XCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PremiumCancelPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-[48px] p-12 text-center shadow-2xl border border-purple-50 dark:border-purple-900/20"
        >
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-8 text-error">
            <XCircle size={64} />
          </div>
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Payment Cancelled</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Your payment was not completed. No charges were made to your account.
          </p>
          <div className="flex flex-col gap-4">
            <Link 
              href="/premium"
              className="bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-purple-200 dark:shadow-none"
            >
              TRY AGAIN
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 font-bold hover:underline"
            >
              <ArrowLeft size={18} />
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
