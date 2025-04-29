# Spectro MCP Server

This is the Model-Control-Presentation (MCP) server implementation for Spectro AI Assistant. The server provides an API for the Spectro functionality showcased in the landing page.

## Features

- Screen capture functionality
- AI-powered analysis
- System status monitoring

## API Endpoints

- `GET /api/status` - Get the current system status
- `POST /api/capture` - Capture the screen
- `POST /api/analyze` - Analyze captured content with AI

## Getting Started

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Build the project:
   ```
   npm run build
   ```

3. Start the server:
   ```
   npm start
   ```

For development:
```
npm run dev
```

## Environment Variables

- `PORT` - The port number for the server (default: 3001)

## System Status

The system provides status information including:
- SYSTEM_ACTIVE
- INTERFACE_VERSION: 2.3.7
- STATUS: ONLINE 