import express from 'express'
import { CharacterControllers } from '../controllers'
import { CharacterMiddlewares } from '../middlewares'
import { asyncErrorHandler } from '../utils'

const controllers = new CharacterControllers()
const middlewares = new CharacterMiddlewares()

const router = express.Router()

router.get(
  '/characters',
  asyncErrorHandler(controllers.getCharacters)
)

router.get(
  '/characters/:id',
  asyncErrorHandler(controllers.getCharacterById)
)

router.post(
  '/characters',
  middlewares.validate,
  asyncErrorHandler(controllers.insertCharacter)
)

export default router
