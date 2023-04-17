
const express = require('express');

const peopleController = require('../controllers/people_controller.js');

const router = express.Router();

// router.get('/people', peopleController.getAllpeople);
router.get('/people/:id', peopleController.getPersonById);
// router.post('/people', checkAuth, peopleController.createFilm);
// router.put('/people/:id', checkAuth, peopleController.updateFilm);
// router.delete('/people/:id', checkAuth,  peopleController.deleteFilm)

module.exports = router;
