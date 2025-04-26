import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

// Add performance optimization with React.memo for the App component
function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Spectro - AI Assistant for Technical Interviews</title>
                <meta name="description" content="Ace your technical interviews with our AI-powered solution that stays invisible while giving you real-time assistance." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* Preload critical fonts for better performance */}
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                    as="style"
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
                    as="style"
                />

                {/* Preconnect to improve loading performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Add priority hints for CSS */}
                <meta httpEquiv="x-dns-prefetch-control" content="on" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default React.memo(App); 