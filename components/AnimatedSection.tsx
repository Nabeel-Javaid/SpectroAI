import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    delay = 0,
    direction = 'up',
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const directionVariants = {
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
        left: { x: 50, opacity: 0 },
        right: { x: -50, opacity: 0 },
        none: { opacity: 0 },
    };

    const variants = {
        hidden: directionVariants[direction],
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection; 