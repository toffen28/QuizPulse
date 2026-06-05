'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/types';
import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  currentIndex: number;
  totalQuestions: number;
}

export default function QuizCard({ question, onAnswer, currentIndex, totalQuestions }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (option: string) => {
    if (selected) return;
    
    setSelected(option);
    const correct = option === question.correctAnswer;
    setIsCorrect(correct);

    setTimeout(() => {
      onAnswer(option);
      setSelected(null);
      setIsCorrect(null);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <span className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-1">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-primary dark:text-purple-400 font-bold">{question.category}</span>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900/40 text-primary dark:text-purple-400 px-4 py-1 rounded-full text-xs font-bold uppercase">
          {question.difficulty}
        </div>
      </div>

      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className={`bg-white dark:bg-gray-900 rounded-[32px] p-8 md:p-12 shadow-xl border-4 transition-colors duration-300 ${
          isCorrect === true ? 'border-success' : isCorrect === false ? 'border-error' : 'border-purple-50 dark:border-gray-800'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-10 leading-tight">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option) => {
            const isThisSelected = selected === option;
            const isThisCorrect = option === question.correctAnswer;
            
            let buttonClass = "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20";
            if (selected) {
              if (isThisCorrect) {
                buttonClass = "bg-success text-white border-success shadow-lg shadow-green-200 dark:shadow-none";
              } else if (isThisSelected) {
                buttonClass = "bg-error text-white border-error shadow-lg shadow-red-200 dark:shadow-none";
              } else {
                buttonClass = "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 opacity-50";
              }
            }

            return (
              <motion.button
                key={option}
                whileHover={!selected ? { scale: 1.02 } : {}}
                whileTap={!selected ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(option)}
                className={`p-5 rounded-2xl border-2 text-lg font-bold transition-all flex items-center justify-between ${buttonClass} ${
                  isCorrect === false && isThisSelected ? 'animate-shake' : ''
                } dark:text-gray-200`}
              >
                {option}
                <AnimatePresence>
                  {selected && isThisCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check className="w-6 h-6" />
                    </motion.div>
                  )}
                  {selected && isThisSelected && !isThisCorrect && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Answer feedback overlay */}
      <AnimatePresence>
        {isCorrect !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[-1] pointer-events-none transition-colors duration-300 ${
              isCorrect ? 'bg-success/5' : 'bg-error/5'
            }`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
