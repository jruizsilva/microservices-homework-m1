import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { envs } from './config'
import * as schemas from './schemas'
const conn = mongoose.createConnection(envs.MONGO_URI)

const Character = conn.model('Character', schemas.CharacterSchema)
const Film = conn.model('Film', schemas.FilmSchema)
const Planet = conn.model('Planet', schemas.PlanetSchema)

const app = express()

app.use(morgan('dev'))

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Database service is running on port ${port}`)
})

Character.list()
  .limit(1)
  .then((res) => console.log(res))

export { Character, Film, Planet }
