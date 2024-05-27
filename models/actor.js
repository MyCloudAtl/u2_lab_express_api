const { Schema } = require('mongoose')

const Actor = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    deceased: { type: Boolean, required: true },
    movie_id: { type: Schema.Types.ObjectId, ref: 'movie_id' }
  },
  { timestamps: true }
)

module.exports = Actor