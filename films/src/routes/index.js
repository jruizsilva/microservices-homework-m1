import express from 'express'
import { FilmController } from '../controllers'
import { FilmMiddlewares } from '../middlewares'
import { asyncErrorHandler } from '../utils'

const controller = new FilmController()
const middlewares = new FilmMiddlewares()

const router = express.Router()

router.get('/films', asyncErrorHandler(controller.getFilms))

router.get('/films/:id', asyncErrorHandler(controller.getFilmById))

router.post(
  '/films',
  middlewares.validate,
  asyncErrorHandler(controller.createFilm)
)

export default router
