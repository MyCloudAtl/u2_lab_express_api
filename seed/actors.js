const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const theGodfather = await Movie.find({ title: 'The Godfather' })
  const theDarkKnight = await Movie.find({ title: 'The Dark Knight' })
  const schindlersList = await Movie.find({ title: 'Schindlers List' })
  const pulpFiction = await Movie.find({ title: 'Pulp Fiction' })
  const forrestGump = await Movie.find({ title: 'Forrest Gump' })
  const fightClub = await Movie.find({ title: 'Fight Club' })

  const actors = [
    {
        firstName: `Brad`,
        lastName: `Pitt`,
        age: 58,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: fightClub[0]._id
    },
    {
        firstName: `Marlon`,
        lastName: `Brando`,
        age: 80,
        deceased: true,
        // url: { type: String, required: true },
        movie_id: theGodfather[0]._id
    },
    {
        firstName: `Al`,
        lastName: `Pacino`,
        age: 82,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: theGodfather[0]._id
    },
    {
        firstName: `Heath`,
        lastName: `Ledger`,
        age: 28,
        deceased: true,
        // url: { type: String, required: true },
        movie_id: theDarkKnight[0]._id
    },
    {
        firstName: `Christian`,
        lastName: `Bale`,
        age: 49,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: theDarkKnight[0]._id
    },
    {
        firstName: `Liam`,
        lastName: `Neeson`,
        age: 71,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: schindlersList[0]._id
    },
    {
        firstName: `Ben`,
        lastName: `Kingsley`,
        age: 77,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: schindlersList[0]._id
    },
    {
        firstName: `John`,
        lastName: `Travolta`,
        age: 69,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: pulpFiction[0]._id
    },
    {
        firstName: `Tom`,
        lastName: `Hanks`,
        age: 65,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: forrestGump[0]._id
    },
    {
        firstName: `Robin`,
        lastName: `Wright`,
        age: 56,
        deceased: false,
        // url: { type: String, required: true },
        movie_id: forrestGump[0]._id
    },
  ]

  await Actor.insertMany(actors)
  console.log('Created actors with movies!')
}
const run = async () => {
  await main()
  db.close()
}

run()