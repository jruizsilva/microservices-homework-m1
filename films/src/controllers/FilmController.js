import axios from 'axios'

class FilmController {
  constructor() {}

  async getFilms(req, res) {
    const response = await axios.get('/Film')
    res.json(response.data)
  }
  async getFilmById(req, res) {
    const { id } = req.params
    const response = await axios.get(`/Film/${id}`)
    res.json(response.data)
  }

  async createFilm(req, res) {
    const { title } = req.body
    const response = await axios.post('/Film', { title })
    res.json(response.data)
  }
}

export default FilmController
