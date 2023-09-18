import app from './app'
import axios from 'axios'

const port = 3002

axios.defaults.baseURL = 'http://database:4000'

function init() {
  app.listen(port, () => {
    console.log(`Service films listening at http://localhost:${port}`)
  })
}

init()
