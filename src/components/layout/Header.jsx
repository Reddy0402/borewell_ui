import React from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Header = ({ toggleMobileMenu }) => {
    return (
        <header className="h-16 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button 
                    onClick={toggleMobileMenu}
                    className="p-2 lg:hidden text-cyber-text-secondary hover:text-cyber-primary hover:bg-cyber-primary/10 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>

                {/* Search Bar - Responsive width */}
                <div className="relative w-40 sm:w-64 md:w-80 lg:w-96 group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className="text-cyber-text-muted group-focus-within:text-cyber-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-9 pr-3 py-1.5 border border-cyber-border rounded-xl leading-5 bg-white/5 placeholder-cyber-text-muted text-cyber-text-primary focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-cyber-primary/20 focus:border-cyber-primary sm:text-sm transition-all duration-200"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-6">
                {/* System Status - Always visible on larger screens, condensed on mobile */}
                <div className="flex items-center gap-2.5 bg-cyber-success/10 px-3 py-2 rounded-full border border-cyber-success/30">
                    <div className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-cyber-success shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    </div>
                    <span className="hidden sm:inline text-xs font-bold text-cyber-success tracking-[0.05em] uppercase">System Online</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-cyber-text-secondary hover:text-cyber-primary hover:bg-cyber-primary/10 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-cyber-danger ring-2 ring-cyber-bg shadow-[0_0_8px_rgba(239,68,68,0.4)]"></span>
                </button>

                {/* Profile - Updated to match the second image exactly */}
                <div className="flex items-center gap-2 sm:gap-4 pl-4 sm:pl-8 border-l border-white/10 h-10">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-white tracking-tight">Admin User</p>
                        <p className="text-[10px] text-cyber-text-muted font-medium">Facility Manager</p>
                    </div>
                    <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:border-cyber-primary/40 hover:bg-white/10 transition-all duration-300">
                        <User size={20} className="text-cyber-text-secondary" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
