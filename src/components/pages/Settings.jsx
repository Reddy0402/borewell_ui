import React from 'react';
import { Save, User, Bell, Shield, Wallet } from 'lucide-react';

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                    <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                    System Settings
                </h2>
                <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] font-bold mt-1">Configure application preferences and system thresholds</p>
            </div>

            <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl border border-cyber-border shadow-neon-border overflow-hidden">
                <div className="border-b border-white/5 p-6 flex items-center gap-3 bg-white/5">
                    <Shield className="text-cyber-primary shadow-neon" size={24} />
                    <h3 className="text-lg font-black text-cyber-text-primary uppercase tracking-tight">Borewell Configuration</h3>
                </div>
                <div className="p-6 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-cyber-text-muted mb-3">Total Borewell Depth</label>
                            <div className="relative">
                                <input type="number" defaultValue="180" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyber-primary focus:outline-none text-cyber-text-primary font-black transition-all" />
                                <span className="absolute right-4 top-4 text-[10px] font-black uppercase tracking-widest text-cyber-text-muted">meters</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-cyber-text-muted mb-3">Pump Capacity</label>
                            <div className="relative">
                                <input type="text" defaultValue="5 HP" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyber-primary focus:outline-none text-cyber-text-primary font-black transition-all" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-cyber-text-muted mb-6">Safety Thresholds</label>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-cyber-text-primary text-[10px] font-bold uppercase tracking-widest">Dry Run Cutoff Level</span>
                                <span className="font-black text-cyber-primary tracking-tighter text-lg">145<span className="text-[10px] ml-0.5">m</span></span>
                            </div>
                            <input type="range" className="w-full accent-cyber-primary bg-white/10 rounded-full h-1.5 appearance-none cursor-pointer" />

                            <div className="flex items-center justify-between pt-4">
                                <span className="text-cyber-text-primary text-[10px] font-bold uppercase tracking-widest">Max Pressure Limit</span>
                                <span className="font-black text-cyber-secondary tracking-tighter text-lg">550<span className="text-[10px] ml-0.5">kPa</span></span>
                            </div>
                            <input type="range" className="w-full accent-cyber-secondary bg-white/10 rounded-full h-1.5 appearance-none cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="px-6 py-5 bg-white/5 text-right border-t border-white/5">
                    <button className="px-8 py-3 bg-cyber-primary text-cyber-bg rounded-xl font-black text-[10px] uppercase tracking-widest shadow-neon hover:opacity-90 transition-all">Synchronize Settings</button>
                </div>
            </div>

            <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl border border-cyber-border shadow-neon-border overflow-hidden">
                <div className="border-b border-white/5 p-6 flex items-center gap-3 bg-white/5">
                    <Bell className="text-cyber-secondary shadow-neon-secondary" size={24} />
                    <h3 className="text-lg font-black text-cyber-text-primary uppercase tracking-tight">Terminal Notifications</h3>
                </div>
                <div className="p-6 space-y-4">
                    {[
                        'Relay Status Payload via MQTT',
                        'SMS Decryption for Pump Control',
                        'Daily Telemetry Aggregates'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group">
                            <span className="text-cyber-text-muted font-bold text-[10px] uppercase tracking-widest group-hover:text-cyber-text-primary transition-colors">{item}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-cyber-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cyber-text-muted after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyber-primary peer-checked:after:bg-cyber-bg"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
