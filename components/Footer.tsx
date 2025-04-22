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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

                    {/* Newsletter */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                        <p className="text-text-muted text-sm">Subscribe to our newsletter for updates.</p>

                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-primary-light/20 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-text-muted/70 outline-none focus:border-cyber-blue/50 transition-colors"
                            />
                            <motion.button
                                type="submit"
                                className="absolute right-1.5 top-1.5 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-md py-1.5 px-3 text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Subscribe
                            </motion.button>

                            {/* Focused input glow effect */}
                            <motion.div
                                className="absolute -inset-0.5 rounded-lg bg-cyber-blue opacity-0 focus-within:opacity-20 blur-sm pointer-events-none transition-opacity"
                            />
                        </form>

                        {/* Compliance text */}
                        <p className="text-text-muted/80 text-xs">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom credits */}
                <motion.div
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className="text-text-muted/70 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Interview Coder. All rights reserved.
                    </p>

                    <div className="relative">
                        <motion.p
                            className="text-xs text-text-muted/70 flex items-center"
                            whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
                        >
                            <span className="flex items-center">
                                Built with
                                <motion.svg
                                    className="w-4 h-4 mx-1 text-cyber-pink"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </motion.svg>
                                in
                                <motion.span
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink ml-1 font-medium"
                                    animate={{
                                        backgroundPosition: ["0% center", "100% center", "0% center"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    style={{
                                        backgroundSize: "200% auto",
                                    }}
                                >
                                    React & Next.js
                                </motion.span>
                            </span>
                        </motion.p>
                        {/* Underline animation */}
                        <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent"
                            animate={{
                                opacity: [0.2, 0.5, 0.2],
                                backgroundPosition: ["0% center", "100% center", "0% center"],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                backgroundSize: "200% auto",
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;