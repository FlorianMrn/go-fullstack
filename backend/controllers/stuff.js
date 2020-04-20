// Import Model
const Thing = require('../models/Thing');

// Export 

// Create
exports.createThing = (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
      ...req.body
    })
    thing.save()
      .then( () => res.status(201).json({ message : 'Objet enregistré'}))
      .catch( error => res.status(400).json({ error }));
  };

// Read
exports.readThing = (req, res, next) => {
    Thing.findOne({ _id : req.params.id})
      .then( thing => res.status(200).json(thing) )
      .catch(  error => res.status(400).json({ error }) )
}

exports.readThings = (req, res, next) => {
    Thing.find()
      .then( things => res.status(200).json(things))
      .catch( error => res.status(400).json({ error }))
};

// Update
exports.updateThing =  (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

// Delete
exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};
