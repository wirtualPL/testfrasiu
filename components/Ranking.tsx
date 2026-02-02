
import React from 'react';
import { ScoreRecord } from '../types';

interface RankingProps {
  onBack: () => void;
}

const Ranking: React.FC<RankingProps> = ({ onBack }) => {
  const [records, setRecords] = React.useState<ScoreRecord[]>([]);

  React.useEffect(() => {
    const saved = localStorage.getItem('quiz_ranking');
    if (saved) {
      const parsed = JSON.parse(saved) as ScoreRecord[];
      setRecords(parsed.sort((a, b) => b.percentage - a.percentage));
    }
  }, []);

  const clearRanking = () => {
    if (confirm('Czy na pewno chcesz wyczyścić ranking?')) {
      localStorage.removeItem('quiz_ranking');
      setRecords([]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden mt-8 border border-slate-800">
      <div className="bg-slate-950 p-10 text-center text-white flex justify-between items-center border-b border-slate-800">
        <button onClick={onBack} className="p-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-2xl transition-all border border-slate-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-3xl font-black tracking-tight">HALL OF FAME</h2>
        <button onClick={clearRanking} className="p-3 text-slate-600 hover:text-rose-500 transition-colors" title="Wyczyść Ranking">
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {records.length > 0 ? records.map((record, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-800 hover:border-slate-700 p-5 rounded-3xl flex items-center justify-between transition-all">
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-xl ${
                  index === 0 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' : 
                  index === 1 ? 'bg-slate-400/20 text-slate-400 border border-slate-400/30' : 
                  index === 2 ? 'bg-orange-600/20 text-orange-600 border border-orange-600/30' : 'bg-slate-900 text-slate-600'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <div className="font-black text-slate-100 text-lg uppercase tracking-tight">{record.nickname}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{record.settings}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-indigo-400 leading-none">{record.percentage}%</div>
                <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-tighter">{record.score} / {record.total}</div>
              </div>
            </div>
          )) : (
            <div className="py-20 text-center">
              <div className="text-6xl mb-6 opacity-20">🏆</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">Ranking jest pusty</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
