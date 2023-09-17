import { Schema } from 'mongoose'

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

PlanetSchema.statics.list = async function () {
  return await this.find().populate('residents').populate('films')
}

PlanetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate('residents')
    .populate('films')
}

PlanetSchema.statics.create = async function (planet) {
  return await this.create(planet)
}

export default PlanetSchema
