
import React, { useState, useEffect, useCallback } from 'react';
import { Question, QuizSettings } from '../types';
import { questions as allQuestions } from '../data/questions';

interface QuizEngineProps {
  settings: QuizSettings;
  onFinish: (score: number, total: number) => void;
}

const QuizEngine: React.FC<QuizEngineProps> = ({ settings, onFinish }) => {
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const count = settings.questionCount === 'all' ? shuffled.length : settings.questionCount;
    setActiveQuestions(shuffled.slice(0, count));
  }, [settings.questionCount]);

  const handleReveal = () => {
    if (selectedIndices.length === 0 || isRevealed) return;
    
    const currentQ = activeQuestions[currentIndex];
    let isCorrect = false;

    if (currentQ.type === 'single') {
      isCorrect = 
        selectedIndices.length === 1 &&
        currentQ.correctIndices.includes(selectedIndices[0]);
    } else {
      // For multiple choice: correct if all selected answers are in correct answers
      isCorrect = selectedIndices.every(idx => currentQ.correctIndices.includes(idx));
    }

    if (isCorrect) setScore(prev => prev + 1);
    setIsRevealed(true);
  };

  const handleNext = useCallback(() => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedIndices([]);
      setIsRevealed(false);
      if (settings.timeLimit !== 'unlimited') setTimeLeft(settings.timeLimit);
    } else {
      onFinish(score, activeQuestions.length);
    }
  }, [activeQuestions.length, currentIndex, score, settings.timeLimit, onFinish]);

  useEffect(() => {
    if (settings.timeLimit === 'unlimited' || isRevealed) return;
    
    if (timeLeft === null) {
      setTimeLeft(settings.timeLimit);
      return;
    }

    if (timeLeft <= 0) {
      handleReveal();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, settings.timeLimit, isRevealed]);

  const toggleOption = (idx: number) => {
    if (isRevealed) return;
    const currentQ = activeQuestions[currentIndex];
    if (currentQ.type === 'single') {
      setSelectedIndices([idx]);
    } else {
      setSelectedIndices(prev => 
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
      );
    }
  };

  if (activeQuestions.length === 0) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-500"></div>
    </div>
  );

  const currentQ = activeQuestions[currentIndex];

  const getOptionStyles = (idx: number) => {
    const isSelected = selectedIndices.includes(idx);
    const isCorrect = currentQ.correctIndices.includes(idx);

    if (!isRevealed) {
      return isSelected 
        ? 'border-indigo-500 bg-indigo-900/30 text-indigo-200' 
        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600';
    }

    if (isCorrect) {
      return 'border-emerald-500 bg-emerald-900/30 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
    }

    if (isSelected && !isCorrect) {
      return 'border-rose-500 bg-rose-900/30 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.2)]';
    }

    return 'border-slate-800 bg-slate-900/50 text-slate-600 opacity-50';
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 pb-20">
      <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
        <div 
          className="bg-indigo-500 h-1.5 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
          style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center mb-10">
        <div>
          <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Postęp</span>
          <div className="text-2xl font-black text-white">{currentIndex + 1} <span className="text-slate-600">/</span> {activeQuestions.length}</div>
        </div>
        {settings.timeLimit !== 'unlimited' && !isRevealed && (
          <div className="text-right">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Czas</span>
            <div className={`text-2xl font-mono font-black ${timeLeft && timeLeft < 5 ? 'text-rose-500 animate-pulse' : 'text-indigo-400'}`}>
              {timeLeft}s
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 p-10 mb-8 relative">
        <div className="absolute top-0 right-10 -mt-4">
           <span className="bg-indigo-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full text-white">
             {currentQ.type === 'multiple' ? 'Wielokrotny wybór' : 'Jednokrotny wybór'}
           </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-100 mb-10 leading-snug">
          {currentQ.text}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => toggleOption(idx)}
              disabled={isRevealed}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center group ${getOptionStyles(idx)}`}
            >
              <div className={`w-8 h-8 rounded-xl border-2 mr-5 flex items-center justify-center flex-shrink-0 transition-all ${
                selectedIndices.includes(idx) 
                  ? 'bg-indigo-600 border-indigo-600 scale-110' 
                  : 'border-slate-700 group-hover:border-slate-500'
              } ${isRevealed && currentQ.correctIndices.includes(idx) ? 'bg-emerald-500 border-emerald-500' : ''}
                ${isRevealed && selectedIndices.includes(idx) && !currentQ.correctIndices.includes(idx) ? 'bg-rose-500 border-rose-500' : ''}
              `}>
                {selectedIndices.includes(idx) && !isRevealed && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                {isRevealed && currentQ.correctIndices.includes(idx) && (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {isRevealed && selectedIndices.includes(idx) && !currentQ.correctIndices.includes(idx) && (
                   <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <span className="font-semibold text-lg">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 px-4">
        <div className="max-w-3xl mx-auto">
          {!isRevealed ? (
            <button
              onClick={handleReveal}
              disabled={selectedIndices.length === 0}
              className={`w-full py-5 rounded-2xl font-black text-xl shadow-2xl transition-all uppercase tracking-wider ${
                selectedIndices.length === 0 
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95 shadow-indigo-900/40'
              }`}
            >
              Sprawdź odpowiedź
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full bg-slate-100 hover:bg-white text-slate-950 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-95 uppercase tracking-wider"
            >
              {currentIndex === activeQuestions.length - 1 ? 'Zakończ Quiz' : 'Dalej'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizEngine;
