import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform, Variants } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
    accentColor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alex Chen",
        position: "Senior Software Engineer",
        company: "TechVision Inc.",
        avatar: "/testimonials/avatar-1.png",
        content: "Interview Coder AI has completely transformed my interview preparation. The real-time coding assistance and detailed explanations helped me land my dream job at a top tech company.",
        rating: 5,
        accentColor: "from-cyber-blue to-cyber-purple"
    },
    {
        id: 2,
        name: "Sophia Rodriguez",
        position: "Full Stack Developer",
        company: "InnovateSphere",
        avatar: "/testimonials/avatar-2.png",
        content: "I was struggling with algorithm problems until I found this tool. It doesn't just give you the answers, it helps you understand the underlying concepts. Incredible time-saver!",
        rating: 5,
        accentColor: "from-cyber-purple to-cyber-pink"
    },
    {
        id: 3,
        name: "David Park",
        position: "Backend Engineer",
        company: "DataFlow Systems",
        avatar: "/testimonials/avatar-3.png",
        content: "As someone transitioning into tech from another field, Interview Coder AI has been invaluable. It's like having a patient mentor available 24/7 to guide you through complex coding challenges.",
        rating: 5,
        accentColor: "from-cyber-green to-cyber-blue"
    }
];

const TestimonialsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // For holographic effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-300, 300], [5, -5]);
    const rotateY = useTransform(x, [-300, 300], [-5, 5]);

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
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
    };

    const slideVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
            },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
            },
        }),
    };

    const quoteIconVariants: Variants = {
        initial: { scale: 1, opacity: 0.3 },
        hover: {
            scale: 1.2,
            opacity: 0.5,
            transition: { duration: 0.3 }
        }
    };

    // Handle mouse move for 3D effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);

        // Calculate normalized position for background effect
        const normalizedX = (e.clientX - rect.left) / rect.width;
        const normalizedY = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x: normalizedX, y: normalizedY });
    };

    // Handle mouse leave - reset position
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Navigate to next slide
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Navigate to previous slide
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Direction of slide animation based on navigation
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    // Handle navigation with direction
    const navigate = (newIndex: number) => {
        const dir = newIndex > currentIndex ? 1 : -1;
        setCurrentIndex([newIndex, dir]);
        setActiveIndex(newIndex);
    };

    // Autoplay functionality
    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            const newIndex = (activeIndex + 1) % testimonials.length;
            navigate(newIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, autoplay]);

    return (
        <motion.section
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Background elements */}
            <div className="absolute inset-0 cyberpunk-grid opacity-5 z-0"></div>

            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-primary-dark to-transparent opacity-10"
                style={{
                    transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
                }}
            ></motion.div>

            {/* Digital circuit lines */}
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
                <motion.div className="text-center mb-16" variants={itemVariants}>
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
                        <span className="text-sm font-medium">User Experiences</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by Developers Worldwide
                    </h2>

                    <motion.div
                        className="h-0.5 w-20 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    />
                </motion.div>

                {/* Testimonial Carousel */}
                <div
                    className="max-w-4xl mx-auto"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className="relative"
                        style={{
                            rotateX,
                            rotateY,
                            perspective: 1000,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {/* Navigation Buttons */}
                        <div className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-20">
                            <motion.button
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-light/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary-light/20 transition-all duration-300"
                                onClick={prevSlide}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiChevronLeft className="w-5 h-5" />
                            </motion.button>
                        </div>

                        <div className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-20">
                            <motion.button
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-light/10 backdrop-blur-md border border-white/10 text-white hover:bg-primary-light/20 transition-all duration-300"
                                onClick={nextSlide}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Testimonial Cards */}
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative"
                            >
                                {/* Current testimonial */}
                                <div className="bg-primary-light/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                    {/* Holographic overlay */}
                                    <div className="absolute inset-0 holographic-effect opacity-10 z-0 pointer-events-none"></div>

                                    {/* Quote icon */}
                                    <motion.div
                                        className="absolute -top-6 -left-6 text-gradient-to-r from-cyber-blue to-cyber-purple opacity-20"
                                        variants={quoteIconVariants}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        <FaQuoteLeft className="w-24 h-24" />
                                    </motion.div>

                                    {/* Corner accents */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-blue/50"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-purple/50"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-blue/50"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-purple/50"></div>

                                    {/* Testimonial content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative">
                                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                                                    <Image
                                                        src={testimonials[activeIndex].avatar}
                                                        alt={testimonials[activeIndex].name}
                                                        width={64}
                                                        height={64}
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {/* Glow effect around avatar */}
                                                <motion.div
                                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonials[activeIndex].accentColor} blur-xl opacity-30`}
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.2, 0.4, 0.2]
                                                    }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                />
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-medium text-white">{testimonials[activeIndex].name}</h4>
                                                <p className="text-sm text-text-muted">
                                                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Rating stars */}
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    onMouseEnter={() => setHoveredRating(i)}
                                                    onMouseLeave={() => setHoveredRating(null)}
                                                    whileHover={{ scale: 1.2 }}
                                                >
                                                    <HiStar
                                                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-cyber-gold' : 'text-gray-500'} 
                              ${hoveredRating !== null && i <= hoveredRating ? 'text-cyber-gold' : ''}`}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.p
                                            className="text-lg text-text-muted"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            "{testimonials[activeIndex].content}"
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination dots */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => navigate(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? 'bg-gradient-to-r from-cyber-blue to-cyber-purple w-8'
                                        : 'bg-white/20'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{
                                        boxShadow: index === activeIndex ? [
                                            '0 0 0px rgba(0, 174, 255, 0)',
                                            '0 0 8px rgba(0, 174, 255, 0.5)',
                                            '0 0 0px rgba(0, 174, 255, 0)'
                                        ] : 'none'
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: index === activeIndex ? Infinity : 0
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Floating badges */}
                <div className="mt-16 relative">
                    <motion.div
                        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={itemVariants}
                    >
                        {['5000+', '100%', '24/7', '3'].map((value, index) => {
                            const labels = ['Active Users', 'Open Source', 'Availability', 'AI Models'];
                            const gradients = [
                                'from-cyber-blue to-cyber-purple',
                                'from-cyber-purple to-cyber-pink',
                                'from-cyber-green to-cyber-blue',
                                'from-cyber-gold to-cyber-orange'
                            ];

                            return (
                                <motion.div
                                    key={index}
                                    className="bg-primary-light/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 relative overflow-hidden"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-10`}
                                        animate={{
                                            opacity: [0.05, 0.15, 0.05]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                    />

                                    <motion.h3
                                        className="text-2xl md:text-3xl font-bold mb-1 relative z-10"
                                        animate={{
                                            textShadow: ['0 0 0px rgba(255, 255, 255, 0)', '0 0 10px rgba(255, 255, 255, 0.5)', '0 0 0px rgba(255, 255, 255, 0)']
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                    >
                                        {value}
                                    </motion.h3>
                                    <p className="text-text-muted text-sm relative z-10">{labels[index]}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection; 