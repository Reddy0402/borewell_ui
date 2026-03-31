import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Activity,
    BarChart2,
    AlertTriangle,
    Zap,
    FileText,
    Settings,
    LogOut
} from 'lucide-react';

const Sidebar = ({ isCollapsed, toggleSidebar, isMobileOpen, closeMobile }) => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Activity, label: 'Live Monitoring', path: '/live' },
        { icon: BarChart2, label: 'Sensor Analytics', path: '/analytics' },
        { icon: AlertTriangle, label: 'Alerts & Safety', path: '/alerts' },
        { icon: Zap, label: 'Pump Control', path: '/pump' },
        { icon: FileText, label: 'Reports', path: '/reports' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isMobileOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300"
                    onClick={closeMobile}
                />
            )}

            <div
                className={`
                    h-screen bg-slate-950 text-white flex flex-col fixed left-0 top-0 border-r border-cyber-border z-[70] transition-all duration-300
                    ${isCollapsed ? 'w-20' : 'w-64'}
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                {/* Logo Area */}
                <div className={`p-6 border-b border-cyber-border flex flex-col items-center select-none ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="flex items-center justify-center w-full">
                        {!isCollapsed ? (
                            <div className="flex items-center font-extralight tracking-[0.15em] text-xl">
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>PL</span>
                                <div className="mx-0.5 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[14px] border-b-[#2dd4bf] drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]"></div>
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)' }}>NETINSIGHTS</span>
                            </div>
                        ) : (
                            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-[#2dd4bf] drop-shadow-[0_0_5px_rgba(45,212,191,0.5)]"></div>
                        )}
                    </div>
                    {!isCollapsed && (
                        <div className="mt-2 text-center opacity-80">
                            <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-white/60">
                                Borewell Guard
                            </p>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1 overflow-x-hidden">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeMobile}
                            title={isCollapsed ? item.label : ''}
                            className={({ isActive }) => `
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative
                ${isActive
                                    ? 'bg-cyber-primary/10 text-cyber-primary border-r-2 border-cyber-primary'
                                    : 'text-cyber-text-secondary hover:bg-white/5 hover:text-white'
                                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
                        >
                            {({ isActive }) => (
                                <>
                                    <span className={`${isActive ? 'text-cyber-primary drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]' : 'text-cyber-text-muted group-hover:text-cyber-text-primary'}`}>
                                        <item.icon size={20} />
                                    </span>
                                    {!isCollapsed && (
                                        <span className="font-medium text-sm whitespace-nowrap transition-opacity duration-200">{item.label}</span>
                                    )}
                                    {isActive && (
                                        <div className="absolute left-0 w-1 h-6 bg-cyber-primary rounded-r-full shadow-neon" />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Collapse Toggle Button - Desktop Only */}
                <button
                    onClick={toggleSidebar}
                    className="hidden lg:flex absolute -right-3 top-20 bg-cyber-bg text-cyber-primary p-1 rounded-full shadow-neon-border border border-cyber-primary/30 hover:bg-cyber-primary/10 transition-colors z-50 items-center justify-center w-6 h-6"
                >
                    {isCollapsed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    )}
                </button>

                {/* Logout */}
                <div className="p-4 border-t border-cyber-border">
                    <button className={`w-full flex items-center gap-3 px-4 py-3 text-cyber-text-muted hover:bg-red-500/10 hover:text-red-400 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <LogOut size={20} />
                        {!isCollapsed && <span className="font-medium text-sm whitespace-nowrap">Logout</span>}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
