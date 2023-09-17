import mongoose from 'mongoose'
import envs from './envs'

const conn = mongoose.createConnection(envs.MONGO_URI)

conn.on('open', () => {
  console.log('Connected to MongoDB!')
})

conn.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err)
})

export default conn
