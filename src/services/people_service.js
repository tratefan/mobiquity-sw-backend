const axios = require('axios');

class PeopleService {

    async getAllFilms() {
        return await axios.get(`${process.env.SWAPI_URI}/films`)
            .then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            });
    }
    async getPersonById(_id) {
        return await axios.get(`${process.env.SWAPI_URI}/people/${_id}`)
            .then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = PeopleService;

