import { CustomError } from '../utils'

class PlanetMiddlewares {
  constructor() {}

  validate(req, res, next) {
    const { name } = req.body

    if (!name) {
      throw new CustomError('Name is required', 400)
    }
    if (name.length < 3) {
      throw new CustomError('Name must be at least 3 characters', 400)
    }

    next()
  }
}

export default PlanetMiddlewares
