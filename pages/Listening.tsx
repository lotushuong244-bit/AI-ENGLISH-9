import React, { useState } from 'react';
import { UnitData, ViewState } from '../types';
import { useAppContext } from '../App';
import { Play, Pause, ArrowLeft, HelpCircle } from 'lucide-react';

export const ListeningActivity: React.FC<{ unit: UnitData }> = ({ unit }) => {
  const { setView, addXP, completeUnit } = useAppContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answers, setAnswers] = useState<number[]>(new Array(unit.listening.questions.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulated Audio Player using SpeechSynthesis
  const handlePlayAudio = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(unit.listening.transcript);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for learning
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowTranscript(true);
    const correctCount = answers.reduce((acc, ans, idx) => {
      return ans === unit.listening.questions[idx].correctIndex ? acc + 1 : acc;
    }, 0);
    
    // Reward logic
    if (correctCount === unit.listening.questions.length) {
      addXP(50);
      completeUnit(unit.id);
    } else {
        addXP(10);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <button onClick={() => { window.speechSynthesis.cancel(); setView(ViewState.DASHBOARD); }} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h2 className="ml-2 text-xl font-bold text-slate-800">Listening Practice</h2>
      </div>

      <div className="bg-emerald-600 text-white rounded-3xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-1 opacity-90">{unit.listening.title}</h3>
        <p className="text-sm opacity-75 mb-6">Listen carefully and answer the questions below.</p>
        
        <div className="flex justify-center">
            <button 
                onClick={handlePlayAudio}
                className="bg-white text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            >
                {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
        </div>
      </div>

      <div className="space-y-6">
        {unit.listening.questions.map((q, qIndex) => (
            <div key={q.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-slate-800 mb-3">{qIndex + 1}. {q.question}</p>
                <div className="space-y-2">
                    {q.options.map((opt, optIndex) => {
                        let btnClass = "w-full text-left p-3 rounded-lg border-2 transition-colors ";
                        if (isSubmitted) {
                            if (optIndex === q.correctIndex) {
                                btnClass += "bg-green-100 border-green-500 text-green-800 font-bold";
                            } else if (answers[qIndex] === optIndex && optIndex !== q.correctIndex) {
                                btnClass += "bg-red-50 border-red-200 text-red-600";
                            } else {
                                btnClass += "border-gray-100 text-gray-400";
                            }
                        } else {
                            if (answers[qIndex] === optIndex) {
                                btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold";
                            } else {
                                btnClass += "border-gray-100 hover:border-emerald-200 hover:bg-emerald-50 text-slate-600";
                            }
                        }

                        return (
                            <button 
                                key={optIndex}
                                onClick={() => handleSelectAnswer(qIndex, optIndex)}
                                className={btnClass}
                                disabled={isSubmitted}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>
        ))}
      </div>

      {!isSubmitted ? (
        <button 
            onClick={handleSubmit}
            disabled={answers.includes(-1)}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            Check Answers
        </button>
      ) : (
        <div className="bg-gray-100 p-4 rounded-xl">
             <div className="flex items-center gap-2 mb-2 text-slate-600 font-bold">
                <HelpCircle size={18} /> Transcript
             </div>
             <p className="text-sm text-slate-600 leading-relaxed">{unit.listening.transcript}</p>
        </div>
      )}
    </div>
  );
};