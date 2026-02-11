import React, { useState } from 'react';
import { UNITS } from '../constants';
import { useAppContext } from '../App';
import { ViewState, UnitData } from '../types';
import { Lock, Star, PlayCircle, Mic, Book, CheckCircle2, PenTool } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { setActiveUnit, setView, userProgress } = useAppContext();
  const [selectedUnitId, setSelectedUnitId] = useState<number | null>(null);

  const handleUnitClick = (unit: UnitData) => {
    // Toggle expansion
    if (selectedUnitId === unit.id) {
      setSelectedUnitId(null);
    } else {
      setSelectedUnitId(unit.id);
    }
  };

  const handleStartActivity = (unit: UnitData, type: ViewState) => {
    setActiveUnit(unit);
    setView(type);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-extrabold text-slate-800">Learning Path</h2>
        <p className="text-slate-500 text-sm">Tap a unit to start learning</p>
      </div>

      <div className="relative">
        {/* Simple vertical line connecting units */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0 hidden sm:block"></div>

        <div className="space-y-8 relative z-10">
          {UNITS.map((unit, index) => {
            const isCompleted = userProgress.completedUnits.includes(unit.id);
            // Simple unlock logic: unlock next unit if previous is completed (or index 0)
            const isLocked = index > 0 && !userProgress.completedUnits.includes(UNITS[index-1].id) && !isCompleted;
            const isSelected = selectedUnitId === unit.id;

            return (
              <div key={unit.id} className="flex flex-col items-center">
                
                {/* Unit Bubble */}
                <button
                  onClick={() => !isLocked && handleUnitClick(unit)}
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-200 border-4
                    ${isLocked 
                      ? 'bg-gray-200 border-gray-300 cursor-not-allowed text-gray-400' 
                      : `${unit.color} border-white text-white hover:scale-110 active:scale-95`
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle2 size={32} />
                  ) : isLocked ? (
                    <Lock size={24} />
                  ) : (
                    <Star size={32} fill="currentColor" className="text-yellow-300" />
                  )}
                </button>

                {/* Unit Title Label */}
                <div className="mt-2 text-center">
                  <h3 className="font-bold text-slate-700">{unit.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">{unit.topic}</p>
                </div>

                {/* Expanded Menu */}
                {isSelected && !isLocked && (
                  <div className="mt-4 bg-white p-4 rounded-2xl shadow-xl w-full max-w-sm border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
                    <h4 className="font-bold text-lg text-slate-800 mb-2">{unit.topic}</h4>
                    <p className="text-sm text-slate-500 mb-4">{unit.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => handleStartActivity(unit, ViewState.VOCABULARY)}
                        className="flex flex-col items-center p-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
                      >
                        <Book size={24} className="mb-1" />
                        <span className="text-xs font-bold">Vocab</span>
                      </button>

                      <button 
                        onClick={() => handleStartActivity(unit, ViewState.GRAMMAR)}
                        className="flex flex-col items-center p-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors"
                      >
                        <PenTool size={24} className="mb-1" />
                        <span className="text-xs font-bold">Grammar</span>
                      </button>

                      <button 
                        onClick={() => handleStartActivity(unit, ViewState.LISTENING)}
                        className="flex flex-col items-center p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                      >
                        <PlayCircle size={24} className="mb-1" />
                        <span className="text-xs font-bold">Listening</span>
                      </button>

                      <button 
                        onClick={() => handleStartActivity(unit, ViewState.SPEAKING)}
                        className="flex flex-col items-center p-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors"
                      >
                        <Mic size={24} className="mb-1" />
                        <span className="text-xs font-bold">Speaking</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};