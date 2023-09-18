import { Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

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

FilmSchema.statics.list = function () {
  return this.find().populate('characters').populate('planets')
}

FilmSchema.statics.get = function (id) {
  return this.findById(id).populate('characters').populate('planets')
}

FilmSchema.statics.insert = function (film) {
  film._id = uuidv4()
  return this.create(film)
}

export default FilmSchema
