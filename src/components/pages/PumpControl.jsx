import React, { useState } from 'react';
import { Zap, Power, Clock, Settings, RotateCcw } from 'lucide-react';

const PumpControl = () => {
    const [isOn, setIsOn] = useState(true);
    const [mode, setMode] = useState('auto'); // auto or manual

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                        Pump Control Center
                    </h2>
                    <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] font-bold mt-1">Manage pump operations and automated schedules</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Control Panel */}
                <div className="bg-cyber-surface/40 backdrop-blur-md p-8 rounded-2xl border border-cyber-border flex flex-col items-center justify-center text-center shadow-neon-border">
                    <div className={`relative w-44 h-44 rounded-full flex items-center justify-center mb-8 transition-all duration-500 ${isOn ? 'bg-cyber-success/20 shadow-[0_0_60px_rgba(16,185,129,0.25)]' : 'bg-white/5'}`}>
                        <div className={`w-40 h-40 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isOn ? 'border-cyber-success bg-cyber-bg' : 'border-cyber-border bg-cyber-bg'}`}>
                            <Power size={64} className={`transition-all duration-500 ${isOn ? 'text-cyber-success drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]' : 'text-cyber-text-muted'}`} />
                        </div>
                        {isOn && (
                            <span className="absolute -bottom-2 bg-cyber-success text-cyber-bg text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full shadow-neon">RUNNING</span>
                        )}
                    </div>

                    <h3 className="text-xl font-black text-cyber-text-primary mb-2 uppercase tracking-tight">{isOn ? 'System Active' : 'System Offline'}</h3>
                    <p className="text-cyber-text-muted text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Current load: {isOn ? '8.4 Amps' : '0 Amps'}</p>

                    <div className="flex items-center gap-4 w-full">
                        <button
                            onClick={() => setIsOn(false)}
                            className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${!isOn ? 'bg-cyber-danger text-white shadow-neon' : 'bg-white/5 text-cyber-text-muted hover:bg-white/10'}`}
                        >
                            SHUTDOWN
                        </button>
                        <button
                            onClick={() => setIsOn(true)}
                            className={`flex-1 py-4 rounded-xl font-black text-xs tracking-widest transition-all ${isOn ? 'bg-cyber-success text-cyber-bg shadow-neon' : 'bg-cyber-success/10 text-cyber-success hover:bg-cyber-success/20'}`}
                        >
                            INITIATE
                        </button>
                    </div>
                </div>

                {/* Configuration Panel */}
                <div className="bg-cyber-surface/40 backdrop-blur-md p-6 rounded-2xl border border-cyber-border shadow-neon-border">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                            <h3 className="text-lg font-black text-cyber-text-primary tracking-tight">Operation Mode</h3>
                        </div>
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                            <button
                                onClick={() => setMode('auto')}
                                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${mode === 'auto' ? 'bg-cyber-primary text-cyber-bg shadow-neon' : 'text-cyber-text-muted hover:text-cyber-text-primary'}`}
                            >
                                Auto
                            </button>
                            <button
                                onClick={() => setMode('manual')}
                                className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${mode === 'manual' ? 'bg-cyber-primary text-cyber-bg shadow-neon' : 'text-cyber-text-muted hover:text-cyber-text-primary'}`}
                            >
                                Manual
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyber-primary/10 rounded-xl text-cyber-primary shadow-neon">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-cyber-text-primary text-[10px] uppercase tracking-wider">Morning Schedule</p>
                                    <p className="text-[10px] font-bold text-cyber-text-muted mt-1 uppercase tracking-widest">06:00 AM - 09:00 AM</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-cyber-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyber-text-muted after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyber-primary peer-checked:after:bg-cyber-bg"></div>
                            </label>
                        </div>

                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyber-primary/10 rounded-xl text-cyber-primary shadow-neon">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-cyber-text-primary text-[10px] uppercase tracking-wider">Evening Schedule</p>
                                    <p className="text-[10px] font-bold text-cyber-text-muted mt-1 uppercase tracking-widest">05:00 PM - 07:00 PM</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-cyber-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyber-text-muted after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyber-primary peer-checked:after:bg-cyber-bg"></div>
                            </label>
                        </div>

                        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-between group hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyber-secondary/10 rounded-xl text-cyber-secondary shadow-neon-secondary">
                                    <RotateCcw size={20} />
                                </div>
                                <div>
                                    <p className="font-black text-cyber-text-primary text-[10px] uppercase tracking-wider">Auto-Cutoff</p>
                                    <p className="text-[10px] font-bold text-cyber-text-muted mt-1 uppercase tracking-widest">Stop if tank full</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-cyber-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyber-text-muted after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyber-primary peer-checked:after:bg-cyber-bg"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpControl;
