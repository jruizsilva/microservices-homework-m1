import { CustomError } from '../utils'

class CharacterControllers {
  constructor() {}

  async getCharacters(req, res) {
    const response = await axios.get('/Character')
    res.json(response)
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
