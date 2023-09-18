import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.get('/favicon.ico', (req, res) => {
  res.status(204)
  res.end()
})
server.use(routes)

server.use((err, req, res, next) => {
  console.log(err)
  res
    .status(err.status || 500)
    .json({ error: true, message: err.message })
})

export default server
