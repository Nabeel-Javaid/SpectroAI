import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaRobot, FaMicrochip, FaClipboardCheck, FaChartLine, FaBrain, FaLock, FaGithub } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

// Define animation variants here at the top level
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 260,
            damping: 20
        }
    }
};

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    bgClass: string;
    borderClass: string;
    glowColor: string;
}

const features: Feature[] = [
    {
        id: 'ai',
        title: 'AI-Powered Assistance',
        description: 'Get instant, accurate answers to coding interview questions with state-of-the-art language models.',
        icon: <FaBrain className="w-6 h-6" />,
        bgClass: 'from-cyber-blue/20 to-transparent',
        borderClass: 'border-cyber-blue/40',
        glowColor: 'rgba(0, 174, 255, 0.3)'
    },
    {
        id: 'realtime',
        title: 'Real-time Coding',
        description: 'Write, test, and explain code in real-time with intelligent autocomplete and suggestions.',
        icon: <HiLightningBolt className="w-6 h-6" />,
        bgClass: 'from-cyber-purple/20 to-transparent',
        borderClass: 'border-cyber-purple/40',
        glowColor: 'rgba(130, 71, 255, 0.3)'
    },
    {
        id: 'models',
        title: 'Multiple AI Models',
        description: 'Choose between OpenAI, Gemini, or Anthropic models with your own API key.',
        icon: <FaRobot className="w-6 h-6" />,
        bgClass: 'from-cyber-pink/20 to-transparent',
        borderClass: 'border-cyber-pink/40',
        glowColor: 'rgba(255, 46, 144, 0.3)'
    },
    {
        id: 'solutions',
        title: 'Optimized Solutions',
        description: 'Get multiple approaches with time and space complexity analysis for algorithm questions.',
        icon: <HiSparkles className="w-6 h-6" />,
        bgClass: 'from-cyber-yellow/20 to-transparent',
        borderClass: 'border-cyber-yellow/40',
        glowColor: 'rgba(255, 200, 0, 0.3)'
    },
    {
        id: 'privacy',
        title: 'Privacy-First',
        description: 'Your code and conversations stay on your device. No data is ever stored on our servers.',
        icon: <FaLock className="w-6 h-6" />,
        bgClass: 'from-cyber-teal/20 to-transparent',
        borderClass: 'border-cyber-teal/40',
        glowColor: 'rgba(0, 220, 180, 0.3)'
    },
];

// React.memo for feature card component
const FeatureCard = React.memo(({
    feature,
    isActive,
    onMouseEnter,
    onMouseLeave
}: {
    feature: Feature,
    isActive: boolean,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}) => {
    return (
        <motion.div
            key={feature.id}
            className={`relative bg-gradient-to-br ${feature.bgClass} rounded-xl p-6 border ${feature.borderClass} backdrop-blur-sm transition-all duration-150`}
            variants={itemVariants}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            whileHover={{ y: -5 }}
            style={{
                boxShadow: isActive ? `0 0 15px ${feature.glowColor}` : 'none'
            }}
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>

            {/* Feature icon with hover animation */}
            <div
                className={`w-12 h-12 rounded-lg bg-primary-light/30 flex items-center justify-center text-white mb-4 border ${feature.borderClass}`}
            >
                {feature.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-text-muted">{feature.description}</p>
        </motion.div>
    );
});
FeatureCard.displayName = 'FeatureCard';

const FeaturesSection: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState<string | null>(null);
    const [isHoveringAny, setIsHoveringAny] = useState(false);

    // Optimized handlers with useCallback
    const handleMouseEnter = useCallback((id: string) => {
        setActiveFeature(id);
        setIsHoveringAny(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setActiveFeature(null);
        setIsHoveringAny(false);
    }, []);

    // Animation variants - simplified for performance
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    return (
        <section id="features" className="relative py-16 pb-12 overflow-hidden">
            {/* Futuristic background elements */}
            <div className="absolute inset-0 cyberpunk-grid opacity-5 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header with futuristic styling */}
                <div className="text-center mb-16 relative">
                    <motion.div
                        className="relative inline-block mb-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaMicrochip className="inline-block text-cyber-blue mr-2 text-xl" />
                        <span className="text-cyber-blue font-medium uppercase tracking-wider text-sm">Advanced Capabilities</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Cutting-Edge Features
                    </motion.h2>

                    <motion.p
                        className="text-text-muted max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Engineered with the latest technology to provide an unparalleled
                        experience for technical interview preparation.
                    </motion.p>
                </div>

                {/* Features grid with interactive elements */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            isActive={activeFeature === feature.id}
                            onMouseEnter={() => handleMouseEnter(feature.id)}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </motion.div>

                {/* Bottom highlight bar */}
                <motion.div
                    className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                {/* Call to action button with simplified animation */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.a
                        href="#download"
                        className="inline-block relative overflow-hidden group"
                        whileTap={{ scale: 0.97 }}
                    >
                        {/* <span className="relative z-10 px-8 py-3 block text-white font-medium rounded-md border border-white/10 bg-primary-light/20 backdrop-blur-sm">
                            Explore All Features
                            <span className="absolute right-3 top-1/2 -translate-y-1/2">→</span>
                        </span> */}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(FeaturesSection); 