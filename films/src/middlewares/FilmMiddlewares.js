import { CustomError } from '../utils'

class FilmMiddleware {
  validate(req, res, next) {
    const { title } = req.body

    if (!title) throw new CustomError('Title is required', 400)

    if (title.length < 3)
      throw new CustomError(
        'Title must be at least 3 characters long',
        400
      )

    next()
  }
}

export default FilmMiddleware
