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

    res.send(`Request is from a device running on : ${os}`);
});

app.get('/pay', (req, res) => {
    const payee = "sherinsk007@ybl"; // Your UPI ID
    const payeeName = "Sherin";      // Payee's name
    const amount = 1000;             // Payment amount
    const currency = "INR";         // Currency

    // Construct the UPI URL
    const upiUrl = `upi://pay?pa=${payee}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=${currency}`;

    // Redirect to the UPI link
    res.redirect(upiUrl);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
