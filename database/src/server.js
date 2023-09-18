import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(routes)

server.use((err, req, res, next) => {
  console.log(err)
  res
    .status(err.status || 500)
    .json({ error: true, message: err.message })
})

server.use('*', (req, res) => {
  res.status(404).json({ error: true, message: 'Not found' })
})

export default server
