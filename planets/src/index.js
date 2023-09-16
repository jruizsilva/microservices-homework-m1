import app from './app'

const port = 3003

function init() {
  app.listen(port, () => {
    console.log(
      `Service planets listening at http://localhost:${port}`
    )
  })
}

init()
