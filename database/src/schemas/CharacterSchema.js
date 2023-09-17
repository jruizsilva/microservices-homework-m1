import { Schema } from 'mongoose'

const CharacterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: 'Planet' },
  films: [{ type: String, ref: 'Film' }]
})

CharacterSchema.statics.list = function () {
  return this.find().populate('homeworld').populate('films')
}

CharacterSchema.statics.get = function (id) {
  return this.findById(id).populate('homeworld').populate('films')
}

CharacterSchema.statics.create = async function (character) {
  return await this.create(character)
}

export default CharacterSchema
