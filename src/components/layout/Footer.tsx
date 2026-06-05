import Link from 'next/link';
import { Zap, Github, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-purple-100 dark:border-purple-900/30 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-primary">
                QuizPulse
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Test your knowledge every day with fresh challenges. Join thousands of players in the ultimate daily trivia experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Game</h3>
            <ul className="space-y-2">
              <li><Link href="/quiz" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Daily Quiz</Link></li>
              <li><Link href="/lightning" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Lightning Round</Link></li>
              <li><Link href="/leaderboard" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Global Leaderboard</Link></li>
              <li><Link href="/categories" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Categories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <span className="text-sm font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-100 dark:border-purple-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} QuizPulse. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-gray-400 dark:text-gray-600 text-sm">Made with ❤️ for trivia lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
