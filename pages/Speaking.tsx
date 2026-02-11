import React, { useState, useEffect, useRef } from 'react';
import { UnitData, ViewState } from '../types';
import { useAppContext } from '../App';
import { getSpeakingFeedback } from '../services/geminiService';
import { Mic, ArrowLeft, Volume2, Award, AlertCircle, Loader2 } from 'lucide-react';

// Extend window interface for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export const SpeakingActivity: React.FC<{ unit: UnitData }> = ({ unit }) => {
  const { setView, addXP } = useAppContext();
  const task = unit.speaking[0]; // Take the first task for simplicity

  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<{ score: string; feedback: string } | null>(null);
  const [loading, setLoading] = useState(false);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleAnalyze(text);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        setLoading(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      setFeedback(null);
      setTranscript('');
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const handleAnalyze = async (text: string) => {
    setLoading(true);
    const result = await getSpeakingFeedback(task.modelSentence, text);
    setFeedback(result);
    setLoading(false);
    
    if (result.score === "Excellent" || result.score === "Good") {
      addXP(20);
    }
  };

  const speakModel = () => {
    const utterance = new SpeechSynthesisUtterance(task.modelSentence);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex items-center">
        <button onClick={() => setView(ViewState.DASHBOARD)} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h2 className="ml-2 text-xl font-bold text-slate-800">Speaking Coach</h2>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Topic: {task.topic}</span>
        
        <p className="text-slate-500 text-sm">Read the sentence aloud:</p>
        
        <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-pink-500">
           <p className="text-xl font-medium text-slate-800">{task.modelSentence}</p>
        </div>

        <button 
          onClick={speakModel}
          className="flex items-center gap-2 text-pink-600 font-bold text-sm hover:underline"
        >
          <Volume2 size={16} /> Listen to model
        </button>
      </div>

      {/* Recording Area */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-8">
        
        <div className={`relative ${isRecording ? 'animate-pulse' : ''}`}>
           <button
             onClick={toggleRecording}
             disabled={loading}
             className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all ${
               isRecording ? 'bg-red-500 scale-110' : 'bg-indigo-600 hover:bg-indigo-700'
             } ${loading ? 'opacity-50' : ''}`}
           >
             {loading ? <Loader2 className="animate-spin text-white" size={40} /> : <Mic size={40} className="text-white" />}
           </button>
        </div>

        <p className="text-slate-400 font-medium">
          {isRecording ? "Listening..." : loading ? "Analyzing..." : "Tap to record"}
        </p>

        {transcript && (
          <div className="text-center max-w-xs">
            <p className="text-xs text-slate-400 mb-1">We heard:</p>
            <p className="text-slate-600 italic">"{transcript}"</p>
          </div>
        )}
      </div>

      {/* Feedback Area */}
      {feedback && (
        <div className={`p-6 rounded-2xl animate-in slide-in-from-bottom-4 duration-500 shadow-lg border-2 ${
          feedback.score === 'Excellent' ? 'bg-green-50 border-green-200' :
          feedback.score === 'Good' ? 'bg-blue-50 border-blue-200' :
          'bg-orange-50 border-orange-200'
        }`}>
          <div className="flex items-center gap-3 mb-2">
            {feedback.score === 'Excellent' && <Award className="text-green-600" size={24} />}
            {feedback.score === 'Try Again' && <AlertCircle className="text-orange-600" size={24} />}
            <h3 className={`text-xl font-bold ${
               feedback.score === 'Excellent' ? 'text-green-700' :
               feedback.score === 'Good' ? 'text-blue-700' : 'text-orange-700'
            }`}>
              {feedback.score}
            </h3>
          </div>
          <p className="text-slate-700">{feedback.feedback}</p>
        </div>
      )}
    </div>
  );
};