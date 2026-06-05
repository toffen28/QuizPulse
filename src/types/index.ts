export type Category = 
  | 'General Knowledge' 
  | 'Science' 
  | 'History' 
  | 'Geography' 
  | 'Sports' 
  | 'Entertainment' 
  | 'Technology' 
  | 'Food & Drink';

export interface Question {
  id: string;
  category: Category;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserStats {
  totalGames: number;
  bestStreak: number;
  currentStreak: number;
  accuracy: number;
  strongestCategory: Category;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
