import React, { useState } from 'react';
import { UnitData, VocabWord, ViewState } from '../types';
import { useAppContext } from '../App';
import { Volume2, ChevronRight, RotateCcw, Check, X, ArrowLeft } from 'lucide-react';

export const VocabularyActivity: React.FC<{ unit: UnitData }> = ({ unit }) => {
  const { setView, addXP } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState<'learn' | 'quiz'>('learn');
  const [quizScore, setQuizScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // --- TTS Helper ---
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  // --- Learn Mode Handlers ---
  const handleNextWord = () => {
    setIsFlipped(false);
    if (currentIndex < unit.vocab.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setMode('quiz');
      setCurrentIndex(0);
    }
  };

  // --- Quiz Mode Handlers ---
  const handleQuizAnswer = (selectedWord: VocabWord, correctWord: VocabWord) => {
    if (selectedWord.id === correctWord.id) {
      setQuizScore(prev => prev + 1);
      speak("Correct!");
    } else {
      speak("Incorrect.");
    }
    
    if (currentIndex < unit.vocab.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
      addXP(10 + quizScore * 5); // XP Reward
    }
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl text-center space-y-6 animate-in zoom-in duration-300">
        <h2 className="text-3xl font-bold text-indigo-600">Well Done!</h2>
        <div className="text-6xl">🎉</div>
        <p className="text-xl text-slate-600">
          You scored <span className="font-bold text-indigo-600">{quizScore}/{unit.vocab.length}</span>
        </p>
        <button 
          onClick={() => setView(ViewState.DASHBOARD)}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Path
        </button>
      </div>
    );
  }

  // --- Main Render ---
  return (
    <div className="flex flex-col h-full min-h-[500px]">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => setView(ViewState.DASHBOARD)} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <div className="flex-1 px-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${((currentIndex + (mode === 'quiz' ? unit.vocab.length : 0)) / (unit.vocab.length * 2)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {mode === 'learn' ? (
        // LEARN INTERFACE
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
           <h3 className="text-slate-500 font-bold uppercase tracking-wide">New Word</h3>
           
           <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="perspective-1000 w-full max-w-sm h-80 cursor-pointer group"
           >
             <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
               {/* Front */}
               <div className="absolute w-full h-full backface-hidden bg-white border-2 border-indigo-100 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 hover:border-indigo-300 transition-colors">
                 <img 
                    src={unit.vocab[currentIndex].image} 
                    alt={unit.vocab[currentIndex].word}
                    className="w-32 h-32 object-cover rounded-xl mb-4 shadow-sm"
                 />
                 <h2 className="text-3xl font-extrabold text-indigo-900 mb-2">{unit.vocab[currentIndex].word}</h2>
                 <p className="text-indigo-400 font-mono text-lg">{unit.vocab[currentIndex].phonetic}</p>
                 <div className="mt-4 text-slate-400 text-sm">Tap to flip</div>
               </div>

               {/* Back */}
               <div className="absolute w-full h-full backface-hidden bg-indigo-600 rounded-3xl shadow-xl rotate-y-180 flex flex-col items-center justify-center p-6 text-white">
                 <h3 className="text-2xl font-bold mb-4">{unit.vocab[currentIndex].meaning}</h3>
                 <div className="bg-indigo-500 p-4 rounded-xl w-full text-center">
                    <p className="italic">"{unit.vocab[currentIndex].example}"</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="flex gap-4 w-full max-w-sm">
             <button 
               onClick={() => speak(unit.vocab[currentIndex].word)}
               className="flex-1 py-3 rounded-xl border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-50 flex items-center justify-center gap-2"
             >
               <Volume2 size={20} /> Listen
             </button>
             <button 
               onClick={handleNextWord}
               className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-lg hover:bg-indigo-700 flex items-center justify-center gap-2"
             >
               Next <ChevronRight size={20} />
             </button>
           </div>
        </div>
      ) : (
        // QUIZ INTERFACE
        <div className="flex-1 flex flex-col items-center max-w-sm mx-auto w-full">
          <h3 className="text-xl font-bold text-slate-700 mb-8">What does this mean?</h3>
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-8 w-full text-center">
             <h2 className="text-3xl font-extrabold text-indigo-600 mb-2">{unit.vocab[currentIndex].word}</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 w-full">
            {/* Generate options: Correct word + 3 random others from the same unit or others */}
            {(() => {
              const currentWord = unit.vocab[currentIndex];
              // Simple shuffle of current unit words to get options
              const otherWords = unit.vocab.filter(w => w.id !== currentWord.id);
              const shuffledOthers = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);
              const options = [currentWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

              return options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleQuizAnswer(opt, currentWord)}
                  className="p-4 rounded-xl border-2 border-gray-100 bg-white hover:bg-indigo-50 hover:border-indigo-200 font-medium text-slate-700 transition-all text-left"
                >
                  {opt.meaning}
                </button>
              ));
            })()}
          </div>
        </div>
      )}
    </div>
  );
};