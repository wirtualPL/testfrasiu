
export type QuestionType = 'single' | 'multiple';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndices: number[];
  type: QuestionType;
}

export interface QuizSettings {
  nickname: string;
  questionCount: number | 'all';
  timeLimit: number | 'unlimited';
}

export interface ScoreRecord {
  nickname: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  settings: string;
}

export type QuizState = 'setup' | 'playing' | 'results' | 'ranking';
