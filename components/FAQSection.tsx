import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi';
import AnimatedSection from './AnimatedSection';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "How does Spectro keep me undetected during interviews?",
            answer: "Spectro uses advanced techniques to stay invisible to interview monitoring software. It operates in stealth mode without requiring screen sharing access or leaving any digital footprint that could be detected by proctoring tools."
        },
        {
            question: "What programming languages does Spectro support?",
            answer: "Spectro supports all major programming languages including Python, JavaScript, Java, C++, Go, Rust, and more. Its AI models are trained on vast code repositories and can assist with virtually any language-specific challenge."
        },
        {
            question: "Do I need my own API keys to use Spectro?",
            answer: "Yes, you'll need to use your own API keys for the AI models you want to use (OpenAI, Anthropic, or Google). This gives you complete control over which models you prefer and ensures your privacy since all processing happens on your local machine."
        },
        {
            question: "Will Spectro work with online coding platforms?",
            answer: "Yes, Spectro works seamlessly with all popular coding interview platforms including LeetCode, HackerRank, CodeSignal, and others. It can observe your screen and provide assistance without interfering with the platform's functionality."
        },
        {
            question: "How accurate are the solutions provided by Spectro?",
            answer: "Spectro leverages the latest AI models to provide highly accurate solutions. It not only gives you working code but also explains the approach, time/space complexity analysis, and alternative solutions when applicable."
        },
        {
            question: "Can Spectro help with system design interviews?",
            answer: "Absolutely! Spectro can assist with system design by suggesting architecture patterns, explaining trade-offs between different approaches, and providing diagrams and explanations for complex distributed systems."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 relative">
            <div className="absolute inset-0 hero-gradient opacity-30 -z-10"></div>

            {/* Cyber grid background */}
            <div className="absolute inset-0 cyberpunk-grid opacity-5 z-0"></div>

            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <div className="inline-flex items-center bg-accent/10 px-4 py-1.5 rounded-full mb-4">
                        <HiQuestionMarkCircle className="text-accent mr-2" />
                        <span className="text-sm font-medium text-accent">Got Questions?</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Frequently Asked <span className="text-accent">Questions</span>
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Everything you need to know about Spectro and how it can help you ace your technical interviews.
                    </p>
                </AnimatedSection>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <AnimatedSection
                            key={index}
                            delay={0.1 * index}
                            className="mb-4"
                        >
                            <div className="glassmorphism border border-white/10 rounded-lg overflow-hidden">
                                <motion.button
                                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                                    onClick={() => toggleFAQ(index)}
                                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                >
                                    <span className="font-medium text-lg">{item.question}</span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-accent"
                                    >
                                        <HiChevronDown className="w-5 h-5" />
                                    </motion.div>
                                </motion.button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-white/5 text-text-muted">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection; 