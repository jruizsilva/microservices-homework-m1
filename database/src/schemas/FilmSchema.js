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

FilmSchema.statics.list = async function () {
  return await this.find().populate('characters').populate('planets')
}

FilmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate('characters')
    .populate('planets')
}

FilmSchema.statics.create = async function (film) {
  return await this.create(film)
}

export default FilmSchema
