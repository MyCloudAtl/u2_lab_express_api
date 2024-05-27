const db = require('../db')
const { Review, Movie} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const theGodfather = await Movie.find({ title: 'The Godfather' })
  const theDarkKnight = await Movie.find({ title: 'The Dark Knight' })
  const schindlersList = await Movie.find({ title: 'Schindlers List' })

  const reviews = [
    {
      score: '5/5',
      comment: 'A cinematic masterpiece that defines the crime genre.',
      movie_id: theGodfather[0]._id
    },
    {
        score: '4/5',
        comment: 'Captivating performances and a gripping narrative make "The Godfather" a timeless classic.',
        movie_id: theGodfather[0]._id
    },
    {
        score: '5/5',
        comment: 'A thrilling ride that elevates the superhero genre to new heights.',
        movie_id: theDarkKnight[0]._id
    },
    {
        score: '5/5',
        comment: 'Heath Ledgers Joker steals the show in this dark and intense masterpiece.',
        movie_id: theDarkKnight[0]._id
    },
    {
        score: '3/5',
        comment: 'A haunting and powerful portrayal of one mans extraordinary courage amidst the horrors of the Holocaust.',
        movie_id: schindlersList[0]._id
    },
    {
        score: '5/5',
        comment: '"Schindlers List" is a deeply moving and unforgettable cinematic experience that leaves a profound impact.',
        movie_id: schindlersList[0]._id
    },
  ]

  await Review.insertMany(reviews)
  console.log('Created reviews with movies!')
}
const run = async () => {
  await main()
  db.close()
}

run()