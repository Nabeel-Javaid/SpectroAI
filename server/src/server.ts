import express from 'express';
import cors from 'cors';
import { AIAssistant } from './Spectro';

// Create Express server
const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Spectro instance
const Spectro = new AIAssistant();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/status', (req, res) => {
    res.json(Spectro.getStatus());
});

app.post('/api/capture', async (req, res) => {
    try {
        const problem = await Spectro.captureScreen();
        res.json(problem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to capture screen' });
    }
});

app.post('/api/analyze', async (req, res) => {
    try {
        const { input } = req.body;
        const solution = await Spectro.analyze(input);
        res.json(solution);
    } catch (error) {
        res.status(500).json({ error: 'Failed to analyze with AI' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Spectro MCP Server running on port ${PORT}`);
    console.log('SYSTEM_ACTIVE');
    console.log('INTERFACE_VERSION: 2.3.7');
    console.log('STATUS: ONLINE');
}); 