import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ComparisonSection from '../components/ComparisonSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="min-h-screen bg-primary-dark text-white">
            <motion.div
                className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none -z-20"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 50%)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ComparisonSection />
            <DownloadSection />
            <Footer />
        </div>
    );
} 