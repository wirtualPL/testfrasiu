
import React, { useState } from 'react';
import { QuizState, QuizSettings, ScoreRecord } from './types';
import QuizSetup from './components/QuizSetup';
import QuizEngine from './components/QuizEngine';
import Ranking from './components/Ranking';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>('setup');
  const [settings, setSettings] = useState<QuizSettings | null>(null);
  const [lastResult, setLastResult] = useState<{ score: number; total: number } | null>(null);

  const startQuiz = (setup: QuizSettings) => {
    setSettings(setup);
    setState('playing');
  };

  const finishQuiz = (score: number, total: number) => {
    setLastResult({ score, total });
    
    if (settings) {
      const percentage = Math.round((score / total) * 100);
      const newRecord: ScoreRecord = {
        nickname: settings.nickname,
        score,
        total,
        percentage,
        date: new Date().toISOString(),
        settings: `Q: ${settings.questionCount === 'all' ? '∞' : settings.questionCount}, T: ${settings.timeLimit === 'unlimited' ? '∞' : settings.timeLimit + 's'}`
      };

      const existing = localStorage.getItem('quiz_ranking');
      const ranking: ScoreRecord[] = existing ? JSON.parse(existing) : [];
      ranking.push(newRecord);
      localStorage.setItem('quiz_ranking', JSON.stringify(ranking));
    }

    setState('results');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {state === 'setup' && (
          <QuizSetup onStart={startQuiz} onViewRanking={() => setState('ranking')} />
        )}

        {state === 'playing' && settings && (
          <QuizEngine settings={settings} onFinish={finishQuiz} />
        )}

        {state === 'results' && lastResult && (
          <div className="max-w-lg mx-auto bg-slate-900 rounded-[3rem] shadow-2xl p-12 text-center border border-slate-800 animate-in fade-in zoom-in duration-500">
            <div className="w-28 h-28 bg-indigo-500/10 text-indigo-500 rounded-[2rem] border-2 border-indigo-500/30 flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(99,102,241,0.15)]">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">Koniec Gry!</h2>
            <p className="text-slate-500 font-bold mb-10">Dobra robota, {settings?.nickname}!</p>
            
            <div className="bg-slate-950 rounded-[2rem] p-8 mb-10 border border-slate-800 shadow-inner">
              <div className="text-7xl font-black text-white mb-2">{lastResult.score} <span className="text-slate-800 text-5xl">/</span> {lastResult.total}</div>
              <div className="text-xs font-black text-indigo-500 uppercase tracking-widest">Twój Wynik</div>
              <div className="mt-6 inline-block px-6 py-2 bg-indigo-600/20 text-indigo-400 rounded-full text-xl font-black border border-indigo-600/30">
                {Math.round((lastResult.score / lastResult.total) * 100)}%
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setState('ranking')}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-900/40 transition-all active:scale-[0.97] uppercase tracking-widest text-lg"
              >
                Tabela Mistrzów
              </button>
              <button
                onClick={() => setState('setup')}
                className="w-full text-slate-500 hover:text-white font-bold py-3 transition-colors uppercase tracking-widest text-sm"
              >
                Zagraj jeszcze raz
              </button>
            </div>
          </div>
        )}

        {state === 'ranking' && (
          <Ranking onBack={() => setState('setup')} />
        )}
      </div>
    </div>
  );
};

export default App;
