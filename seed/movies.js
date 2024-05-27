const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies = [
    {
        title: `The Godfather`,
        runTime: `2h15m`,
        rating: `9.2/10`,
        yearReleased: 1972,
        summary: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
    },
    {
        title: `The Dark Knight`,
        runTime: `1h52m`,
        rating: `9.0/10`,
        yearReleased: 2008,
        summary: `When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
    },
    {
        title: `Schindlers List`,
        runTime: `2h35m`,
        rating: `8.9/10`,
        yearReleased: 1993,
        summary: `In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.`,
    },
    {
        title: `Pulp Fiction`,
        runTime: `1h54m`,
        rating: `8.9/10`,
        yearReleased: 1994,
        summary: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    },
    {
        title: `Forrest Gump`,
        runTime: `1h42m`,
        rating: `8.8/10`,
        yearReleased: 1994,
        summary: `The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.`,
    },
    {
        title: `Fight Club`,
        runTime: `1h39m`,
        rating: `8.8/10`,
        yearReleased: 1999,
        summary: `An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.`,
    },
  ]
 
  await Movie.insertMany(movies)
  console.log('Created movies!')
}

const run = async () => {
  await main()
  db.close()
}

run()
