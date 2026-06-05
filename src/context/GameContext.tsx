'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Question, Category } from '@/types';
import { questions } from '@/data/questions';

interface GameState {
  currentQuestions: Question[];
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  gameMode: 'daily' | 'lightning' | 'challenge' | null;
  timeLeft: number;
  streak: number;
  answers: boolean[];
  isPremium: boolean;
  xp: number;
  level: number;
}

interface GameContextType extends GameState {
  startDailyQuiz: () => void;
  startLightningRound: () => void;
  startChallenge: (challengeQuestions: Question[]) => void;
  submitAnswer: (answer: string) => void;
  resetGame: () => void;
  togglePremium: () => void;
  addXP: (amount: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>({
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    isGameOver: false,
    gameMode: null,
    timeLeft: 0,
    streak: 0,
    answers: [],
    isPremium: false,
    xp: 0,
    level: 1
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quizpulse_stats');
    if (saved) {
      const parsed = JSON.parse(saved);
      setState(prev => ({
        ...prev,
        isPremium: parsed.isPremium || false,
        xp: parsed.xp || 0,
        level: parsed.level || 1,
        streak: parsed.streak || 0
      }));
    }
  }, []);

  // Save to localStorage when important stats change
  useEffect(() => {
    localStorage.setItem('quizpulse_stats', JSON.stringify({
      isPremium: state.isPremium,
      xp: state.xp,
      level: state.level,
      streak: state.streak
    }));
  }, [state.isPremium, state.xp, state.level, state.streak]);

  // Timer for lightning round
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.gameMode === 'lightning' && state.timeLeft > 0 && !state.isGameOver) {
      timer = setTimeout(() => {
        setState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (state.gameMode === 'lightning' && state.timeLeft === 0 && !state.isGameOver) {
      setState(prev => ({ ...prev, isGameOver: true }));
    }
    return () => clearTimeout(timer);
  }, [state.gameMode, state.timeLeft, state.isGameOver]);

  const startDailyQuiz = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    setState(prev => ({
      ...prev,
      currentQuestions: selected,
      currentQuestionIndex: 0,
      score: 0,
      isGameOver: false,
      gameMode: 'daily',
      timeLeft: 0,
      answers: []
    }));
  };

  const startLightningRound = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    
    setState(prev => ({
      ...prev,
      currentQuestions: shuffled,
      currentQuestionIndex: 0,
      score: 0,
      isGameOver: false,
      gameMode: 'lightning',
      timeLeft: 60,
      answers: []
    }));
  };

  const startChallenge = (challengeQuestions: Question[]) => {
    setState(prev => ({
      ...prev,
      currentQuestions: challengeQuestions,
      currentQuestionIndex: 0,
      score: 0,
      isGameOver: false,
      gameMode: 'challenge',
      timeLeft: 0,
      answers: []
    }));
  };

  const submitAnswer = (answer: string) => {
    const currentQ = state.currentQuestions[state.currentQuestionIndex];
    const isCorrect = answer === currentQ.correctAnswer;
    
    const newAnswers = [...state.answers, isCorrect];
    const newScore = isCorrect ? state.score + 100 : state.score;
    const nextIndex = state.currentQuestionIndex + 1;
    
    let isOver = false;
    if ((state.gameMode === 'daily' || state.gameMode === 'challenge') && nextIndex >= 10) {
      isOver = true;
    } else if (nextIndex >= state.currentQuestions.length) {
      isOver = true;
    }

    setState(prev => {
      const newXP = isOver ? prev.xp + (newScore / 10) : prev.xp;
      const newLevel = Math.floor(newXP / 1000) + 1;
      
      return {
        ...prev,
        score: newScore,
        currentQuestionIndex: nextIndex,
        isGameOver: isOver,
        answers: newAnswers,
        streak: isCorrect ? prev.streak + 1 : 0,
        xp: newXP,
        level: newLevel
      };
    });
  };

  const resetGame = () => {
    setState(prev => ({
      ...prev,
      currentQuestions: [],
      currentQuestionIndex: 0,
      score: 0,
      isGameOver: false,
      gameMode: null,
      timeLeft: 0,
      answers: []
    }));
  };

  const togglePremium = () => {
    setState(prev => ({ ...prev, isPremium: !prev.isPremium }));
  };

  const addXP = (amount: number) => {
    setState(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 1000) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  return (
    <GameContext.Provider value={{ ...state, startDailyQuiz, startLightningRound, startChallenge, submitAnswer, resetGame, togglePremium, addXP }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
