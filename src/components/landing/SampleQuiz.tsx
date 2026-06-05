'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RefreshCw, Star, Trophy } from 'lucide-react';

const sampleQuestions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    correct: 2
  },
  {
    question: "How many planets are in our solar system?",
    options: ["7", "8", "9", "10"],
    correct: 1
  }
];

export default function SampleQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === sampleQuestions[currentIdx].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentIdx < sampleQuestions.length - 1) {
        setCurrentIdx(currentIdx + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const reset = () => {
    setCurrentIdx(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-white/10 rotate-12"><Star size={120} fill="currentColor" /></div>
      <div className="absolute bottom-10 right-10 text-white/10 -rotate-12"><Star size={160} fill="currentColor" /></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-black text-white mb-4">Try a Sample Round</h2>
        <p className="text-purple-100 text-lg mb-12">See if you've got what it takes to be a Quiz Master.</p>

        <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 md:p-12 shadow-2xl min-h-[400px] flex flex-col justify-center border border-purple-400/20">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-primary dark:text-purple-400 font-bold text-sm uppercase tracking-widest">Question {currentIdx + 1} of 3</span>
                  <div className="h-2 w-24 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: `${((currentIdx + 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-10 leading-tight">
                  {sampleQuestions[currentIdx].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sampleQuestions[currentIdx].options.map((opt, i) => {
                    const isCorrect = i === sampleQuestions[currentIdx].correct;
                    const isSelected = selected === i;
                    
                    let bgClass = "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20";
                    if (selected !== null) {
                      if (isCorrect) bgClass = "bg-success/10 border-success text-success";
                      else if (isSelected) bgClass = "bg-error/10 border-error text-error";
                      else bgClass = "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 opacity-50";
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(i)}
                        disabled={selected !== null}
                        className={`p-6 rounded-2xl border-2 text-lg font-bold transition-all flex items-center justify-between ${bgClass} dark:text-gray-200`}
                      >
                        {opt}
                        {selected !== null && isCorrect && <Check className="w-6 h-6" />}
                        {selected !== null && isSelected && !isCorrect && <X className="w-6 h-6" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-gray-900">
                  <Trophy size={48} />
                </div>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Quiz Complete!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xl mb-8">You scored {score} out of 3</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={reset}
                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Try Again
                  </button>
                  <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black hover:bg-primary/90 transition-all shadow-xl shadow-purple-200 dark:shadow-none">
                    Play Full Version
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
