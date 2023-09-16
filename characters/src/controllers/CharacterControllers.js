import characters from '../data/characters.json'
import { CustomError } from '../utils'

class CharacterControllers {
  constructor() {}

  getCharacters(req, res) {
    res.json(characters)
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
