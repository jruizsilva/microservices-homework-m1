import axios from 'axios'

class CharacterControllers {
  constructor() {}

  async getCharacters(req, res) {
    const response = await axios.get('/Character')
    res.json(response.data)
  }

  async getCharacterById(req, res) {
    const { id } = req.params
    const response = await axios.get(`/Character/${id}`)
    res.json(response.data)
  }

  async insertCharacter(req, res) {
    const { name } = req.body
    const response = await axios.post('/Character', { name })
    res.json(response.data)
  }
}

export default CharacterControllers
