const axios = require('axios');

class FilmService {

    async getAllFilms() {
        return await axios.get(`${process.env.SWAPI_URI}/films`)
            .then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            });
    }
    async getFilmById(_id) {
        return await axios.get(`${process.env.SWAPI_URI}/films/${_id}`)
            .then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = FilmService;

