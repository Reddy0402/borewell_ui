import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

const MetricCard = ({ title, value: initialValue, unit, subValue, trend, trendValue, icon: Icon, color = "teal", live = false, chartData = null }) => {
    const [value, setValue] = useState(initialValue);

    // Simulate live data updates
    useEffect(() => {
        if (!live || isNaN(parseFloat(initialValue))) return;

        const interval = setInterval(() => {
            setValue(prev => {
                const num = parseFloat(prev);
                const change = (Math.random() - 0.5) * 2; // Random change between -1 and 1
                return (num + change).toFixed(1);
            });
        }, 2000); // Update every 2 seconds

        return () => clearInterval(interval);
    }, [live, initialValue]);

    const getTrendColor = () => {
        if (trend === 'up') return 'text-cyber-success';
        if (trend === 'down') return 'text-cyber-danger';
        return 'text-cyber-text-muted';
    };

    const getTrendIcon = () => {
        if (trend === 'up') return <TrendingUp size={14} />;
        if (trend === 'down') return <TrendingDown size={14} />;
        return <Minus size={14} />;
    };

    const getColorClass = (c) => {
        const maps = {
            teal: 'cyber-primary',
            blue: 'cyber-primary',
            green: 'cyber-success',
            amber: 'cyber-secondary',
            orange: 'cyber-secondary',
            red: 'cyber-danger'
        };
        return maps[c] || 'cyber-primary';
    };

    const colorMapHex = {
        teal: '#0ea5e9',
        blue: '#0ea5e9',
        green: '#10b981',
        amber: '#f59e0b',
        orange: '#f59e0b',
        red: '#ef4444',
        indigo: '#8b5cf6'
    };

    const activeColor = getColorClass(color);

    return (
        <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl p-6 border border-cyber-border hover:border-cyber-primary/40 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-cyber-text-muted mb-1">{title}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-cyber-text-primary group-hover:text-cyber-primary transition-colors">{value}</h3>
                        <span className="text-sm font-medium text-cyber-text-muted">{unit}</span>
                    </div>
                </div>
                <div className={`p-3 rounded-xl bg-${activeColor}/10 text-${activeColor} border border-${activeColor}/20 shadow-neon`}>
                    <Icon size={22} />
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                <div className="flex items-center gap-1.5">
                    <span className={`${getTrendColor()} flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-black/20`}>
                        {getTrendIcon()}
                        {trendValue}
                    </span>
                    <span className="text-[10px] uppercase tracking-wide text-cyber-text-muted font-medium">vs last month</span>
                </div>
                {subValue && (
                    <span className="text-[10px] font-bold text-cyber-text-secondary bg-white/5 px-2 py-1 rounded-md border border-white/10">
                        {subValue}
                    </span>
                )}
            </div>

            {chartData && (
                <div className="h-16 mt-6 -mx-4 -mb-4 relative overflow-hidden rounded-b-2xl opacity-90 group-hover:opacity-100 transition-all duration-300">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id={`color-${activeColor}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={colorMapHex[color] || '#0ea5e9'} stopOpacity={0.5} />
                                    <stop offset="95%" stopColor={colorMapHex[color] || '#0ea5e9'} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: `1px solid ${colorMapHex[color] || '#0ea5e9'}50`, borderRadius: '8px', fontSize: '11px', padding: '6px 10px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                                itemStyle={{ color: '#f1f5f9', fontWeight: 'bold' }}
                                cursor={{ stroke: `${colorMapHex[color] || '#0ea5e9'}`, strokeWidth: 1, strokeDasharray: '4 4' }}
                                labelStyle={{ display: 'none' }}
                                formatter={(value) => [`${value} ${unit}`, title]}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke={colorMapHex[color] || '#0ea5e9'} 
                                strokeWidth={3} 
                                fillOpacity={1}
                                fill={`url(#color-${activeColor})`}
                                activeDot={{ r: 5, fill: colorMapHex[color] || '#0ea5e9', stroke: '#020617', strokeWidth: 2, className: 'shadow-neon' }}
                                animationDuration={1500}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default MetricCard;
