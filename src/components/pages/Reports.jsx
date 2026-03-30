import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const Reports = () => {
    const reports = [
        { id: 1, title: 'October 2023 Summary', type: 'Monthly Report', size: '2.4 MB', date: 'Oct 31, 2023' },
        { id: 2, title: 'System Diagnostics Log', type: 'Technical Log', size: '1.1 MB', date: 'Oct 28, 2023' },
        { id: 3, title: 'Water Usage Q3', type: 'Quarterly Analysis', size: '4.8 MB', date: 'Sep 30, 2023' },
        { id: 4, title: 'Pump Efficiency Report', type: 'Performance', size: '850 KB', date: 'Oct 15, 2023' },
        { id: 5, title: 'September 2023 Summary', type: 'Monthly Report', size: '2.2 MB', date: 'Sep 30, 2023' },
        { id: 6, title: 'Safety Alerts History', type: 'Audit Trail', size: '560 KB', date: 'Oct 01, 2023' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                        System Reports
                    </h2>
                    <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] font-bold mt-1">Access and download system logs and summaries</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-cyber-primary text-cyber-bg rounded-xl hover:opacity-90 font-black text-[10px] uppercase tracking-widest shadow-neon transition-all">
                    <Calendar size={16} />
                    Generate Archive
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                    <div key={report.id} className="bg-cyber-surface/40 backdrop-blur-md p-6 rounded-2xl border border-cyber-border hover:border-cyber-primary/40 transition-all duration-300 group shadow-neon-border">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-4 bg-cyber-primary/10 text-cyber-primary rounded-2xl border border-cyber-primary/20 shadow-neon group-hover:scale-110 transition-transform">
                                <FileText size={32} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-cyber-primary bg-cyber-primary/10 px-3 py-1 rounded-lg border border-cyber-primary/20">{report.type}</span>
                        </div>
                        <h3 className="font-black text-cyber-text-primary mb-2 uppercase tracking-tight group-hover:text-cyber-primary transition-colors">{report.title}</h3>
                        <div className="flex items-center justify-between mt-4 text-[10px] font-bold text-cyber-text-muted uppercase tracking-widest">
                            <span>{report.date}</span>
                            <span>{report.size}</span>
                        </div>
                        <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-cyber-text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:bg-cyber-primary hover:text-cyber-bg hover:border-cyber-primary transition-all duration-300 group/btn">
                            <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
