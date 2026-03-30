import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { Calendar, Download } from 'lucide-react';

const Analytics = () => {
    const data = [
        { month: 'Jan', lastYear: 45, thisYear: 42 },
        { month: 'Feb', lastYear: 50, thisYear: 48 },
        { month: 'Mar', lastYear: 55, thisYear: 52 },
        { month: 'Apr', lastYear: 60, thisYear: 58 },
        { month: 'May', lastYear: 65, thisYear: 62 },
        { month: 'Jun', lastYear: 70, thisYear: 68 },
        { month: 'Jul', lastYear: 68, thisYear: 66 },
        { month: 'Aug', lastYear: 65, thisYear: 63 },
        { month: 'Sep', lastYear: 60, thisYear: 58 },
        { month: 'Oct', lastYear: 55, thisYear: 54 },
        { month: 'Nov', lastYear: 50, thisYear: 48 },
        { month: 'Dec', lastYear: 45, thisYear: 44 },
    ];

    const sensorData = [
        { id: 1, date: '2023-10-24', level: '42.5m', avgPressure: '340 kPa', pumpRuntime: '4h 12m', status: 'Normal' },
        { id: 2, date: '2023-10-23', level: '42.8m', avgPressure: '338 kPa', pumpRuntime: '5h 05m', status: 'Normal' },
        { id: 3, date: '2023-10-22', level: '43.1m', avgPressure: '342 kPa', pumpRuntime: '3h 45m', status: 'Optimal' },
        { id: 4, date: '2023-10-21', level: '43.0m', avgPressure: '341 kPa', pumpRuntime: '4h 30m', status: 'Normal' },
        { id: 5, date: '2023-10-20', level: '42.9m', avgPressure: '339 kPa', pumpRuntime: '4h 00m', status: 'Normal' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-cyber-text-primary flex items-center gap-2">
                        <span className="w-1 h-6 bg-cyber-primary rounded-full shadow-neon" />
                        Sensor Analytics
                    </h2>
                    <p className="text-cyber-text-muted uppercase tracking-widest text-[10px] font-bold mt-1">Historical performance and comparative analysis</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-cyber-text-primary hover:bg-white/10 text-[10px] font-black uppercase tracking-widest transition-all">
                        <Calendar size={16} className="text-cyber-primary" />
                        Last 12 Months
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-cyber-primary text-cyber-bg rounded-xl hover:opacity-90 text-[10px] font-black uppercase tracking-widest shadow-neon transition-all">
                        <Download size={16} />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Comparative Chart */}
            <div className="bg-cyber-surface/40 backdrop-blur-md p-8 rounded-2xl border border-cyber-border shadow-neon-border">
                <div className="flex items-center gap-2 mb-8">
                    <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                    <h3 className="text-lg font-black text-cyber-text-primary tracking-tight">Yearly Water Level Comparison</h3>
                </div>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis 
                                dataKey="month" 
                                stroke="rgba(255,255,255,0.2)" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                dy={10} 
                                tick={{ fill: '#64748b', fontWeight: 600 }}
                            />
                            <YAxis 
                                stroke="rgba(255,255,255,0.2)" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                tick={{ fill: '#64748b', fontWeight: 600 }}
                            />
                            <Tooltip
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                contentStyle={{ 
                                    backgroundColor: 'rgba(2, 6, 23, 0.95)', 
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '12px', 
                                    border: '1px solid rgba(14, 165, 233, 0.3)',
                                    boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)'
                                }}
                                itemStyle={{ fontWeight: 'bold', fontSize: '12px' }}
                                labelStyle={{ color: '#f1f5f9', fontWeight: 'black', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                            />
                            <Legend 
                                iconType="circle" 
                                wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }} 
                            />
                            <Bar dataKey="thisYear" name="2023 (Current)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="lastYear" name="2022 (Previous)" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Detailed Data Table */}
            <div className="bg-cyber-surface/40 backdrop-blur-md rounded-2xl border border-cyber-border shadow-neon-border overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center gap-2">
                    <span className="w-1 h-5 bg-cyber-primary rounded-full shadow-neon" />
                    <h3 className="text-lg font-black text-cyber-text-primary tracking-tight">Recent Sensor Readings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-cyber-text-primary">
                        <thead className="bg-white/5 text-cyber-text-muted font-black uppercase tracking-[0.2em] text-[10px]">
                            <tr>
                                <th className="px-6 py-5">Date</th>
                                <th className="px-6 py-5">Avg Level</th>
                                <th className="px-6 py-5">Pressure</th>
                                <th className="px-6 py-5">Pump Runtime</th>
                                <th className="px-6 py-5">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {sensorData.map((row) => (
                                <tr key={row.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-bold text-cyber-text-primary group-hover:text-cyber-primary transition-colors">{row.date}</td>
                                    <td className="px-6 py-4 text-cyber-text-muted font-medium">{row.level}</td>
                                    <td className="px-6 py-4 text-cyber-text-muted font-medium">{row.avgPressure}</td>
                                    <td className="px-6 py-4 text-cyber-text-muted font-medium">{row.pumpRuntime}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                            row.status === 'Optimal' ? 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30' : 'bg-cyber-success/20 text-cyber-success border border-cyber-success/30'
                                        }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
