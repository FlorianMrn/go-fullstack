// Basic import
const express = require('express');
const router = express.Router();

// Controller 
const stuffCtrl = require('../controllers/stuff');

// CRUD
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.readThing);
router.get('/', stuffCtrl.readThings);
router.put('/:id', stuffCtrl.updateThing);
router.delete('/:id', stuffCtrl.deleteThing);

// Export
module.exports = router;
