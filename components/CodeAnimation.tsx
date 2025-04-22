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
        <div className={`relative rounded-lg bg-[#0a0e17] p-8 font-mono text-base md:text-lg overflow-hidden shadow-xl ${className}`}>
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
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-8 text-gray-500 text-sm flex flex-col space-y-10 pt-1">
                    {/* {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex justify-end">{i + 1}</div>
                    ))} */}
                </div>

                <div className="pl-10 font-medium">
                    <Typewriter
                        options={{
                            strings: [
                                '<span class="comment">// Initialize Interview Coder</span>\n\n<span class="code-keyword">const</span> <span class="code-variable">interviewCoder</span> = <span class="code-keyword">new</span> <span class="code-function">AIAssistant</span>();\n\n<span class="comment">// Take screenshot</span>\n<span class="code-keyword">const</span> <span class="code-variable">problem</span> = <span class="code-keyword">await</span> <span class="code-variable">interviewCoder</span>.<span class="code-function">captureScreen</span>();\n\n<span class="comment">// Process with AI</span>\n<span class="code-keyword">const</span> <span class="code-variable">solution</span> = <span class="code-keyword">await</span> <span class="code-variable">interviewCoder</span>.<span class="code-function">analyze</span>(<span class="code-variable">problem</span>);',
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

            {/* System status display */}
            <br />

            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-cyber-blue text-sm px-4 py-3 rounded-md border border-cyber-blue/30 font-mono">
                <div className="flex items-center space-x-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-neo-green animate-pulse"></span>

                    <span className="text-neo-green">SYSTEM_ACTIVE</span>
                </div>
                <div className="mt-1 text-[#a8d0fc]">INTERFACE_VERSION: 2.3.7</div>
                <div className="mt-1 text-[#a8d0fc]">STATUS: ONLINE</div>
            </div>

            {/* Pulsing cursor */}
            <style jsx global>{`
                .cyber-cursor {
                    color: #00ccff;
                    animation: blink 1s infinite;
                }
                
                .code-text {
                    font-weight: 500;
                    line-height: 2.5;
                }
                
                .comment {
                    color: #7d9c7d;
                    font-style: italic;
                }
                
                .code-keyword {
                    color: #c77dff;
                    font-weight: 600;
                }
                
                .code-variable {
                    color: #00ccff;
                }
                
                .code-function {
                    color: #00ff9d;
                    font-weight: 600;
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>

            {/* Decorated corners - only top ones */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-blue/70"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-blue/70"></div>

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