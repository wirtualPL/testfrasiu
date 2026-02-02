
import React from 'react';
import { ScoreRecord } from '../types';

interface RankingProps {
  onBack: () => void;
}

interface ServerScoreRecord {
  id: number;
  nickname: string;
  score: number;
  total: number;
  percentage: number;
  date?: string;
  settings: string;
  created_at: string;
}

const Ranking: React.FC<RankingProps> = ({ onBack }) => {
  const [records, setRecords] = React.useState<ServerScoreRecord[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [showHistory, setShowHistory] = React.useState(false);

  const fetchRecords = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = showHistory ? '/api/scores/history' : '/api/scores';
      const response = await fetch(`http://localhost:3001${endpoint}`);
      if (!response.ok) throw new Error('Błąd przy pobieraniu danych');
      const data = await response.json();
      setRecords(data);
    } catch (err) {
      console.error('Error fetching scores:', err);
      setError('Nie można połączyć się z serwerem. Pobieranie lokalnych danych...');
      // Fallback to localStorage
      const saved = localStorage.getItem('quiz_ranking');
      if (saved) {
        const parsed = JSON.parse(saved) as ScoreRecord[];
        const converted: ServerScoreRecord[] = parsed.map((r, idx) => ({
          id: idx,
          nickname: r.nickname,
          score: r.score,
          total: r.total,
          percentage: r.percentage,
          date: r.date,
          settings: r.settings,
          created_at: r.date
        }));
        setRecords(converted.sort((a, b) => b.percentage - a.percentage));
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRecords();
  }, [showHistory]);

  const clearRanking = async () => {
    if (confirm('Czy na pewno chcesz wyczyścić ranking?')) {
      try {
        await fetch('http://localhost:3001/api/scores', { method: 'DELETE' });
        setRecords([]);
      } catch (err) {
        console.error('Error clearing scores:', err);
        localStorage.removeItem('quiz_ranking');
        setRecords([]);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden mt-8 border border-slate-800">
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
        <div className="flex gap-4 mb-6 border-b border-slate-800 pb-4">
          <button
            onClick={() => setShowHistory(false)}
            className={`px-6 py-2 rounded-xl font-bold uppercase text-sm tracking-wider transition-all ${
              !showHistory 
                ? 'bg-indigo-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Ranking
          </button>
          <button
            onClick={() => setShowHistory(true)}
            className={`px-6 py-2 rounded-xl font-bold uppercase text-sm tracking-wider transition-all ${
              showHistory 
                ? 'bg-indigo-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            Historia Podejść
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-amber-900/30 border border-amber-700 rounded-2xl text-amber-200 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-500 mx-auto mb-4"></div>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Ładowanie danych...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {records.length > 0 ? records.map((record, index) => (
              <div key={record.id} className="bg-slate-800/50 border border-slate-800 hover:border-slate-700 p-5 rounded-3xl flex items-center justify-between transition-all">
                <div className="flex items-center gap-6 flex-1">
                  {!showHistory && (
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-xl flex-shrink-0 ${
                      index === 0 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' : 
                      index === 1 ? 'bg-slate-400/20 text-slate-400 border border-slate-400/30' : 
                      index === 2 ? 'bg-orange-600/20 text-orange-600 border border-orange-600/30' : 'bg-slate-900 text-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-black text-slate-100 text-lg uppercase tracking-tight">{record.nickname}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{record.settings}</div>
                    {showHistory && (
                      <div className="text-[9px] text-slate-600 mt-1">
                        {new Date(record.created_at).toLocaleString('pl-PL')}
                      </div>
                    )}
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
                <div className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">
                  {showHistory ? 'Historia jest pusta' : 'Ranking jest pusty'}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
