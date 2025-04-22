import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Interview Coder - Free Open-Source AI Interview Assistant</title>
                <meta name="description" content="Free, open-source AI-powered coding interview preparation tool. Use your own API key with OpenAI, Gemini, or Anthropic models." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp; 