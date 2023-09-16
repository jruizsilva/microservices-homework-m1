import express from 'express'
import { FilmController } from '../controllers'
import { FilmMiddlewares } from '../middlewares'
import { asyncErrorHandler } from '../utils'

const controller = new FilmController()
const middlewares = new FilmMiddlewares()

const router = express.Router()

router.get('/', controller.getFilms)
router.post(
  '/',
  middlewares.validate,
  asyncErrorHandler(controller.createFilm)
)

export default router
