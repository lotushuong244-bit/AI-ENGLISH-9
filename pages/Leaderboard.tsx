import React from 'react';
import { useAppContext } from '../App';
import { Trophy, Medal, User } from 'lucide-react';

export const Leaderboard: React.FC = () => {
  const { userProgress, userInfo } = useAppContext();

  // Mock data representing a class leaderboard
  const classmates = [
    { name: 'Tran Thi B', xp: 1250, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=B' },
    { name: 'Le Van C', xp: 1100, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=C' },
    { name: userInfo?.name || 'You', xp: userProgress.xp, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Me', isMe: true },
    { name: 'Pham Van D', xp: 800, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=D' },
    { name: 'Nguyen Thi E', xp: 650, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=E' },
    { name: 'Hoang Van F', xp: 500, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=F' },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-slate-800">Class Leaderboard</h2>
        <p className="text-indigo-600 font-bold">Class {userInfo?.className}</p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {classmates.map((student, index) => (
          <div 
            key={index}
            className={`flex items-center p-4 border-b border-gray-50 last:border-0 ${student.isMe ? 'bg-indigo-50' : 'bg-white'}`}
          >
            <div className="w-8 font-bold text-slate-400 text-lg flex justify-center">
              {index === 0 ? <Medal className="text-yellow-500" /> : 
               index === 1 ? <Medal className="text-gray-400" /> : 
               index === 2 ? <Medal className="text-orange-400" /> : 
               index + 1}
            </div>
            
            <img src={student.avatar} alt="avatar" className="w-10 h-10 rounded-full bg-gray-200 mx-3" />
            
            <div className="flex-1">
              <p className={`font-bold ${student.isMe ? 'text-indigo-700' : 'text-slate-700'}`}>
                {student.name} {student.isMe && '(You)'}
              </p>
            </div>

            <div className="font-bold text-slate-600 flex items-center gap-1">
              {student.xp} <span className="text-xs text-yellow-500">XP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};