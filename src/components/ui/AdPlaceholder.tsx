'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AdPlaceholderProps {
  isPremium?: boolean;
}

export default function AdPlaceholder({ isPremium = false }: AdPlaceholderProps) {
  if (isPremium) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full py-3 px-6 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-between border border-gray-100 dark:border-gray-800 mt-6"
    >
      <div className="flex items-center gap-3">
        <span className="bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-black px-1.5 py-0.5 rounded leading-none">AD</span>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Upgrade to Premium to remove ads</p>
      </div>
      <Link href="/premium" className="text-primary text-xs font-black hover:underline uppercase tracking-wider">
        Go Pro
      </Link>
    </motion.div>
  );
}
