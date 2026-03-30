import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
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
  return (
    <div className="space-y-6">
      {/* Section 1: Heading */}
      <div>
        <h2 className="text-2xl font-bold text-cyber-text-primary">Dashboard Overview</h2>
        <p className="text-cyber-text-muted uppercase tracking-widest text-xs font-semibold mt-1">Real-time monitoring for Borewell #BW-102</p>
      </div>

      {/* Section 2: Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Water Level"
          value="42.5"
          unit="m"
          subValue="139 ft"
          trend="up"
          trendValue="2.1%"
          icon={Droplets}
          color="teal"
          live={true} // Enable simulation
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
        />
        <MetricCard
          title="Pressure"
          value="340"
          unit="kPa"
          trend="down"
          trendValue="1.2%"
          icon={Gauge}
          color="indigo"
          live={true} // Enable simulation
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
        />
      </div>

      {/* Section 3: Main Analytics & Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnalyticsCharts />
        </div>
        <div className="lg:col-span-1">
          <SafetyStatus />
        </div>
      </div>

      {/* Section 4: Circular Stats & Other info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CircularStats />
        </div>
        {/* Smart Prediction Card */}
        <div className="bg-cyber-surface/60 backdrop-blur-md rounded-2xl p-6 border border-cyber-primary/20 shadow-neon flex flex-col justify-between group hover:border-cyber-primary/40 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse" />
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-cyber-primary">Smart Prediction</h3>
            </div>
            <p className="text-cyber-text-primary text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
              Based on AI-driven usage trends, water availability is predicted to remain <span className="text-cyber-success font-bold">STABLE</span> for the next 14 days.
            </p>
          </div>
          <button className="bg-cyber-primary/10 hover:bg-cyber-primary/20 text-cyber-primary py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest border border-cyber-primary/30 transition-all duration-300">
            View Analytics Report
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
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
  );
}

export default App;
