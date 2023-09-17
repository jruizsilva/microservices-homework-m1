import * as schemas from './schemas'
import { conn } from '../config'

const Character = conn.model('Character', schemas.CharacterSchema)
const Film = conn.model('Film', schemas.FilmSchema)
const Planet = conn.model('Planet', schemas.PlanetSchema)

export default {
  Character,
  Film,
  Planet
}
