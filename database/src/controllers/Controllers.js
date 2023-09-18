import models from '../models'

class Controllers {
  constructor() {}

  async list(req, res) {
    const { model } = req.params
    const response = await models[model].list()
    res.json(response)
  }

  async get(req, res) {
    const { model, id } = req.params
    const response = await models[model].get(id)
    res.json(response)
  }

  async create(req, res) {
    const { model } = req.params
    const response = await models[model].create(req.body)
    res.json(response)
  }
}

export default Controllers
