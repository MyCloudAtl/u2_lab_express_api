const {Actor} = require('../models')

const getActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getActor = async(req, res) => {
    try {
        const {id} = req.params
        const actors = await Actor.findById(id)
        res.json(actors)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getActors,
    getActor
}