// import express from 'express'
import mongoose from 'mongoose'
import { envs } from './config'
import * as schemas from './schemas'
const conn = mongoose.createConnection(envs.MONGO_URI)

const Character = conn.model('Character', schemas.CharacterSchema)
const Film = conn.model('Film', schemas.FilmSchema)
const Planet = conn.model('Planet', schemas.PlanetSchema)

Character.find()
  .populate('homeworld')
  .limit(1)
  // .exec()
  .then((res) => {
    console.log(res)
  })

export default {
  Character,
  Film,
  Planet
}
