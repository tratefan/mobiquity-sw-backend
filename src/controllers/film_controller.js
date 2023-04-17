
const FilmService = require('../services/film_service.js');

const filmService = new FilmService();
    
exports.getAllFilms = (req, res, next) => {
    filmService.getAllFilms()
        .then((result) => { 
        return res.json(result.data);
    })
    .catch(err => {
    return next(err);
    });
}

exports.getFilmById = (req, res, next) => {
    const id = req.params.id;

    filmService.getFilmById(id)
        .then((result) => {
            return res.json(result.data);
        })
        .catch(err => {
            return next(err);
        });
}

// exports.createFilm = (req, res, next) => { }
// exports.updateFilm = (req, res, next) => { }
// exports.deleteFilm = (req, res, next) => { }