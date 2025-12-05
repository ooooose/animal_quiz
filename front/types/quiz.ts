export interface QuizType {
  id: number;
  question: string;
  hint: string;
  options: string[];
  correct: string;
  emoji: string;
}