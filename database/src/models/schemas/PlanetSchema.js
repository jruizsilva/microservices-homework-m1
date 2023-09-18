import { Schema } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const PlanetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [{ type: String, ref: 'Character' }],
  films: [{ type: String, ref: 'Film' }]
})

PlanetSchema.statics.list = function () {
  return this.find().populate('residents').populate('films')
}

PlanetSchema.statics.get = function (id) {
  return this.findById(id).populate('residents').populate('films')
}

PlanetSchema.statics.insert = function (planet) {
  planet._id = uuidv4()
  return this.create(planet)
}

export default PlanetSchema
