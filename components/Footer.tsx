import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const mainLinks = [
        { id: 'features', label: 'Features', url: '#features' },
        { id: 'download', label: 'Download', url: '#download' },
        { id: 'pricing', label: 'Pricing', url: '#pricing' },
        { id: 'faq', label: 'FAQ', url: '#faq' },
        { id: 'blog', label: 'Blog', url: '#blog' },
    ];

    return (
        <footer className="relative bg-primary-dark border-t border-white/5 overflow-hidden">
            {/* Cyber grid background */}
            <div className="absolute inset-0 cyberpunk-grid opacity-5"></div>

            {/* Animated circuit lines */}
            <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M0,50 C300,150 700,0 1200,100 C1700,200 2000,50 2400,150"
                    stroke="url(#circuit-gradient-footer)"
                    strokeWidth="1"
                    strokeDasharray="5,15"
                    fill="none"
                    initial={{ strokeDashoffset: 1000 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                    <linearGradient id="circuit-gradient-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0, 174, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(0, 174, 255, 0.2)" />
                        <stop offset="100%" stopColor="rgba(0, 174, 255, 0)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Top glowing line */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Main footer content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Logo and about section */}
                    <div className="space-y-6">
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-xl font-bold text-white">
                                {"SpectroAI".split("").map((char, index) => (
                                    <span
                                        key={index}
                                        className={index >= 7 ? "text-cyber-purple" : ""}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </motion.div>

                        <motion.p
                            className="text-text-muted text-sm max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Revolutionizing technical interviews with AI-powered assistance and real-time code solutions. Open source and free forever.
                        </motion.p>
                    </div>

                    {/* Main links */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {mainLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.url}
                                        className="text-text-muted hover:text-cyber-blue relative group flex items-center"
                                    >
                                        <motion.span
                                            className="w-0 h-[1px] bg-cyber-blue absolute -left-5 group-hover:w-4 transition-all duration-300"
                                        />
                                        {link.label}
                                        <motion.span
                                            className="w-0 h-[1px] bg-cyber-blue absolute -bottom-1 left-0 group-hover:w-full transition-all duration-300"
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom copyright */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            className="text-text-muted text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            &copy; {new Date().getFullYear()}
                            {"SpectroAI".split("").map((char, index) => (
                                <span
                                    key={index}
                                    className={index >= 7 ? "text-cyber-purple" : ""}
                                >
                                    {char}
                                </span>
                            ))}
                            . All rights reserved.
                        </motion.p>

                        <motion.div
                            className="flex items-center space-x-2 text-text-muted text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <span className="code-font text-cyber-blue">v2.3.7</span>
                            <span>&bull;</span>
                            <span>Made with ❤️ by devs for devs</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;