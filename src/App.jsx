import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/layout/LoadingScreen';
import MetricCard from './components/dashboard/MetricCard';
import AnalyticsCharts from './components/dashboard/AnalyticsCharts';
import SafetyStatus from './components/dashboard/SafetyStatus';
import CircularStats from './components/dashboard/CircularStats';
import IntelligenceBar from './components/dashboard/IntelligenceBar';
import LiveMonitoring from './components/pages/LiveMonitoring';
import Analytics from './components/pages/Analytics';
import Alerts from './components/pages/Alerts';
import PumpControl from './components/pages/PumpControl';
import Reports from './components/pages/Reports';
import Settings from './components/pages/Settings';
import { Activity, Droplets, ArrowDownToLine, Gauge, Wind, Cloud, ThermometerSun, Maximize2, Minimize2, Power, Clock, RotateCcw, Zap, LayoutPanelLeft } from 'lucide-react';

/* Dashboard Content Component */
const DashboardHome = () => {
  const [isBorewellExpanded, setIsBorewellExpanded] = useState(false);
  const [isAqiExpanded, setIsAqiExpanded] = useState(false);
  const [isPumpOn, setIsPumpOn] = useState(true);
  const [pumpMode, setPumpMode] = useState('auto');

  // Threshold helper for dynamic coloring based on limits
  const getStatus = (val, warn, danger, type = 'high') => {
      if (type === 'high') {
         if (val >= danger) return { statusLabel: 'DANGER', color: 'red' };
         if (val >= warn) return { statusLabel: 'WARNING', color: 'amber' };
      } else {
         if (val <= danger) return { statusLabel: 'DANGER', color: 'red' };
         if (val <= warn) return { statusLabel: 'WARNING', color: 'amber' };
      }
      return { statusLabel: 'GOOD', color: 'green' };
  };
  // Sparkline chart data - Expanded for smoother area curves
  const waterData = [{ value: 40 }, { value: 40.5 }, { value: 41.5 }, { value: 42 }, { value: 41.8 }, { value: 41 }, { value: 41.5 }, { value: 42.5 }];
  const pressureData = [{ value: 330 }, { value: 335 }, { value: 345 }, { value: 340 }, { value: 338 }, { value: 342 }, { value: 340 }, { value: 340 }];
  const depthData = [{ value: 180 }, { value: 180 }, { value: 180 }, { value: 180 }, { value: 180 }, { value: 180 }, { value: 180 }, { value: 180 }];
  const utilityData = [{ value: 10 }, { value: 15 }, { value: 25 }, { value: 20 }, { value: 15 }, { value: 35 }, { value: 45 }, { value: 30 }];

  return (
    <div className="space-y-4 w-full overflow-hidden">
      {/* Section 1: Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-cyber-text-primary tracking-tight">Dashboard Overview</h2>
          <p className="text-cyber-text-muted uppercase tracking-[0.25em] text-[9px] md:text-[10px] font-semibold mt-1 opacity-70">Advanced Intelligence & AQI Environment</p>
        </div>
        <div className="flex items-center gap-2 text-cyber-text-muted text-[10px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit shadow-neon group hover:border-cyber-success/30 transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-success animate-pulse shadow-neon shadow-cyber-success/50"></span>
          <span className="font-bold tracking-[0.15em] font-mono text-cyber-text-muted/80 group-hover:text-cyber-success transition-colors">LIVE DATA</span>
        </div>
      </div>

      {/* Section 2: Core Metrics & Command Centers (4-Column Layout) - FORCED ALIGNMENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        
        {/* Column 1: Borewell Group */}
        <div className={`space-y-3 ${isBorewellExpanded ? 'md:col-span-2 lg:col-span-4' : 'col-span-1'}`}>
          {!isBorewellExpanded ? (
            <MetricCard 
              title="Borewell Overall Health" 
              value="99.0" 
              unit="%" 
              subValue="System Optimal" 
              trend="up" 
              trendValue="0.2%" 
              icon={Activity} 
              live={true} 
              statusLabel="GOOD" 
              color="green" 
              chartData={waterData} 
              onClick={() => setIsBorewellExpanded(true)}
              className="h-full"
            />
          ) : (
            <div className="bg-cyber-surface/30 backdrop-blur-xl rounded-2xl p-4 md:p-5 border border-cyber-secondary/30 animate-[fade-in_0.4s_ease-out] relative shadow-2xl h-full">
              <button 
                onClick={() => setIsBorewellExpanded(false)}
                className="absolute -top-3 -right-3 z-20 bg-cyber-primary text-white p-2 rounded-xl shadow-neon hover:scale-110 active:scale-95 transition-all"
                title="Collapse"
              >
                <Minimize2 size={24} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-7 bg-cyber-primary rounded-full shadow-neon" />
                <h3 className="text-base font-black uppercase tracking-[0.4em] text-cyber-primary">Borewell Diagnostics</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="Water Level" value="28.5" unit="m" subValue="Low!" trend="down" trendValue="4.1%" icon={Droplets} live={true} {...getStatus(28.5, 35, 30, 'low')} />
                <MetricCard title="Depth" value="180" unit="m" subValue="Max Cap." trend="neutral" trendValue="0%" icon={ArrowDownToLine} statusLabel="GOOD" color="green" />
                <MetricCard title="Pressure" value="385" unit="kPa" trend="up" trendValue="1.2%" icon={Gauge} live={true} {...getStatus(385, 360, 400, 'high')} />
                <MetricCard title="Pump" value="ON" unit="" subValue="Running" trend="up" trendValue="4h" icon={Activity} statusLabel="GOOD" color="green" />
              </div>
              <div className="mt-12 pt-12 border-t border-white/5">
                <AnalyticsCharts showBackground={false} />
              </div>
            </div>
          )}
        </div>

        {/* Column 2: Command Center (Power Only) */}
        {!isBorewellExpanded && !isAqiExpanded && (
          <div className="col-span-1 bg-cyber-surface/40 backdrop-blur-md p-4 rounded-xl border border-cyber-border hover:border-cyber-primary/40 shadow-2xl flex flex-col items-center group transition-all duration-300 relative overflow-hidden h-full z-10 border-b-2 border-b-cyber-primary/20">
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="flex items-start justify-between w-full mb-3">
                <div className="flex flex-col">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyber-text-muted">Control</h3>
                  <span className="text-[10px] font-bold text-cyber-success/70 tracking-widest uppercase font-mono mt-0.5">PUMP STATUS</span>
               </div>
               <div className="p-2 rounded-lg bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 shadow-neon">
                  <Activity size={16} />
               </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <button 
                onClick={() => setIsPumpOn(!isPumpOn)}
                className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-700 group/btn ${isPumpOn ? 'bg-cyber-success/20 shadow-[0_0_60px_rgba(16,185,129,0.4)]' : 'bg-white/5 shadow-inner'}`}
              >
                <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${isPumpOn ? 'border-cyber-success bg-cyber-bg shadow-neon scale-100' : 'border-cyber-border bg-cyber-bg scale-95'}`}>
                  <Power size={24} className={`transition-all duration-700 ${isPumpOn ? 'text-cyber-success drop-shadow-[0_0_15px_rgba(16,185,129,0.9)] rotate-0' : 'text-cyber-text-muted -rotate-12'}`} />
                </div>
              </button>

              <div className="text-center">
                <h3 className="text-sm font-bold text-cyber-text-primary mb-1 uppercase tracking-tight group-hover:text-white transition-colors drop-shadow-neon-sm font-mono">{isPumpOn ? 'RUNNING' : 'OFFLINE'}</h3>
                <p className="text-cyber-text-muted text-[8px] font-bold uppercase tracking-[0.2em] font-mono">Load: <span className={isPumpOn ? 'text-cyber-success' : ''}>{isPumpOn ? '8.4A' : '0.0A'}</span></p>
              </div>
            </div>
          </div>
        )}

        {/* Column 3: Control Mode (Schedules Only) */}
        {!isBorewellExpanded && !isAqiExpanded && (
          <div className="col-span-1 bg-cyber-surface/40 backdrop-blur-md p-4 rounded-xl border border-cyber-border hover:border-cyber-primary/40 shadow-2xl flex flex-col group transition-all duration-300 relative overflow-hidden h-full z-10 border-b-2 border-b-cyber-primary/20">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyber-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="flex items-start justify-between w-full mb-3">
               <div className="flex flex-col">
                 <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyber-text-muted font-inter">Control</h3>
                 <div className="flex bg-black/40 p-0.5 rounded-md border border-white/5 mt-1.5 scale-90 -ml-2">
                    {['auto', 'manual'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setPumpMode(m)}
                        className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded transition-all duration-500 font-mono ${pumpMode === m ? 'bg-cyber-primary text-cyber-bg shadow-neon' : 'text-cyber-text-muted hover:text-white'}`}
                      >
                        {m}
                      </button>
                    ))}
                 </div>
               </div>
               <div className="p-2 rounded-lg bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 shadow-neon">
                  <LayoutPanelLeft size={16} />
               </div>
            </div>

            <div className="space-y-3 w-full flex-1 flex flex-col justify-end">
               <div className="p-3 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between group/row hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyber-primary/10 rounded-xl text-cyber-primary shadow-neon">
                      <Clock size={14} />
                    </div>
                    <div>
                      <p className="font-semibold text-white/95 text-[10px] uppercase tracking-tight">Morning</p>
                      <p className="text-[8px] font-medium text-cyber-text-muted mt-0.5 uppercase tracking-[0.1em] font-mono">06:00 - 09:00</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer scale-90">
                     <input type="checkbox" defaultChecked className="sr-only peer" />
                     <div className="w-10 h-5 bg-slate-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-cyber-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all shadow-lg"></div>
                  </label>
               </div>

               <div className="p-3 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between group/row hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-cyber-primary/10 rounded-xl text-cyber-primary shadow-neon">
                       <Clock size={14} />
                     </div>
                     <div>
                        <p className="font-semibold text-white/90 text-[10px] uppercase tracking-tight">Evening</p>
                        <p className="text-[8px] font-medium text-cyber-text-muted mt-0.5 uppercase tracking-[0.1em] font-mono">17:00 - 19:00</p>
                     </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer scale-90">
                     <input type="checkbox" defaultChecked className="sr-only peer" />
                     <div className="w-10 h-5 bg-slate-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-cyber-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all shadow-lg"></div>
                  </label>
               </div>
            </div>
          </div>
        )}

        {/* Column 4: AQI Group */}
        <div className={`space-y-3 ${isAqiExpanded ? 'md:col-span-2 lg:col-span-4' : 'col-span-1'}`}>
          {!isAqiExpanded ? (
            <MetricCard 
              title="Environment & AQI" 
              value="45" 
              unit="AQI" 
              subValue="Sector 7" 
              trend="down" 
              trendValue="Improving" 
              icon={Wind} 
              statusLabel="GOOD" 
              color="teal" 
              chartData={utilityData} 
              onClick={() => setIsAqiExpanded(true)}
              className="h-full"
            />
          ) : (
            <div className="bg-cyber-surface/30 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-cyber-secondary/30 animate-[fade-in_0.4s_ease-out] relative shadow-2xl h-full">
              <button 
                onClick={() => setIsAqiExpanded(false)}
                className="absolute -top-3 -right-3 z-20 bg-cyber-secondary text-white p-2 rounded-xl shadow-neon-secondary hover:scale-110 active:scale-95 transition-all"
                title="Collapse"
              >
                <Minimize2 size={24} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-7 bg-cyber-secondary rounded-full shadow-neon shadow-cyber-secondary/50" />
                <h3 className="text-base font-black uppercase tracking-[0.4em] text-cyber-secondary">Environment Intelligence</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="AQI Index" value="115" unit="AQI" subValue="Moderate" trend="up" trendValue="15" icon={Wind} live={true} {...getStatus(115, 100, 150, 'high')} />
                <MetricCard title="PM2.5" value="55" unit="µg/m³" subValue="Elevated" trend="up" trendValue="5%" icon={Cloud} live={true} {...getStatus(55, 35, 60, 'high')} />
                <MetricCard title="Temp" value="41" unit="°C" subValue="Extreme" trend="up" icon={ThermometerSun} live={true} {...getStatus(41, 35, 40, 'high')} />
                <MetricCard title="CO2/VOC" value="480" unit="ppm" subValue="Normal" trend="down" icon={Activity} live={true} {...getStatus(480, 800, 1000, 'high')} />
              </div>
              <div className="mt-12 pt-12 border-t border-white/5">
                <AnalyticsCharts type="aqi" showBackground={false} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Section 4: Deep Insights Grid  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
        {/* Left 2/3: Combined Stats & Insights - Height Match Sidebar */}
        <div className="lg:col-span-2 bg-cyber-surface/60 backdrop-blur-md rounded-xl p-4 border border-cyber-border shadow-neon-border h-full">
           <CircularStats />
        </div>

        {/* Right 1/3: Intelligence Sidebar */}
        <div className="lg:col-span-1 space-y-3 flex flex-col h-full">
          <SafetyStatus />
          
          <div className="flex-1 bg-cyber-surface/60 backdrop-blur-md rounded-xl p-4 border border-cyber-primary/20 shadow-neon flex flex-col justify-between group hover:border-cyber-primary/40 transition-all duration-500 overflow-hidden relative min-h-[180px]">
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyber-primary/5 rounded-full blur-[60px]" />
             
             <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse shadow-neon" />
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyber-primary font-mono">Predictive Index</h3>
                </div>
                <p className="text-cyber-text-primary text-xs leading-relaxed mb-3 group-hover:text-white transition-colors font-medium">
                  AI analysis suggests water availability is <span className="text-cyber-success font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] tracking-tight">OPTIMAL - 14 DAY RUNWAY</span>.
                </p>
               <div className="p-3 bg-white/5 rounded-lg border border-white/5 mb-3">
                 <div className="flex justify-between text-[8px] uppercase tracking-widest mb-1.5 px-1 font-black">
                    <span className="text-cyber-text-muted">Stability Factor</span>
                    <span className="text-cyber-primary drop-shadow-neon">92.4%</span>
                 </div>
                 <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-cyber-primary shadow-neon transition-all duration-1000 ease-out" style={{ width: '92.4%' }} />
                 </div>
               </div>
             </div>
              <button className="bg-cyber-primary/10 hover:bg-cyber-primary/20 text-cyber-primary py-2.5 px-4 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] border border-cyber-primary/30 transition-all duration-300 w-full shadow-lg hover:shadow-cyber-primary/10 group-hover:scale-[1.02] active:scale-95 font-mono">
                Generate Status Report
              </button>
          </div>
        </div>
      </div>

      {/* Section 5: Bottom Intelligence Bar */}
      <IntelligenceBar />
    </div>
  );
};

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  return (
    <>
      {!isAppReady && <LoadingScreen onComplete={() => setIsAppReady(true)} />}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/live" element={<LiveMonitoring />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
