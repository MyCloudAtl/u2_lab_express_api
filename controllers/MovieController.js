const {Movie} = require('../models')

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovie = async(req, res) => {
    try {
        const {id} = req.params
        const movies = await Movie.findById(id)
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getMovies,
    getMovie
}