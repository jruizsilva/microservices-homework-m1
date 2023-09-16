class CharacterMiddlewares {
  constructor() {}

  validate(req, res, next) {
    const { name } = req.body

    if (!name) {
      throw new Error('Name is required')
    } else {
      next()
    }
  }
}

export default CharacterMiddlewares
