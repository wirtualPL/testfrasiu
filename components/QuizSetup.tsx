
import React, { useState } from 'react';
import { QuizSettings } from '../types';

interface QuizSetupProps {
  onStart: (settings: QuizSettings) => void;
  onViewRanking: () => void;
}

const QuizSetup: React.FC<QuizSetupProps> = ({ onStart, onViewRanking }) => {
  const [nickname, setNickname] = useState('');
  const [questionCount, setQuestionCount] = useState<number | 'all'>(5);
  const [timeLimit, setTimeLimit] = useState<number | 'unlimited'>(15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert('Podaj swój nick!');
      return;
    }
    onStart({ nickname, questionCount, timeLimit });
  };

  return (
    <div className="max-w-md mx-auto bg-slate-900 rounded-3xl shadow-2xl overflow-hidden mt-10 border border-slate-800">
      <div className="bg-indigo-600 p-10 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-black mb-2 tracking-tight">QUIZ PRO</h1>
          <p className="text-indigo-100 font-medium">Baza Pytań Egzaminacyjnych</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Twój Nick</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full bg-slate-800 px-5 py-4 rounded-2xl border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
            placeholder="Ksywka..."
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Liczba Pytań</label>
          <div className="grid grid-cols-5 gap-2">
            {[5, 10, 15, 20, 'all'].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setQuestionCount(count as number | 'all')}
                className={`py-3 rounded-xl border font-bold text-sm transition-all ${
                  questionCount === count 
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/40' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                }`}
              >
                {count === 'all' ? '∞' : count}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Czas na pytanie</label>
          <div className="grid grid-cols-5 gap-2">
            {[5, 10, 15, 30, 'unlimited'].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setTimeLimit(time as number | 'unlimited')}
                className={`py-3 rounded-xl border font-bold text-sm transition-all ${
                  timeLimit === time 
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-900/40' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
                }`}
              >
                {time === 'unlimited' ? '∞' : `${time}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 space-y-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-900/20 transition-all active:scale-[0.97] uppercase tracking-wider"
          >
            Start Quizu
          </button>

          <button
            type="button"
            onClick={onViewRanking}
            className="w-full bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white font-bold py-3 rounded-2xl transition-all border border-slate-800 hover:border-slate-600"
          >
            Tablica Wyników
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizSetup;
