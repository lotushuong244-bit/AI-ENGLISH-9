import React from 'react';
import { useAppContext } from '../App';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UNITS } from '../constants';
import { Award, Zap, BookOpen, LogOut, FileText } from 'lucide-react';

export const Profile: React.FC = () => {
  const { userProgress, logout, userInfo } = useAppContext();

  // Mock data for weekly progress
  const data = [
    { name: 'Mon', xp: 40 },
    { name: 'Tue', xp: 80 },
    { name: 'Wed', xp: 20 },
    { name: 'Thu', xp: 100 },
    { name: 'Fri', xp: 50 },
    { name: 'Sat', xp: 120 },
    { name: 'Sun', xp: userProgress.xp % 100 }, // Dynamic based on current
  ];

  return (
    <div className="space-y-8 pb-8">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-extrabold text-slate-800">My Profile</h2>
         <button onClick={logout} className="text-slate-400 hover:text-red-500">
            <LogOut size={24} />
         </button>
      </div>

      <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-4">
           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold border-2 border-white/50">
             {userInfo?.name.charAt(0)}
           </div>
           <div>
              <h3 className="text-xl font-bold">{userInfo?.name}</h3>
              <p className="opacity-80">Class: {userInfo?.className}</p>
              {userInfo?.studentId && <p className="text-xs opacity-60">ID: {userInfo.studentId}</p>}
           </div>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <Award size={120} />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-2">
                <Zap className="text-yellow-600" size={24} />
            </div>
            <span className="text-3xl font-extrabold text-slate-800">{userProgress.xp}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Total XP</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
            <div className="bg-orange-100 p-3 rounded-full mb-2">
                <Award className="text-orange-600" size={24} />
            </div>
            <span className="text-3xl font-extrabold text-slate-800">{userProgress.streak}</span>
            <span className="text-xs text-slate-400 font-bold uppercase">Day Streak</span>
        </div>
      </div>

      {/* Teacher Report */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
           <FileText className="text-indigo-600" />
           <h3 className="font-bold text-slate-700">Teacher Report</h3>
        </div>
        <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Completion Rate</span>
                <span className="font-bold text-slate-700">{Math.round((userProgress.completedUnits.length / 12) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
               <div className="bg-green-500 h-2 rounded-full" style={{width: `${(userProgress.completedUnits.length / 12) * 100}%`}}></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Vocab Mastery</p>
                    <p className="font-bold text-green-600">Good</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                    <p className="text-xs text-slate-500 mb-1">Speaking</p>
                    <p className="font-bold text-blue-600">Excellent</p>
                </div>
            </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-slate-700 mb-4">Weekly Activity</h3>
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        cursor={{fill: '#f3f4f6'}}
                    />
                    <Bar dataKey="xp" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.xp > 80 ? '#4f46e5' : '#a5b4fc'} />
                      ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};