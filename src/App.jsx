import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { LandingPage } from './pages/LandingPage';
import { InputPage } from './pages/InputPage';
import { OutputDashboard } from './pages/OutputDashboard';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-slate-50 font-sans selection:bg-neon-purple/30 selection:text-electric-blue">
        <Navbar />
        {/* Glow effect backgrounds */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-electric-blue/10 blur-[120px]" />
        </div>

        <main className="relative z-10 pt-24 pb-12 px-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/dashboard" element={<OutputDashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
