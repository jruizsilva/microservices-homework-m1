import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
  })
)

app.listen(3000, () => {
  console.log('Gateway listening on port 3000')
})
