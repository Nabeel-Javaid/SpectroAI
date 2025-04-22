import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { HiBadgeCheck, HiOutlineCheck, HiOutlineClock, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineSparkles, HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';

interface PricingFeature {
    included: boolean;
    text: string;
}

interface PricingTier {
    id: string;
    name: string;
    description: string;
    price: number | 'Free';
    period: string;
    features: PricingFeature[];
    cta: string;
    popularChoice?: boolean;
    accentColor: string;
    bgGradient: string;
    icon: React.ReactNode;
    limit?: string;
}

const PricingSection: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
    const [hoveredTier, setHoveredTier] = useState<string | null>(null);
    const [expandedFeaturesTier, setExpandedFeaturesTier] = useState<string | null>(null);

    const toggleBillingPeriod = () => {
        setBillingPeriod(prev => prev === 'monthly' ? 'annual' : 'monthly');
    };

    const toggleFeatures = (tierId: string) => {
        setExpandedFeaturesTier(prev => prev === tierId ? null : tierId);
    };

    const pricingTiers: PricingTier[] = [
        {
            id: 'free',
            name: 'Free',
            description: 'Perfect for getting started and practicing your interview skills',
            price: 'Free',
            period: 'Forever',
            features: [
                { included: true, text: 'Basic code evaluation' },
                { included: true, text: '10 interview questions per month' },
                { included: true, text: 'Basic algorithm assistance' },
                { included: false, text: 'Premium algorithm techniques' },
                { included: false, text: 'System design practice' },
                { included: false, text: 'Mock interviews' },
                { included: false, text: 'Personalized feedback' },
                { included: false, text: 'Company-specific preparation' }
            ],
            cta: 'Get Started',
            accentColor: 'from-cyber-blue to-cyber-teal',
            bgGradient: 'from-cyber-blue/5 to-cyber-teal/5',
            icon: <HiOutlineClock className="w-6 h-6" />
        },
        {
            id: 'pro',
            name: 'Pro',
            description: 'Advanced features to boost your interview preparation',
            price: billingPeriod === 'monthly' ? 19 : 190,
            period: billingPeriod === 'monthly' ? 'per month' : 'per year',
            features: [
                { included: true, text: 'Everything in Free' },
                { included: true, text: 'Unlimited questions' },
                { included: true, text: 'Advanced code evaluation' },
                { included: true, text: 'Time complexity analysis' },
                { included: true, text: 'Premium algorithm techniques' },
                { included: true, text: 'Basic system design practice' },
                { included: false, text: 'Advanced system design' },
                { included: false, text: 'Company-specific preparation' }
            ],
            cta: 'Upgrade to Pro',
            popularChoice: true,
            accentColor: 'from-cyber-purple to-cyber-pink',
            bgGradient: 'from-cyber-purple/5 to-cyber-pink/5',
            icon: <HiOutlineLightningBolt className="w-6 h-6" />,
            limit: 'Save $38 with annual billing'
        },
        {
            id: 'ultimate',
            name: 'Ultimate',
            description: 'The complete package for serious interview preparation',
            price: billingPeriod === 'monthly' ? 39 : 390,
            period: billingPeriod === 'monthly' ? 'per month' : 'per year',
            features: [
                { included: true, text: 'Everything in Pro' },
                { included: true, text: 'Advanced system design' },
                { included: true, text: 'Mock interviews with AI' },
                { included: true, text: 'Personalized feedback' },
                { included: true, text: 'Company-specific preparation' },
                { included: true, text: 'Interview strategy coaching' },
                { included: true, text: 'Resume optimization' },
                { included: true, text: 'Priority support' }
            ],
            cta: 'Get Ultimate',
            accentColor: 'from-cyber-gold to-cyber-orange',
            bgGradient: 'from-cyber-gold/5 to-cyber-orange/5',
            icon: <HiOutlineSparkles className="w-6 h-6" />,
            limit: 'Save $78 with annual billing'
        }
    ];

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        hover: {
            y: -10,
            transition: { type: "spring", stiffness: 500, damping: 25 },
        },
    };

    const featureVariants: Variants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    const pulseVariants: Variants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section
            id="pricing"
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Background elements */}
            <div className="absolute inset-0 cyberpunk-grid opacity-5 z-0"></div>

            {/* Circuit lines */}
            <motion.div
                className="absolute left-0 top-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute right-0 bottom-1/3 h-[1px] bg-gradient-to-l from-transparent via-cyber-purple/20 to-transparent"
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div className="text-center mb-16" variants={cardVariants}>
                    <motion.div
                        className="inline-flex items-center bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="w-2 h-2 rounded-full bg-cyber-blue mr-2"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-sm font-medium">Choose Your Plan</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Pricing Plans
                    </h2>

                    <p className="text-text-muted max-w-2xl mx-auto mb-6">
                        Choose the perfect plan to elevate your interview preparation and land your dream job
                    </p>

                    <motion.div
                        className="h-0.5 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-10"
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    />

                    {/* Billing toggle */}
                    <div className="flex justify-center items-center mb-10">
                        <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white font-medium' : 'text-text-muted'}`}>
                            Monthly
                        </span>

                        <motion.button
                            className="relative mx-4 w-14 h-7 bg-primary-light/20 rounded-full p-1 cursor-pointer"
                            onClick={toggleBillingPeriod}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Track and glow */}
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-full"></div>
                                <motion.div
                                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                                    animate={{
                                        left: billingPeriod === 'monthly' ? '0%' : '50%',
                                    }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            </div>

                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                animate={{
                                    boxShadow: [
                                        '0 0 0px rgba(0, 174, 255, 0)',
                                        '0 0 5px rgba(0, 174, 255, 0.5)',
                                        '0 0 0px rgba(0, 174, 255, 0)'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.button>

                        <span className={`text-sm ${billingPeriod === 'annual' ? 'text-white font-medium' : 'text-text-muted'}`}>
                            Annual
                        </span>

                        <motion.div
                            className="ml-2 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-cyber-green/20 to-cyber-teal/20 text-cyber-green border border-cyber-green/30"
                            animate={billingPeriod === 'annual' ? 'pulse' : 'initial'}
                            variants={pulseVariants}
                        >
                            Save 20%
                        </motion.div>
                    </div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {pricingTiers.map((tier) => (
                        <motion.div
                            key={tier.id}
                            className={`relative bg-primary-light/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden ${tier.popularChoice ? 'md:scale-105 md:-translate-y-2 z-10' : ''
                                }`}
                            variants={cardVariants}
                            whileHover="hover"
                            onMouseEnter={() => setHoveredTier(tier.id)}
                            onMouseLeave={() => setHoveredTier(null)}
                        >
                            {/* Background elements */}
                            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.bgGradient}`}></div>
                            </div>

                            {/* Animated gradient border */}
                            <div className="absolute inset-0">
                                <div className={`absolute inset-0 rounded-2xl ${hoveredTier === tier.id ? 'opacity-100' : 'opacity-0'
                                    } transition-opacity duration-300`}>
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                        <motion.div
                                            className={`absolute h-[200%] w-[200%] bg-gradient-to-r ${tier.accentColor}`}
                                            animate={{
                                                top: ['-100%', '0%'],
                                                left: ['-100%', '0%'],
                                            }}
                                            transition={{
                                                duration: 2,
                                                ease: "linear",
                                                repeat: Infinity,
                                            }}
                                            style={{
                                                opacity: 0.2,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Popular choice badge */}
                            {tier.popularChoice && (
                                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 z-10">
                                    <motion.div
                                        className="relative"
                                        initial={{ rotate: -15, scale: 0.9 }}
                                        animate={{ rotate: [0, -10, 0], scale: [0.95, 1, 0.95] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink blur-md opacity-40 rounded-full" />
                                        <div className="relative rounded-full bg-gradient-to-r from-cyber-purple to-cyber-pink px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-xl">
                                            Popular Choice
                                        </div>
                                    </motion.div>
                                </div>
                            )}

                            <div className="pt-8 pb-6 px-6 flex flex-col h-full relative z-10">
                                {/* Tier header */}
                                <div className="mb-8">
                                    <div className="flex items-center mb-4">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br ${tier.accentColor} mr-3`}>
                                            {tier.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{tier.name}</h3>
                                    </div>

                                    <p className="text-text-muted mb-4 text-sm">{tier.description}</p>

                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold">
                                            {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                                        </span>
                                        <span className="text-text-muted ml-2 text-sm">{tier.period}</span>
                                    </div>

                                    {tier.limit && (
                                        <div className="mt-2 text-xs text-cyber-green">
                                            {tier.limit}
                                        </div>
                                    )}
                                </div>

                                {/* Features list */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {tier.features.slice(0, 4).map((feature, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className={`mt-0.5 mr-3 ${feature.included ? 'text-cyber-green' : 'text-text-muted'}`}>
                                                {feature.included ? (
                                                    <HiOutlineCheck className="w-5 h-5" />
                                                ) : (
                                                    <div className="w-5 h-5 flex items-center justify-center">
                                                        <div className="w-1 h-1 rounded-full bg-text-muted"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <span className={feature.included ? 'text-sm' : 'text-sm text-text-muted'}>
                                                {feature.text}
                                            </span>
                                        </div>
                                    ))}

                                    {/* Expandable features */}
                                    <AnimatePresence>
                                        {expandedFeaturesTier === tier.id && (
                                            <motion.div
                                                variants={featureVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                className="space-y-3 overflow-hidden"
                                            >
                                                {tier.features.slice(4).map((feature, idx) => (
                                                    <div key={idx + 4} className="flex items-start">
                                                        <div className={`mt-0.5 mr-3 ${feature.included ? 'text-cyber-green' : 'text-text-muted'}`}>
                                                            {feature.included ? (
                                                                <HiOutlineCheck className="w-5 h-5" />
                                                            ) : (
                                                                <div className="w-5 h-5 flex items-center justify-center">
                                                                    <div className="w-1 h-1 rounded-full bg-text-muted"></div>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <span className={feature.included ? 'text-sm' : 'text-sm text-text-muted'}>
                                                            {feature.text}
                                                        </span>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Show more/less button */}
                                    <button
                                        className="text-xs text-cyber-blue flex items-center mt-2"
                                        onClick={() => toggleFeatures(tier.id)}
                                    >
                                        {expandedFeaturesTier === tier.id ? 'Show less' : 'Show more'}
                                        <motion.div
                                            animate={{
                                                rotate: expandedFeaturesTier === tier.id ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <HiChevronDown className="ml-1 w-4 h-4" />
                                        </motion.div>
                                    </button>
                                </div>

                                {/* CTA Button */}
                                <Link
                                    href={`/signup?plan=${tier.id}`}
                                    className={`relative w-full py-3 px-4 rounded-lg font-medium text-center overflow-hidden group`}
                                >
                                    {/* Button background and effects */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${tier.accentColor} opacity-90`} />

                                    {/* Pulsing glow effect on hover */}
                                    {hoveredTier === tier.id && (
                                        <motion.div
                                            className="absolute inset-0 rounded-lg"
                                            animate={{
                                                boxShadow: [
                                                    `0 0 0px rgba(0, 0, 0, 0)`,
                                                    `0 0 20px rgba(var(--${tier.id}-glow), 0.7)`,
                                                    `0 0 0px rgba(0, 0, 0, 0)`
                                                ]
                                            }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}

                                    {/* Button text */}
                                    <span className="relative">{tier.cta}</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Extra info */}
                <motion.div
                    className="mt-16 max-w-3xl mx-auto text-center"
                    variants={cardVariants}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-6 bg-primary-light/5 backdrop-blur-sm border border-white/10 rounded-xl">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 border border-white/10">
                            <HiOutlineShieldCheck className="w-8 h-8 text-cyber-blue" />
                        </div>

                        <div className="text-left">
                            <h3 className="text-lg font-semibold mb-2">100% Satisfaction Guarantee</h3>
                            <p className="text-text-muted text-sm">
                                Try risk-free with our 30-day money-back guarantee. No questions asked if you're not completely satisfied.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-text-muted text-sm">
                        <p>
                            Have questions? <a href="/contact" className="text-cyber-blue hover:underline">Contact our support team</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default PricingSection; 