import React from 'react';
import { useAppContext } from '../App';
import { ViewState } from '../types';
import { Home, User, BookOpen, Trophy, BarChart3 } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setView, userProgress, view, userInfo } = useAppContext();

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white shadow-sm z-10 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
           <div className="bg-indigo-600 text-white p-2 rounded-xl">
             <BookOpen size={20} />
           </div>
           <div>
              <h1 className="font-bold text-sm text-slate-500 uppercase tracking-wide">Global Success 9</h1>
              <p className="font-extrabold text-indigo-900 leading-tight">Hi, {userInfo?.name.split(' ').pop()}</p>
           </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1.5 rounded-full border border-yellow-200">
            <Trophy size={16} className="text-yellow-600" />
            <span className="font-bold text-yellow-700 text-sm">{userProgress.xp}</span>
          </div>
          <div className="flex items-center gap-1 bg-orange-100 px-3 py-1.5 rounded-full border border-orange-200">
            <span className="text-sm">🔥</span>
            <span className="font-bold text-orange-700 text-sm">{userProgress.streak}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 sm:pb-4 scroll-smooth">
        <div className="max-w-md mx-auto sm:max-w-2xl md:max-w-4xl p-4">
           {children}
        </div>
      </main>

      {/* Bottom Navigation (Mobile First) */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 pb-safe sm:pb-0 z-20">
        <div className="flex justify-around items-center max-w-md mx-auto sm:max-w-full">
          <button 
            onClick={() => setView(ViewState.DASHBOARD)}
            className={`flex flex-col items-center p-3 w-full ${view === ViewState.DASHBOARD ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Home size={24} strokeWidth={view === ViewState.DASHBOARD ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1 uppercase">Learn</span>
          </button>
          
          <button 
            onClick={() => setView(ViewState.LEADERBOARD)}
            className={`flex flex-col items-center p-3 w-full ${view === ViewState.LEADERBOARD ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <BarChart3 size={24} strokeWidth={view === ViewState.LEADERBOARD ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1 uppercase">Rank</span>
          </button>

          <button 
            onClick={() => setView(ViewState.PROFILE)}
            className={`flex flex-col items-center p-3 w-full ${view === ViewState.PROFILE ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <User size={24} strokeWidth={view === ViewState.PROFILE ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1 uppercase">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};