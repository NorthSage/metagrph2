import axios from 'axios';
import cheerio from 'cheerio';

const TARGET_URL = 'https://poloclub.github.io/transformer-explainer/';

export default async function handler(req, res) {
    try {
        // Fetch the content from the target URL
        const response = await axios.get(TARGET_URL);
        const html = response.data;

        // Load the HTML into Cheerio for manipulation
        const $ = cheerio.load(html);

        // Remove the logo div by class
        $('.logo.text-bold.text-gray-700.svelte-1i2onu1').remove();

        // Send the filtered HTML back
        res.setHeader('Content-Type', 'text/html');
        res.send($.html());
    } catch (error) {
        console.error('Error fetching or processing the target page:', error);
        res.status(500).send('Error fetching the target page');
    }
}
