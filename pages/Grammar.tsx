import React from 'react';
import { UnitData, ViewState } from '../types';
import { useAppContext } from '../App';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const GrammarActivity: React.FC<{ unit: UnitData }> = ({ unit }) => {
  const { setView, completeUnit, addXP } = useAppContext();

  const handleComplete = () => {
    addXP(30);
    // In a real app, we might check if all other parts are done
    // completeUnit(unit.id); 
    setView(ViewState.DASHBOARD);
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center">
        <button onClick={() => setView(ViewState.DASHBOARD)} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h2 className="ml-2 text-xl font-bold text-slate-800">Grammar Focus</h2>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        {unit.grammar.map((point) => (
          <div key={point.id} className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100">
            <h3 className="text-xl font-extrabold text-indigo-700 mb-4">{point.title}</h3>
            
            <div className="bg-indigo-50 p-4 rounded-xl mb-4 border-l-4 border-indigo-500">
              <p className="font-bold text-slate-700 mb-1">Rule:</p>
              <p className="text-slate-600">{point.rule}</p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500">
              <p className="font-bold text-slate-700 mb-1">Example:</p>
              <p className="text-emerald-800 italic text-lg">"{point.example}"</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleComplete}
        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
      >
        <CheckCircle size={20} /> I understand
      </button>
    </div>
  );
};