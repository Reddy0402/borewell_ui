import React from 'react';
import { Lightbulb, TrendingDown, Target, ShieldCheck } from 'lucide-react';

const IntelligenceBar = () => {
    const insights = [
        { icon: TrendingDown, msg: 'Water usage 15% lower than average', color: 'text-cyber-primary' },
        { icon: Lightbulb, msg: 'Optimal pumping window: 06:00 - 08:30 AM', color: 'text-amber-400' },
        { icon: Target, msg: 'System efficiency target (90%+) maintained', color: 'text-cyber-success' },
        { icon: ShieldCheck, msg: 'Weekly safety verification: ALL CLEAR', color: 'text-cyber-secondary' },
    ];

    return (
        <div className="w-full bg-gradient-to-r from-cyber-surface/60 via-cyber-surface/40 to-cyber-surface/60 backdrop-blur-xl rounded-[1.5rem] border border-white/10 p-1.5 mt-8 shadow-2xl relative overflow-hidden group/bar hover:border-cyber-primary/30 transition-all duration-500">
            {/* Subtle light sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/bar:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
                {/* Header Section - More compact & refined */}
                <div className="flex items-center gap-3 shrink-0 px-6 py-3 border-r border-white/10 hidden lg:flex bg-white/5 rounded-l-[1.25rem] relative">
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyber-primary/20 rounded-full blur-[4px] animate-pulse" />
                    <div className="p-2.5 bg-amber-400/20 rounded-xl shadow-neon-sm relative">
                        <Lightbulb size={22} className="text-amber-400 animate-pulse" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                           <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Intelligence</h4>
                           <span className="flex h-1.5 w-1.5 rounded-full bg-cyber-danger shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>
                        </div>
                        <p className="text-[10px] font-bold text-cyber-text-muted uppercase tracking-[0.15em] leading-none mt-1 font-mono">Live Feed</p>
                    </div>
                </div>

                {/* Mobile Header (Hidden on LG) */}
                <div className="flex items-center justify-between lg:hidden w-full border-b border-white/5 pb-3 mb-3 px-4">
                    <div className="flex items-center gap-3">
                        <Lightbulb size={18} className="text-amber-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">System Insights</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                         <span className="h-1.5 w-1.5 rounded-full bg-cyber-danger animate-pulse"></span>
                         <span className="text-[8px] font-bold text-white/50 uppercase tracking-tighter">Live</span>
                    </div>
                </div>

                {/* Insights Row - Ticker Animation for Desktop */}
                <div className="flex-1 overflow-hidden pointer-events-none lg:pointer-events-auto">
                    <div className="flex items-center animate-[ticker_40s_linear_infinite] lg:animate-[ticker_60s_linear_infinite] whitespace-nowrap lg:hover:[animation-play-state:paused] transition-all duration-300">
                        {/* Double the insights for infinite loop */}
                        {[...insights, ...insights].map((insight, i) => (
                            <div key={i} className="flex items-center gap-6 px-12 group/insight hover:bg-white/5 py-3 transition-all duration-300 border-r border-white/5">
                                <div className={`p-2.5 rounded-xl bg-white/5 ${insight.color} shadow-neon-sm group-hover:bg-white/10 transition-colors`}>
                                    <insight.icon size={18} className="shrink-0" />
                                </div>
                                <span className="text-[11px] font-semibold text-cyber-text-primary group-hover/insight:text-white transition-colors antialiased tracking-wide font-mono">
                                    {insight.msg}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntelligenceBar;
