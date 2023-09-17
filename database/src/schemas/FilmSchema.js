import { Schema } from 'mongoose'

const FilmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: 'Character' }],
  planets: [{ type: String, ref: 'Planet' }]
})

export default FilmSchema
