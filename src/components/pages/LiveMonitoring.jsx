import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Activity, Droplets, Gauge } from 'lucide-react';

const LiveMonitoring = () => {
    const [data, setData] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(42.5);
    const [pressure, setPressure] = useState(340);

    // Initialize data
    useEffect(() => {
        const initialData = [];
        let level = 42.5;
        for (let i = 0; i < 20; i++) {
            level = level + (Math.random() - 0.5);
            initialData.push({
                time: new Date(Date.now() - (20 - i) * 1000).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                level: parseFloat(level.toFixed(2))
            });
        }
        setData(initialData);
    }, []);

    // Simulate real-time data
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

            const change = (Math.random() - 0.5);
            let newLevel = currentLevel + change;
            // Keep within realistic bounds
            if (newLevel > 45) newLevel = 45;
            if (newLevel < 40) newLevel = 40;

            const newLevelFixed = parseFloat(newLevel.toFixed(2));
            setCurrentLevel(newLevelFixed);
            setPressure(Math.floor(340 + (Math.random() - 0.5) * 10));

            setData(prevData => {
                const newData = [...prevData, { time: timeStr, level: newLevelFixed }];
                if (newData.length > 20) newData.shift(); // Keep last 20 points
                return newData;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [currentLevel]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                        Live Monitoring
                    </h2>
                    <p className="text-cyber-text-muted uppercase tracking-[0.2em] text-[10px] font-bold mt-1">Real-time sensor data stream • Borewell #BW-102</p>
                </div>
                <div className="flex items-center gap-3 bg-cyber-danger/10 px-4 py-2 rounded-xl border border-cyber-danger/20">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-danger opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-danger"></span>
                    </span>
                    <span className="text-cyber-danger font-black text-[10px] tracking-[0.3em] uppercase">Live Feed</span>
                </div>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyber-surface/40 backdrop-blur-md p-6 rounded-2xl border border-cyber-border flex items-center justify-between group hover:border-cyber-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyber-primary/10 rounded-2xl text-cyber-primary border border-cyber-primary/20 shadow-neon">
                            <Droplets size={32} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-cyber-text-muted mb-1">Current Level</p>
                            <h3 className="text-4xl font-black text-cyber-text-primary tracking-tighter">
                                {currentLevel} <span className="text-base text-cyber-text-muted font-medium ml-1">m</span>
                            </h3>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-cyber-success/10 border border-cyber-success/30">
                        <p className="text-[10px] font-black uppercase tracking-widest text-cyber-success">Normal</p>
                    </div>
                </div>

                <div className="bg-cyber-surface/40 backdrop-blur-md p-6 rounded-2xl border border-cyber-border flex items-center justify-between group hover:border-cyber-secondary/40 transition-all duration-300">
                    <div className="flex items-center gap-5">
                        <div className="p-4 bg-cyber-secondary/10 rounded-2xl text-cyber-secondary border border-cyber-secondary/20 shadow-neon-secondary">
                            <Gauge size={32} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-cyber-text-muted mb-1">Pressure</p>
                            <h3 className="text-4xl font-black text-cyber-text-primary tracking-tighter">
                                {pressure} <span className="text-base text-cyber-text-muted font-medium ml-1">kPa</span>
                            </h3>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30">
                        <p className="text-[10px] font-black uppercase tracking-widest text-cyber-primary">Stable</p>
                    </div>
                </div>
            </div>

            {/* Main Chart */}
            <div className="bg-cyber-surface/40 backdrop-blur-md p-8 rounded-2xl border border-cyber-border shadow-neon-border">
                <div className="flex items-center gap-2 mb-8">
                    <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                    <h3 className="text-lg font-black text-cyber-text-primary tracking-tight">Water Level Fluctuations (Live)</h3>
                </div>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis 
                                dataKey="time" 
                                stroke="rgba(255,255,255,0.2)" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#64748b', fontWeight: 600 }}
                            />
                            <YAxis 
                                domain={['dataMin - 0.5', 'dataMax + 0.5']} 
                                stroke="rgba(255,255,255,0.2)" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#64748b', fontWeight: 600 }}
                            />
                            <Tooltip
                                contentStyle={{ 
                                    backgroundColor: 'rgba(2, 6, 23, 0.95)', 
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '12px', 
                                    border: '1px solid rgba(14, 165, 233, 0.3)',
                                    boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)'
                                }}
                                itemStyle={{ color: '#0ea5e9', fontWeight: 'bold', fontSize: '12px' }}
                                labelStyle={{ color: '#f1f5f9', fontWeight: 'black', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                            />
                            <ReferenceLine 
                                y={44} 
                                stroke="rgba(245, 158, 11, 0.4)" 
                                strokeDasharray="8 8" 
                                label={{ position: 'top', value: 'WARNING THRESHOLD', fill: '#f59e0b', fontSize: 10, fontWeight: 900, letterSpacing: '0.1em' }} 
                            />
                            <Line
                                type="monotone"
                                dataKey="level"
                                stroke="#0ea5e9"
                                strokeWidth={4}
                                dot={false}
                                activeDot={{ r: 6, fill: '#0ea5e9', stroke: '#fff', strokeWidth: 2, shadow: '0 0 10px #0ea5e9' }}
                                isAnimationActive={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default LiveMonitoring;
