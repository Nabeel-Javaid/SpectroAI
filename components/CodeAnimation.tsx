import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

interface CodeAnimationProps {
    className?: string;
}

const CodeAnimation: React.FC<CodeAnimationProps> = ({ className = '' }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    // Randomly trigger glitch effect
    useEffect(() => {
        const interval = setInterval(() => {
            const shouldGlitch = Math.random() > 0.7;
            if (shouldGlitch) {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 200);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative rounded-lg p-8 font-mono text-base md:text-lg overflow-hidden shadow-xl ${className}`} style={{ minHeight: '650px' }}>
            {/* Terminal scan line effect */}
            <div className="scan-line absolute inset-0 opacity-5"></div>

            {/* Glitch effect overlay */}
            {isGlitching && (
                <motion.div
                    className="absolute inset-0 bg-cyber-blue/10 mix-blend-screen"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Code content area */}
            <div className="relative z-10 mb-14">
                <div className="pl-10 font-medium">
                    <Typewriter
                        options={{
                            // The strings array already follows the Comment -> Code pattern
                            strings: [
                                '<span class="comment">// Initialize Spectro</span>\n<span class="code-keyword">const</span> <span class="code-variable">Spectro</span> = <span class="code-keyword">new</span> <span class="code-function">AIAssistant</span>();\n<span class="comment">// Take screenshot</span>\n<span class="code-keyword">const</span> <span class="code-variable">problem</span> = <span class="code-keyword">await</span> <span class="code-variable">Spectro</span>.<span class="code-function">captureScreen</span>();\n<span class="comment">// Process with AI</span>\n<span class="code-keyword">const</span> <span class="code-variable">solution</span> = <span class="code-keyword">await</span> <span class="code-variable">Spectro</span>.<span class="code-function">analyze</span>(<span class="code-variable"></span>);',
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            deleteSpeed: 30,
                            wrapperClassName: 'code-text',
                            cursorClassName: 'cyber-cursor',
                        }}
                    />
                </div>
            </div>

            {/* System status display 1 - original position */}
            <div className="absolute bottom-24 left-4 right-4 bg-black/50 text-cyber-blue text-sm px-4 py-3 rounded-md border border-cyber-blue/30 font-mono">
                <div className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-neo-green animate-pulse"></span>
                    <span className="text-neo-green">SYSTEM_ACTIVE</span>
                </div>
                <div className="mt-1 text-[#a8d0fc]">INTERFACE_VERSION: 2.3.7</div>
                <div className="mt-1 text-[#a8d0fc]">STATUS: ONLINE</div>
            </div>
            
            {/* System status display 2 - at the bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-cyber-blue text-sm px-4 py-3 rounded-md border border-cyber-blue/30 font-mono">
                <div className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-neo-green animate-pulse"></span>
                    <span className="text-neo-green">SYSTEM_ACTIVE</span>
                </div>
                <div className="mt-1 text-[#a8d0fc]">INTERFACE_VERSION: 2.3.7</div>
                <div className="mt-1 text-[#a8d0fc]">STATUS: ONLINE</div>
            </div>

            {/* Global styles for typewriter and code elements */}
            <style jsx global>{`
                .cyber-cursor {
                    color: #00ccff; /* Cursor color */
                    animation: blink 1s infinite; /* Blinking animation */
                }

                .code-text {
                    font-weight: 500; /* Medium font weight for code */
                    line-height: 2.5; /* Increased line spacing */
                    white-space: pre-wrap; /* Ensures newlines are respected */
                }

                .comment {
                    color: #7d9c7d; /* Greenish color for comments */
                    font-style: italic; /* Italicize comments */
                }

                .code-keyword {
                    color: #c77dff; /* Purple color for keywords (const, new, await) */
                    font-weight: 600; /* Slightly bolder */
                }

                .code-variable {
                    color: #00ccff; /* Cyan color for variables (Spectro, problem, solution) */
                }

                .code-function {
                    color: #00ff9d; /* Bright green color for function/class names */
                    font-weight: 600; /* Slightly bolder */
                }

                /* Blinking animation keyframes */
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }

                /* Scan line effect (optional visual enhancement) */
                .scan-line {
                    background: linear-gradient(to bottom, transparent 50%, rgba(0, 204, 255, 0.1) 50%);
                    background-size: 100% 4px;
                    animation: scan 4s linear infinite;
                }

                @keyframes scan {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 100%; }
                }
            `}</style>

            {/* Decorated corners - only top ones */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-blue/70"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/70"></div>
            {/* Added bottom corners for visual balance */}
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-blue/70"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-blue/70"></div>

            {/* Status indicators */}
            <motion.div
                className="absolute top-3 right-10 h-2 w-2 rounded-full bg-cyber-purple"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
        </div>
    );
};

export default CodeAnimation;