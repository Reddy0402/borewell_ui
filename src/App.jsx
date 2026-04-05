import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/layout/LoadingScreen';
import MetricCard from './components/dashboard/MetricCard';
import AnalyticsCharts from './components/dashboard/AnalyticsCharts';
import SafetyStatus from './components/dashboard/SafetyStatus';
import CircularStats from './components/dashboard/CircularStats';
import LiveMonitoring from './components/pages/LiveMonitoring';
import Analytics from './components/pages/Analytics';
import Alerts from './components/pages/Alerts';
import PumpControl from './components/pages/PumpControl';
import Reports from './components/pages/Reports';
import Settings from './components/pages/Settings';
import { Activity, Droplets, ArrowDownToLine, Gauge, Wind, Cloud, ThermometerSun, Maximize2, Minimize2 } from 'lucide-react';

/* Dashboard Content Component */
const DashboardHome = () => {
  const [isBorewellExpanded, setIsBorewellExpanded] = useState(false);
  const [isAqiExpanded, setIsAqiExpanded] = useState(false);

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
    <div className="space-y-4 md:space-y-6">
      {/* Section 1: Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-cyber-text-primary">Dashboard Overview</h2>
          <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] md:text-xs font-semibold mt-1">Advanced Intelligence & AQI Environment</p>
        </div>
        <div className="flex items-center gap-2 text-cyber-text-muted text-[10px] bg-white/5 px-3 py-2 rounded-lg border border-white/10 w-fit shadow-neon">
          <span className="w-2 h-2 rounded-full bg-cyber-success animate-pulse"></span>
          <span className="font-bold tracking-widest">LIVE DATA</span>
        </div>
      </div>

      {/* Independent Dynamic Metric Cards Section */}
      <div className="space-y-6 md:space-y-8">
        
        {/* Borewell Group */}
        <div>
          <div className="flex items-center justify-between border-b border-cyber-primary/20 pb-2 mb-4">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyber-primary">Borewell Subsystem</h3>
            <button 
              onClick={() => setIsBorewellExpanded(!isBorewellExpanded)}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-primary/10 text-cyber-primary text-[10px] uppercase font-bold tracking-wider hover:bg-cyber-primary/20 hover:shadow-[0_0_10px_rgba(14,165,233,0.3)] transition-all"
            >
               {isBorewellExpanded ? <><Minimize2 size={12} /> Collapse</> : <><Maximize2 size={12} /> Expand</>}
            </button>
          </div>
          
          {!isBorewellExpanded ? (
          <MetricCard title="Borewell Overall Health" value="98.5" unit="%" subValue="System Optimal" trend="up" trendValue="0.2%" icon={Activity} live={true} statusLabel="GOOD" color="green" chartData={waterData} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-[fade-in_0.3s_ease-out]">
              <MetricCard title="Water Level" value="28.5" unit="m" subValue="Low!" trend="down" trendValue="4.1%" icon={Droplets} live={true} chartData={waterData} {...getStatus(28.5, 35, 30, 'low')} />
              <MetricCard title="Borewell Depth" value="180" unit="m" subValue="Max Cap." trend="neutral" trendValue="0%" icon={ArrowDownToLine} chartData={depthData} statusLabel="GOOD" color="green" />
              <MetricCard title="System Pressure" value="385" unit="kPa" trend="up" trendValue="1.2%" icon={Gauge} live={true} chartData={pressureData} {...getStatus(385, 360, 400, 'high')} />
              <MetricCard title="Pump Status" value="ON" unit="" subValue="Running" trend="up" trendValue="4h 12m" icon={Activity} chartData={utilityData} statusLabel="GOOD" color="green" />
            </div>
          )}
        </div>

        {/* AQI Group */}
        <div>
          <div className="flex items-center justify-between border-b border-cyber-secondary/20 pb-2 mb-4">
             <div className="flex items-center gap-3">
               <h3 className="text-sm font-black uppercase tracking-[0.2em] text-cyber-secondary">AQI Environment</h3>
               <span className="text-[10px] font-bold text-cyber-secondary bg-cyber-secondary/10 px-2 py-1 rounded-md border border-cyber-secondary/20 uppercase tracking-wider hidden sm:block">Site Alpha - Sector 7</span>
             </div>
             <button 
              onClick={() => setIsAqiExpanded(!isAqiExpanded)}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-secondary/10 text-cyber-secondary text-[10px] uppercase font-bold tracking-wider hover:bg-cyber-secondary/20 hover:shadow-[0_0_10px_rgba(245,158,11,0.3)] transition-all"
            >
               {isAqiExpanded ? <><Minimize2 size={12} /> Collapse</> : <><Maximize2 size={12} /> Expand</>}
             </button>
          </div>
          
          {!isAqiExpanded ? (
            <div className="grid grid-cols-1">
               <MetricCard title="Environment & AQI" value="45" unit="AQI" subValue="Site Alpha - Sector 7" trend="down" trendValue="Improving" icon={Wind} statusLabel="GOOD" color="teal" chartData={utilityData} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-[fade-in_0.3s_ease-out]">
               <MetricCard title="Air Quality Index" value="115" unit="AQI" subValue="Moderate" trend="up" trendValue="15" icon={Wind} live={true} chartData={utilityData} {...getStatus(115, 100, 150, 'high')} />
               <MetricCard title="PM2.5 Density" value="55" unit="µg/m³" subValue="Elevated" trend="up" trendValue="5%" icon={Cloud} live={true} chartData={waterData} {...getStatus(55, 35, 60, 'high')} />
               <MetricCard title="Temperature" value="41" unit="°C" subValue="Extreme Heat" trend="up" trendValue="2.1°C" icon={ThermometerSun} live={true} chartData={pressureData} {...getStatus(41, 35, 40, 'high')} />
               <MetricCard title="CO2 / VOC Levels" value="480" unit="ppm" subValue="Normal" trend="down" trendValue="12 ppm" icon={Activity} live={true} chartData={depthData} {...getStatus(480, 800, 1000, 'high')} />
            </div>
          )}
        </div>
        
      </div>

      {/* Section 3: Main Analytics & Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 overflow-hidden">
          <AnalyticsCharts />
        </div>
        <div className="lg:col-span-1">
          <SafetyStatus />
        </div>
      </div>

      {/* Section 4: Circular Stats & Other info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 overflow-hidden">
          <CircularStats />
        </div>
        {/* Smart Prediction Card */}
        <div className="bg-cyber-surface/60 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-cyber-primary/20 shadow-neon flex flex-col justify-between group hover:border-cyber-primary/40 transition-all duration-300 min-h-[200px]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyber-primary">Smart Prediction</h3>
            </div>
            <p className="text-cyber-text-primary text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
              Based on AI-driven usage trends, water availability is predicted to remain <span className="text-cyber-success font-bold">STABLE</span> for the next 14 days.
            </p>
          </div>
          <button className="bg-cyber-primary/10 hover:bg-cyber-primary/20 text-cyber-primary py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest border border-cyber-primary/30 transition-all duration-300 w-full">
            View Analytics Report
          </button>
        </div>
      </div>
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
            <Route path="/pump" element={<PumpControl />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
