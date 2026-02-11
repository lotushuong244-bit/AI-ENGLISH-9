import React, { useState } from 'react';
import { useAppContext } from '../App';
import { UserInfo } from '../types';
import { BookOpen } from 'lucide-react';

export const Login: React.FC = () => {
  const { login } = useAppContext();
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && className) {
      const info: UserInfo = { name, className, studentId };
      login(info);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-indigo-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-indigo-600 text-white p-4 rounded-2xl mb-4 shadow-lg">
            <BookOpen size={40} />
          </div>
          <h1 className="text-3xl font-extrabold text-indigo-900">English Master</h1>
          <p className="text-indigo-500 font-medium">Global Success 9</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="Nguyen Van A"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Class</label>
            <input 
              type="text" 
              required
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="9A1"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Student ID (Optional)</label>
            <input 
              type="text" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              placeholder="HS12345"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:scale-[1.02] transition-all active:scale-95"
          >
            Start Learning
          </button>
        </form>
      </div>
    </div>
  );
};