import express from 'express'
import morgan from 'morgan'
import routes from './routes'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Not found'
  })
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  })
  next()
})

export default app
