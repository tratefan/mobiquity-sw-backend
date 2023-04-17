
const PeopleService = require('../services/people_service.js');

const peopleService = new PeopleService();

exports.getPersonById = (req, res, next) => {
    const id = req.params.id;

    peopleService.getPersonById(id)
        .then((result) => {
            return res.json(result.data);
        })
        .catch(err => {
            return next(err);
        });
}
//