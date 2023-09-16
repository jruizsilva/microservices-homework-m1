import planets from '../data/planets.json'
import { CustomError } from '../utils'

class PlanetsController {
  constructor() {}

  getPlanets(req, res) {
    res.json(planets)
  }

  async createPlanet(req, res) {
    throw new CustomError(
      'Create planet method not implemented yet',
      400
    )
  }
}

export default PlanetsController
