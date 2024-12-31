const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];
    let os = 'Unknown OS';
    let version = 'Unknown Version';

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        os = 'iOS';
        const match = userAgent.match(/OS (\d+[_\d]*)/i);
        if (match) {
            version = match[1].replace(/_/g, '.'); // Replace underscores with dots
        }
    } else if (/Android/i.test(userAgent)) {
        os = 'Android';
        const match = userAgent.match(/Android (\d+(\.\d+)?)/i);
        if (match) {
            version = match[1];
        }
    } else if (/Windows NT/i.test(userAgent)) {
        os = 'Windows';
        const match = userAgent.match(/Windows NT (\d+(\.\d+)?)/i);
        if (match) {
            version = match[1];
        }
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        os = 'MacOS';
        const match = userAgent.match(/Mac OS X (\d+[_\d]*)/i);
        if (match) {
            version = match[1].replace(/_/g, '.'); // Replace underscores with dots
        }
    } else if (/Linux/i.test(userAgent)) {
        os = 'Linux';
        const match = userAgent.match(/Linux (\d+(\.\d+)?)/i);
        if (match) {
            version = match ? match[1] : 'Unknown Version'; // Linux versions may not always be included
        }
    }

    res.send(`Request is from a device running: ${os} Version: ${version}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
