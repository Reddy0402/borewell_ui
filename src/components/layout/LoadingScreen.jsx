import React, { useState, useEffect } from 'react';

const LOADING_PHASES = [
  "Establishing Secure Connection...",
  "Calibrating Subsurface Sensors...",
  "Analyzing Hydro-Dynamics...",
  "Synchronizing Telemetry Nodes...",
  "Initializing Cyber Shield...",
  "System Online. Welcome, Admin."
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only once on mount to avoid hydration mismatch/re-renders
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    // Faster 4 seconds total loading time
    const duration = 4000; 
    const interval = 50;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => onComplete(), 800); // Smooth fade out
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Phase Timer
  useEffect(() => {
     // Switch phrases every 0.8 seconds to cycle through all 6 phases
     const phaseInterval = setInterval(() => {
        setPhaseIndex(prev => Math.min(prev + 1, LOADING_PHASES.length - 1));
     }, 800);
     return () => clearInterval(phaseInterval);
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-bg overflow-hidden transition-opacity duration-[800ms] ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Star Field Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div 
            key={i} 
            className="absolute bg-white rounded-full animate-pulse blur-[0.5px]"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
            }}
          ></div>
        ))}
      </div>

      {/* Gentle Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl px-8 mt-12">
        
        {/* Exact Match Logo */}
        <div className="text-center w-full flex justify-center items-center mt-8">
          <div 
            className="flex items-center justify-center font-sans text-3xl md:text-5xl lg:text-6xl tracking-[0.2em] font-bold select-none"
            style={{ 
              WebkitTextStroke: '1.5px #64748b', 
              color: 'transparent',
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}
          >
            <span>PL</span>
            <div className="relative mx-2 md:mx-3 flex items-center justify-center scale-110 lg:scale-125">
              <svg 
                viewBox="0 0 24 24" 
                className="w-[0.9em] h-[0.9em]" 
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(45, 212, 191, 0.9))',
                  transform: 'translateY(-5%)'
                }}
              >
                <path d="M12 2L2 22h20z" fill="#2dd4bf" stroke="none" />
              </svg>
            </div>
            <span>NETINSIGHTS</span>
          </div>
        </div>

        {/* Text and Progress Display */}
        <div className="space-y-6 text-center w-full mt-4">
          
          <div className="flex items-center justify-center gap-3 text-blue-300 font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase h-8 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa]"></span>
            {LOADING_PHASES[phaseIndex]}
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa] opacity-50"></span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full max-w-sm md:max-w-lg h-2.5 bg-slate-900 rounded-full overflow-hidden relative border border-blue-500/30 block mx-auto shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-400 shadow-[0_0_12px_rgba(45,212,191,0.7)] transition-all duration-[50ms] ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
            {/* Ambient sliding highlight inside progress bar */}
            <div className="absolute top-0 h-full bg-white/40 animate-[loading-bar_1.5s_ease-in-out_infinite]"></div>
          </div>
          
          <div className="text-blue-400 font-mono text-2xl md:text-4xl font-bold tracking-[0.2em] mt-6 drop-shadow-neon-sm">
            {progress.toFixed(1)}%
          </div>
        </div>
      </div>

    </div>
  );
};

export default LoadingScreen;
