/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#080820',
                    DEFAULT: '#1E293B',
                    light: '#334155',
                },
                accent: {
                    DEFAULT: '#6366F1',
                    light: '#818CF8',
                    dark: '#4F46E5',
                    glow: '#4338ca',
                },
                cyber: {
                    blue: '#0ff',
                    purple: '#9d4edd',
                    green: '#00ff9d',
                    pink: '#ff00ff',
                    yellow: '#ffff00',
                },
                neon: {
                    blue: '#00f0ff',
                    purple: '#8a00ff',
                    pink: '#ff00c3',
                    green: '#00ffa3',
                },
                text: {
                    dark: '#0F172A',
                    DEFAULT: '#FFFFFF',
                    muted: '#94A3B8',
                    highlight: '#e2e8f0',
                },
                future: {
                    dark: '#080828',
                    surface: 'rgba(16, 24, 64, 0.6)',
                    card: 'rgba(23, 25, 35, 0.7)',
                    border: 'rgba(99, 102, 241, 0.2)',
                }
            },
            fontFamily: {
                sans: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'ui-monospace', 'monospace'],
                future: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'border-flow': 'border-flow 5s ease infinite',
                'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
                'rotate-slow': 'rotate 8s linear infinite',
                'spin-slow': 'spin 10s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
                'vibrate': 'vibrate 0.3s linear infinite',
                'scan': 'scan-line 2s linear infinite',
                'flip': 'flip 6s infinite',
                'rotate3d': 'rotate3d 8s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow': {
                    '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5), 0 0 10px rgba(99, 102, 241, 0.2)' },
                    '100%': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.8), 0 0 20px rgba(99, 102, 241, 0.5)' },
                },
                'border-flow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'text-shimmer': {
                    '0%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'vibrate': {
                    '0%, 100%': { transform: 'translate(0)' },
                    '25%': { transform: 'translate(2px, 2px)' },
                    '50%': { transform: 'translate(0)' },
                    '75%': { transform: 'translate(-2px, 2px)' },
                },
                'scan-line': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                'flip': {
                    '0%, 100%': { transform: 'rotateY(0deg)' },
                    '50%': { transform: 'rotateY(180deg)' },
                },
                'rotate3d': {
                    '0%, 100%': { transform: 'perspective(1000px) rotateY(0deg)' },
                    '50%': { transform: 'perspective(1000px) rotateY(15deg)' },
                },
            },
            boxShadow: {
                'neon-sm': '0 0 5px rgba(99, 102, 241, 0.4)',
                'neon': '0 0 10px rgba(99, 102, 241, 0.6)',
                'neon-lg': '0 0 20px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.5)',
                'neon-xl': '0 0 25px rgba(99, 102, 241, 0.8), 0 0 40px rgba(99, 102, 241, 0.6)',
                'blue-glow': '0 0 15px rgba(0, 240, 255, 0.7)',
                'green-glow': '0 0 15px rgba(0, 255, 157, 0.7)',
                'purple-glow': '0 0 15px rgba(157, 78, 221, 0.7)',
            },
            backgroundImage: {
                'cyber-grid': 'linear-gradient(rgba(26, 32, 69, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 32, 69, 0.2) 1px, transparent 1px)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundSize: {
                'grid-pattern': '50px 50px',
            },
            textShadow: {
                'neon-blue': '0 0 5px #0ff, 0 0 10px #0ff',
                'neon-purple': '0 0 5px #9d4edd, 0 0 10px #9d4edd',
                'neon-green': '0 0 5px #00ff9d, 0 0 10px #00ff9d',
            },
            transitionProperty: {
                'width': 'width',
                'height': 'height',
                'spacing': 'margin, padding',
                'glow': 'box-shadow, text-shadow',
            },
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [],
} 