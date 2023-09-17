import server from './server'

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Database service is running on port ${port}`)
})
