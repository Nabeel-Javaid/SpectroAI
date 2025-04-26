import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ComparisonSection: React.FC = () => {
    const features = [
        { name: 'Price', premium: '$60/month subscription', free: 'Free (only pay for your API usage)' },
        { name: 'Solution Generation', premium: true, free: true },
        { name: 'Debugging Assistance', premium: true, free: true },
        { name: 'Invisibility', premium: true, free: true },
        { name: 'Multi-language Support', premium: true, free: true },
        { name: 'Time/Space Complexity Analysis', premium: true, free: true },
        { name: 'Window Management', premium: true, free: true },
        { name: 'Auth System', premium: 'Required', free: 'None (Simplified)' },
        { name: 'Payment Processing', premium: 'Required', free: 'None (Use your own API key)' },
        { name: 'Privacy', premium: 'Server-processed', free: '100% Local Processing' },
        { name: 'Customization', premium: 'Limited', free: 'Full Source Code Access' },
        { name: 'Model Selection', premium: 'Limited', free: 'OpenAI, Gemini, Anthropic models' },
    ];

    return (
        <section id="comparison" className="py-20 relative">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-accent">Compare</span> with Paid Alternatives
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        See how Spectro stacks up against premium interview preparation tools that cost $60+ per month.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="max-w-5xl mx-auto overflow-hidden rounded-lg border border-white/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-primary text-white border-b border-white/10">
                                <tr>
                                    <th className="py-4 px-6">Feature</th>
                                    <th className="py-4 px-6">Premium Tools (Paid)</th>
                                    <th className="py-4 px-6 bg-accent/10">Spectro (Free)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {features.map((feature, index) => (
                                    <tr key={index} className="hover:bg-primary-light/30 transition-colors">
                                        <td className="py-4 px-6 font-medium">{feature.name}</td>
                                        <td className="py-4 px-6">
                                            {typeof feature.premium === 'boolean' ? (
                                                feature.premium ? (
                                                    <FaCheck className="text-green-500" />
                                                ) : (
                                                    <FaTimes className="text-red-500" />
                                                )
                                            ) : (
                                                feature.premium
                                            )}
                                        </td>
                                        <td className="py-4 px-6 bg-accent/5">
                                            {typeof feature.free === 'boolean' ? (
                                                feature.free ? (
                                                    <FaCheck className="text-green-500" />
                                                ) : (
                                                    <FaTimes className="text-red-500" />
                                                )
                                            ) : (
                                                <span className="font-medium text-accent">{feature.free}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4} className="mt-12 text-center">
                    <div className="glassmorphism max-w-3xl mx-auto p-8 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Spectro?</h3>
                        <p className="text-text-muted mb-4">
                            Spectro provides the same powerful functionality as expensive interview preparation tools,
                            but as a free, open-source alternative. You get complete control over your experience and only pay
                            for what you use with your own API key.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-accent/20 px-3 py-1.5 rounded-full text-accent font-semibold">
                            <span className="text-sm">Free alternative to $60/month services</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ComparisonSection; 