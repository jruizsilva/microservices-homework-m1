import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(routes)

server.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found' })
})

export default server
