import { Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

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

CharacterSchema.statics.insert = function (character) {
  character._id = uuidv4()
  return this.create(character)
}

export default CharacterSchema
