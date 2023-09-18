import planets from '../data/planets.json'
import { CustomError } from '../utils'
import axios from 'axios'

class PlanetsController {
  constructor() {}

  async getPlanets(req, res) {
    const response = await axios.get('/Planet')
    res.json(response.data)
  }
  async getPlanetById(req, res) {
    const { id } = req.params
    const response = await axios.get(`/Planet/${id}`)
    res.json(response.data)
  }

  async createPlanet(req, res) {
    const { name } = req.body
    const response = await axios.post('/Planet', { name })
    res.json(response.data)
  }
}

export default PlanetsController
