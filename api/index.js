const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

    // Simple check for mobile devices
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // OS detection based on the User-Agent string
    let osName = 'Unknown OS';
    if (/Windows NT/i.test(userAgent)) {
        osName = 'Windows';
    } else if (/Macintosh|Mac OS X/i.test(userAgent)) {
        osName = 'MacOS';
    } else if (/Linux/i.test(userAgent)) {
        osName = 'Linux';
    } else if (/Android/i.test(userAgent)) {
        osName = 'Android';
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        osName = 'iOS';
    } else if (/BlackBerry/i.test(userAgent)) {
        osName = 'BlackBerry';
    }

    // Send response based on mobile or desktop
    if (isMobile) {
        res.send(`Request is from a mobile device running ${osName}`);
    } else {
        res.send(`Request is from a desktop device running ${osName}`);
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
