const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.enable("trust proxy");
app.set("json spaces", 2);

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route tambahan
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

app.get('/tqto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tqto.html'));
});

app.get('/order-now', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order.html'));
});

// Middleware 404 Not Found
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Middleware Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;