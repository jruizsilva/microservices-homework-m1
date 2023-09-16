import express from 'express'
import { CharacterControllers } from '../controllers'
import { CharacterMiddlewares } from '../middlewares'
import { asyncErrorHandler } from '../utils'

const controllers = new CharacterControllers()
const middlewares = new CharacterMiddlewares()

const router = express.Router()

router.get('/', controllers.getCharacters)
router.post(
  '/',
  middlewares.validate,
  asyncErrorHandler(controllers.createCharacter)
)

export default router
