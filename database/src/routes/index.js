import express from 'express'
import models from '../models'

const router = express.Router()
// TODO asyncErrorHandler - CustomError
router.get('/:model', async (req, res) => {
  const { model } = req.params
  const response = await models[model].list()
  res.json(response)
})

export default router
