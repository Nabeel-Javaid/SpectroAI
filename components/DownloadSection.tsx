import React from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { FaWindows, FaApple, FaGithub, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DownloadSection: React.FC = () => {
    return (
        <section id="download" className="py-20 relative">
            <div className="absolute inset-0 hero-gradient opacity-30 -z-10"></div>

            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-accent">Download</span> Interview Coder
                    </h2>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Get started with Interview Coder today. It's free, open-source, and runs on your local machine.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <AnimatedSection delay={0.1} className="col-span-1">
                        <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 flex flex-col">
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                <FaWindows />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">Windows</h3>
                            <p className="text-text-muted mb-6 flex-grow text-center">
                                Download the Windows installer for the easiest setup experience.
                            </p>
                            <Button
                                href="https://github.com/greeneu/interview-coder-withoupaywall-opensource/releases"
                                className="w-full justify-center"
                            >
                                Download for Windows
                            </Button>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="col-span-1">
                        <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 flex flex-col">
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                <FaApple />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">macOS</h3>
                            <p className="text-text-muted mb-6 flex-grow text-center">
                                Download the macOS DMG file for both Intel and Apple Silicon Macs.
                            </p>
                            <Button
                                href="https://github.com/greeneu/interview-coder-withoupaywall-opensource/releases"
                                className="w-full justify-center"
                            >
                                Download for macOS
                            </Button>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3} className="col-span-1">
                        <div className="glassmorphism rounded-lg p-6 h-full border border-white/10 flex flex-col">
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                <FaCode />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-center">From Source</h3>
                            <p className="text-text-muted mb-6 flex-grow text-center">
                                Clone the repository and build from source for full customization.
                            </p>
                            <Button
                                href="https://github.com/greeneu/interview-coder-withoupaywall-opensource"
                                variant="outline"
                                className="w-full justify-center gap-2"
                            >
                                <FaGithub className="mr-1" />
                                View on GitHub
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.4} className="mt-16 max-w-4xl mx-auto">
                    <div className="glassmorphism rounded-lg p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-4">Quick Start Guide</h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-accent">Prerequisites</h4>
                                <ul className="list-disc pl-5 text-text-muted space-y-1">
                                    <li>An API key from OpenAI, Google (Gemini), or Anthropic</li>
                                    <li>Screen recording permission for your terminal/IDE (on macOS)</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-accent">Running from Source</h4>
                                <div className="bg-primary-dark rounded-md p-4 font-mono text-sm overflow-x-auto">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <p className="text-text-muted"># Clone the repository</p>
                                        <p className="text-white">git clone https://github.com/greeneu/interview-coder-withoupaywall-opensource.git</p>
                                        <p className="text-white">cd interview-coder-withoupaywall-opensource</p>
                                        <p className="text-text-muted mt-2"># Install dependencies</p>
                                        <p className="text-white">npm install</p>
                                        <p className="text-text-muted mt-2"># Run the application</p>
                                        <p className="text-white">./stealth-run.sh  # For macOS/Linux</p>
                                        <p className="text-white">stealth-run.bat  # For Windows</p>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-accent">Important</h4>
                                <p className="text-text-muted">
                                    The application window will be invisible by default! Use <span className="text-white code-font">Ctrl+B</span> (or <span className="text-white code-font">Cmd+B</span> on Mac) to toggle visibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default DownloadSection; 