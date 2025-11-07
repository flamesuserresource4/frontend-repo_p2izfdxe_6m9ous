import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

function App() {
  const [stage, setStage] = useState('home'); // home | auth | app
  const [user, setUser] = useState(null);

  const goToAuth = () => setStage('auth');
  const handleLoggedIn = (u) => {
    setUser(u);
    setStage('app');
    // Scroll to top after route change effect
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar onLoginClick={() => setStage(stage === 'app' ? 'home' : 'auth')} isAuthed={!!user} />
      {stage === 'home' && (
        <>
          <Hero onGetStarted={goToAuth} />
          <Features />
        </>
      )}
      {stage === 'auth' && <Auth onLoggedIn={handleLoggedIn} />}
      {stage === 'app' && <Dashboard user={user} />}
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-white/60">
        Built with care · SplitMate © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
