import express from 'express'
import { PlanetsController } from '../controllers'
import { PlanetMiddlewares } from '../middlewares'
import { asyncErrorHandler } from '../utils'

const controller = new PlanetsController()
const middlewares = new PlanetMiddlewares()

const router = express.Router()

router.get('/planets', controller.getPlanets)
router.post(
  '/planets',
  middlewares.validate,
  asyncErrorHandler(controller.createPlanet)
)

export default router
