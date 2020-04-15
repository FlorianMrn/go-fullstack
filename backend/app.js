// Import Express
const express = require('express');

// App
const app = express();

app.use((req, res) => {
    res.json({ message : 'Hello'})
})
// Export
module.exports = app;