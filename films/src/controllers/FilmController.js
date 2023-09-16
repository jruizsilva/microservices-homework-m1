import films from '../data/films.json'
import { CustomError } from '../utils'

class FilmController {
  constructor() {}

  getFilms(req, res) {
    res.json(films)
  }

  async createFilm(req, res) {
    throw new CustomError(
      'Create film method not implemented yet',
      400
    )
  }
}

export default FilmController
