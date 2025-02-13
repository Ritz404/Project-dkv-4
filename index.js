const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.enable("trust proxy");
app.set("json spaces", 2);

// Middleware untuk parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mengizinkan akses statis ke folder "public"
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route fitur
app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'features.html'));
});

// Route harga
app.get('/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'price.html'));
});

// Route kontak
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Middleware untuk menangani 404
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Middleware untuk menangani error server
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
