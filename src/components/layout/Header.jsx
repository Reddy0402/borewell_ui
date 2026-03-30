import React from 'react';
import { Search, Bell, User, Wifi } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border px-8 flex items-center justify-between sticky top-0 z-40">
            {/* Search Bar */}
            <div className="relative w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-cyber-text-muted" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-cyber-border rounded-xl leading-5 bg-white/5 placeholder-cyber-text-muted text-cyber-text-primary focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-cyber-primary/20 focus:border-cyber-primary sm:text-sm transition-all duration-200"
                    placeholder="Search borewell ID, location, or status..."
                />
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                {/* System Status */}
                <div className="flex items-center gap-2 bg-cyber-success/10 px-3 py-1.5 rounded-full border border-cyber-success/30">
                    <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-success"></span>
                    </div>
                    <span className="text-xs font-semibold text-cyber-success tracking-wide uppercase">System Online</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-cyber-text-secondary hover:text-cyber-primary hover:bg-cyber-primary/10 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-cyber-danger ring-2 ring-cyber-bg"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3 pl-6 border-l border-cyber-border">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-semibold text-cyber-text-primary">Admin User</p>
                        <p className="text-xs text-cyber-text-muted">Facility Manager</p>
                    </div>
                    <button className="p-1 rounded-full bg-white/10 border border-cyber-border">
                        <User size={24} className="text-cyber-text-secondary" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
