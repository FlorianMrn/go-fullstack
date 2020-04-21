// Basic import
const express = require('express');
const router = express.Router();

// Controller 
const stuffCtrl = require('../controllers/stuff');
const authCtrl = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// CRUD
router.get('/:id', authCtrl, stuffCtrl.readThing);
router.post('/', authCtrl, multer, stuffCtrl.createThing);
router.get('/', authCtrl, stuffCtrl.readThings);
router.put('/:id', authCtrl, multer, stuffCtrl.updateThing);
router.delete('/:id', authCtrl, stuffCtrl.deleteThing);

// Export
module.exports = router;

