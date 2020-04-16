// Import
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Model
const Thing = require('./models/Thing');

// App
const app = express();

mongoose.connect(`mongodb+srv://admin:glBcwrEqItx2bsAO@cluster0-o5plw.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

    // Middlewares
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });
    
    app.post('/api/stuff', (req, res, next) => {
        delete req.body._id;
        const thing = new Thing({
          ...req.body
        })
        thing.save()
          .then( () => res.status(201).json({ message : 'Objet enregistré'}))
          .catch( error => res.status(400).json({ error }));
      });

    app.get('/api/stuff/:id', (req, res, next) => {
        Thing.findOne({ _id : req.params.id})
          .then( thing => res.status(200).json(thing) )
          .catch(  error => res.status(400).json({ error }) )
    })

    app.get('/api/stuff', (req, res, next) => {
        Thing.find()
          .then( things => res.status(200).json(things) )
          .catch( error => res.status(400).json({ error }) )
      });

// Export
module.exports = app;