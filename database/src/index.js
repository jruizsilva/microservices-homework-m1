import express from 'express'
import mongoose from 'mongoose'
import { envs } from './config'
import * as schemas from './schemas'

const conn = mongoose.connect(envs.MONGO_URI)
conn.then(() => {
  console.log('Connected to MongoDB')
})

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`Database service is running on port ${port}`)
})
