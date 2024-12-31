const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

    // Simple check for mobile devices
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        res.send('Request is from a mobile device');
    } else {
        res.send('Request is from a desktop device');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
