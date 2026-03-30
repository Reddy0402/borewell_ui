import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Activity } from 'lucide-react';

const StatusItem = ({ label, status, message }) => {
    const getStatusStyles = () => {
        switch (status) {
            case 'safe':
                return { icon: CheckCircle2, color: 'text-cyber-success', bg: 'bg-cyber-success/10', border: 'border-cyber-success/30' };
            case 'warning':
                return { icon: AlertTriangle, color: 'text-cyber-secondary', bg: 'bg-cyber-secondary/10', border: 'border-cyber-secondary/30' };
            case 'critical':
                return { icon: XCircle, color: 'text-cyber-danger', bg: 'bg-cyber-danger/10', border: 'border-cyber-danger/30' };
            default:
                return { icon: Activity, color: 'text-cyber-text-muted', bg: 'bg-white/5', border: 'border-white/10' };
        }
    };

    const { icon: Icon, color, bg, border } = getStatusStyles();

    return (
        <div className={`flex items-center justify-between p-4 rounded-xl border ${border} ${bg} transition-all duration-300 group hover:bg-white/5`}>
            <div className="flex items-center gap-3">
                <Icon className={`${color} drop-shadow-[0_0_5px_currentColor]`} size={18} />
                <span className="text-xs font-bold text-cyber-text-primary uppercase tracking-wider">{label}</span>
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-black/20 ${color}`}>{message}</span>
        </div>
    );
};

const SafetyStatus = () => {
    return (
        <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl p-6 border border-cyber-border h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                    <h3 className="text-lg font-black text-cyber-text-primary tracking-tight">Safety & Status</h3>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-cyber-success/20 text-cyber-success text-[10px] font-black uppercase tracking-widest border border-cyber-success/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    System Healthy
                </span>
            </div>

            <div className="space-y-3">
                <StatusItem
                    label="Dry Run Protection"
                    status="safe"
                    message="Active"
                />
                <StatusItem
                    label="Water Level Depth"
                    status="safe"
                    message="Normal Range"
                />
                <StatusItem
                    label="Pressure Stability"
                    status="warning"
                    message="Minor Fluctuations"
                />
                <StatusItem
                    label="Sensor Health"
                    status="safe"
                    message="All Online"
                />
            </div>
        </div>
    );
};

export default SafetyStatus;
