import { CustomError } from '../utils'

class Middlewares {
  constructor() {}

  validateModel(req, res, next) {
    const { model } = req.params
    if (!['Character', 'Film', 'Planet'].includes(model)) {
      throw new CustomError(`${model} is not a valid model`, 400)
    }
    next()
  }
  validate(req, res, next) {
    const { model } = req.params
    const { name, title } = req.body

    if (model === 'Character' && (!name || name.length < 3)) {
      throw new CustomError('Name is required or too short', 400)
    } else if (model === 'Film' && (!title || title.length < 3)) {
      throw new CustomError('Title is required or too short', 400)
    } else if (model === 'Planet' && (!name || name.length < 3)) {
      throw new CustomError('Name is required or too short', 400)
    } else {
      next()
    }
  }
}
export default Middlewares
