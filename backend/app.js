// Import Express
const express = require('express');

// App
const app = express();

    // Middlewares
    app.use((req, res, next) => {
        console.log('Requête reçue');
        next();
    })

    app.use((req, res, next) => {
        res.status(201);
        next();
    })

    app.use((req, res, next) => {
        res.json({ message : 'Hello'});
        next();
    })

    app.use((req, res, next) => {
        console.log("All is okay");
        next();
    })

// Export
module.exports = app;