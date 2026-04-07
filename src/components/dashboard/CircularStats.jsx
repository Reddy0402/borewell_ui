import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Lightbulb, TrendingDown, Target, ShieldCheck, Zap, Thermometer, Droplets } from 'lucide-react';

const CircularStats = () => {

    const dataAvailability = [{ name: 'A', value: 75, color: '#0ea5e9' }, { name: 'B', value: 25, color: 'rgba(255,255,255,0.05)' }];
    const dataEfficiency = [{ name: 'A', value: 92, color: '#f59e0b' }, { name: 'B', value: 8, color: 'rgba(255,255,255,0.05)' }];
    const dataHealth = [{ name: 'A', value: 98, color: '#10b981' }, { name: 'B', value: 2, color: 'rgba(255,255,255,0.05)' }];
    const dataAqi = [{ name: 'A', value: 88, color: '#2dd4bf' }, { name: 'B', value: 12, color: 'rgba(255,255,255,0.05)' }];

    const subsystems = [
        { name: 'Sustainability', value: 'High', unit: 'Index', color: 'text-cyber-primary', icon: Droplets },
        { name: 'Estimated Savings', value: '$12.50', unit: 'Month', color: 'text-cyber-success', icon: Zap },
        { name: 'Core Temperature', value: '38°C', unit: 'Stable', color: 'text-amber-500', icon: Thermometer },
    ];

    const Donut = ({ data, title, value, sub }) => (
        <div className="flex flex-col items-center group/donut">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 drop-shadow-neon-sm">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={data} innerRadius="82%" outerRadius="100%" paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                            {data.map((entry, index) => <Cell key={index} fill={entry.color} stroke="none" />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-white tracking-tight font-mono">{value}%</span>
                </div>
            </div>
            <h4 className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-[0.25em] mb-1">{title}</h4>
            <span className="text-[9px] font-bold text-cyber-primary uppercase tracking-[0.2em] font-mono">{sub}</span>
        </div>
    );

    const MetricTile = ({ name, value, unit, color, icon: Icon }) => (
        <div className="bg-white/5 rounded-lg border border-white/5 p-3 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-white/5 ${color} shadow-neon-sm group-hover:scale-110 transition-transform`}>
                    <Icon size={16} />
                </div>
                <div>
                    <p className="text-[9px] font-bold text-cyber-text-muted uppercase tracking-[0.15em]">{name}</p>
                    <p className="text-sm font-bold text-white mt-0.5 tracking-tight font-mono">{value}</p>
                </div>
            </div>
            <div className="text-right">
                <span className="text-[8px] font-black text-cyber-text-muted uppercase tracking-widest">{unit}</span>
            </div>
        </div>
    );

    return (
        <div className="h-full flex flex-col">
            {/* Header: User Centric Intelligence */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                <div className="flex bg-white/5 rounded-xl p-1 border border-white/10">
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-cyber-primary text-cyber-bg shadow-neon font-mono">Monthly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg text-cyber-text-muted hover:text-cyber-text-primary transition-colors font-mono">Weekly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg text-cyber-text-muted hover:text-cyber-text-primary transition-colors font-mono">Daily</button>
                </div>
                <div className="flex items-center gap-10">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-[0.35em] mb-1">UPTIME</p>
                        <p className="text-sm font-bold text-white tracking-widest font-mono">114 Days 23h 55m</p>
                    </div>
                    <div className="hidden lg:flex px-4 py-2 bg-cyber-success/10 rounded-xl border border-cyber-success/30 shadow-neon-sm">
                        <span className="text-[10px] font-black text-cyber-success uppercase tracking-[0.2em]">ALL SYSTEMS OPTIMAL</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1 gap-4">
                {/* 1. Large High-Readability Donut Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Donut data={dataAvailability} title="Water Level" value={75} sub="RESOURCE POOL" />
                    <Donut data={dataEfficiency} title="Pump Output" value={92} sub="CONTROL EFFORT" />
                    <Donut data={dataHealth} title="Maintenance" value={98} sub="NEXT CHECK: 14D" />
                    <Donut data={dataAqi} title="Smart Air" value={88} sub="QUALITY SCORE" />
                </div>


                {/* 3. User Value Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {subsystems.map((sub, idx) => (
                        <MetricTile key={idx} {...sub} />
                    ))}
                </div>

                {/* 4. NEW: Operational Timeline & Diagnostics to FILL SPACE */}
                <div className="flex-1 min-h-[120px] bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col lg:flex-row gap-4 mt-2 hover:border-cyber-primary/20 transition-all duration-500 overflow-hidden relative group">
                    {/* Subtle aesthetic glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-primary/5 rounded-full blur-[50px] pointer-events-none" />
                    
                    {/* Left: Stability Sparkline */}
                    <div className="w-full lg:w-1/4 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                           <h4 className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Stability</h4>
                           <span className="text-[9px] font-bold text-cyber-success font-mono">98.4%</span>
                        </div>
                        <div className="flex-1 min-h-[50px] relative">
                             {/* Simple SVG sparkline representation */}
                             <svg viewBox="0 0 100 30" className="w-full h-full drop-shadow-neon-sm">
                                <path 
                                    d="M0,25 L10,22 L20,24 L30,18 L40,20 L50,15 L60,18 L70,12 L80,14 L90,8 L100,10" 
                                    fill="none" 
                                    stroke="#0ea5e9" 
                                    strokeWidth="2.5" 
                                    strokeLinecap="round" 
                                    className="animate-[dash_2s_ease-out]"
                                />
                             </svg>
                        </div>
                    </div>

                    {/* Right: Operational Timeline logs */}
                    <div className="flex-1 flex flex-col">
                        <h4 className="text-[9px] font-bold text-white uppercase tracking-[0.2em] mb-3">Operational Timeline</h4>
                        <div className="space-y-3">
                             {[
                                { time: '14:20', event: 'Pump Recalibrated', status: 'OPTIMAL' },
                                { time: '12:05', event: 'AQI Validation', status: 'PASSED' },
                                { time: '09:45', event: 'Auto-Schedule', status: 'OK' }
                             ].map((log, i) => (
                                <div key={i} className="flex items-center justify-between text-[9px] border-b border-white/5 pb-1.5 last:border-0 group/log hover:bg-white/5 px-2 rounded transition-colors duration-300">
                                   <div className="flex items-center gap-3">
                                      <span className="font-mono text-cyber-text-muted opacity-60">{log.time}</span>
                                      <span className="font-bold text-white/90 group-hover/log:text-cyber-primary transition-colors">{log.event}</span>
                                   </div>
                                   <span className="font-bold text-cyber-success/80 text-[7px] tracking-widest bg-cyber-success/10 px-1.5 py-0.5 rounded-full border border-cyber-success/20">{log.status}</span>
                                </div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularStats;
