import app from './app'

const port = 3001

function init() {
  app.listen(port, () => {
    console.log(
      `Service characters listening at http://localhost:${port}`
    )
  })
}

init()
