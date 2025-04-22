import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const socialLinks = [
        { id: 'github', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/greeneu/interview-coder-withoupaywall-opensource', label: 'GitHub' },
        { id: 'twitter', icon: <FaTwitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
        { id: 'discord', icon: <FaDiscord className="w-5 h-5" />, url: 'https://discord.gg', label: 'Discord' },
        { id: 'linkedin', icon: <FaLinkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    ];

    const mainLinks = [
        { id: 'features', label: 'Features', url: '#features' },
        { id: 'download', label: 'Download', url: '#download' },
        { id: 'pricing', label: 'Pricing', url: '#pricing' },
        { id: 'faq', label: 'FAQ', url: '#faq' },
        { id: 'blog', label: 'Blog', url: '#blog' },
    ];

    const legalLinks = [
        { id: 'privacy', label: 'Privacy Policy', url: '#privacy' },
        { id: 'terms', label: 'Terms of Service', url: '#terms' },
        { id: 'license', label: 'License', url: '#license' },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Logo and about section */}
                    <div className="space-y-6">
                        <motion.div
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple"></div>
                                <div className="absolute inset-[2px] rounded-md bg-primary-dark flex items-center justify-center">
                                    <span className="text-xl font-bold text-white">IC</span>
                                </div>
                                <motion.div
                                    className="absolute -inset-1 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple opacity-30 blur-md"
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <span className="text-xl font-bold text-white">Interview Coder</span>
                        </motion.div>

                        <motion.p
                            className="text-text-muted text-sm max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Revolutionizing technical interviews with AI-powered assistance and real-time code solutions. Open source and free forever.
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            className="flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-primary-light/30 flex items-center justify-center text-text-muted hover:text-white relative group"
                                    onMouseEnter={() => setHoveredLink(social.id)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}

                                    {/* Hover glow effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        initial={{ boxShadow: "0 0 0 rgba(0, 174, 255, 0)" }}
                                        animate={{
                                            boxShadow: hoveredLink === social.id
                                                ? "0 0 15px rgba(0, 174, 255, 0.5)"
                                                : "0 0 0 rgba(0, 174, 255, 0)"
                                        }}
                                        transition={{ duration: 0.2 }}
                                    />

                                    {/* Tooltip */}
                                    <motion.span
                                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-text py-1 px-2 rounded-md bg-primary-light/70 whitespace-nowrap"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{
                                            opacity: hoveredLink === social.id ? 1 : 0,
                                            y: hoveredLink === social.id ? 0 : -10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {social.label}
                                    </motion.span>
                                </motion.a>
                            ))}
                        </motion.div>
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

                    {/* Legal links */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold text-white">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
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
                            &copy; {new Date().getFullYear()} Interview Coder. All rights reserved.
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