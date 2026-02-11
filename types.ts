export enum ViewState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  UNIT_DETAIL = 'UNIT_DETAIL',
  VOCABULARY = 'VOCABULARY',
  LISTENING = 'LISTENING',
  SPEAKING = 'SPEAKING',
  GRAMMAR = 'GRAMMAR',
  PROFILE = 'PROFILE',
  LEADERBOARD = 'LEADERBOARD',
}

export interface UserInfo {
  name: string;
  className: string;
  studentId?: string;
}

export interface VocabWord {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  image: string;
}

export interface ListeningExercise {
  id: string;
  title: string;
  transcript: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

export interface SpeakingTask {
  id: string;
  topic: string;
  modelSentence: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  rule: string;
  example: string;
}

export interface UnitData {
  id: number;
  title: string;
  topic: string;
  description: string;
  color: string;
  vocab: VocabWord[];
  listening: ListeningExercise;
  speaking: SpeakingTask[];
  grammar: GrammarPoint[];
}

export interface UserProgress {
  xp: number;
  streak: number;
  completedUnits: number[];
  level: number;
}