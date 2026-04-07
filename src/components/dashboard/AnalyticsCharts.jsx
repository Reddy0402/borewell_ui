import React from 'react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    Line
} from 'recharts';

const waterData = [
    { name: 'Oct', value: 65 },
    { name: 'Nov', value: 59 },
    { name: 'Dec', value: 80 },
    { name: 'Jan', value: 81 },
    { name: 'Feb', value: 56 },
    { name: 'Mar', value: 55 },
    { name: 'Apr', value: 40 },
];

const aqiData = [
    { name: 'Oct', value: 45 },
    { name: 'Nov', value: 52 },
    { name: 'Dec', value: 48 },
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 58 },
    { name: 'Mar', value: 42 },
    { name: 'Apr', value: 38 },
];

const CustomTooltip = ({ active, payload, label, unit }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-neon border border-white/10">
                <p className="font-bold text-cyber-text-primary mb-2 border-b border-white/5 pb-1 text-xs uppercase tracking-widest">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: entry.color, color: entry.color }}></div>
                        <span className="text-xs text-cyber-text-secondary uppercase tracking-widest font-bold font-mono">
                            {entry.name === 'value' ? 'Current' : entry.name}:
                        </span>
                        <span className="text-sm font-bold text-cyber-text-primary font-mono">
                            {entry.value} {unit}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const AnalyticsCharts = ({ type = 'water', showBackground = true }) => {
    const isWater = type === 'water';
    const data = isWater ? waterData : aqiData;
    const color = isWater ? '#0ea5e9' : '#2dd4bf'; // Cyan for water, Teal for AQI
    const secondaryColor = isWater ? '#f59e0b' : '#f43f5e'; // Amber for water, Rose for AQI
    const title = isWater ? 'Water Level Trends' : 'AQI Environment Trends';
    const subTitle = isWater ? 'Monthly breakdown of groundwater depth' : 'Air quality index & particle distribution';
    const unit = isWater ? 'm' : 'AQI';
    const threshold = isWater ? 30 : 50;

    return (
        <div className={showBackground ? "bg-cyber-surface/40 backdrop-blur-md rounded-2xl p-6 border border-cyber-border" : "w-full"}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-base font-bold text-cyber-text-primary flex items-center gap-2 uppercase tracking-tight">
                        <span className="w-1 h-5 rounded-full shadow-neon" style={{ backgroundColor: color }} />
                        {title}
                    </h3>
                    <p className="text-[9px] text-cyber-text-muted uppercase tracking-[0.25em] mt-1.5 font-bold opacity-70">{subTitle}</p>
                </div>
                <div className="flex bg-white/5 rounded-xl p-1.5 border border-white/10">
                    <button className="px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-lg bg-cyber-primary text-cyber-bg shadow-neon font-mono">Monthly</button>
                    <button className="px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-lg text-cyber-text-muted hover:text-cyber-text-primary transition-colors font-mono">Weekly</button>
                    <button className="px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-lg text-cyber-text-muted hover:text-cyber-text-primary transition-colors font-mono">Daily</button>
                </div>
            </div>

            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id={`colorGradient-${type}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 600, fontFamily: 'JetBrains Mono' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 600, fontFamily: 'JetBrains Mono' }}
                        />
                        <Tooltip content={<CustomTooltip unit={unit} />} cursor={{ stroke: 'rgba(255, 255, 255, 0.1)', strokeWidth: 1 }} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={3}
                            fillOpacity={1}
                            fill={`url(#colorGradient-${type})`}
                            animationDuration={1500}
                        />
                        {/* Threshold Line */}
                        <Line
                            type="linear"
                            dataKey={() => threshold}
                            stroke={secondaryColor}
                            strokeDasharray="5 5"
                            strokeWidth={1.5}
                            name="Threshold"
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
