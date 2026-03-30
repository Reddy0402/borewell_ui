import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const MetricCard = ({ title, value: initialValue, unit, subValue, trend, trendValue, icon: Icon, color = "teal", live = false }) => {
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
        </div>
    );
};

export default MetricCard;
