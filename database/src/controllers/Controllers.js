import models from '../models'

class Controllers {
  constructor() {}

  async list(req, res) {
    const { model } = req.params
    const response = await models[model].list()
    res.json(response)
  }
}

export default Controllers
