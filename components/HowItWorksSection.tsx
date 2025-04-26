import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface StepProps {
    number: number;
    title: string;
    description: string;
    image: string;
    isActive: boolean;
    onClick: () => void;
}

// Optimize with React.memo to prevent unnecessary rerenders
const Step: React.FC<StepProps> = React.memo(({ number, title, description, image, isActive, onClick }) => {
    return (
        <motion.div
            className={`relative cursor-pointer p-8 lg:p-10 future-card mb-8 lg:mb-0 ${isActive ? 'border-2 border-cyber-blue' : 'border border-white/5'}`}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            layout="position"
        >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 border-t-2 border-l-2 border-cyber-blue/50 w-8 h-8"></div>
            <div className="absolute top-0 right-0 border-t-2 border-r-2 border-cyber-blue/50 w-8 h-8"></div>
            <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-cyber-blue/50 w-8 h-8"></div>
            <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-cyber-blue/50 w-8 h-8"></div>

            {/* Step number */}
            <div
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary-dark text-cyber-blue text-xl font-bold border border-cyber-blue mb-4 relative code-font ${isActive ? 'shadow-blue-glow' : ''}`}
            >
                {number < 10 ? `0${number}` : number}
            </div>

            <h3 className={`text-xl font-semibold mb-2 ${isActive ? 'text-cyber-blue' : 'text-white'}`}>
                {title}
            </h3>

            <p className="text-text-muted mb-6">{description}</p>

            {/* Image with scan line effect */}
            <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-video mb-4">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full bg-primary-dark"
                />

                {/* Status indicator */}
                <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                    <div className={`h-2 w-2 rounded-full bg-cyber-blue ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                    <span className="text-xs text-cyber-blue opacity-80 font-mono">
                        {isActive ? 'ACTIVE' : 'STANDBY'}
                    </span>
                </div>
            </div>

            {/* Interactive elements */}
            <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-cyber-blue/70 font-mono">
                    PHASE {number < 10 ? `0${number}` : number}
                </span>

                <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 w-5 ${isActive ? 'bg-cyber-blue' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
});

Step.displayName = 'Step';

const HowItWorksSection: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    const { scrollYProgress } = useScroll();

    // Auto-advance steps with the possibility to disable
    const [autoAdvance, setAutoAdvance] = useState(true);

    // Optimized step change handler
    const handleStepClick = useCallback((stepNumber: number) => {
        setActiveStep(stepNumber);
        setAutoAdvance(false); // Disable auto-advance when user manually selects a step
    }, []);

    // Auto-advance logic
    useEffect(() => {
        if (!autoAdvance) return;

        const interval = setInterval(() => {
            setActiveStep(prev => prev < 4 ? prev + 1 : 1);
        }, 8000);

        return () => clearInterval(interval);
    }, [autoAdvance]);

    const steps = [
        {
            number: 1,
            title: "Install and Run",
            description: "Download, install, and launch Spectro with your preferred AI model API key.",
            image: "https://placehold.co/600x340/0f172a/0ff.webp?text=Install+and+Run&font=Space+Grotesk"
        },
        {
            number: 2,
            title: "Take Screenshots",
            description: "Use the invisible window to take screenshots of coding problems from any platform.",
            image: "https://placehold.co/600x340/0f172a/9d4edd.webp?text=Take+Screenshots&font=Space+Grotesk"
        },
        {
            number: 3,
            title: "Get AI Analysis",
            description: "The AI automatically analyzes the problem and generates detailed explanations and solutions.",
            image: "https://placehold.co/600x340/0f172a/00ff9d.webp?text=AI+Analysis&font=Space+Grotesk"
        },
        {
            number: 4,
            title: "Implement and Learn",
            description: "Copy solutions, understand the approach, and learn from detailed explanations to improve your skills.",
            image: "https://placehold.co/600x340/0f172a/ff00ff.webp?text=Implement+and+Learn&font=Space+Grotesk"
        }
    ];

    return (
        <section id="how-it-works" className="py-10 relative overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 cyberpunk-grid opacity-10 z-0"></div>

            {/* Decorative circuit lines - static instead of animated */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyber-blue/30 to-transparent left-10 lg:left-1/4 z-0"></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyber-purple/30 to-transparent right-10 lg:right-1/4 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-2 relative inline-block"
                    >
                        <span className="text-cyber-purple neon-text">How It</span>{' '}
                        <span className="text-white">Works</span>
                    </motion.h2>

                    <p className="text-text-muted text-lg max-w-2xl mx-auto mt-6">
                        Spectro works in a few simple steps to help you ace coding challenges.
                    </p>
                </AnimatedSection>

                {/* Steps Display */}
                <div className="lg:grid lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <Step
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                            image={step.image}
                            isActive={activeStep === step.number}
                            onClick={() => handleStepClick(step.number)}
                        />
                    ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-10 space-x-3">
                    {steps.map((step) => (
                        <button
                            key={step.number}
                            className={`h-2 w-10 rounded-full ${activeStep === step.number ? 'bg-cyber-purple' : 'bg-white/20'} transition-colors duration-150`}
                            onClick={() => handleStepClick(step.number)}
                        />
                    ))}
                </div>

                {/* System Status */}
                <div className="flex justify-center mt-12 text-sm font-mono text-cyber-purple/70">
                    SYSTEM STATUS: OPERATIONAL | NEURAL PROCESSING: {activeStep * 25}%
                </div>
            </div>
        </section>
    );
};

export default React.memo(HowItWorksSection); 