
    const express = require('express');
    
    const filmsController = require('../controllers/film_controller.js');
    
    const router = express.Router();
    
    router.get('/films', filmsController.getAllFilms);
    router.get('/film/:id', filmsController.getFilmById);
    // router.post('/films', checkAuth, filmsController.createFilm);
    // router.put('/films/:id', checkAuth, filmsController.updateFilm);
    // router.delete('/films/:id', checkAuth,  filmsController.deleteFilm)
    
    module.exports = router;
