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
        <div className={`relative rounded-lg bg-primary-dark/80 p-4 font-mono text-sm md:text-base overflow-hidden ${className}`}>
            {/* Terminal scan line effect */}
            <div className="scan-line absolute inset-0 opacity-10"></div>

            {/* Glitch effect overlay */}
            {isGlitching && (
                <motion.div
                    className="absolute inset-0 bg-cyber-blue/10 mix-blend-screen"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Line numbers */}
            <div className="absolute left-2 top-4 bottom-4 w-6 text-text-muted/50 text-xs flex flex-col justify-between">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex justify-end">{i + 1}</div>
                ))}
            </div>

            <div className="pl-8 text-cyber-blue">
                <Typewriter
                    options={{
                        strings: [
                            '// Initialize Interview Coder\nconst interviewCoder = new AIAssistant();\n\n// Take screenshot of problem\nconst problem = await interviewCoder.captureScreen();\n\n// Process with selected AI model\nconst solution = await interviewCoder.analyze(problem, {\n  model: "gpt-4o" // or "gemini-pro" or "claude-3"\n});\n\n// Display solution while remaining invisible\nconsole.log("Interview passing: 100% probability");',
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        deleteSpeed: 20,
                        wrapperClassName: 'code-text',
                        cursorClassName: 'cyber-cursor',
                    }}
                />
            </div>

            {/* Pulsing cursor */}
            <style jsx global>{`
                .cyber-cursor {
                    color: var(--cyberpunk-blue);
                    animation: blink 1s infinite;
                }
                
                .code-text span {
                    color: var(--cyberpunk-blue);
                }
                
                .code-text span:nth-child(7n+1),
                .code-text span:nth-child(7n+2) {
                    color: var(--cyberpunk-purple);
                }
                
                .code-text span:nth-child(5n),
                .code-text span:nth-child(5n+1) {
                    color: var(--neo-green);
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>

            {/* Decorated corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-blue/70"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-blue/70"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-blue/70"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-blue/70"></div>

            {/* Status indicators */}
            <motion.div
                className="absolute top-1 right-6 h-1 w-1 rounded-full bg-neo-green"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1 right-10 h-1 w-1 rounded-full bg-cyber-purple"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
        </div>
    );
};

export default CodeAnimation; 