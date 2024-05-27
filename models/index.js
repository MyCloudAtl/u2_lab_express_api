const mongoose = require('mongoose')
const ActorSchema = require('./actor')
const ReviewSchema = require('./review')
const MovieSchema = require('./movie')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Actor = mongoose.model('Actor', ActorSchema)
const Review = mongoose.model('Review', ReviewSchema)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
  Actor,
  Review,
  Movie,
}