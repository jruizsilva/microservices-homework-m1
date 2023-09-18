import { CustomError } from '../utils'
import axios from 'axios'

class CharacterControllers {
  constructor() {}

  async getCharacters(req, res) {
    const response = await axios.get('/Character')
    console.log(response.data)
    res.json(response.data)
  }
  async createCharacter(req, res) {
    throw new CustomError(
      'Create character method not implemented',
      400
    )
    res.send('Character created')
  }
}

export default CharacterControllers
