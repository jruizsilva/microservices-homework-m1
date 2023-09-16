import app from './app'

const port = 3002

function init() {
  app.listen(port, () => {
    console.log(`Service films listening at http://localhost:${port}`)
  })
}

init()
