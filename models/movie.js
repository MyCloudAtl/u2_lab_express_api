const { Schema } = require('mongoose')

const Movie = new Schema(
  {
    title: { type: String, required: true },
    runTime: { type: String, required: true },
    rating: { type: String, required: true },
    yearReleased: { type: Number, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Movie