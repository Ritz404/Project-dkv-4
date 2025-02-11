const express = require('express');
const path = require('path')

const app = express();



app.use = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "feature.html")); 
});

app.get("/request", (req, res) => {
  res.sendFile(path.join(__dirname, "request.html")); 
});

app.get("/reports", (req, res) => {
  res.sendFile(path.join(__dirname, "reports.html")); 
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
