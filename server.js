const express = require('express')
const db = require('./db')
const cors = require('cors')
const actorController = require('./controllers/ActorController')
const movieController = require('./controllers/MovieController')
const reviewController = require('./controllers/ReviewController')
const PORT = process.env.PORT || 3001

const app = express()

const logger = require('morgan');
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })

app.get('/actors', actorController.getActors)
app.get('/actors/:id', actorController.getActor)
app.get('/movies', movieController.getMovies)
app.get('/movies/:id', movieController.getMovie)
app.get('/reviews', reviewController.getReviews)
app.get('/reviews/:id', reviewController.getReview)