const {Review} = require('../models')

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReview = async(req, res) => {
    try {
        const {id} = req.params
        const reviews = await Review.findById(id)
        res.json(reviews)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getReviews,
    getReview
}