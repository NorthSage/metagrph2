# Transformer Explainer Proxy

This project sets up a proxy server to fetch and filter content from the Transformer Explainer website, removing the logo and embedding the result in an HTML iframe.

## Features
- Serverless proxy hosted on Vercel
- Filters out unwanted elements (e.g., logo div)
- Simple iframe display for the filtered content

## Setup Instructions

### Prerequisites
1. Install the [Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm install -g vercel
   ```

2. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd proxy-server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Deploying with Vercel

1. **Login to Vercel**:
   ```bash
   vercel login
   ```

2. **Deploy the Project**:
   ```bash
   vercel
   ```

3. Follow the CLI prompts to configure the project.

4. Once deployed, you will receive a live URL where the proxy is hosted.

### Using the Proxy
Access the filtered content by opening the deployed URL in your browser. The iframe on the page will display the Transformer Explainer website without the logo.

## File Structure
```
proxy-server/
├── api/
│   └── proxy.js       # Serverless function for fetching and filtering content
├── public/
│   └── index.html     # Static HTML file to embed filtered content
├── package.json       # Dependencies for the serverless function
└── README.md          # Setup instructions
```

## Dependencies
- `axios`: For HTTP requests to fetch content.
- `cheerio`: For HTML parsing and manipulation.

### License
This project is intended for educational purposes and personal use only.
