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
}
export default Middlewares
