import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    AreaChart,
    Area
} from 'recharts';

const data = [
    { name: 'Oct', level: 65, pump: 4 },
    { name: 'Nov', level: 59, pump: 5 },
    { name: 'Dec', level: 80, pump: 6 },
    { name: 'Jan', level: 81, pump: 4 },
    { name: 'Feb', level: 56, pump: 7 },
    { name: 'Mar', level: 55, pump: 8 },
    { name: 'Apr', level: 40, pump: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-neon border border-cyber-primary/30">
                <p className="font-bold text-cyber-text-primary mb-2 border-b border-white/10 pb-1">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: entry.color, color: entry.color }}></div>
                        <span className="text-xs text-cyber-text-secondary uppercase tracking-wider">
                            {entry.name === 'level' ? 'Water Level' : 'Pump Usage'}:
                        </span>
                        <span className="text-sm font-bold text-cyber-text-primary">
                            {entry.value} {entry.name === 'level' ? 'm' : 'hrs'}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const AnalyticsCharts = () => {
    return (
        <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl p-6 border border-cyber-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-lg font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                        Water Level Trends
                    </h3>
                    <p className="text-xs text-cyber-text-muted uppercase tracking-widest mt-1">Monthly breakdown of groundwater depth</p>
                </div>
                <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-cyber-primary/20 text-cyber-primary shadow-neon border border-cyber-primary/30">Monthly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md text-cyber-text-muted hover:text-cyber-text-primary transition-colors">Weekly</button>
                    <button className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md text-cyber-text-muted hover:text-cyber-text-primary transition-colors">Daily</button>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(14, 165, 233, 0.2)', strokeWidth: 2 }} />
                        <Area
                            type="monotone"
                            dataKey="level"
                            stroke="#0ea5e9"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorLevel)"
                            animationDuration={2000}
                        />
                        {/* Safe Level Line */}
                        <Line
                            type="linear"
                            dataKey={() => 30}
                            stroke="#f59e0b"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            name="Safe Minimum"
                            dot={false}
                            activeDot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsCharts;
