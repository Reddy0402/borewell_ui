import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const CircularStats = () => {
    const dataAvailability = [
        { name: 'Available', value: 75, color: '#0ea5e9' }, // Neon Cyan
        { name: 'Used', value: 25, color: 'rgba(255,255,255,0.05)' }, 
    ];

    const dataEfficiency = [
        { name: 'Efficient', value: 92, color: '#f59e0b' }, // Neon Amber
        { name: 'Loss', value: 8, color: 'rgba(255,255,255,0.05)' },
    ];

    const dataHealth = [
        { name: 'Healthy', value: 98, color: '#10b981' }, // Neon Success
        { name: 'Issues', value: 2, color: 'rgba(255,255,255,0.05)' },
    ];

    const Donut = ({ data, title, value, sub, colorClass }) => (
        <div className="flex flex-col items-center justify-center p-2">
            <div className="h-32 w-32 relative group">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={38}
                            outerRadius={48}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={4}
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={entry.color} 
                                    className={index === 0 ? "drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" : ""}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className={`text-xl font-black text-cyber-text-primary tracking-tighter`}>{value}%</span>
                </div>
            </div>
            <h4 className="mt-3 font-bold text-cyber-text-primary text-[10px] uppercase tracking-wider">{title}</h4>
            <p className="text-[9px] font-bold text-cyber-text-muted uppercase tracking-widest">{sub}</p>
        </div>
    );

    return (
        <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl p-6 border border-cyber-border h-full">
            <h3 className="text-lg font-bold text-cyber-text-primary flex items-center gap-2 mb-6">
                <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                System Efficiency
            </h3>
            <div className="grid grid-cols-3 gap-2">
                <Donut data={dataAvailability} title="Water Lv." value={75} sub="Availability" />
                <Donut data={dataEfficiency} title="Pump Eff." value={92} sub="Performance" />
                <Donut data={dataHealth} title="Health" value={98} sub="Sensors" />
            </div>
        </div>
    );
};

export default CircularStats;
