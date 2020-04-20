// Import
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes import
const stuffRoutes = require('./routes/stuff');

// App
const app = express();

mongoose.connect(`mongodb+srv://admin:glBcwrEqItx2bsAO@cluster0-o5plw.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// Cross Origin
app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
});

// Middlewares
app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);


// Export
module.exports = app;