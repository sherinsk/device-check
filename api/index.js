const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

    let os = 'Unknown OS';

    // Check for mobile devices first
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        os = 'iOS';
    } else if (/Android/i.test(userAgent)) {
        os = 'Android';
    } else if (/Windows NT/i.test(userAgent)) {
        os = 'Windows';
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        os = 'MacOS';
    } else if (/Linux/i.test(userAgent)) {
        os = 'Linux';
    }

    res.send(`Request is from a device running: ${os}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
