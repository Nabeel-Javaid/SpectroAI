import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'cyberpunk' | 'neon' | 'holographic';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
    glitch?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    href,
    icon,
    glitch = false,
}) => {
    const baseClasses = 'future-button rounded-lg font-medium transition-all flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-accent text-white hover:bg-accent-dark shadow-neon hover:shadow-neon-lg',
        secondary: 'bg-primary-light/70 text-white backdrop-blur-sm hover:bg-primary-light',
        outline: 'bg-transparent border-2 border-accent/60 text-accent hover:border-accent/90 hover:bg-accent/10 hover:text-white',
        cyberpunk: 'relative border-2 border-cyber-blue bg-transparent text-cyber-blue hover:text-white hover:bg-cyber-blue/20 neon-text',
        neon: 'bg-accent/80 text-white border border-white/20 shadow-neon hover:shadow-neon-lg',
        holographic: 'bg-black/30 backdrop-blur-sm border border-white/30 text-white hover:border-white/50 hover:bg-black/40',
    };

    const sizeClasses = {
        sm: 'text-sm py-2 px-3',
        md: 'text-base py-2.5 px-5',
        lg: 'text-lg py-3 px-6',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    // Simplified effects for immediate interaction
    const cyberpunkEffect = variant === 'cyberpunk' && (
        <>
            <span className="absolute inset-0 border-2 border-cyber-blue/30 rounded-lg"></span>
        </>
    );

    // Simplified glitch effect
    const glitchEffect = glitch && (
        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
    );

    const content = (
        <motion.span
            className="flex items-center justify-center relative group"
            whileTap={{ scale: 0.97 }}
        >
            {cyberpunkEffect}
            {glitchEffect}
            {icon && <span className="mr-2">{icon}</span>}
            <span className="relative z-10">{children}</span>
            {variant === 'holographic' && (
                <div className="holographic-glare"></div>
            )}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick} type="button">
            {content}
        </button>
    );
};

export default React.memo(Button); 