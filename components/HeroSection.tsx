import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useAnimation, Variants, useMotionTemplate } from 'framer-motion';
import Button from './Button';
import CodeAnimation from './CodeAnimation';
import { FaGithub, FaDownload, FaRobot, FaLock, FaCode, FaTerminal, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

// Animated grid for cyberpunk effect
const CyberGrid = () => (
    <div className="absolute inset-0 cyberpunk-grid opacity-20 z-0"></div>
);

// Animate Scanner
const Scanner = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="scan-line"></div>
    </div>
);

// Animated particles with neon colors
const NeonParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-5">
            {[...Array(30)].map((_, i) => {
                const size = Math.random() * 5 + 2;
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            background: i % 3 === 0
                                ? 'rgba(0, 255, 255, 0.7)'
                                : i % 3 === 1
                                    ? 'rgba(157, 78, 221, 0.7)'
                                    : 'rgba(0, 255, 157, 0.7)',
                            boxShadow: i % 3 === 0
                                ? '0 0 8px rgba(0, 255, 255, 0.5)'
                                : i % 3 === 1
                                    ? '0 0 8px rgba(157, 78, 221, 0.5)'
                                    : '0 0 8px rgba(0, 255, 157, 0.5)',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50
                            ],
                            y: [
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50
                            ],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                );
            })}
        </div>
    );
};

const FloatingCircuits = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => {
                const size = Math.random() * 200 + 50;
                return (
                    <motion.div
                        key={i}
                        className="absolute border border-cyber-blue/20 rounded-full"
                        style={{
                            width: size,
                            height: size,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            border: i % 2 === 0 ? '1px solid rgba(0, 255, 255, 0.1)' : '1px dashed rgba(0, 255, 255, 0.15)',
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 180],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                );
            })}
        </div>
    );
};

// Holographic Interface
const HolographicInterface = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(v => !v);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="absolute bottom-0 left-0 w-72 h-20 text-xs font-mono text-cyber-blue/70 p-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className="border border-cyber-blue/30 p-2 bg-primary-dark/50 rounded">
                        <motion.div
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="block">{`> SYSTEM_ACTIVE`}</span>
                            <div>
                                <span className="block">{`> INTERFACE_VERSION: 2.3.7`}</span>
                            </div>
                            <div>
                                <span className="block">{`> STATUS: ONLINE`}</span>
                            </div>
                        </motion.div>
                    </div> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const HeroSection: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimation();
    const [showCodeBlocks, setShowCodeBlocks] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Parallax effects based on scroll
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    const titleY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);
    const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '25%']);

    // Change active tag every 2 seconds
    useEffect(() => {
        const tagInterval = setInterval(() => {
            setShowCodeBlocks(true);
        }, 1000);

        return () => clearInterval(tagInterval);
    }, []);

    // Handle mouse move for 3D effect
    const handleMouseMove = (e: React.MouseEvent) => {
        // Get the hero section's bounding rectangle
        const rect = e.currentTarget.getBoundingClientRect();

        // Calculate normalized coordinates (0 to 1)
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Update mouse position state
        setMousePosition({ x, y });
    };

    const codeSnippets = [
        {
            language: "javascript",
            code: `// Smart AI-assisted coding
function generateResponse(prompt) {
    const completion = OpenAI.createCompletion({
        model: "gpt-4",
        prompt: prompt,
        max_tokens: 150
    });
    return completion.choices[0].text;
}`
        },
        {
            language: "python",
            code: `# Ace your next tech interview
def prepare_for_interview():
    questions = fetch_common_questions()
    solutions = generate_optimal_solutions(questions)
    explanations = add_detailed_explanations(solutions)
    
    return practice_responses`
        }
    ];

    const heroVariants = {
        hover: {
            scale: 1.02,
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.98,
            transition: { duration: 0.3 }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const codeBlockVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    const lineVariants = {
        hidden: { width: "0%" },
        visible: (custom: number) => ({
            width: "100%",
            transition: {
                delay: custom * 0.05,
                duration: 0.8,
                ease: "easeInOut"
            }
        })
    };

    const floatingIconVariants: Variants = {
        animate: (i) => ({
            y: [0, -10, 0],
            opacity: [0.5, 0.9, 0.5],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 3 + i,
                    ease: "easeInOut",
                },
                opacity: {
                    repeat: Infinity,
                    duration: 2 + i,
                    ease: "easeInOut",
                }
            }
        })
    };

    // Motion values for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Holographic text color animation
    const textY = useMotionValue(0);
    const textColorRotate = useTransform(textY, [0, 100], [0, 360]);
    const textColor = useMotionTemplate`hsl(${textColorRotate}, 100%, 65%)`;

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

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const floatingVariants: Variants = {
        hidden: { y: 0 },
        visible: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const handleMouseMoveInteractive = (e: React.MouseEvent) => {
        if (heroRef.current) {
            const { clientX, clientY } = e;
            const { left, top, width, height } = heroRef.current.getBoundingClientRect();

            // Calculate mouse position relative to the container
            const x = (clientX - left) / width;
            const y = (clientY - top) / height;

            // Update motion values
            mouseX.set(x);
            mouseY.set(y);
            textY.set(y * 100);
        }
    };

    const titleChars = "Spectro AI".split("");

    return (
        <motion.section
            ref={heroRef}
            className="relative overflow-hidden py-20 md:py-28 lg:py-36"
            onMouseMove={handleMouseMoveInteractive}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Background elements */}
            <div className="absolute inset-0 hero-gradient -z-10"></div>
            <CyberGrid />
            <Scanner />
            <NeonParticles />
            <FloatingCircuits />

            {/* Floating tech icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[FaCode, FaTerminal, FaUsers].map((Icon, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-white/20"
                        style={{
                            left: `${25 + index * 25}%`,
                            top: `${20 + (index % 2) * 50}%`,
                            fontSize: `${3 + index}rem`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{
                            y: {
                                repeat: Infinity,
                                duration: 3 + index,
                                ease: "easeInOut",
                            },
                            opacity: {
                                repeat: Infinity,
                                duration: 2 + index,
                                ease: "easeInOut",
                            }
                        }}
                    >
                        <Icon />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Hero content */}
                    <motion.div className="lg:w-1/2 text-center lg:text-left" variants={itemVariants}>
                        {/* Subtitle with glow effect */}
                        <motion.div
                            className="inline-flex items-center bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-6"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-cyber-blue mr-2"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <span className="text-sm font-medium">GPT-4/Claude/Gemini Powered</span>
                        </motion.div>

                        {/* Main title with holographic effect */}
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden">
                                <div className="flex flex-wrap">
                                    {titleChars.map((char, index) => (
                                        <motion.span
                                            key={index}
                                            className={char === " " ? "mr-3" : "relative inline-block"}
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 0.05 * index,
                                                duration: 0.5,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                            {char !== " " && (
                                                <motion.span
                                                    className="absolute inset-0 z-10"
                                                    style={{
                                                        color: textColor,
                                                        mixBlendMode: "color-dodge",
                                                        opacity: 0.7
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            )}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Transparent highlight line */}
                            <motion.div
                                className="h-1 w-24 bg-gradient-to-r from-cyber-blue via-cyber-purple to-transparent mt-2"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "6rem", opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            className="text-lg text-text-muted mb-8 max-w-lg mx-auto lg:mx-0"
                            variants={itemVariants}
                        >
                            Ace your technical interviews with our AI-powered solution that stays invisible while giving you real-time assistance. Screenshot any coding question and get instant solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                            variants={itemVariants}
                        >
                            {/* Download button removed
                            <Button
                                variant="neon"
                                size="lg"
                                href="#download"
                                icon={<FaDownload />}
                                glitch={true}
                            >
                                Download Now
                            </Button>
                            */}

                            {/* <Button
                                variant="cyberpunk"
                                size="lg"
                                href="https://github.com/greeneu/interview-coder-withoupaywall-opensource"
                                icon={<FaGithub />}
                            >
                                Star on GitHub
                            </Button> */}
                        </motion.div>

                        {/* Features tags */}
                        {/* <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            {['Cheap Alternative', , 'Latest AI Models', 'Undetectable'].map((tag, index) => (
                                // <motion.div
                                //     key={tag}
                                //     className="px-3 py-1 rounded-full text-sm border border-white/10 bg-primary-light/20 backdrop-blur-sm text-text-muted"
                                //     whileHover={{
                                //         scale: 1.05,
                                //         boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
                                //         borderColor: "rgba(255, 255, 255, 0.3)",
                                //         y: -2
                                //     }}
                                //     initial={{ opacity: 0, y: 10 }}
                                //     animate={{ opacity: 1, y: 0 }}
                                //     transition={{ delay: 0.5 + (index * 0.1) }}
                                // >
                                //     {tag}
                                // </motion.div>
                            ))}
                        </motion.div> */}
                    </motion.div>

                    {/* Hero image */}
                    <motion.div
                        className="lg:w-1/2 relative perspective"
                        variants={itemVariants}
                        animate={{
                            y: [0, -15, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Main image with holographic effect */}
                        <motion.div
                            className="relative rounded-lg overflow-hidden border border-white/10 aspect-[4/3] w-full max-w-xl mx-auto"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            whileHover={{
                                rotateY: [0, 5, 0, -5, 0],
                                rotateX: [0, -5, 0, 5, 0],
                                transition: { duration: 5, ease: "linear", repeat: Infinity }
                            }}
                        >
                            {/* Holographic overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5 z-10 mix-blend-overlay"></div>

                            {/* Scan line effect */}
                            <motion.div
                                className="absolute inset-0 z-20 scan-line opacity-30 pointer-events-none"
                                style={{ height: "200%" }}
                                animate={{ y: ["-50%", "50%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />

                            {/* Corner highlights */}
                            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyber-blue/40 rounded-tl-lg z-20"></div>
                            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyber-blue/40 rounded-tr-lg z-20"></div>
                            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cyber-blue/40 rounded-bl-lg z-20"></div>
                            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyber-blue/40 rounded-br-lg z-20"></div>

                            {/* Main content */}
                            <div className="relative z-0">
                                <CodeAnimation className="h-full" />
                            </div>

                            {/* Holographic Interface */}
                            <HolographicInterface />

                            {/* Shimmer overlay effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-30 pointer-events-none"
                                animate={{
                                    x: ["-100%", "100%"],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeatDelay: 3,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default HeroSection; 