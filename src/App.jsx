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
import { Activity, Droplets, ArrowDownToLine, Gauge } from 'lucide-react';

/* Dashboard Content Component */
const DashboardHome = () => {
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
          <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] md:text-xs font-semibold mt-1">Advanced Intelligence Platform</p>
        </div>
        <div className="flex items-center gap-2 text-cyber-text-muted text-[10px] bg-white/5 px-2 py-1 rounded-lg border border-white/10 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-success animate-pulse"></span>
          LIVE UPDATES
        </div>
      </div>

      {/* Section 2: Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard
          title="Water Level"
          value="42.5"
          unit="m"
          subValue="139 ft"
          trend="up"
          trendValue="2.1%"
          icon={Droplets}
          color="teal"
          live={true}
          chartData={waterData}
        />
        <MetricCard
          title="Borewell Depth"
          value="180"
          unit="m"
          subValue="Max Cap."
          trend="neutral"
          trendValue="0%"
          icon={ArrowDownToLine}
          color="blue"
          chartData={depthData}
        />
        <MetricCard
          title="Pressure"
          value="340"
          unit="kPa"
          trend="down"
          trendValue="1.2%"
          icon={Gauge}
          color="indigo"
          live={true}
          chartData={pressureData}
        />
        <MetricCard
          title="Pump Status"
          value="ON"
          unit=""
          subValue="Running"
          trend="up"
          trendValue="4h 12m"
          icon={Activity}
          color="green"
          chartData={utilityData}
        />
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
