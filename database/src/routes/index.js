import express from 'express'
import { Middlewares } from '../middlewares'
import { Controllers } from '../controllers'
import { asyncErrorHandler } from '../utils'

const middlewares = new Middlewares()
const controllers = new Controllers()

const router = express.Router()

router.get(
  '/:model',
  middlewares.validateModel,
  asyncErrorHandler(controllers.list)
)

router.get(
  '/:model/:id',
  middlewares.validateModel,
  asyncErrorHandler(controllers.get)
)

router.post(
  '/:model',
  [middlewares.validateModel, middlewares.validate],
  asyncErrorHandler(controllers.create)
)

export default router
