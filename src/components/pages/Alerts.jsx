import React from 'react';
import { AlertTriangle, Info, CheckCircle, X, Filter } from 'lucide-react';

const Alerts = () => {
    const alerts = [
        { id: 1, type: 'critical', title: 'Dry Run Detected', message: 'Pump stopped automatically to prevent damage. Water level critically low.', time: '2 hours ago', icon: AlertTriangle },
        { id: 2, type: 'warning', title: 'Pressure Drop', message: 'Unusual pressure drop detected in main pipe.', time: '5 hours ago', icon: Info },
        { id: 3, type: 'success', title: 'System Auto-Recovery', message: 'System recovered from power fluctuation. All sensors online.', time: '1 day ago', icon: CheckCircle },
        { id: 4, type: 'info', title: 'Scheduled Maintenance', message: 'Monthly pump maintenance due in 3 days.', time: '2 days ago', icon: Info },
        { id: 5, type: 'warning', title: 'High Power Usage', message: 'Pump power consumption exceeding average by 15%.', time: '3 days ago', icon: Info },
    ];

    const getStyles = (type) => {
        switch (type) {
            case 'critical': return { bg: 'bg-cyber-danger/10', border: 'border-cyber-danger/30', text: 'text-cyber-danger', iconColor: 'text-cyber-danger' };
            case 'warning': return { bg: 'bg-cyber-secondary/10', border: 'border-cyber-secondary/30', text: 'text-cyber-secondary', iconColor: 'text-cyber-secondary' };
            case 'success': return { bg: 'bg-cyber-success/10', border: 'border-cyber-success/30', text: 'text-cyber-success', iconColor: 'text-cyber-success' };
            default: return { bg: 'bg-cyber-primary/10', border: 'border-cyber-primary/30', text: 'text-cyber-primary', iconColor: 'text-cyber-primary' };
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                        System Alerts
                    </h2>
                    <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] font-bold mt-1">Notifications, warnings, and critical events</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-cyber-text-muted hover:text-cyber-primary transition-all">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {alerts.map((alert) => {
                    const styles = getStyles(alert.type);
                    const Icon = alert.icon;
                    return (
                        <div key={alert.id} className={`p-5 rounded-2xl border ${styles.border} ${styles.bg} backdrop-blur-md flex items-start gap-4 transition-all duration-300 group hover:bg-white/5`}>
                            <div className={`mt-1 p-3 bg-black/20 rounded-xl ${styles.iconColor} shadow-neon border border-white/10 group-hover:scale-110 transition-transform`}>
                                <Icon size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className={`font-black uppercase tracking-tight ${styles.text}`}>{alert.title}</h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyber-text-muted">{alert.time}</span>
                                </div>
                                <p className="text-xs font-medium text-cyber-text-primary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{alert.message}</p>
                            </div>
                            <button className="text-cyber-text-muted hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center pt-6">
                <button className="text-[10px] font-black uppercase tracking-widest text-cyber-primary hover:text-white transition-all underline underline-offset-8 decoration-cyber-primary/30 hover:decoration-cyber-primary">View Older Archive</button>
            </div>
        </div>
    );
};

export default Alerts;
