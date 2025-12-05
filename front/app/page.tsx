"use client";

import React, { useState } from 'react';
import { CheckCircle, XCircle, Trophy, Star } from 'lucide-react';
import { quizData } from '../data';

export default function AnimalQuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const quiz = quizData[currentQuestion];

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === quiz.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowHint(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowHint(false);
  };

  const getResultMessage = () => {
    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) return "パーフェクト!すごい!🎉";
    if (percentage >= 80) return "よくできました!👏";
    if (percentage >= 60) return "がんばったね!😊";
    return "もう一度チャレンジしてみよう!💪";
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-200 via-pink-200 to-purple-300 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">クイズ終了!</h2>
          <div className="mb-6">
            <div className="text-6xl font-bold text-purple-600 mb-2">
              {score} / {quizData.length}
            </div>
            <p className="text-xl text-gray-700">{getResultMessage()}</p>
          </div>
          <div className="flex gap-2 justify-center mb-4">
            {[...Array(score)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <button
            onClick={restartQuiz}
            className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            もう一度やる!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-600">
              問題 {currentQuestion + 1} / {quizData.length}
            </span>
            <span className="text-lg font-semibold text-purple-600">
              スコア: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-linear-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl mb-4">{quiz.emoji}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{quiz.question}</h2>
          
          {!showHint && !isAnswered && (
            <button
              onClick={() => setShowHint(true)}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              💡 ヒントを見る
            </button>
          )}
          
          {showHint && (
            <p className="text-gray-600 text-lg italic">ヒント: {quiz.hint}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quiz.options.map((option, index) => {
            const isCorrect = option === quiz.correct;
            const isSelected = option === selectedAnswer;
            
            let buttonClass = "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500";
            
            if (isAnswered) {
              if (isCorrect) {
                buttonClass = "bg-gradient-to-r from-green-400 to-green-500";
              } else if (isSelected) {
                buttonClass = "bg-gradient-to-r from-red-400 to-red-500";
              } else {
                buttonClass = "bg-gray-300";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
                className={`${buttonClass} text-white px-6 py-4 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
              >
                {isAnswered && isCorrect && <CheckCircle className="w-6 h-6" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6" />}
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-6 text-center">
            {selectedAnswer === quiz.correct ? (
              <p className="text-3xl font-bold text-green-600 animate-bounce">
                せいかい! 🎉
              </p>
            ) : (
              <p className="text-3xl font-bold text-orange-600">
                おしい! がんばったね! 💪
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}