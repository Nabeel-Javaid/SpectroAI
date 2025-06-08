import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { FaDownload, FaBars, FaTimes, FaStar } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Update active section based on scroll position
            const sections = ['features', 'how-it-works', 'comparison'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActivePage(section);
                        break;
                    } else if (window.scrollY < 100) {
                        setActivePage('home');
                    }
                }
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-primary-dark/80 backdrop-blur-md py-3 shadow-lg border-b border-cyber-blue/20'
                    : 'bg-transparent py-5'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-1 relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="font-bold text-xl">
                            {"SpectroAI".split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={index >= 7 ? "" : "text-white"}
                                    style={index >= 7 ? { color: "#9d4edd" } : {}}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>

                        {/* Decorative circuit line underneath logo - removed animation */}
                        <div
                            className="absolute -bottom-1 left-0 h-[2px] bg-cyber-blue/50 w-full"
                        />

                        {/* Version number */}
                        <div
                            className="absolute -top-1 -right-6 text-[10px] text-cyber-purple opacity-70"
                        >
                        </div>
                    </motion.div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#features" isActive={activePage === 'features'}>Features</NavLink>
                        <NavLink href="#how-it-works" isActive={activePage === 'how-it-works'}>How It Works</NavLink>
                        <NavLink href="#comparison" isActive={activePage === 'comparison'}>Comparison</NavLink>
                    </div>

                    {/* Action Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Download button removed */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            className="text-cyber-blue text-xl p-2 rounded-full border border-cyber-blue/50 hover:bg-cyber-blue/10 transition-colors"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 bg-primary-dark/95 z-40 pt-24 px-4 backdrop-blur-md md:hidden cyberpunk-grid"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-center space-y-8 py-8">
                            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
                            <MobileNavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileNavLink>
                            <MobileNavLink href="#comparison" onClick={() => setMobileMenuOpen(false)}>Comparison</MobileNavLink>

                            <div className="pt-6 flex flex-col gap-4 w-full max-w-xs">
                                {/* Download button removed */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive = false }) => {
    return (
        <motion.a
            href={href}
            className={`relative group ${isActive ? 'text-white' : 'text-text-muted hover:text-white'} transition-colors py-2 px-1`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}

            {/* Underline effect */}
            <motion.div
                className={`absolute -bottom-1 left-0 h-[2px] bg-cyber-blue ${isActive ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-300`}
                layoutId="navbar-underline"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
        </motion.a>
    );
};

interface MobileNavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
    return (
        <motion.a
            href={href}
            className="text-white text-2xl font-bold relative"
            onClick={onClick}
            whileHover={{
                scale: 1.1,
                color: 'rgb(0, 255, 255)',
                textShadow: '0 0 8px rgba(0, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            <motion.div
                className="h-0.5 w-0 bg-cyber-blue absolute bottom-0 left-0"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
            />
        </motion.a>
    );
};

export default Navbar; 