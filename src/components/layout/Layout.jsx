import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="flex min-h-screen bg-cyber-bg">
            <Sidebar 
                isCollapsed={isCollapsed} 
                toggleSidebar={toggleSidebar} 
                isMobileOpen={isMobileMenuOpen}
                closeMobile={() => setIsMobileMenuOpen(false)}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-56'} ml-0 min-w-0`}>
                <Header toggleMobileMenu={toggleMobileMenu} />
                <main className="flex-1 p-3 overflow-y-auto overflow-x-hidden" style={{ zoom: 0.85 }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
