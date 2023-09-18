import app from './app'
import axios from 'axios'

axios.defaults.baseURL = 'http://database:4000'

const port = 3001

function init() {
  app.listen(port, () => {
    console.log(
      `Service characters listening at http://localhost:${port}`
    )
  })
}

init()
