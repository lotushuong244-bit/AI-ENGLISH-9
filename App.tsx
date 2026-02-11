import React, { useState, createContext, useContext, useEffect } from 'react';
import { ViewState, UnitData, UserProgress, UserInfo } from './types';
import { UNITS } from './constants';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { VocabularyActivity } from './pages/Vocabulary';
import { ListeningActivity } from './pages/Listening';
import { SpeakingActivity } from './pages/Speaking';
import { GrammarActivity } from './pages/Grammar';
import { Profile } from './pages/Profile';
import { Leaderboard } from './pages/Leaderboard';

// --- Context ---
interface AppContextType {
  view: ViewState;
  setView: (view: ViewState) => void;
  activeUnit: UnitData | null;
  setActiveUnit: (unit: UnitData | null) => void;
  userProgress: UserProgress;
  userInfo: UserInfo | null;
  login: (info: UserInfo) => void;
  logout: () => void;
  addXP: (amount: number) => void;
  completeUnit: (unitId: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

// --- Main App Component ---
export default function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(() => {
    const saved = localStorage.getItem('gs9_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [view, setView] = useState<ViewState>(userInfo ? ViewState.DASHBOARD : ViewState.LOGIN);
  const [activeUnit, setActiveUnit] = useState<UnitData | null>(null);
  
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('gs9_progress');
    return saved ? JSON.parse(saved) : {
      xp: 0,
      streak: 1,
      completedUnits: [],
      level: 1
    };
  });

  useEffect(() => {
    localStorage.setItem('gs9_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem('gs9_user', JSON.stringify(userInfo));
    } else {
      localStorage.removeItem('gs9_user');
    }
  }, [userInfo]);

  const login = (info: UserInfo) => {
    setUserInfo(info);
    setView(ViewState.DASHBOARD);
  };

  const logout = () => {
    setUserInfo(null);
    setView(ViewState.LOGIN);
  };

  const addXP = (amount: number) => {
    setUserProgress(prev => ({ ...prev, xp: prev.xp + amount }));
  };

  const completeUnit = (unitId: number) => {
    if (!userProgress.completedUnits.includes(unitId)) {
      setUserProgress(prev => ({
        ...prev,
        completedUnits: [...prev.completedUnits, unitId],
        xp: prev.xp + 100 // Bonus for unit completion
      }));
    }
  };

  const renderContent = () => {
    if (!userInfo) return <Login />;

    switch (view) {
      case ViewState.LOGIN:
        return <Login />;
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.VOCABULARY:
        return activeUnit ? <VocabularyActivity unit={activeUnit} /> : <Dashboard />;
      case ViewState.LISTENING:
        return activeUnit ? <ListeningActivity unit={activeUnit} /> : <Dashboard />;
      case ViewState.SPEAKING:
        return activeUnit ? <SpeakingActivity unit={activeUnit} /> : <Dashboard />;
      case ViewState.GRAMMAR:
        return activeUnit ? <GrammarActivity unit={activeUnit} /> : <Dashboard />;
      case ViewState.PROFILE:
        return <Profile />;
      case ViewState.LEADERBOARD:
        return <Leaderboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppContext.Provider value={{ 
      view, setView, 
      activeUnit, setActiveUnit, 
      userProgress, addXP, completeUnit,
      userInfo, login, logout
    }}>
      {userInfo && view !== ViewState.LOGIN ? (
        <Layout>
          {renderContent()}
        </Layout>
      ) : (
        renderContent()
      )}
    </AppContext.Provider>
  );
}