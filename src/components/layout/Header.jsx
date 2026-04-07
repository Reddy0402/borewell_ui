import React from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Header = ({ toggleMobileMenu }) => {
    return (
        <header className="sticky top-0 z-30 bg-cyber-bg/80 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 h-14 flex items-center justify-between transition-all duration-300">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle */}
                <button 
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 -ml-2 text-cyber-text-muted hover:text-cyber-primary transition-colors"
                >
                    <Menu size={20} />
                </button>

                {/* Search Bar */}
                <div className="relative group hidden sm:block w-64 md:w-80">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Search size={16} className="text-cyber-text-muted group-focus-within:text-cyber-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-2 border border-cyber-border rounded-xl leading-5 bg-white/5 placeholder-cyber-text-muted text-cyber-text-primary focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-cyber-primary/20 focus:border-cyber-primary text-sm transition-all duration-200"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2 sm:gap-6">
                {/* System Status */}
                <div className="flex items-center gap-2.5 bg-cyber-success/15 px-3.5 py-1.5 rounded-full border border-cyber-success/40 transition-all duration-300">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-success shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                    </div>
                    <span className="hidden sm:inline text-[10px] font-bold font-mono text-cyber-success tracking-[0.15em] uppercase">System Online</span>
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-cyber-text-secondary hover:text-cyber-primary hover:bg-cyber-primary/10 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-cyber-danger ring-2 ring-cyber-bg shadow-[0_0_8px_rgba(239,68,68,0.4)]"></span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6 border-l border-white/10 h-8">
                    <div className="text-right hidden sm:block">
                        <p className="text-[11px] font-bold text-cyber-text-primary tracking-tight">Admin User</p>
                        <p className="text-[8px] text-cyber-text-muted font-medium tracking-wide uppercase">Facility Manager</p>
                    </div>
                    <button className="flex items-center justify-center h-8 w-8 rounded-full bg-white/5 border border-white/10 hover:border-cyber-primary/40 hover:bg-white/10 transition-all duration-300 shadow-neon-sm">
                        <User size={16} className="text-cyber-text-secondary" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
